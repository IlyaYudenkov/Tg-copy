import { useDispatch } from 'react-redux';
import cls from './ModalWindow.module.scss';
import React from 'react';
import { modalErrorState } from '../../store/reducers/modalErrorReducer';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../../helpers/UI/Button';

const ModalWindow = ({}) => {

const {openError} = useTypedSelector(state => state.modalError);

const dispatch = useDispatch();

const closeModalError = () => {
    dispatch(modalErrorState(false));
};


 return (
   <div className={openError ? cls.modalWindow : cls.modalWindowNone} onClick={closeModalError}>
     <div className={cls.modalWindow__window} onClick={e => e.stopPropagation()}>
       <div className={cls.window__content}>
         <h1>Choose a message for delete</h1>
         <Button text='Got it' isModal/>
       </div>
     </div>
   </div>
 );
};
export default ModalWindow;