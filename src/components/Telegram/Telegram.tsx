import React, { FC } from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import Sidebar from '../Sidebar/Sidebar';
import style from './Telegram.module.scss';
import ModalWindow from '../ModalWindow/ModalWindow';

const Telegram: FC = () => {


  return (
    <div className={style.telegram}>
      <Sidebar />
      <ChatWindow />
      <ModalWindow welcome/>
    </div>
  );
};
export default Telegram;


