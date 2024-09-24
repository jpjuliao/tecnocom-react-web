import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';
import { HeaderProps, ContentProps, FooterProps } from './types';

function App() {
  const [headerData, setHeaderData] = useState<HeaderProps>({
    logo: "/logo.png",
    companyName: "My Company",
  });

  const [contentData, setContentData] = useState<ContentProps>({
    description: "Welcome to My Company! We offer the best services in the industry.",
    websiteLink: {
      url: "https://www.example.com",
      text: "www.example.com",
    },
    whatsappLink: {
      url: "https://wa.me/1234567890",
      text: "Chat Now",
    },
    socialLinks: [
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
    ],
  });

  const [footerData, setFooterData] = useState<FooterProps>({
    copyright: `© ${new Date().getFullYear()} My Company. All rights reserved.`,
  });

  return (
    <div className="App">
      <Header logo={headerData.logo} companyName={headerData.companyName} />
      <Content 
        description={contentData.description} 
        websiteLink={contentData.websiteLink} 
        whatsappLink={contentData.whatsappLink} 
        socialLinks={contentData.socialLinks} 
      />
      <Footer copyright={footerData.copyright} />
    </div>
  );
}

export default App;
