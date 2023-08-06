import React, { FC } from 'react';
import styles from '../../helpers/UI/Helpers.module.scss';
import style from './ChatWindow.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useSWR from 'swr';
import { IChat, IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import { urlChats, urlUsers } from '../../url/url';
import ChatWindowChooseChat from '../ChatWindowChooseChat/ChatWindowChooseChat';
import ChatWindowMain from '../ChatWindowMain/ChatWindowMain';
import ChatWindowHeader from '../ChatWindowHeader/ChatWindowHeader';
import Loader from '../../helpers/UI/Loader';



const ChatWindow: FC = () => {

  const { chosenChat: userFrom } = useTypedSelector(state => state.chosenChat);
  const urlChatFrom = `${urlChats}?userFrom=${userFrom}`;
  const urlChatTo = `${urlChats}?userTo=${userFrom}`;

  const { data: chatFrom, isLoading, mutate: mutateChatFrom } = useSWR<IChat[]>(userFrom ? urlChatFrom : null, fetcher);
  const { data: chatTo, mutate: mutateChatTo } = useSWR<IChat[]>(userFrom ? urlChatTo : null, fetcher);


  const urlUser = `${urlUsers}/${userFrom}`;

  const { data: user } = useSWR<IUser>(chatFrom ? urlUser : null, fetcher);

  const genChat = chatTo && chatFrom && chatFrom.concat(chatTo);

  const sortedChat = genChat && genChat.sort((chat1: IChat, chat2: IChat) => chat1.id > chat2.id ? 1 : -1);


  if (isLoading) return (
    <div className={styles.helpersChatWindow}>
      <Loader />
    </div>
  );

  return (

    <div className={userFrom ? style.chatWindowActive : style.chatWindow} >
      <ChatWindowHeader userFrom={userFrom && userFrom} user={user && user} />
      <ChatWindowChooseChat userFrom={userFrom && userFrom} />
      <ChatWindowMain userFrom={userFrom && userFrom} sortedChat={sortedChat} mutateChatTo={() => mutateChatTo()} mutateChatFrom={() => mutateChatFrom()} user={user && user} />
    </div>
  );
};
export default ChatWindow;