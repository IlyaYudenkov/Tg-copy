import { useDispatch } from 'react-redux';
import cls from './ModalWindow.module.scss';
import React, { FC } from 'react';
import { modalWindowState } from '../../store/reducers/modalWindowReducer';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../../helpers/UI/Button';


interface modalWindowProps {
  welcome?: true
}


const ModalWindow: FC<modalWindowProps> = ({ welcome }) => {

  const { openWindow } = useTypedSelector(state => state.modalWindow);

  const dispatch = useDispatch();

  const closeModalError = () => {
    dispatch(modalWindowState(false));
  };
  const { textWindow} = useTypedSelector(state => state.modalWindow);


  return (
    <div className={openWindow ? cls.modalWindow : cls.modalWindowNone} onClick={closeModalError}>
      <div className={cls.modalWindow__window} onClick={e => e.stopPropagation()}>
        <div className={cls.window__content}>
          <h1>{textWindow} </h1>
          {!welcome && <Button text='Got it' isModal />}
        </div>
      </div>
    </div>
  );
};
export default ModalWindow;