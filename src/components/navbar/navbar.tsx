import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

interface NavbarProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth }) => {
  const handleAuthClick = () => {
    setIsAuth(!isAuth);
  };

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Main</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/university">University</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="auth-button-container">
        <button onClick={handleAuthClick}>
          {isAuth ? 'Выйти' : 'Войти'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
