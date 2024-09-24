import React from 'react';
import { HeaderProps } from '../types'; // Import the HeaderProps type
import './Header.css';

const Header: React.FC<HeaderProps> = ({ logo, companyName }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <h1>{companyName}</h1>
    </header>
  );
};

export default Header;
