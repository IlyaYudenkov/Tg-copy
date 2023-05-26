import React, { FC } from 'react';
import styles from '../../helpers/Helpers.module.scss';
import style from './ChatWindow.module.scss';
import ChatInput from '../ChatInput/ChatInput';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useSWR from 'swr';
import { IChat, IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import Loader from '../../helpers/Loader';



const ChatWindow: FC = () => {

  const { chosenChat } = useTypedSelector(state => state.chosenChat);

  const urlChat = `http://localhost:3001/messages/${chosenChat}`;

  const { data: chat, isLoading } = useSWR<IChat>(chosenChat ? urlChat : null, fetcher);

  const urlUser = `http://localhost:3001/users/${chat && chat.userFrom}`;

  const { data: user } = useSWR<IUser>(chat ? urlUser : null, fetcher);


  if (isLoading) return (
    <div className={styles.helpersChatWindow}>
      <Loader />
    </div>
  );


  return (

    <div className={chosenChat ? style.chatWindowActive : style.chatWindow}>
      <div className={chosenChat ? style.chatWindowActive__header : style.chatWindow__header}>
        <div className={style.header__person}>
          <div className={style.person__avatar}>{user && user.name.substring(0, 2).toUpperCase()}</div>
          <div className={style.person__info}>
            <div className={style.info__name}>{user ? user.name : 'User name not found'}</div>
            <div className={style.info__lastSeen}>just now</div>
          </div>
        </div>
      </div>
      <div className={chosenChat ? style.chatWindowActive__chooseChat : style.chatWindow__chooseChat}>
        <div className={style.chooseChat__text}>Choose a chat
        </div>
      </div>
      <div className={chosenChat ? style.chatWindowActive__main : style.chatWindow__main}>
        <div className={style.main__chat}>{chat ? chat.text : 'Messages not found'}</div>
        <ChatInput />
      </div>
    </div>
  );
};
export default ChatWindow;