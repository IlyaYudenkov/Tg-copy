import React, { FC } from 'react';
import style from '../Sidebar/Sidebar.module.scss';
import SidebarMessage from '../SidebarMessage/SidebarMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import ChatsNotFound from '../../helpers/UI/ChatsNotFound';
import useSWR from 'swr';
import { IChat, IChats, IFullChat, IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import { urlChats, urlUsers } from '../../url/url';
import Loader from '../../helpers/UI/Loader';
import Error from '../../helpers/UI/Error';
import { userOwner } from '../../helpers/userOwner';

const SidebarMain: FC = ({ }) => {

  const { searchInput } = useTypedSelector(state => state.searchChats);


  const { data: chats, error, isLoading } = useSWR<IChat[]>(urlChats + `?userTo=${userOwner}`, fetcher);
  const { data: users } = useSWR<IUser[]>(chats ? urlUsers : null, fetcher);

  const { data: chat1 } = useSWR<IChat[]>(urlChats, fetcher);

  const sortChatsId = (a: IChat, b: IChat) => b.id - a.id;

  const sortsChatUserFrom = (a: IChat, b: IChat) => a.userFrom - b.userFrom;

  const tmp: IChat[] = [];


  if (users && chat1) {
    chat1 && chat1.sort(sortChatsId);
    console.log(chat1);
    for (let i = 0; i <= users.length; i++) {
   
      (chat1.find(chat => chat.userFrom == i ? tmp.push(chat) : ''));
    }
  }

tmp && tmp.sort(sortsChatUserFrom);
  console.log(tmp);
 /* for (let i = 0; i <= tmp.length; i++) {
    if (tmp[i + 2] && tmp[i].userFrom == tmp[i + 2].userTo && tmp[i].userTo == tmp[i + 2].userFrom) {
      tmp[i].id < tmp[i + 2].id ? tmp.splice(i, 1) : tmp.splice(i + 2, 1);
    }
    tmp;
 
  }*/
/*if(users && tmp){
  for (let i = 0; i <= tmp.length; i++) {
    console.log(i);
    for (let n = 1; n <= users.length; n++) {
      console.log(tmp[n].userTo);
      if(tmp[i].userFrom == tmp[n].userTo || tmp[i].userTo == tmp[n].userFrom){
        tmp[i].id < tmp[n].id ? tmp.splice(i, 1) : tmp.splice(n, 1);
        console.log(1);
      }
    }    
  }
}*/
let n:IChat[] = [];
tmp && tmp.forEach(chat => {
  tmp && tmp.forEach(chat1 => {
    if(chat.userFrom == chat1.userTo && chat.userTo == chat1.userFrom){
      console.log(chat, chat1);
      chat.id < chat1.id ? n=tmp.filter(mess => mess.id !== chat.id) : n=tmp.filter(mess => mess.id !== chat1.id);
    }
  });
});
  
  console.log(n);
  const lastMess: IFullChat[] = [];
  chat1 && chat1.forEach(chat => {
    users && users.forEach(user => {

      return lastMess.push({ ...chat, senderName: user.name, recipient: users[chat.userTo - 1].name, senderId: user.id });
    });
  });

  console.log(lastMess);
  /* const tmp: IFullChat[] = [];
 
   chats && chats.forEach(chat => {
     users && users.forEach(user => {
       return tmp.push({ ...chat, senderName: user.name, senderId: user.id });
     });
   });*/

  const fullChats = lastMess.filter(mess => mess.userFrom == mess.senderId);

  const filteredChats = fullChats && fullChats.filter(mess => {
    return mess.senderName.toLowerCase().includes(searchInput.toLowerCase());
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
        <SidebarMessage key={chat.id} senderName={chat.senderName} id={chat.id} text={chat.text} createdAt={chat.createdAt} userFrom={chat.userFrom} userTo={chat.userTo as number} />)
        : <Loader />}
    </div>
  );
};
export default SidebarMain;