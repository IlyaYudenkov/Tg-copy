import React, { FC  } from 'react';
import cls from './Helpers.module.scss';
import { useDispatch } from 'react-redux';
import { modalErrorState } from '../../store/reducers/modalErrorReducer';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    text: string,
    isModal?: boolean,
    navigate?: string
}


const Button: FC<ButtonProps> = ({ text, isModal, navigate }) => {

    const dispatch = useDispatch();

    const nav = useNavigate();

    const closeModalError = () => {
        dispatch(modalErrorState(false));
    };

    const navigateTo = () => {
        nav(`${navigate}`);
    };


    return (
      <button type="submit" className={cls.Button} onClick={isModal ? closeModalError : navigate ? navigateTo : undefined}>{text}</button>
    );
};
export default Button;