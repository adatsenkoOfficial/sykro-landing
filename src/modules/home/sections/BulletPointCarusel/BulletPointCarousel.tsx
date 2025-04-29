// BulletPointCarousel component | ☆
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import './BulletPointCarousel.scss';
import Step1 from './stepsFeatures/Step1';
import Step2 from './stepsFeatures/Step2';
import Step3 from './stepsFeatures/Step3';
import Step4 from './stepsFeatures/Step4';
import Step5 from './stepsFeatures/Step5';

const TOTAL_STEPS = 5;

const stepTitles = [
  'Simple Integration',
  'Scalability and Flexibility',
  'Cutting-Edge Technologies',
  'Security and Reliability',
  'Cost Efficiency',
];

const stepContents = [
  {
    description:
      "Our platform offers a simple and seamless integration with your business processes. Choose from a variety of pre-configured deployment options designed for quick and efficient implementation, or create your own tailored configuration that perfectly fits your operational needs. Additionally, our state-of-the-art AI assistant provides step-by-step guidance, explaining all technical details in plain language so that even non-technical users can confidently set up and manage their instances. This user-friendly approach reduces complexity, accelerates time-to-market, and ensures you get up and running with minimal hassle.",
    highlight:
      "Effortless deployment through pre-built presets and interactive AI support that demystifies complex technical processes, ensuring smooth and reliable integration every time.",
  },
  {
    description:
      "SynkroAI is engineered to provide unmatched scalability and flexibility for businesses of all sizes. Our modular architecture ensures that as your business grows, the platform can seamlessly expand to accommodate increased workloads and evolving demands. With dynamic resource allocation and support for hybrid deployment models—be it cloud, on-premises, or a combination—you can scale your AI infrastructure without interruption. Additionally, extensive customization options empower you to adapt quickly to market changes while maintaining optimal performance and reliability.",
    highlight:
      "Unprecedented scalability with a modular, flexible platform that adapts effortlessly to your growing business needs and evolving technical demands, providing a future-proof solution.",
  },
  {
    description:
      "SynkroAI leverages the latest innovations in AI and cloud computing to deliver a platform that is both robust and future-proof. Our solution integrates state-of-the-art technologies and automation tools to streamline the deployment and management of AI workloads. By continuously updating our technology stack and incorporating cutting-edge research, we ensure that your AI infrastructure stays ahead of the curve. This commitment to innovation boosts performance, minimizes risk, and enables you to capitalize on emerging opportunities in a rapidly evolving digital landscape.",
    highlight:
      "Harness advanced AI and cloud innovations with a solution that continuously evolves, ensuring your infrastructure remains at the forefront of technological progress through constant updates and automation.",
  },
  {
    description:
      "Security is at the heart of SynkroAI. We implement enterprise-grade security protocols, including comprehensive data governance, rigorous compliance measures, and customizable security controls to safeguard your sensitive information. Our platform is built to meet the highest standards of reliability and integrity, ensuring uninterrupted service and robust protection against potential threats. With a strong focus on both physical and cyber security, SynkroAI creates a secure environment that minimizes risks and builds lasting trust with your clients, allowing you to focus on innovation.",
    highlight:
      "Enterprise-level security featuring full data governance and custom controls that deliver robust protection and unmatched reliability, safeguarding your critical operations at every level.",
  },
  {
    description:
      "SynkroAI offers a cost-efficient solution that optimizes resource usage without compromising on performance. Our platform dynamically adjusts resource allocation based on real-time workload demands, ensuring you pay only for what you use. With flexible pricing models and automated workload distribution, significant savings are achieved while maintaining high performance. Moreover, our advanced optimization tools continuously monitor and fine-tune system operations, reducing overhead and streamlining processes for maximum efficiency and lower operational costs.",
    highlight:
      "Achieve exceptional cost efficiency through automated resource management and dynamic optimization, resulting in lower operational expenses and enhanced overall system performance.",
  },
];

const stepFeatures = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />];

const BulletPointCarousel: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  
  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    const stepFloat = latest * TOTAL_STEPS;
    const step = Math.floor(stepFloat);
    const stepProgress = (stepFloat - step) * 100;
    
    setCurrentStep(Math.min(step, TOTAL_STEPS - 1));
    setProgress(Math.min(stepProgress, 100));
  });
  
  useEffect(() => {
    const setHeight = () => {
      if (sectionRef.current) {
        sectionRef.current.style.height = `${window.innerHeight * TOTAL_STEPS}px`;
      }
    };
    setHeight();
    window.addEventListener('resize', setHeight);
    return () => window.removeEventListener('resize', setHeight);
  }, []);
  
  return (
    <section className="bullet-carousel-section" ref={sectionRef}>
      <div className="sticky-container" ref={stickyRef}>
        <div className="carousel-content-container">
          <div>
            <div className="titles-wrapper">
              <div className="scroll-container">
                {stepTitles.map((title, index) => (
                  <motion.h2
                    key={index}
                    animate={{ y: `-${currentStep * 100}%` }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="carousel-main-title"
                  >
                    {title}
                  </motion.h2>
                ))}
              </div>
            </div>
            
            <div className="contents-wrapper">
              <div className="scroll-container">
                {stepContents.map((content, index) => (
                  <motion.p
                    key={index}
                    animate={{ y: `-${currentStep * 100}%` }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="carousel-step-content"
                  >
                    {content.description}
                    <br />
                    <br />
                    <strong>{content.highlight}</strong>
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
          <div>
            {stepFeatures.map((item, index) => (
              <motion.div
                key={index}
                animate={{ y: `-${currentStep * 100}%` }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="carousel-step-feature"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${currentStep < 4 ? progress : progress || '100'}%` }} />
        </div>
        
        <div className="steps-counter">
          <motion.span
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {currentStep + 1}
          </motion.span>
          &nbsp;/&nbsp;{TOTAL_STEPS}
        </div>
      </div>
    </section>
  );
};

export default BulletPointCarousel;
