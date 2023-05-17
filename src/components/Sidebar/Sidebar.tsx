import React, {FC} from 'react';
import style from './Sidebar.module.scss';
import SidebarMessage from '../SidebarMessage/SidebarMessage';

interface SidebarProps{
  messageId: string
}

interface IChats{
  id: number,
  userFrom: number,
  userTo: number,
  text: string,
  createdAt: string
}


const Sidebar:FC<SidebarProps> = () => {


 return (
   <div className={style.sidebar}>
     <div className={style.sidebar__header}>
       <div className={style.header__burger}>
       </div>
       <div className={style.header__search}>
         <input type="text" placeholder='Search'/>
       </div>
     </div>
     <div className={style.sidebar__main}>
       <SidebarMessage userFrom={0} userTo={0} text={''} time={''}/>
       <SidebarMessage userFrom={0} userTo={0} text={''} time={''}/>
       <SidebarMessage userFrom={0} userTo={0} text={''} time={''}/>
       <SidebarMessage userFrom={0} userTo={0} text={''} time={''}/>

     </div>

   </div>
 );
};
export default Sidebar;