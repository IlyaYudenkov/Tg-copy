import React, { FC } from 'react';
import style from './Helpers.module.scss';
import axios from 'axios';
import { urlChats } from '../url/url';
import { useTypedSelector } from '../hooks/useTypedSelector';


interface ContextMenuProps {
  clientX: number,
  clientY: number,
  setOpenContextMenu: (openContextMenu: boolean) => void,
  onRemove: () => void;
}

const ContextMenu: FC<ContextMenuProps> = ({ setOpenContextMenu, clientX, clientY, onRemove }) => {

  const { chosenMessage: id } = useTypedSelector(state => state.chosenMessage);


  const removeMessage = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpenContextMenu(false);
    event.stopPropagation();
    axios.delete(`${urlChats}/${id}`).then(() => {
      onRemove();
    }).catch(() => {
      alert('Choose message for delete');
    });
  };


  return (
    <div className={style.contextMenu} style={{ top: `${clientY}px`, left: `${clientX}px` }} onClick={removeMessage} >
      Remove message
    </div>
  );
};
export default ContextMenu;