import { useDispatch } from 'react-redux';
import style from '../Sidebar/Sidebar.module.scss';
import React, { useState, FC, useEffect } from 'react';
import { searchChats } from '../../store/reducers/searchChatsReducer';

const HeaderSearch: FC = () => {

  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchChats(searchValue));
  }, [searchValue]);


  return (
    <div className={style.header__search}>
      <input type="text" placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  );
};
export default HeaderSearch;