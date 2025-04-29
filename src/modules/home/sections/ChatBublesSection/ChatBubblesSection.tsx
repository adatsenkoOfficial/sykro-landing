// ChatBubblesSection component | ☆
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ChatBubblesSection.scss';

const ChatBubblesSection: React.FC = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const x = [
    useTransform(scrollYProgress, [0, 1], [0, -350]),
    useTransform(scrollYProgress, [0, 1], [0, 350]),
    useTransform(scrollYProgress, [0, 1], [0, -300]),
    useTransform(scrollYProgress, [0, 1], [0, 350]),
    useTransform(scrollYProgress, [0, 1], [0, -180]),
  ];
  
  const y = [
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    useTransform(scrollYProgress, [0, 1], [0, -220]),
    useTransform(scrollYProgress, [0, 1], [0, 260]),
    useTransform(scrollYProgress, [0, 1], [0, 230]),
    useTransform(scrollYProgress, [0, 1], [0, 140]),
  ];
  
  const rotate = [
    useTransform(scrollYProgress, [0, 1], [0, -30]),
    useTransform(scrollYProgress, [0, 1], [0, 25]),
    useTransform(scrollYProgress, [0, 1], [0, 30]),
    useTransform(scrollYProgress, [0, 1], [0, -35]),
    useTransform(scrollYProgress, [0, 1], [0, 60]),
  ];
  
  const bubbleVariants = [
    "AI integration is too complex!",
    "It's going to be very expensive!",
    "No way it can scale easily!",
    "Security concerns are endless!",
    "Vendor lock-in is inevitable!"
  ].map((text, index) => ({
    text,
    style: {
      x: x[index],
      y: y[index],
      rotate: rotate[index],
    },
  }));
  
  return (
    <section className="chat-bubbles-section" ref={sectionRef}>
      <div className="container">
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          In today's fast-paced world, businesses face significant barriers to adopting artificial intelligence—
          complex integrations, high costs, scalability challenges, and security vulnerabilities. At <span className="highlight">SynkronyAI</span>,
          we revolutionize AI deployment by eliminating these barriers. Our mission is clear: to simplify the AI journey
          for every business by providing an intuitive, cost-effective, and secure deployment platform.
        </motion.p>
        
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          We empower businesses to harness the transformative power of AI effortlessly, ensuring seamless
          integration, exceptional scalability, and unparalleled security. With <span className="highlight">SynkronyAI</span>,
          you can confidently embrace innovation, staying ahead of the curve and redefining your industry's potential.
        </motion.p>
        
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          WE LOOK<br /> THROUGH<br /> PROBLEMS!
        </motion.h2>
        
        {bubbleVariants.map((bubble, index) => (
          <motion.div
            key={index}
            className={`chat-bubble bubble-${index}`}
            style={{
              ...bubble.style,
              left: '35%',
              transform: 'translateX(-50%)',
            }}
          >
            {bubble.text}
          </motion.div>
        ))}
        
        <motion.p
          className="section-subtitle"
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 1.3, duration: 1 }}
        >
          We are <span className="highlight">SynkronyAI</span> and we make AI deployment easy, scalable, and secure—helping your business stay ahead.
        </motion.p>
      </div>
    </section>
  );
};

export default ChatBubblesSection;
