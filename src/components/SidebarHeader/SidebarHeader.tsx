import React from 'react';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import style from '../Sidebar/Sidebar.module.scss';

const SidebarHeader = () => {

 return (
   <div className={style.sidebar__header}>
     <div className={style.header__searchIcon}></div>
     <HeaderSearch />
   </div>
 );
};
export default SidebarHeader;