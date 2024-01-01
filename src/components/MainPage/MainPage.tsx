import React, { FC } from 'react';
import cls from './MainPage.module.scss';
import Button from '../../helpers/UI/Button';
import { useNavigate } from 'react-router-dom';

const MainPage: FC = ({ }) => {

  const navigate = useNavigate();

  return (
    <div className={cls.MainPage}>
      <main className={cls.MainPage__box}>
        <h1>Telegram-clone</h1>
        <section className={cls.box__sign}>
          <Button text='Sign In' onClick={() => navigate('/signIn')} />
          <Button text='Sign Up' onClick={() => navigate('/signUp')} />
        </section>
      </main>
    </div>
  );
};
export default MainPage;