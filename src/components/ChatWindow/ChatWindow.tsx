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

  const { data: chat, isLoading } = useSWR<IChat[]>(userFrom ? urlChatFrom : null, fetcher);
  const { data: chatTo, mutate } = useSWR<IChat[]>(userFrom ? urlChatTo : null, fetcher);

  const urlUser = `${urlUsers}/${userFrom}`;

  const { data: user } = useSWR<IUser>(chat ? urlUser : null, fetcher);

  const genChat = [];
  genChat.push(chat, chatTo);


  if (isLoading) return (
    <div className={styles.helpersChatWindow}>
      <Loader />
    </div>
  );

  return (

    <div className={userFrom ? style.chatWindowActive : style.chatWindow} >
      <ChatWindowHeader userFrom={userFrom && userFrom} user={user && user} />
      <ChatWindowChooseChat userFrom={userFrom && userFrom} />
      <ChatWindowMain userFrom={userFrom && userFrom} chatFrom={genChat[0]} chatTo={genChat[1]} mutateChatFrom={() => mutate()} user={user && user} />
    </div>
  );
};
export default ChatWindow;