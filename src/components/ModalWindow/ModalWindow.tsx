import { useDispatch } from 'react-redux';
import cls from './ModalWindow.module.scss';
import React, { FC } from 'react';
import { modalErrorState } from '../../store/reducers/modalErrorReducer';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../../helpers/UI/Button';


interface modalWindowProps {
  welcome?: true
}


const ModalWindow: FC<modalWindowProps> = ({ welcome }) => {

  const { openError } = useTypedSelector(state => state.modalError);

  const dispatch = useDispatch();

  const closeModalError = () => {
    dispatch(modalErrorState(false));
  };
  const { textError } = useTypedSelector(state => state.modalError);


  return (
    <div className={openError ? cls.modalWindow : cls.modalWindowNone} onClick={closeModalError}>
      <div className={cls.modalWindow__window} onClick={e => e.stopPropagation()}>
        <div className={cls.window__content}>
          <h1>{textError} </h1>
          <Button text='Got it' isModal />
        </div>
      </div>
    </div>
  );
};
export default ModalWindow;