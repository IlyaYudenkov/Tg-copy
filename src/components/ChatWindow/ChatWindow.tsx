import React, { FC } from 'react';
import styles from '../../helpers/Helpers.module.scss';
import style from './ChatWindow.module.scss';
import ChatInput from '../Inputs/ChatInput/ChatInput';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useSWR from 'swr';
import { IChat, IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import Loader from '../../helpers/Loader';





const ChatWindow: FC = () => {


  const { chosenChat } = useTypedSelector(state => state.chosenChat);
  
  const urlChat = `http://localhost:3001/messages/${chosenChat}`;

  const { data: chat, isLoading } = useSWR<IChat>(urlChat, fetcher);

  const userNameNumber =  chat?.userFrom;

  const urlUser = `http://localhost:3001/users/${userNameNumber}`;

  const { data: user } = useSWR<IUser>(urlUser, fetcher);

  if (isLoading) return (
    <div className={styles.helpersChatWindow}>
      <Loader />
    </div>
  );


  return (

    <div className={chosenChat ? style.chatWindowActive : style.chatWindow}>
      <div className={chosenChat ? style.chatWindowActive__header : style.chatWindow__header}>
        <div className={style.header__person}>
          <div className={style.person__avatar}>{user?.name}.</div>
          <div className={style.person__info}>
            <div className={style.info__name}>{user?.name}</div>
            <div className={style.info__lastSeen}>just now</div>
          </div>
        </div>
      </div>
      <div className={chosenChat ? style.chatWindowActive__chooseChat : style.chatWindow__chooseChat}>
        <div className={style.chooseChat__text}>Choose a chat
        </div>
      </div>
      <div className={chosenChat ? style.chatWindowActive__main : style.chatWindow__main}>
        <div className={style.main__chat}>{chat?.text}</div>
        <ChatInput />
      </div>
    </div>
  );
};
export default ChatWindow;