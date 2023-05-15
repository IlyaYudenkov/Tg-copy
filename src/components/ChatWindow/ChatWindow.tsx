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
           <div className={style.info__lastSeen}>last seen</div>
         </div>
       </div>
     </div>
     <div className={style.chatWindow__main}>
       <div className={style.main__chat}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, cumque soluta! Id ullam rem quas vero molestiae quaerat aspernatur sapiente inventore ea eum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio id reiciendis qui sequi assumenda a esse, corporis sint. Animi unde omnis possimus perferendis ipsa quis incidunt, magni libero. Officiis, inventore.</div>
       <ChatInput/>
     </div>
   </div>
 );
};
export default ChatWindow;