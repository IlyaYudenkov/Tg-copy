import React, { useState, FC } from 'react';
import cls from './ChatInput.module.scss';
import axios from 'axios';
import { urlChats } from '../../url/url';


interface ChatInputProps {
  userTo: number | undefined;
  onSend: () => void
}


const ChatInput: FC<ChatInputProps> = ({ userTo, onSend }) => {

  const [value, setValue] = useState<string>('');

  const changeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const date = new Date();

  const zeroOrNull = () => {
    return date.getMinutes() < 10 ? '0' : '';
  };

  const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (value) {
      axios.post(urlChats, {
        userFrom: localStorage.getItem('userLoggedIn'),
        userTo: userTo,
        text: value,
        createdAt: String(date.getHours()) + ':' + zeroOrNull() + String(date.getMinutes())
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        onSend();
      });
      setValue('');
    }
  };

  return (
    <form action='submit'>
      <div className={cls.main__chatInput}>
        <div className={cls.chatInput__input}>
          <textarea placeholder='Write a message...' value={value} onChange={changeTextArea} />
          <button onClick={sendMessage}>
            Send message
          </button>
        </div>
      </div>
    </form>

  );
};
export default ChatInput;