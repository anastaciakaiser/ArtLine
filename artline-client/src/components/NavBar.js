import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.png';
import account_avatar_mini from '../assets/account_avatar_mini.png';
import './NavBar.css'; 

function NavBar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    setLoggedIn(true);
  };

  return (
    <nav className='nav'>
      <nav className='menu'>
        <Link to='/' className='site-logo'>
          <img src={logo} alt="site logo" />
        </Link>
        <ul className='menu-element'>
          <CustomLink to="/genres">Genres</CustomLink>
          <CustomLink to="/asian">Asian</CustomLink>
          <CustomLink to="/european">European</CustomLink>
          <CustomLink to="/popular">Popular</CustomLink>
          <CustomLink to="/new">New</CustomLink>
          <CustomLink to="/arts">Arts</CustomLink>
          <CustomLink to="/support">Support</CustomLink>
          <CustomLink to="/about">About</CustomLink>

          <Link to='/' className='search-icon'>
            <img src={search_icon} alt="search icon" />
          </Link>

          {isLoggedIn ? (
            <Link to='/' className='account-avatar-mini'>
              <img src={account_avatar_mini} alt="account avatar mini" />
            </Link>
          ) : (
            <CustomLink to="/login" className="login-link">Log In</CustomLink>
          )}

        </ul>
      </nav>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
