import React, { FC, useState } from 'react';
import styles from '../../helpers/Helpers.module.scss';
import style from './ChatWindow.module.scss';
import ChatInput from '../ChatInput/ChatInput';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useSWR from 'swr';
import { IChat, IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import Loader from '../../helpers/Loader';
import { urlChats, urlUsers } from '../../url/url';
import ContextMenu from '../../helpers/ContextMenu';



const ChatWindow: FC = () => {

  const [openContextMenu, setOpenContextMenu] = useState(false);

  const { chosenChat } = useTypedSelector(state => state.chosenChat);

  const urlChat = `${urlChats}/${chosenChat}`;

  const { data: chat, isLoading } = useSWR<IChat>(chosenChat ? urlChat : null, fetcher);

  const urlUser = `${urlUsers}/${chat && chat.userFrom}`;

  const { data: user } = useSWR<IUser>(chat ? urlUser : null, fetcher);


  if (isLoading) return (
    <div className={styles.helpersChatWindow}>
      <Loader />
    </div>
  );

  const openSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setOpenContextMenu(true);
  };


  return (

    <div className={chosenChat ? style.chatWindowActive : style.chatWindow} onClick={() => setOpenContextMenu(false)}>
      <div className={chosenChat ? style.chatWindowActive__header : style.chatWindow__header}>
        <div className={style.header__person}>
          <div className={style.person__avatar}>{user && user.name.split(' ').map(name => name[0])}</div>
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
        <div className={style.main__chat}>
          <div className={style.chat__messageUserTo} onContextMenu={openSideMenu}>
            {openContextMenu && <ContextMenu />}
            <div className={style.message__text}>{chat && chat.text}</div>
            <div className={style.message__time}>{chat && chat.createdAt}</div>
          </div>
          <div className={style.chat__messageUserFrom}>
            <div className={style.message__text}>{chat && chat.text}</div>
            <div className={style.message__time}>{chat && chat.createdAt}</div>
          </div>

        </div>
        <ChatInput />
      </div>
    </div>
  );
};
export default ChatWindow;