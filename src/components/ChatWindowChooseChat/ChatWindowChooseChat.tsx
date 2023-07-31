import React, { FC } from 'react';
import style from '../ChatWindow/ChatWindow.module.scss';


interface ChatWindowChooseChatProps {
  userFrom: number | null
}


const ChatWindowChooseChat: FC<ChatWindowChooseChatProps> = ({ userFrom }) => {

  return (
    <div className={userFrom ? style.chatWindowActive__chooseChat : style.chatWindow__chooseChat}>
      <div className={style.chooseChat__text}>Choose a chat</div>
    </div>
  );
};
export default ChatWindowChooseChat;