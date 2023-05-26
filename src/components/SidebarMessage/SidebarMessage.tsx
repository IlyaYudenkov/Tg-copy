import React, { FC } from 'react';
import style from './SidebarMessage.module.scss';
import { IChat, IUser } from '../../types/types';
import { useDispatch } from 'react-redux';
import { chatChoose } from '../../store/reducers/chosenChatReducer';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher';



const SidebarMessage: FC<IChat> = ({ id, userFrom, text, createdAt }) => {

  const dispatch = useDispatch();

  const selectChat = () => {
    dispatch(chatChoose(id));
  };


  const urlUser = `http://localhost:3001/users/${userFrom}`;

  const { data: user } = useSWR<IUser>(urlUser, fetcher);


  return (
    <div className={style.sidebarMessage} onClick={selectChat}>
      <div className={style.sidebarMessage__avatar}>{user && user.name.substring(0, 2).toUpperCase()}</div>
      <div className={style.sidebarMessage__details}>
        <div className={style.details__top}>
          <div className={style.top__name}>{user ? user.name : 'User name not found'}</div>
          <div className={style.top__time}>{createdAt}</div>
        </div>
        <div className={style.details__bottom}>
          <div className={style.bottom__text}>{(text.length > 46) ? (text.substring(0, 47) + '...') : text.substring(0, 47)}</div>
        </div>
      </div>

    </div>
  );
};
export default SidebarMessage;