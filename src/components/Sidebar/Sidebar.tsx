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
import { IChat, IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import { urlChats, urlUsers } from '../../url/url';



const Sidebar: FC = () => {

  const { searchInput } = useTypedSelector(state => state.searchChats);

  const { data: chats, error, isLoading } = useSWR<IChat[]>(urlChats, fetcher);

  const { data: users } = useSWR<IUser[]>(chats ? urlUsers : null, fetcher);


  //???
  const filteredChats = chats && chats.filter(chat => {
    users && users.map(user => {
      if (user.id == chat.userFrom) {
        chat.userFrom = user.name;
      }
    });
    return chat && chat.userFrom.toLowerCase().includes(searchInput.toLowerCase());

  });
  ///


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