import React, {useEffect} from 'react';
import './Home.scss';
import FirstScreen from "./sections/FirstScreen/FirstScreen";
import ChatBubblesSection from "./sections/ChatBublesSection/ChatBubblesSection";
import BulletPointCarousel from "./sections/BulletPointCarusel/BulletPointCarousel";
import TailoredSolutions from "./sections/TailoredSolutions/TailoredSolutions";
import Roadmap from "./sections/Roadmap/Roadmap";
import AboutUs from "./sections/AboutUs/AboutUs";
import Pricing from "./sections/Pricing/Pricing";
import ContactUsOrGetDemo from "./sections/ContactUsOrGetDemo/ContactUsOrGetDemo";
import Footer from "./sections/Footer/Footer";

const Home: React.FC = () => {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    
    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      glow.remove();
    };
  }, []);
  return (
    <div className="landing-page">
      <div className="grain" />
      
      {/*<header className="landing-header">*/}
      {/*  <nav>*/}
      {/*    /!* Навигация, ссылки *!/*/}
      {/*  </nav>*/}
      {/*</header>*/}
      
      <main>
        <FirstScreen/>
        
        <section className="chat-section">
          <ChatBubblesSection/>
        </section>
        
        <section className="scroll-slider-section">
          <BulletPointCarousel/>
        </section>
        
        <section className="individual-section">
          <TailoredSolutions/>
        </section>
        
        <section className="pricing-section">
          <Pricing />
        </section>
        
        <section className="aboutus-section">
          <AboutUs />
        </section>
        
        <section className="contact-section">
          <ContactUsOrGetDemo />
        </section>
        
        <section className="roadmap-section">
          <Roadmap/>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
