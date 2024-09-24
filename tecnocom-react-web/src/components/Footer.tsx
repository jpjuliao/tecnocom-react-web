import React from 'react';
import { FooterProps } from '../types'; // Import the FooterProps type
import './Footer.css';

const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return (
    <footer className="footer">
      <p>{copyright}</p>
    </footer>
  );
};

export default Footer;
