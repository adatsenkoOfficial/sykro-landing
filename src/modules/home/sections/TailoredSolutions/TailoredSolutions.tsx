import React from 'react';
import './TailoredSolutions.scss';

const TailoredSolutions = () => {
  return (
    <section className="tailored-section">
      <div className="tailored-solutions-content">
        <div className="tailored-title-wrapper">
          <p className="step-number">5 / 5</p>
          <h2 className="main-title">And one more thing...</h2>
          <p className="intro-text">
            Businesses often ask for AI that adapts to their specific needs. But what if your requirements are too unique for presets or templates?
            At <span>SynkronyAI</span>, we’re prepared for that. Whether it’s a deeply integrated solution, or an experimental architecture tailored to your workflow — we’ll work with you individually, from the ground up.
          </p>
        </div>
        
        <div className="highlight-banner">
          <h3>
            <span className="fade-text">YES, it’s complex...</span>
            <span className="solid-text">but we build exactly what you need</span>
          </h3>
        </div>
        
        <div className="conclusion-text">
          <p>
            Because we know how hard it is to find tech partners who think like builders. That’s why our team dives deep into your problem space,
            develops around your logic — not the other way around — and stays with you to evolve your product over time.
          </p>
          <p>
            Whether it’s long-term support, R&amp;D projects, or full integration into enterprise workflows, SynkronyAI offers personalized AI deployments
            that scale with your ambition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TailoredSolutions;
