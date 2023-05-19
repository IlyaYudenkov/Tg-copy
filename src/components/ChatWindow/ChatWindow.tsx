import React from 'react';
import style from './ChatWindow.module.scss';
import ChatInput from '../Inputs/ChatInput/ChatInput';





const ChatWindow = () => {
 


return (

  <div className={false ? style.chatWindowActive : style.chatWindow}>
    <div className={false ? style.chatWindowActive__header : style.chatWindow__header}>
      <div className={style.header__person}>
        <div className={style.person__avatar}></div>
        <div className={style.person__info}>
          <div className={style.info__name}>name</div>
          <div className={style.info__lastSeen}>just now</div>
        </div>
      </div>
    </div>
    <div className={false ? style.chatWindowActive__chooseChat : style.chatWindow__chooseChat}>
      <div className={style.chooseChat__text}>Choose a chat
      </div>
    </div>
    <div className={false ? style.chatWindowActive__main : style.chatWindow__main}>
      <div className={style.main__chat}>sadasd</div>
      <ChatInput />
    </div>
  </div>
);
};
export default ChatWindow;