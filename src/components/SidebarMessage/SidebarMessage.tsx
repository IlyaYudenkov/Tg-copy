import React, { FC } from 'react';
import style from './SidebarMessage.module.scss';
import { IChat } from '../../types/chats';




const SidebarMessage: FC <IChat>= ({ userFrom, text, createdAt}) => {



  return (
    <div className={style.sidebarMessage}>
      <div className={style.sidebarMessage__avatar}>{userFrom}</div>
      <div className={style.sidebarMessage__details}>
        <div className={style.details__top}>
          <div className={style.top__name}>{userFrom}</div>
          <div className={style.top__time}>{createdAt}</div>
        </div>
        <div className={style.details__bottom}>
          <div className={style.bottom__text}>{text}</div>
        </div>
      </div>

    </div>
  );
};
export default SidebarMessage;