import React from 'react';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import cls from '../Sidebar/Sidebar.module.scss';
import BurgerMenuIcon from './burger-menu.svg';

const SidebarHeader = () => {

 return (
   <div className={cls.sidebar__header}>
     <div className={cls.header__searchIcon}>
       <img src={BurgerMenuIcon} alt="Burger Menu Icon" />
     </div>
     <HeaderSearch />
   </div>
 );
};
export default SidebarHeader;