import React from 'react';
import style from './Sidebar.module.scss';
import SidebarMessage from '../SidebarMessage/SidebarMessage';


const Sidebar = () => {

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
       <SidebarMessage/>
       <SidebarMessage/>
       <SidebarMessage/>
       <SidebarMessage/>
      


     </div>

   </div>
 );
};
export default Sidebar;