import React, { FC } from 'react';
import style from '../ChatWindow/ChatWindow.module.scss';


interface ChatWindowChooseChatProps {
  userTo: number | null
}


const ChatWindowChooseChat: FC<ChatWindowChooseChatProps> = ({ userTo }) => {

  return (
    <div className={userTo ? style.chatWindowActive__chooseChat : style.chatWindow__chooseChat}>
      <div className={style.chooseChat__text}>Choose a chat</div>
    </div>
  );
};
export default ChatWindowChooseChat;