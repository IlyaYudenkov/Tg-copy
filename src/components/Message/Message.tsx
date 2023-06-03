import React, { FC, useState } from 'react';
import style from './Message.module.scss';
import ContextMenu from '../../helpers/ContextMenu';

interface MessageProps{
    userTo: string,
    userFrom: string,
    text:string,
    date: string
}


const Message: FC <MessageProps> = ({ text, userTo, date, userFrom}) => {

   

    

    const [openContextMenu, setOpenContextMenu] = useState(false);

    const openSideMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        setOpenContextMenu(true);
    };
    return (
      <div className={userFrom !== localStorage.getItem('userLoggedIn') ? style.chat__messageUserTo : style.chat__messageUserFrom} onContextMenu={openSideMenu} >
        {openContextMenu && <ContextMenu />}
        <div className={style.message__text}>{text}</div>
        <div className={style.message__time}>{date}</div>
      </div>
    );
};
export default Message;