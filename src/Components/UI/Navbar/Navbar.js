import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logOut = () => {
    setIsAuth(false)
    localStorage.setItem('auth', 'false')
  }

  return ( 
    <div className="navbar">
      {isAuth ? <MyButton onClick={logOut}>Выйти</MyButton> : null}
        <div className="navbar__links">
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </div>
   );
}
 
export default Navbar;