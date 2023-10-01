import React, { FC, useEffect } from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import Sidebar from '../Sidebar/Sidebar';
import style from './Telegram.module.scss';
import ModalWindow from '../ModalWindow/ModalWindow';
import { userOwner } from '../../helpers/userOwner';
import { useDispatch } from 'react-redux';
import { modalWindowState, modalWindowText } from '../../store/reducers/modalWindowReducer';
import { urlUsers } from '../../url/url';
import { fetcher } from '../../helpers/fetcher';
import useSWR from 'swr';
import { IUser } from '../../types/types';

const Telegram: FC = () => {

  const { data: users } = useSWR<IUser[]>(urlUsers, fetcher);

  const dispatch = useDispatch();

  useEffect(() => {
    if(users){
      const userOwnerName = users && users.find(user => String(user.id) === userOwner);
      dispatch(modalWindowState(true));
      dispatch(modalWindowText(`Welcome, ${userOwnerName && userOwnerName.name}`));
      setInterval(() => {
        dispatch(modalWindowState(false));
      }, 800);
    }
  }, [users]);

  return (
    <div className={style.telegram}>
      <Sidebar />
      <ChatWindow />
      <ModalWindow/>
    </div>
  );
};
export default Telegram;


