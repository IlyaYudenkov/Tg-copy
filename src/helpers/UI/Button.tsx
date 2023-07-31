import React, { FC } from 'react';
import cls from './Helpers.module.scss';
import { useDispatch } from 'react-redux';
import { modalErrorState } from '../../store/reducers/modalErrorReducer';

interface ButtonProps {
    text: string,
    isModal?: boolean
}


const Button: FC<ButtonProps> = ({ text, isModal }) => {

    const dispatch = useDispatch();

    const closeModalError = () => {
        dispatch(modalErrorState(false));
    };
    
    return (
      <button type="submit" className={cls.Button} onClick={isModal ? closeModalError : undefined}>{text}</button>
    );
};
export default Button;