import React from 'react';
import FooterStyle from './FooterStyle'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <FooterStyle>
      <Logo id='footer-img'/>
      {/* <img id='footer-img' src={footerImg} alt='footer logo' /> */}
      <div className="info-container">
        <p className="info-email">xxx@gmail.com</p>
        <p className="info-phone">+54 9 11 9999 9999</p>
      </div>
    </FooterStyle>
  )
}

export default Footer;
