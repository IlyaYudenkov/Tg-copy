import React, { FC, useEffect } from 'react';
import style from './Sidebar.module.scss';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import type { } from 'redux-thunk/extend-redux';
import { useActions } from '../../hooks/useActions';
import ChatsNotFound from '../../helpers/ChatsNotFound';
import Loader from '../../helpers/Loader';
import Error from '../../helpers/Error';
import HeaderSearch from '../Inputs/HeaderSearch/HeaderSearch';



const Sidebar: FC = () => {

  const { chats, error, isLoading } = useTypedSelector(state => state.chat);
  const { searchInput } = useTypedSelector(state => state.searchChats);

  const { fetchChats } = useActions();

  useEffect(() => {
    (fetchChats());
  }, []);

  const filteredChats = chats.filter(chat => {
    return chat.userFrom.toLowerCase().includes(searchInput.toLowerCase());
  });



  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__header}>
        <div className={style.header__burger}>
        </div>
        <HeaderSearch />
      </div>
      <div className={style.sidebar__main}>
        {!isLoading && !filteredChats.length ? <ChatsNotFound/> : null}
        {error ? <Error /> : null}
        {!isLoading ? filteredChats.map(chat =>
          <SidebarMessage key={chat.id} id={chat.id} userFrom={chat.userFrom} text={chat.text} createdAt={chat.createdAt} />)
          : <Loader />}
      </div>
    </div>
  );
};
export default Sidebar;