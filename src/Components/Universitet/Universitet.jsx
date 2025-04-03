import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import users2 from './images/2users.png';
import users3 from './images/3users.png';
import docs from './images/docs.png';
import home from './images/home.png';
import logo from './images/logo.png';
import logout from './images/logout.png';

const Universitet = () => {
  const [activeLink, setActiveLink] = useState('/universty');

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className='ab-page1'>
      <div className='side-bar'>
        <p><img src={logo} alt="" />Education</p>
        <div className="ablinks">
          <Link
            className={`un_side_link ${activeLink === '/universitet' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/universitet')}
            to='/universitet'
          >
            <img src={home} alt="" />Главное
          </Link>
          <Link
            className={`un_side_link ${activeLink === '/Universitet/student' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/Universitet/student')}
            to='/Universitet/student'
          >
            <img src={users3} alt="" />Студенты
          </Link>
          <Link
            className={`un_side_link ${activeLink === '/Universitet/ovoz' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/Universitet/ovoz')}
            to='/Universitet/ovoz'
          >
            <img src={users2} alt="" />Инвойсы
          </Link>
          <Link
            className={`un_side_link ${activeLink === '/Universitet/dan' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/Universitet/dan')}
            to='/Universitet/dan'
          >
            <img src={docs} alt="" />Данные
          </Link>
          <a href='/login' className='un_side_link'>
            <img src={logout} alt="" />Выйти
          </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Universitet;