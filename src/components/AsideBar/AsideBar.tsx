import React, { FC } from 'react';
import cls from './AsideBar.module.scss';
import Button from '../../helpers/UI/Button';
import { useDispatch } from 'react-redux';
import { setNotAuthId } from '../../store/reducers/authReducer';

interface IAsideBar {
    isOpenAsideBar: boolean,
    setIsOpenAsideBar: (isOpenAsideBar: boolean) => void,
    userOwnerName: string
}

const AsideBar: FC<IAsideBar> = ({ isOpenAsideBar, setIsOpenAsideBar, userOwnerName }) => {


    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(setNotAuthId(0));
        setIsOpenAsideBar(false);
    };

    return (
      <div className={`${cls.asideBarBackground} ${isOpenAsideBar ? `${cls.active}` : ''}`} onClick={() => setIsOpenAsideBar(false)}>
        <div className={`${cls.asideBar} ${isOpenAsideBar ? `${cls.asideBarActive}` : ''}`} onClick={(e) => e.stopPropagation()}>
          <div className={cls.asideBarContent}>
            <div className={cls.info}>
              <p>
                You`re logged in as <br/>
                <span className={cls.userOwnerName}>
                  {userOwnerName} 
                </span>
              </p>
            </div>
            <div className={cls.button}>
              <Button text='LogOut' onClick={logOut} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default AsideBar;