import React, { FC } from 'react';
import { IUser } from '../../types/types';
import style from '../ChatWindow/ChatWindow.module.scss';

interface IChatWindowHeaderProps {
  user: IUser | undefined
}

const ChatWindowHeader: FC<IChatWindowHeaderProps> = ({ user }) => {

  return (
    <div className={user ? style.chatWindowActive__header : style.chatWindow__header}>
      <div className={style.header__person}>
        <div className={style.person__avatar}>
          {user && user.name.split(' ').map(name => name[0])}
        </div>
        <div className={style.person__info}>
          <p className={style.info__name}>
            {user ? user.name : 'User name not found'}
          </p>
          <p className={style.info__lastSeen}>
            just now
          </p>
        </div>
      </div>
    </div>
  );
};
export default ChatWindowHeader;