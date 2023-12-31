import React, { FC } from 'react';
import cls from './Helpers.module.scss';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
    text: string,
    isModal?: boolean,
    setIsOpenModal?: (isOpenModal: boolean) => void,
    navigate?: string
}


const Button: FC<ButtonProps> = ({ text, isModal, setIsOpenModal, navigate }) => {

    const nav = useNavigate();

    const navigateTo = (path: string) => {
        nav(`${path}`);
    };

    const buttonFunction = () => {
        if (isModal && setIsOpenModal) {
            return setIsOpenModal(false);
        }
        navigate && navigateTo(navigate);
    };


    return (
      <button type="submit"
            className={cls.Button}
            onClick={buttonFunction}>
        {text}
      </button>
    );
};
export default Button;