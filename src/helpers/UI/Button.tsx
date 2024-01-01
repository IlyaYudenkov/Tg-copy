import React, { FC } from 'react';
import cls from './Helpers.module.scss';

interface IButton {
    text: string,
    onClick?: () => void
}


const Button: FC<IButton> = ({ text, onClick }) => {

    return (
      <button type="submit"
            className={cls.Button}
            onClick={onClick}>
        {text}
      </button>
    );
};
export default Button;