import React, { FC } from 'react';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import cls from '../Sidebar/Sidebar.module.scss';
import BurgerMenuIcon from './burger-menu.svg';


interface ISidebarHeader{
  isOpenAsideBar: boolean,
  setIsOpenAsideBar: (isOpenAsideBar: boolean) => void
}


const SidebarHeader:FC<ISidebarHeader> = ({isOpenAsideBar, setIsOpenAsideBar}) => {

 return (
   <div className={cls.sidebar__header}>
     <div className={cls.header__searchIcon} onClick={() => setIsOpenAsideBar(true)}>
       <img src={BurgerMenuIcon} alt="Burger Menu Icon" />
     </div>
     <HeaderSearch />
   </div>
 );
};
export default SidebarHeader;