import React, { useState, FC } from 'react';
import style from './ChatInput.module.scss';
import styles from '../ChatWindow/ChatWindow.module.scss';

const ChatInput: FC = () => {
  const [value, setValue] = useState<string>('');

  const changeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const sendMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setValue('');

  };

  return (
    <form action='submit'>
      <div className={styles.main__chatInput}>
        <div className={style.chatInput__file}>
          <input type="file" />
        </div>
        <div className={style.chatInput__input}>
          <textarea placeholder='Write a message...' value={value} onChange={changeTextArea} />
          <button onClick={sendMessage}>Send message</button>
        </div>
      </div>
    </form>

  );
};
export default ChatInput;