import React, { FC } from 'react';
import cls from './MainPage.module.scss';
import Button from '../../helpers/UI/Button';

const MainPage: FC = ({}) => {

 return (
   <div className={cls.MainPage}>
     <main className={cls.MainPage__box}>
       <h1>Telegram</h1>
       <section className={cls.box__sign}>
         <Button text='Sign In' navigate='/signIn'/>
         <Button text='Sign Up' navigate='/signUp'/>
       </section>
     </main>
   </div>
 );
};
export default MainPage;