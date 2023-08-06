import React, { FC } from 'react';
import style from '../Sidebar/Sidebar.module.scss';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ChatsNotFound from '../../helpers/UI/ChatsNotFound';
import useSWR from 'swr';
import { IChat, IFullChat, IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import { urlChats, urlUsers } from '../../url/url';
import Loader from '../../helpers/UI/Loader';
import Error from '../../helpers/UI/Error';
import { userOwner } from '../../helpers/userOwner';

const SidebarMain:FC = ({}) => {

    const { searchInput } = useTypedSelector(state => state.searchChats);

    
    const { data: chats, error, isLoading } = useSWR<IChat[]>(urlChats + `?userTo=${userOwner}`, fetcher);
    const { data: users } = useSWR<IUser[]>(chats ? urlUsers : null, fetcher);

    const tmp: IFullChat[] = [];
  
    chats && chats.forEach(chat => {
      users && users.forEach(user => {
        return tmp.push({ ...chat, senderName: user.name, senderId: user.id });
      });
    });

    const fullChats = tmp.filter(mess => mess.userFrom == mess.senderId);

    const filteredChats = fullChats && fullChats.filter(mess => {
      return String(mess.userFrom) !== userOwner && mess.senderName.toLowerCase().includes(searchInput.toLowerCase());
    });
    
    const lastDateByUserFrom: Record<string, string> = {
    };
  
    const filteredMessages: IFullChat[] = filteredChats.filter((message) => {
      if (!lastDateByUserFrom[message.userFrom]) {
        lastDateByUserFrom[message.userFrom] = message.createdAt;
        return true;
      } else {
        const lastDate = lastDateByUserFrom[message.userFrom];
        if (message.createdAt > lastDate) {
          lastDateByUserFrom[message.userFrom] = message.createdAt;
          return true;
        } else {
          return false;
        }
      }

    });

 return (
   <div className={style.sidebar__main}>
     {!isLoading && filteredMessages && !filteredChats.length ? <ChatsNotFound /> : null}
     {error && <Error />}
     {!isLoading ? filteredChats && filteredMessages.map(chat =>
       <SidebarMessage key={chat.id} senderName={chat.senderName} id={chat.id} text={chat.text} createdAt={chat.createdAt} userFrom={chat.userFrom} userTo={chat.userTo as number}/>)
          : <Loader />}
   </div>
 );
};
export default SidebarMain;