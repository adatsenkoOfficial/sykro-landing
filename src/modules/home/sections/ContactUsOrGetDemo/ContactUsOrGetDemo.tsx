import React, {useCallback, useRef, useState} from "react";
import './ContactUsOrGetDemo.scss';
import {useAnimation} from "framer-motion";
import {useNavigate} from "react-router-dom";
import ContactUsModal from "../../../../components/ContactUsModal/ContactUsModal";

const ContactUsOrGetDemo: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleGetDemo = useCallback(() => navigate('/configurator'), [navigate]);
  const handleGetContacts = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <section className="contactus-section">
      <div className="contactus-inner">
        <h2 className="section-title gradient-text">Let’s build your AI story.</h2>
        
        <p className="contactus-description">
          Whether you’re just exploring or already knee-deep in infrastructure,
          we’d love to hear from you.
        </p>
        
        <p className="contactus-description">
          Need a custom blueprint?<br />
          Want to try the configurator?<br />
          Or just want to see how SynkroAI could power your use case?
        </p>
        
        <p className="contactus-cta">
          <span>✨</span> <strong>Reach out. Let’s talk real systems.</strong><br />
          <span>🚀</span> <strong>Book a guided demo and build your flow live.</strong>
        </p>
        
        <div className="contactus-buttons">
          <button className="btn btn-primary" onClick={handleGetDemo}>Get Demo</button>
          <button className="btn btn-secondary" onClick={handleGetContacts}>Get Contacts</button>
        </div>
      </div>
      {isModalOpen && <ContactUsModal open={isModalOpen} onClose={closeModal} />}
    </section>
  );
}

export default ContactUsOrGetDemo;
