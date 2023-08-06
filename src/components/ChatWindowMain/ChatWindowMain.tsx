import React, { useState, FC, useEffect } from 'react';
import style from '../ChatWindow/ChatWindow.module.scss';
import ChatInput from '../ChatInput/ChatInput';
import Message from '../Message/Message';
import { IChat, IUser } from '../../types/types';
import ContextMenu from '../../helpers/UI/ContextMenu';


interface ChatWindowMainProps {
  userFrom: number | null,
  sortedChat: IChat[] | undefined,
  user: IUser | undefined,
  mutateChatTo: () => void,
  mutateChatFrom: () => void

}

const ChatWindowMain: FC<ChatWindowMainProps> = ({ userFrom, user, sortedChat, mutateChatTo, mutateChatFrom }) => {

  useEffect(() => { () => mutateChatFrom(); }, [sortedChat]);

  const [openContextMenu, setOpenContextMenu] = useState(false);

  const [coordinatesX, setCoordinatesX] = useState({ clientX: 0 });
  const [coordinatesY, setCoordinatesY] = useState({ clientY: 0 });

  const openSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOpenContextMenu(true);

    if (event.clientX > screen.width - 110) {
      setCoordinatesX({ clientX: event.clientX - 100 });
      setCoordinatesY({ clientY: event.clientY });
      if (event.clientY > 100) {
        setCoordinatesY({ clientY: event.clientY - 70 });
        if (event.clientY < 100) {
          setCoordinatesY({ clientY: 70 });
        }
      }
    }
    else if (event.clientY > 100) {
      setCoordinatesY({ clientY: event.clientY - 55 });
      setCoordinatesX({ clientX: event.clientX });
    }
    else if (event.clientY <= 100) {
      setCoordinatesY({ clientY: 70 });
      setCoordinatesX({ clientX: event.clientX });
    }
    else {
      setCoordinatesX({ clientX: event.clientX });
      setCoordinatesY({ clientY: event.clientY });
    }
  };

  return (
    <div className={userFrom ? style.chatWindowActive__main : style.chatWindow__main} onClick={() => setOpenContextMenu(false)}>
      {openContextMenu && sortedChat && <ContextMenu onRemove={() => { mutateChatTo(); }} setOpenContextMenu={setOpenContextMenu} clientX={coordinatesX.clientX} clientY={coordinatesY.clientY} />}
      <div className={style.main__chat} onContextMenu={openSideMenu}>

        {sortedChat && sortedChat.map(message => <Message key={message.id} id={message.id} userTo={message.userTo} text={message.text} date={message.createdAt} userFrom={message.userFrom} />)}
      </div>
      <ChatInput userTo={user && user.id} onSend={() => { mutateChatTo(); }} />
    </div>
  );
};
export default ChatWindowMain;