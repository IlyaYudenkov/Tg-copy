import React, { useState, FC } from 'react';
import style from '../ChatWindow/ChatWindow.module.scss';
import ChatInput from '../ChatInput/ChatInput';
import Message from '../Message/Message';
import ContextMenu from '../../helpers/ContextMenu';
import { IChat, IUser } from '../../types/types';


interface ChatWindowMainProps {
  userFrom: number | null,
  chat: IChat[] | undefined,
  user: IUser | undefined,
  mutateChat: () => void

}

const ChatWindowMain: FC<ChatWindowMainProps> = ({ userFrom, user, chat, mutateChat }) => {

  const [openContextMenu, setOpenContextMenu] = useState(false);

  const [coordinates, setCoordinates] = useState({ clientX: 0, clientY: 0 });

  const openSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOpenContextMenu(true);
    setCoordinates({ clientX: event.clientX, clientY: event.clientY });
  };

  return (
    <div className={userFrom ? style.chatWindowActive__main : style.chatWindow__main} onClick={() => setOpenContextMenu(false)}>
      {openContextMenu && chat && <ContextMenu onRemove={() => { mutateChat(); }} setOpenContextMenu={setOpenContextMenu} clientX={coordinates.clientX} clientY={coordinates.clientY} />}
      <div className={style.main__chat} onContextMenu={openSideMenu}>
        {chat && chat.map((message, index) => <Message id={message.id} key={index} userTo={message.userTo} text={message.text} date={message.createdAt} userFrom={message.userFrom} />)}
      </div>
      <ChatInput userTo={user && user.id} onSend={() => { mutateChat(); }} />
    </div>
  );
};
export default ChatWindowMain;