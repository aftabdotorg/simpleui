import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
    <nav>
      <h1>NiBytes</h1>
      <main>
        <HashLink to={'/#home'}>Home</HashLink>
        <Link to={'/services'}>Services</Link>
        <HashLink to={'/#about'}>About</HashLink>
        <HashLink to={'/#brands'}>Brands</HashLink>
        <Link to={'/contact'}>Contact</Link>
      </main>
    </nav>
  );
};

export default Header;
