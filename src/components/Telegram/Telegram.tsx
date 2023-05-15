import React from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import Sidebar from '../Sidebar/Sidebar';
import style from './Telegram.module.scss';


const Telegram = () => {

 return (
   <div className={style.telegram}>
     <Sidebar/>
     <ChatWindow/>
   </div>
 );
};
export default Telegram;