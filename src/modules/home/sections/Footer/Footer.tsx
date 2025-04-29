import React from "react";
import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <span className="footer-logo">SynkroAI</span>
        <p className="footer-tagline">Automating AI, scaling trust, securing the future.</p>
      </div>
      
      <nav className="footer-nav">
        <a href="/">Home</a>
        <a href="/configurator">Configurator</a>
        <a href="#">Docs</a>
        <a href="#" onClick={() => {/* open ContactUsModal */}}>Contact</a>
      </nav>
      
      <div className="footer-contact">
        <p>contact@synkro.ai</p>
        <p>+38 (093) XXX XX XX</p>
        <p>© 2025 SynkroAI. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
