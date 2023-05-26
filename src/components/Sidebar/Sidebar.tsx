import React, { FC } from 'react';
import style from './Sidebar.module.scss';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import type { } from 'redux-thunk/extend-redux';
import ChatsNotFound from '../../helpers/ChatsNotFound';
import Loader from '../../helpers/Loader';
import Error from '../../helpers/Error';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import useSWR from 'swr';
import { IChat } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';



const Sidebar: FC = () => {

  const { searchInput } = useTypedSelector(state => state.searchChats);
  const { data: chats, error, isLoading } = useSWR<IChat[]>('http://localhost:3001/messages', fetcher);

  const filteredChats = chats && chats.filter(chat => {
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
        {!isLoading && filteredChats && !filteredChats.length ? <ChatsNotFound /> : null}
        {error && <Error />}
        {!isLoading ? filteredChats && filteredChats.map(chat =>
          <SidebarMessage key={chat.id} id={chat.id} userFrom={chat.userFrom} text={chat.text} createdAt={chat.createdAt} />)
          : <Loader />}
      </div>
    </div>
  );
};
export default Sidebar;