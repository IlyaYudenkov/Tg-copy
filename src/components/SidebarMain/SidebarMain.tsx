import React, { FC } from 'react';
import cls from '../Sidebar/Sidebar.module.scss';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ChatsNotFound from '../../helpers/UI/ChatsNotFound';
import useSWR from 'swr';
import { IChat, IFullChat, IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import { urlChats, urlUsers } from '../../url/url';
import Loader from '../../helpers/UI/Loader';
import Error from '../../helpers/UI/Error';
import { useUserOwner } from '../../helpers/userOwner';

const SidebarMain: FC = ({ }) => {

  //HOOKS
  const { searchInput } = useTypedSelector(state => state.searchChats);
  const userOwner = useUserOwner();

  //API
  const { data: chatsFrom, isLoading, error } = useSWR<IChat[]>(urlChats + `?userFrom=${userOwner}`, fetcher);
  const { data: chatsTo } = useSWR<IChat[]>(urlChats + `?userTo=${userOwner}`, fetcher);
  const { data: users } = useSWR<IUser[]>(chatsFrom ? urlUsers : null, fetcher);

  //VARIABLES
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

  if (tmpSortedChats.length > 1 && users) {
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
  fullChats && fullChats.sort((chat1:IChat, chat2:IChat) => chat1.id < chat2.id ? 1 : -1);
  
  const filteredChats = fullChats && fullChats.filter(mess => {
    return String(mess.senderId) != userOwner
     ? mess.senderName.toLowerCase().includes(searchInput.toLowerCase())
     : (mess.recipient ? mess.recipient : '').toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div className={cls.sidebar__main}>
      {!isLoading && filteredChats && !filteredChats.length ? <ChatsNotFound /> : null}
      {error && <Error />}
      {!isLoading ? filteredChats && filteredChats.map(chat =>
        <SidebarMessage key={chat.id} senderName={String(chat.userFrom) !== userOwner ? chat.senderName : (chat.recipient ? chat.recipient : '')} id={chat.id} text={chat.text} createdAt={chat.createdAt} userFrom={String(chat.userFrom) == userOwner ? chat.userFrom : chat.userTo} userTo={String(chat.userTo) == userOwner ? chat.userFrom : chat.userTo} />)
        : <Loader />}
    </div>
  );
};
export default SidebarMain;