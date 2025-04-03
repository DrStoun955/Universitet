import { useState } from 'react';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import logo from '../Admin/imgs/logo.png'
import users from '../Admin/imgs/2users.png'
import univer from '../Admin/imgs/univer.png'
import back from '../Admin/imgs/logout.png'
import docu from '../Student/images/Document.png';
import Profile from '../Student/images/Profile.png';

const Student = () => {
  const [activeLink, setActiveLink] = useState('/admin');
  const location = useLocation();

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <div className="ad_page container">
        <div className="sidebar">
          <p>
            <img src={logo} className="educat" alt="Education Logo" />
            <span>Education</span>
          </p>
          <div className="links">
            <Link
              className={`ad_side_link ${activeLink === '/student' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/student')}
              to="/student"
            >
              <img src={Profile} alt="Profile Icon" />
              <span>Профиль</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/Student/universitet' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/Student/universitet')}
              to="/Student/universitet"
            >
              <img src={univer} alt="University Icon" />
              <span>Университеты</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/Student/Meneg' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/Student/Meneg')}
              to="/Student/Meneg"
            >
              <img src={users} alt="Users Icon" />
              <span>Персональный менеджер</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/Student/shart' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/Student/shart')}
              to="/Student/shart"
            >
              <img src={docu} alt="Document Icon" />
              <span>E-Договор</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/' ? 'active' : ''}`}
              onClick={() => handleLinkClick('/')}
              to="/"
            >
              <img src={back} alt="Logout Icon" />
              <span>Выйти</span>
            </Link>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Student;
