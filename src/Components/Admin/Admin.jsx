import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../Admin/imgs/logo.png'
import home from '../Admin/imgs/home.png'
import users from '../Admin/imgs/2users.png'
import univer from '../Admin/imgs/univer.png'
import back from '../Admin/imgs/logout.png'
import "../Admin/AdminBosh/AdBosh.css"



function Admin() {
  const [activeLink, setActiveLink] = useState('/admin')

  const LinkOnClick = (path) => {
    setActiveLink(path)
  }

  return (
    <>
      <div className="ad_page container">
        <div className="sidebar">
          <p><img src={logo} className='educat' alt="" /><span>Education</span></p>
          <div className="links">
            <Link
              className={`ad_side_link ${activeLink === '/admin' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/admin')}
              to='/admin'
            >
              <img src={home} alt="" /><span>Главное</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/Admin/universitet' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/Admin/universitet')}
              to='/Admin/universitet'
            >
              <img src={univer} alt="" /><span>Университеты</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/Admin/student' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/Admin/student')}
              to='/Admin/student'
            >
              <img src={users} alt="" /><span>Студенты</span>
            </Link>
            <Link
              className={`ad_side_link ${activeLink === '/login' ? 'active' : ''}`}
              onClick={() => LinkOnClick('/login')}
              to='/'
            >
              <img src={back} alt="" /><span>Выйти</span>
            </Link>

          </div>
        </div>
        <Outlet></Outlet>
      </div>
      

    </>




  )
}

export default Admin
