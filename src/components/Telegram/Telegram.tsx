import React  from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import Sidebar from '../Sidebar/Sidebar';
import style from './Telegram.module.scss';



const Telegram = () => {

 return (
   <div className={style.telegram}>
     <Sidebar messageId={''} />
     <ChatWindow name={'Max Sobolev'} text={'Hello, how are you'}/>
   </div>
 );
};
export default Telegram;


