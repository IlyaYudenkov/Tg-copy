import React, { FC } from 'react';
import style from './Sidebar.module.scss';
import SidebarMain from '../SidebarMain/SidebarMain';
import SidebarHeader from '../SidebarHeader/SidebarHeader';

interface ISidebar{
  isOpenAsideBar: boolean,
  setIsOpenAsideBar: (isOpenAsideBar: boolean) => void
}

const Sidebar: FC<ISidebar> = ({isOpenAsideBar , setIsOpenAsideBar}) => {

  return (
    <div className={style.sidebar}>
      <SidebarHeader isOpenAsideBar={isOpenAsideBar} setIsOpenAsideBar={setIsOpenAsideBar}/>
      <SidebarMain/>
    </div>
  );
};
export default Sidebar;