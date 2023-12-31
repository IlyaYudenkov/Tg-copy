import cls from './ModalWindow.module.scss';
import React, { FC } from 'react';
import Button from '../../helpers/UI/Button';

interface IModalWindow{
  isOpenModal: boolean,
  textModal: string,
  setIsOpenModal: (isOpenModal:boolean) => void,
  isButtonNeeded?: boolean,
}

const ModalWindow: FC <IModalWindow>= ({isOpenModal, setIsOpenModal, textModal, isButtonNeeded}) => {

  
  return (
    <div className={`${cls.modalWindow} ${isOpenModal ? `${cls.active}` : ''}`} onClick={() => setIsOpenModal(false)}>
      <div className={cls.modalWindow__window} onClick={(e) => e.stopPropagation()}>
        <div className={cls.window__content}>
          <h2>
            {textModal}
          </h2>
          {<Button text='Got it' isModal setIsOpenModal={setIsOpenModal} />}
        </div>
      </div>
    </div>
  );
};
export default ModalWindow;