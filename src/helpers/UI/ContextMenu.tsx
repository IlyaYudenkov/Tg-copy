import React, { FC, useState } from 'react';
import style from './Helpers.module.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { urlChats } from '../../url/url';
import { modalWindowState, modalWindowText } from '../../store/reducers/modalWindowReducer';
import { userOwner } from '../userOwner';



interface ContextMenuProps {
  clientX: number,
  clientY: number,
  setOpenContextMenu: (openContextMenu: boolean) => void,
  onRemove: () => void;
}

const ContextMenu: FC<ContextMenuProps> = ({ setOpenContextMenu, clientX, clientY, onRemove }) => {


  
  const dispatch = useDispatch();

  const openModalWindowNoMessage = () => {
    dispatch(modalWindowState(true));
    dispatch(modalWindowText('Choose a message to delete'));
  };

  const openModalWindowNotYourMessage = () => {
    dispatch(modalWindowState(true));
    dispatch(modalWindowText('Choose your message to delete'));
  };

  const { chosenMessageId: id } = useTypedSelector(state => state.chosenMessage);
  const { chosenMessageUserFrom: userFrom } = useTypedSelector(state => state.chosenMessage);
  const [userFromState, setUserFromState] = useState(userFrom);
  const removeMessage = (event: React.MouseEvent<HTMLDivElement>) => {
    setUserFromState(userFrom);
    if (userFrom == userOwner || userFrom == null && id) {
      setOpenContextMenu(false);
      event.stopPropagation();
      axios.delete(`${urlChats}/${id}`).then(() => {
        onRemove();
      }).catch(openModalWindowNoMessage);
    }
    else {
      setOpenContextMenu(false);
      event.stopPropagation();
      openModalWindowNotYourMessage();
    }
    setUserFromState(0);

  };



  return (
    <div className={style.contextMenu} style={{ top: `${clientY}px`, left: `${clientX}px` }} onClick={removeMessage} >
      Remove message
    </div>
  );
};
export default ContextMenu;