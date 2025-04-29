import React from "react";
import './Roadmap.scss';

const Roadmap: React.FC = () => (
  <section className="roadmap-section">
    <h2 className="section-title">Built for now. Designed for the future.</h2>
    
    <p className="roadmap-description">
      We’re not just deploying today’s stack.
      We’re building SynkroAI to grow alongside the AI infrastructure of tomorrow.
    </p>
    
    <ul className="roadmap-list">
      <li>✅ Playground & Free Tier launch (done)</li>
      <li>✅ Configurator V1 with AI agent</li>
      <li>🔜 Public API & Blueprint SDK</li>
      <li>🔜 Agent orchestration interface</li>
      <li>🔜 Automated security hardening profiles</li>
      <li>🔜 Model hosting optimizations via spot GPU strategies</li>
    </ul>
    
    <p className="roadmap-note">
      This isn’t a sprint — it’s a mission.
      And we’re engineering every stage with precision.
    </p>
  </section>
);

export default Roadmap;
