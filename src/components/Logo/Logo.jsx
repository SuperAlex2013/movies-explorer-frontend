import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from 'images/header_logo.svg';
import './Logo.css';

const LogoComponent = () => {
  return (
    <Link to="/" className="page__link logo">
      <img src={logoImage} alt="Logo" width="38" height="38" />
    </Link>
  );
};

export default LogoComponent;
