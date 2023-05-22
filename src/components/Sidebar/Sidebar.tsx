import React, { FC, useEffect, useState } from 'react';
import style from './Sidebar.module.scss';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import type { } from 'redux-thunk/extend-redux';
import { useActions } from '../../hooks/useActions';
import ChatsNotFound from '../../helpers/ChatsNotFound';
import Loader from '../../helpers/Loader';
import Error from '../../helpers/Error';

interface SidebarProps {
  messageId: string
}

const Sidebar: FC<SidebarProps> = ({ }) => {

  const { chats, error, loading } = useTypedSelector(state => state.chat);

  const { fetchChats } = useActions();

  
  useEffect(() => {
    (fetchChats());
  }, []);
  

  const [searchValue, setSearchValue] = useState('');
  
  const filteredChats = chats.filter(chat => {
    return chat.userFrom.toLowerCase().includes(searchValue.toLowerCase());
  });


  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__header}>
        <div className={style.header__burger}>
        </div>
        <div className={style.header__search}>
          <input type="text" placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} />
        </div>
      </div>
      <div className={style.sidebar__main}>
        {!loading && !filteredChats.length && !error ? <ChatsNotFound/> : null}
        {error ? <Error/>: null}
        {!loading && filteredChats ? filteredChats.map(chat =>
          <SidebarMessage key={chat.id} id={chat.id} userFrom={chat.userFrom} text={chat.text} createdAt={chat.createdAt} />)
          : <Loader/>}
      </div>
    </div>
  );
};
export default Sidebar;