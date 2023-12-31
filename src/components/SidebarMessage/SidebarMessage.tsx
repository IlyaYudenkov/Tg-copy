import React, { FC, useCallback } from 'react';
import style from './SidebarMessage.module.scss';
import { IChat } from '../../types/types';
import { useDispatch } from 'react-redux';
import { chatUserFromChoose, chatUserToChoose } from '../../store/reducers/chosenChatReducer';


const SidebarMessage: FC<IChat> = ({ userFrom, senderName, text, createdAt, userTo }) => {

  const dispatch = useDispatch();

  const truncateText = () => {
    return (text.length > 44) ? (text.substring(0, 44) + '...') : text.substring(0, 47);
  };

  const selectChat = useCallback(() => {
    dispatch(chatUserFromChoose(userFrom));
    dispatch(chatUserToChoose(userTo));
  }, [userFrom, userTo]);
  
  return (
    <div className={style.sidebarMessage} onClick={selectChat}>
      <div className={style.sidebarMessage__avatar}>{senderName && senderName.split(' ').map(name => name[0])}</div>
      <div className={style.sidebarMessage__details}>
        <div className={style.details__top}>
          <p className={style.top__name}>{senderName ? senderName : 'User name not found'}</p>
          <p className={style.top__time}>{createdAt}</p>
        </div>
        <div className={style.details__bottom}>
          <p className={style.bottom__text}>{truncateText()}</p>
        </div>
      </div>

    </div>
  );
};
export default SidebarMessage;