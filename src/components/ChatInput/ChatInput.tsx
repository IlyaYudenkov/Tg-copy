import React, { useState, FC } from 'react';
import style from './ChatInput.module.scss';
import styles from '../ChatWindow/ChatWindow.module.scss';
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
  const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (value) {
      axios.post(urlChats, {
        userFrom: localStorage.getItem('userLoggedIn'),
        userTo: userTo,
        text: value,
        createdAt: String(date.getHours()) + ':' + String(date.getMinutes())
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
      <div className={styles.main__chatInput}>
        <div className={style.chatInput__input}>
          <textarea placeholder='Write a message...' value={value} onChange={changeTextArea} />
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </form>

  );
};
export default ChatInput;