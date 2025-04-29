import React, { useEffect, useState } from 'react';
import './Welcome.scss';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  const [accepted, setAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const stored = localStorage.getItem('welcomeAccepted');
    if (stored === 'true') {
      onNext(); // skip immediately
    } else {
      setIsLoading(false); // show component
    }
  }, [onNext]);
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccepted(e.target.checked);
  };
  
  const handleContinue = () => {
    localStorage.setItem('welcomeAccepted', 'true');
    onNext();
  };
  
  if (isLoading) return null;
  
  return (
    <div className="welcome-step">
      <h2>Welcome to SynkroAI Configurator</h2>
      <p>Please confirm you're ready to begin:</p>
      
      <label className="welcome-checkbox">
        <input
          type="checkbox"
          checked={accepted}
          onChange={handleCheckboxChange}
        />
        I understand this is a prototype and I’m ready to proceed.
      </label>
      
      <button onClick={handleContinue} disabled={!accepted}>
        Continue
      </button>
    </div>
  );
};

export default Welcome;
