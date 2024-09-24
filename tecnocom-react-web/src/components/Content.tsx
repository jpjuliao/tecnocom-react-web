import React from 'react';
import { ContentProps } from '../types'; // Import the ContentProps type
import './Content.css';

const Content: React.FC<ContentProps> = ({ description, websiteLink, whatsappLink, socialLinks }) => {
  return (
    <main className="content">
      <p>{description}</p>
      <p>
        Visit our website:{" "}
        <a href={websiteLink.url} target="_blank" rel="noopener noreferrer">
          {websiteLink.text}
        </a>
      </p>
      <p>
        Contact us on WhatsApp:{" "}
        <a href={whatsappLink.url} target="_blank" rel="noopener noreferrer">
          {whatsappLink.text}
        </a>
      </p>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          // Use a fragment to wrap each social link and separator
          <React.Fragment key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
            {/* Conditionally render the separator only if it's not the last link */}
            {index < socialLinks.length - 1 && ' | '}
          </React.Fragment>
        ))}
      </div>
    </main>
  );
};

export default Content;
