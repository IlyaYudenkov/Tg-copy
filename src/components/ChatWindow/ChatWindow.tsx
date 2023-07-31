import React, { FC } from 'react';
import styles from '../../helpers/Helpers.module.scss';
import style from './ChatWindow.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useSWR from 'swr';
import { IChat, IUser } from '../../types/types';
import { fetcher } from '../../helpers/fetcher';
import Loader from '../../helpers/Loader';
import { urlChats, urlUsers } from '../../url/url';
import ChatWindowChooseChat from '../ChatWindowChooseChat/ChatWindowChooseChat';
import ChatWindowMain from '../ChatWindowMain/ChatWindowMain';
import ChatWindowHeader from '../ChatWindowHeader/ChatWindowHeader';


const ChatWindow: FC = () => {

  const { chosenChat: userFrom } = useTypedSelector(state => state.chosenChat);

  const urlChat = `${urlChats}?userTo=${userFrom}`;

  const { data: chat, isLoading, mutate } = useSWR<IChat[]>(userFrom ? urlChat : null, fetcher);

  const urlUser = `${urlUsers}/${userFrom}`;

  const { data: user } = useSWR<IUser>(chat ? urlUser : null, fetcher);


  if (isLoading) return (
    <div className={styles.helpersChatWindow}>
      <Loader />
    </div>
  );

  return (

    <div className={userFrom ? style.chatWindowActive : style.chatWindow} >
      <ChatWindowHeader userFrom={userFrom && userFrom} user={user && user} />
      <ChatWindowChooseChat userFrom={userFrom && userFrom} />
      <ChatWindowMain userFrom={userFrom && userFrom} chat={chat} mutateChat={() => mutate()} user={user && user} />
    </div>
  );
};
export default ChatWindow;