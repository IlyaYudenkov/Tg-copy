import React, { FC } from 'react';
import style from './SidebarMessage.module.scss';
import { IChat } from '../../types/types';
import { useDispatch } from 'react-redux';
import { chatChoose } from '../../store/reducers/chosenChatReducer';


const SidebarMessage: FC<IChat> = ({ id, userFrom, text, createdAt }) => {

  const dispatch = useDispatch();

  const selectChat = () => {
    dispatch(chatChoose(id));
  };

  return (
    <div className={style.sidebarMessage} onClick={selectChat}>
      <div className={style.sidebarMessage__avatar}>{userFrom && userFrom.split(' ').map(name => name[0])}</div>
      <div className={style.sidebarMessage__details}>
        <div className={style.details__top}>
          <div className={style.top__name}>{userFrom ? userFrom : 'User name not found'}</div>
          <div className={style.top__time}>{createdAt}</div>
        </div>
        <div className={style.details__bottom}>
          <div className={style.bottom__text}>{(text.length > 44) ? (text.substring(0, 44) + '...') : text.substring(0, 47)}</div>
        </div>
      </div>

    </div>
  );
};
export default SidebarMessage;