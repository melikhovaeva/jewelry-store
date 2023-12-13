import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { AppRoute } from '../const';
import styled from 'styled-components';
import { Button } from 'antd';

interface NavbarProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

interface StyledWrapperProps {
  width?: string;
}


const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth }) => {
  const handleAuthClick = () => {
    setIsAuth(!isAuth);
  };

  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">('light');

  const changeTheme = () => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', newTheme)
      setCurrentTheme(newTheme);
  }

  const NavbarWrapper = styled.div<StyledWrapperProps>`
    max-width: ${({width}) => width ?? '1250px'};
    margin: 0 auto;
  `

  const ThemeButton = styled(Button)`
  && {
    background-color: var(--white);
    color: var(--black);
    border:1px solid var(--black);
  }

  &&:not(.ant-btn-disabled):hover {
    background-color: var(--accent);
    color: var(--white);
    border-color: var(--accent);
  }

  html[data-theme=light] {
    && {
      background-color: var(--white);
      color: var(--black);
      border:1px solid var(--black);
    }

    &&:not(.ant-btn-disabled):hover {
      background-color: var(--accent);
      color: var(--white);
      border:1px solid var(--accent);
    }
  }
  
  html[data-theme=dark] {
    && {
      background-color: var(--black-dark);
      color: var(--white-dark);
      border:1px solid var(--white-dark);
    }

    &&:not(.ant-btn-disabled):hover {
      background-color: var(--accent-dark);
      color: var(--white-dark);
      border: 1px solid var(--accent-dark);
    }
  }
  `


  return (
    <NavbarWrapper>
      <nav className="nav">
        <Link className="nav__logo logo" to={AppRoute.Root}>Gleam<span className="logo__text">Craft</span></Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to={AppRoute.Catalog}>Catalog</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={AppRoute.Blog}>Blog</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={AppRoute.Story}>Story</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to={AppRoute.University}>University</Link>
          </li>
        </ul>
        <div className="nav__container">
          <button className="nav__button" onClick={handleAuthClick}>
            {isAuth ? 'Выйти' : 'Войти'}
          </button>
          <ThemeButton onClick={() => changeTheme()}>
            Switch Theme
          </ThemeButton>
        </div>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
