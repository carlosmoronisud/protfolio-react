import React from 'react';
import './Footer.css';
import githubIcon from '../../assets/images/git.png';
import linkedinIcon from '../../assets/images/in.png';
import cvIcon from '../../assets/images/pdf.png';

const Footer = () => {
  return (
    <footer id='contact' className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Carlos Moroni Garcia</h3>
          <p>Desenvolvedor Fullstack Jr</p>
          <p>Pesquisador Jr</p>
          <p>Designer Jr</p>
        </div>
        
        <div className="footer-social">
          <a 
            href="https://github.com/carlosmoronisud" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a 
            href="https://www.linkedin.com/in/carlosmoronigarcia" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a 
            href="https://drive.google.com/file/d/1NLf638HKMwecBZCgctCeHwaHUdHBfWdF/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
          >
            <img src={cvIcon} alt="Currículo" />
          </a>            
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Carlos Moroni Garcia. Todos os direitos reservados.<br />carlosmoronisud@gmail.com</p>
        <p className="footer-message">Construído com ♥ e muito código</p>
      </div>
    </footer>
  );
};

export default Footer;