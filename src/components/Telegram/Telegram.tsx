import React, { FC, useEffect } from 'react';
import ChatWindow from '../ChatWindow/ChatWindow';
import Sidebar from '../Sidebar/Sidebar';
import cls from './Telegram.module.scss';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useUserOwner } from '../../helpers/userOwner';
import { urlUsers } from '../../url/url';
import { fetcher } from '../../helpers/fetcher';
import useSWR from 'swr';
import { IUser } from '../../types/types';

interface ITelegram {
  isOpenModal: boolean,
  setIsOpenModal: (isOpenModal: boolean) => void,
  textModal: string,
  setTextModal: (textModal: string) => void
}


const Telegram: FC<ITelegram> = ({ isOpenModal, setIsOpenModal, textModal, setTextModal }) => {

  //API
  const { data: users } = useSWR<IUser[]>(urlUsers, fetcher);

  const userOwnerId = useUserOwner();

  useEffect(() => {
    if (users) {
      const userOwner = users && users.find(user => String(user.id) === userOwnerId);
      setIsOpenModal(true);
      const timeoutId = setTimeout(() => {
        setIsOpenModal(false);
      }, 800);
      setTextModal(`Welcome, ${userOwner && userOwner.name}`);
      return () => clearTimeout(timeoutId);
    }
  }, [userOwnerId, users]);

  return (
    <div className={cls.telegram}>
      <Sidebar />
      <ChatWindow isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} setTextModal={setTextModal} />
      <ModalWindow isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} textModal={textModal}/>
    </div>
  );
};
export default Telegram;


