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

const SidebarMain: FC = ({ }) => {

  const { searchInput } = useTypedSelector(state => state.searchChats);

  const { data: chatsFrom, isLoading, error, mutate: mutateChatsFrom } = useSWR<IChat[]>(urlChats + `?userFrom=${userOwner}`, fetcher);
  const { data: chatsTo, mutate: mutateChatsTo } = useSWR<IChat[]>(urlChats + `?userTo=${userOwner}`, fetcher);

  const { data: users } = useSWR<IUser[]>(chatsFrom ? urlUsers : null, fetcher);
  

  const sortChatsById = (a: IChat, b: IChat) => b.id - a.id;
  const sortsChatsByUserFrom = (a: IChat, b: IChat) => a.userFrom - b.userFrom;

  const tmpSortedChats: IChat[] = [];

  if (users && chatsFrom && chatsTo) {
    chatsFrom && chatsFrom.sort(sortChatsById);
    chatsTo && chatsTo.sort(sortChatsById);
    for (let i = 1; i <= users.length; i++) {
      (chatsTo.find(chatTo => chatTo.userFrom == i && tmpSortedChats.push(chatTo)));
      (chatsFrom.find(chatFrom => chatFrom.userTo == i && tmpSortedChats.push(chatFrom)));
    }
  }

  tmpSortedChats && tmpSortedChats.sort(sortsChatsByUserFrom);

  let finalSortedChats: IChat[] = [];
  const sortedChats: IChat[] = [];

  if (tmpSortedChats.length >= 1) {
    tmpSortedChats && tmpSortedChats.forEach(chat => {
      tmpSortedChats && tmpSortedChats.forEach(chat1 => {
        if (chat.userFrom == chat1.userTo && chat.userTo == chat1.userFrom) {
          sortedChats.push(chat.id < chat1.id ? chat1 : chat);
        }
        finalSortedChats = [...new Set(sortedChats)];
      });
    });
  }
  else {
    finalSortedChats = sortedChats.concat(tmpSortedChats);
  }

  const lastMessChats: IFullChat[] = [];
  finalSortedChats && finalSortedChats.forEach(chat => {
    users && users.forEach(user => {
      return lastMessChats.push({ ...chat, senderName: user.name, recipient: users[chat.userTo - 1].name, senderId: user.id });
    });
  });

 
  const fullChats = lastMessChats.filter(mess => mess.userFrom == mess.senderId);
  
  const filteredChats = fullChats && fullChats.filter(mess => {
    return String(mess.senderId) != userOwner ? mess.senderName.toLowerCase().includes(searchInput.toLowerCase()) : mess.recipient!.toLowerCase().includes(searchInput.toLowerCase());
  });
  
  /*const lastDateByUserFrom: Record<string, string> = {
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
 
   });*/

  return (
    <div className={style.sidebar__main}>
      {!isLoading && filteredChats && !filteredChats.length ? <ChatsNotFound /> : null}
      {error && <Error />}
      {!isLoading ? filteredChats && filteredChats.map(chat =>
        <SidebarMessage key={chat.id} senderName={String(chat.userFrom) !== userOwner ? chat.senderName : chat.recipient!} id={chat.id} text={chat.text} createdAt={chat.createdAt} userFrom={String(chat.userFrom) == userOwner ? chat.userFrom : chat.userTo} userTo={String(chat.userTo) == userOwner ? chat.userFrom : chat.userTo} />)
        : <Loader />}
    </div>
  );
};
export default SidebarMain;