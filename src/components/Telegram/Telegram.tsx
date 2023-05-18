import React, { FC }  from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import Sidebar from '../Sidebar/Sidebar';
import style from './Telegram.module.scss';

const Telegram:FC = () => {

 return (
   <div className={style.telegram}>
     <Sidebar messageId={''}/>
     <ChatWindow />
   </div>
 );
};
export default Telegram;


