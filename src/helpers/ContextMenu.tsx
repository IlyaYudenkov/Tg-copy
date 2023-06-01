import React, { FC } from 'react';
import style from './Helpers.module.scss';



const ContextMenu: FC = () => {

    const removeMessage = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
      <div className={style.contextMenu} onClick={removeMessage}>
        Remove message
      </div>
    );
};
export default ContextMenu;