import React, { FC, useEffect } from 'react';
import style from './Sidebar.module.scss';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import type { } from 'redux-thunk/extend-redux';
import { useActions } from '../../hooks/useActions';
import { fetchChats } from '../../store/actionCreators/chat';

interface SidebarProps {
  messageId: string
}


const Sidebar: FC<SidebarProps> = () => {
  const { chats, error } = useTypedSelector(state => state.chat);

  const { fetchChats } = useActions();


  useEffect(() => {
    (fetchChats());
  }, []);


  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__header}>
        <div className={style.header__burger}>
        </div>
        <div className={style.header__search}>
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className={style.sidebar__main}>
        {error ? error : null}
        {chats ? chats.map(chat =>
          <SidebarMessage key={chat.id} id={chat.id} userFrom={chat.userFrom} text={chat.text} createdAt={chat.createdAt} />)
          : 'Loading...'}

      </div>

    </div>
  );
};
export default Sidebar;