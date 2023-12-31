import React, { FC, useState } from 'react';
import style from './Helpers.module.scss';
import axios from 'axios';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { urlChats } from '../../url/url';
import { useUserOwner } from '../userOwner';


interface IContextMenu {
  clientX: number,
  clientY: number,
  setOpenContextMenu: (openContextMenu: boolean) => void,
  onRemove: () => void;
  isOpenModal: boolean,
  setIsOpenModal: (isOpenModal: boolean) => void,
  setTextModal: (textModal: string) => void
}

const ContextMenu: FC<IContextMenu> = ({ setOpenContextMenu,
  clientX,
  clientY,
  onRemove,
  setIsOpenModal,
  setTextModal }) => {

  //HOOKS
  const userOwner = useUserOwner();
  const { chosenMessageId: id } = useTypedSelector(state => state.chosenMessage);
  const { chosenMessageUserFrom: userFrom } = useTypedSelector(state => state.chosenMessage);

  //STATE
  const [userFromState, setUserFromState] = useState(userFrom);

  //FUNCTIONS
  const openModalWindowNoMessage = () => {
    setTextModal('Choose a message to delete');
    setIsOpenModal(true);
  };

  const openModalWindowNotYourMessage = () => {
    setTextModal('Choose your message to delete');
    setIsOpenModal(true);
  };

  const removeMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setUserFromState(userFrom);
    if (userFrom === userOwner || userFrom === null && id) {
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
    <button className={style.contextMenu} style={{ top: `${clientY}px`, left: `${clientX}px` }} onClick={removeMessage} >
      Remove message
    </button>
  );
};
export default ContextMenu;