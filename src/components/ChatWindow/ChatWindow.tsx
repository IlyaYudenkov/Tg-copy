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

  const { chosenChatUserFrom: userFrom } = useTypedSelector(state => state.chosenChat);
  const { chosenChatUserTo: userTo } = useTypedSelector(state => state.chosenChat);

  const urlChatPartOne = `${urlChats}?userFrom=${userFrom}&&userTo=${userTo}`;
  const urlChatPartTwo = `${urlChats}?userTo=${userFrom}&&userFrom=${userTo}`;

  const { data: chatPartOne, isLoading, mutate: mutateChatFrom } = useSWR<IChat[]>(userFrom ? urlChatPartOne : null, fetcher);
  const { data: chatPartTwo, mutate: mutateChatTo } = useSWR<IChat[]>(userTo ? urlChatPartTwo : null, fetcher);

  const urlUser = `${urlUsers}/${userTo}`;

  const { data: user } = useSWR<IUser>(chatPartOne ? urlUser : null, fetcher);

  const genChat = chatPartTwo && chatPartOne && chatPartOne.concat(chatPartTwo);

  const sortedChat = genChat && genChat.sort((chat1: IChat, chat2: IChat) => chat1.id > chat2.id ? 1 : -1);


  if (isLoading) return (
    <div className={styles.helpersChatWindow}>
      <Loader />
    </div>
  );

  return (

    <div className={userFrom ? style.chatWindowActive : style.chatWindow} >
      <ChatWindowHeader user={user && user} />
      <ChatWindowChooseChat userTo={userTo && userTo} />
      <ChatWindowMain userTo={userTo && userTo} sortedChat={sortedChat} mutateChatTo={() => mutateChatTo()} mutateChatFrom={() => mutateChatFrom()} user={user && user} />
    </div>
  );
};
export default ChatWindow;