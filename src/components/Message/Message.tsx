import React, { FC } from 'react';
import cls from './Message.module.scss';
import { useDispatch } from 'react-redux';
import { messageChooseId, messageChooseUserFrom } from '../../store/reducers/chosenMessageReducer';

interface IMessageProps {
  id: number,
  userTo: number,
  userFrom: number,
  text: string,
  date: string,
}

const Message: FC<IMessageProps> = ({ text, date, userFrom, id }) => {

  const dispatch = useDispatch();

  const selectMessage = () => {
    dispatch(messageChooseId(id));
    dispatch(messageChooseUserFrom(userFrom));
  };

  return (
    <div className={String(userFrom) !== localStorage.getItem('userLoggedIn') ? cls.chat__messageUserTo : cls.chat__messageUserFrom} onContextMenu={selectMessage}>
      <div className={cls.message__info}>
        <p className={cls.info__text}>
          {text}
        </p>
        <p className={cls.info__time}>
          {date}
        </p>
      </div>
    </div>
  );
};
export default Message;