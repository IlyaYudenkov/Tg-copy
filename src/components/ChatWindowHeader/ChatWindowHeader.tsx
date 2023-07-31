import React, { FC } from 'react';
import { IUser } from '../../types/types';
import style from '../ChatWindow/ChatWindow.module.scss';

interface ChatWindowHeaderProps {
    userFrom: number | null,
    user: IUser | undefined
}

const ChatWindowHeader: FC<ChatWindowHeaderProps> = ({ userFrom, user }) => {

    return (
      <div className={userFrom ? style.chatWindowActive__header : style.chatWindow__header}>
        <div className={style.header__person}>
          <div className={style.person__avatar}>{user && user.name.split(' ').map(name => name[0])}</div>
          <div className={style.person__info}>
            <div className={style.info__name}>{user ? user.name : 'User name not found'}</div>
            <div className={style.info__lastSeen}>just now</div>
          </div>
        </div>
      </div>
    );
};
export default ChatWindowHeader;