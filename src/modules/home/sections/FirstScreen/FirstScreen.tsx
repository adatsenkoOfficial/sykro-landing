import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import ContactUsModal from '../../../../components/ContactUsModal/ContactUsModal';
import './FirstScreen.scss';

const starVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0.8, 1, 0.5, 1],
    scale: [0.5, 1.2, 1],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  },
};

const gradientGlowColors = [
  '#ff742a', '#7928ca', '#0070f3', '#00c6ff',
  '#ff742a', '#7928ca', '#0070f3', '#00c6ff'
];

const FirstScreen: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lettersRef = useRef<Array<HTMLSpanElement | null>>([]);
  const controls = useAnimation();
  
  const handleGetDemo = useCallback(() => navigate('/configurator'), [navigate]);
  const handleGetContacts = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  
  const letters = ['s', 'y', 'n', 'k', 'r', 'o', 'A', 'I'];
  
  useEffect(() => {
    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      
      const offsetX = (i % 2 === 0 ? -1 : 1) * (120 + i * 10);
      const offsetY = (i % 3 === 0 ? -1 : 1) * (100 + i * 8);
      const rotate = (i % 2 === 0 ? -1 : 1) * (25 + i * 2);
      const glow = gradientGlowColors[i % gradientGlowColors.length];
      
      if (i < lettersRef.current.length - 2) {
        el.style.textShadow = `0 0 18px ${glow}, 0 0 36px ${glow}`;
      }
      
      el.style.transition = 'text-shadow 0.5s ease-out';
      
      controls.start(i2 => {
        if (i2 !== i) return {};
        return {
          opacity: [0, 1, 1, 1, 1],
          x: [offsetX, offsetX * 0.4, -6, 2, 0],
          y: [offsetY, offsetY * 0.3, 6, -2, 0],
          rotate: [rotate, -rotate * 0.15, 4, -2, 0],
          scale: [0.75, 0.9, 1.15, 1.03, 1],
          filter: ['blur(6px)', 'blur(3px)', 'blur(1px)', 'blur(0.4px)', 'blur(0px)'],
          transition: {
            delay: 0.25 + i * 0.1,
            duration: 2.1,
            ease: [0.33, 1.4, 0.6, 1]
          },
        };
      });
      
      setTimeout(() => {
        el.style.textShadow = i >= letters.length - 2
          ? 'unset'
          : '0 0 6px white, 0 0 14px white';
        if (i >= letters.length - 2) {
          el.classList.add('gradient');
          el.style.color = 'transparent';
          el.style.setProperty('background', 'linear-gradient(135deg, #ff742a, #7928ca, #0070f3, #00c6ff)');
          el.style.setProperty('-webkit-background-clip', 'text');
          el.style.setProperty('background-clip', 'text');
          el.style.setProperty('-webkit-text-fill-color', 'transparent');
        } else {
          el.classList.remove('gradient');
          el.style.color = 'white';
          el.style.removeProperty('background');
          el.style.removeProperty('-webkit-background-clip');
          el.style.removeProperty('background-clip');
          el.style.removeProperty('-webkit-text-fill-color');
        }
      }, 2400 + i * 50);
    });
  }, []);
  
  const handleHover = (index: number) => {
    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      
      const isGradient = i >= letters.length - 2;
      
      if (i === index) {
        const glow = gradientGlowColors[i % gradientGlowColors.length];
        el.style.transition = 'all 0.2s ease-out';
        el.style.transform = 'scale(1.22)';
        el.style.filter = 'brightness(1.4)';
        
        if (!isGradient) {
          el.style.textShadow = `0 0 16px ${glow}, 0 0 30px ${glow}`;
        }
      } else if (i === index - 1) {
        el.style.transition = 'all 0.25s ease-out';
        el.style.transform = `scale(1.10) translateX(${i < index ? '-4px' : '4px'})`;
        if (!isGradient) {
          el.style.textShadow = '0 0 6px white';
        }
      } else if (i === index + 1) {
        el.style.transition = 'all 0.25s ease-out';
        el.style.transform = `scale(0.95) translateX(${i < index ? '-4px' : '4px'})`;
        if (!isGradient) {
          el.style.textShadow = '0 0 6px white';
        }
      } else {
        el.style.transform = '';
        el.style.filter = 'brightness(1)';
        
        if (!isGradient) {
          el.style.textShadow = '0 0 6px white, 0 0 14px white';
        }
      }
    });
  };
  
  const clearHover = () => {
    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      
      const isGradient = i >= letters.length - 2;
      
      el.style.transform = '';
      el.style.filter = 'brightness(1)';
      
      if (!isGradient) {
        el.style.textShadow = '0 0 6px white, 0 0 14px white';
      }
      
      if (isGradient) {
        el.classList.add('gradient');
        el.style.color = 'transparent';
        el.style.setProperty('background', 'linear-gradient(135deg, #ff742a, #7928ca, #0070f3, #00c6ff)');
        el.style.setProperty('-webkit-background-clip', 'text');
        el.style.setProperty('background-clip', 'text');
        el.style.setProperty('-webkit-text-fill-color', 'transparent');
      } else {
        el.classList.remove('gradient');
        el.style.color = 'white';
        el.style.removeProperty('background');
        el.style.removeProperty('-webkit-background-clip');
        el.style.removeProperty('background-clip');
        el.style.removeProperty('-webkit-text-fill-color');
      }
    });
  };
  
  return (
    <div className="first-screen" style={{ perspective: '1200px' }}>
      <motion.div className="star-container">
        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            className="star"
            variants={starVariants}
            initial="hidden"
            animate="visible"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              position: 'absolute',
              borderRadius: '50%',
              background: 'white',
              width: '1.5px',
              height: '1.5px',
            }}
          />
        ))}
      </motion.div>
      
      <motion.div
        className="first-screen__content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <div className="logo">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              ref={el => (lettersRef.current[index] = el)}
              className={`logo-letter ${index >= letters.length - 2 ? 'gradient' : ''}`}
              custom={index}
              animate={controls}
              initial={{ opacity: 0 }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={clearHover}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        <motion.p
          className="first-screen__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.2 }}
        >
          Experience the pinnacle of AI deployment automation – tailored for your business, built with precision.
        </motion.p>
        
        <motion.div
          className="first-screen__buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.2 }}
        >
          <button className="btn btn-primary" onClick={handleGetDemo}>Get Demo</button>
          <button className="btn btn-secondary" onClick={handleGetContacts}>Get Contacts</button>
        </motion.div>
      </motion.div>
      
      {isModalOpen && <ContactUsModal open={isModalOpen} onClose={closeModal} />}
    </div>
  );
};

export default FirstScreen;
