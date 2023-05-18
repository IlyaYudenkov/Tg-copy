import React from 'react';
import style from './ChatWindow.module.scss';
import ChatInput from '../Inputs/ChatInput/ChatInput';





const ChatWindow = () => {



return (

  <div className={style.chatWindow}>
    <div className={style.chatWindow__header}>
      <div className={style.header__person}>
        <div className={style.person__avatar}></div>
        <div className={style.person__info}>
          <div className={style.info__name}>name</div>
          <div className={style.info__lastSeen}>just now</div>
        </div>
      </div>
    </div>
    <div className={style.chatWindow__main}>
      <div className={style.main__chat}>sadasd</div>
      <ChatInput />
    </div>
  </div>
);
};
export default ChatWindow;