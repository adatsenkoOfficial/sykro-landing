// modules/home/sections/Pricing/Pricing.tsx

import React from "react";
import './Pricing.scss';

const Pricing: React.FC = () => (
  <>
    <h2 className="section-title">Simple starts. Infinite scale.</h2>
    
    <p className="pricing-intro">
      We believe your AI journey shouldn't be gated by pricing complexity.
      That’s why our structure is clean:
    </p>
    
    <ul className="pricing-list">
      <li><strong>Free Tier</strong>: Get started with one deployment, shared resources, and a 1-week playground.</li>
      <li><strong>Standard</strong>: 10+ models, multiple clusters, and control over infra — flexible and scalable.</li>
      <li><strong>Enterprise</strong>: Custom everything — dedicated infra, private clusters, data residency, and custom apps built just for you.</li>
    </ul>
    
    <p className="pricing-note">
      Every tier is backed by our promise: <strong>no vendor lock-in, full transparency, and real-time control.</strong>
      If you're building serious AI — we’re your launchpad.
    </p>
  </>
);

export default Pricing;
