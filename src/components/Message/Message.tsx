import React, { FC } from 'react';
import style from './Message.module.scss';
import { useDispatch } from 'react-redux';
import { messageChooseId, messageChooseUserFrom } from '../../store/reducers/chosenMessageReducer';

interface MessageProps {
  id: number,
  userTo: number,
  userFrom: number,
  text: string,
  date: string,
}


const Message: FC<MessageProps> = ({ text, date, userFrom, id }) => {
  const dispatch = useDispatch();

  const selectMessage = () => {
    dispatch(messageChooseId(id));
    dispatch(messageChooseUserFrom(userFrom));
  };

  return (
    <div className={String(userFrom) !== localStorage.getItem('userLoggedIn') ? style.chat__messageUserTo : style.chat__messageUserFrom} onContextMenu={selectMessage}>
      <div className={style.message__info}>
        <div className={style.info__text}>{text}</div>
        <div className={style.info__time}>{date}</div>
      </div>

    </div>
  );
};
export default Message;