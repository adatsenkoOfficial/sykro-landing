// modules/home/sections/AboutUs/AboutUs.tsx

import React from "react";
import './AboutUs.scss';

const AboutUs: React.FC = () => (
  <>
    <h2 className="section-title">We don't just build tech. We build with intention.</h2>
    <p className="aboutus-description">
      We’re engineers, yes — but also designers, strategists, and problem-hunters.
      Our team has helped deploy infrastructure for everything from R&D prototypes to full-scale government workloads.
    </p>
    <p className="aboutus-description">
      We’ve worked inside the industry long enough to know where it breaks — and how to build what lasts.
    </p>
    <p className="aboutus-description">
      We created SynkroAI because the AI deployment world was missing something:
      <strong> a solution built not for demos, but for decisions.</strong>
    </p>
    <p className="aboutus-description">
      With us, you're not buying hype. You're partnering with a crew that builds real things — fast, secure, and with care.
    </p>
  </>
);

export default AboutUs;
