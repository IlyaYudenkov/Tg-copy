import React, { FC } from 'react';
import style from './Sidebar.module.scss';
import SidebarMain from '../SidebarMain/SidebarMain';
import SidebarHeader from '../SidebarHeader/SidebarHeader';


const Sidebar: FC = () => {

  return (
    <div className={style.sidebar}>
      <SidebarHeader />
      <SidebarMain/>
    </div>
  );
};
export default Sidebar;