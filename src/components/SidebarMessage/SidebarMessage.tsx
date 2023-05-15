import React from 'react';
import style from './SidebarMessage.module.scss';
const SidebarMessage = () => {

  return (
    <div className={style.sidebarMessage}>
      <div className={style.sidebarMessage__avatar}></div>
      <div className={style.sidebarMessage__details}>
        <div className={style.details__top}>
          <div className={style.top__name}>name</div>
          <div className={style.top__time}>time</div>
        </div>
        <div className={style.details__bottom}>
          <div className={style.bottom__text}>text</div>
        </div>
      </div>

    </div>
  );
};
export default SidebarMessage;