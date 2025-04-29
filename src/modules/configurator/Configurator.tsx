// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Box, Button, Step, StepLabel, Stepper } from '@mui/material';
import ConfiguratorLayout from './components/ConfiguratorLayout/ConfiguratorLayout';
import ContactUsModal from '../../components/ContactUsModal/ContactUsModal';
import Welcome from './steps/Welcome';
import PresetsSelection from './steps/PresetsSelection';
import UserBusinessInfo from './steps/UserBusinessInfo';
import HardwareSelection from './steps/HardwareSelection';
import ReviewLaunch from './steps/ReviewLaunch';
import { WizardData } from './steps/ReviewLaunch';
import { ConfiguratorData } from '../../types/IConfiguratorData';
import './Configurator.scss';
import presets from './mock/presets';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const SynkroStepConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
    left: -18,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: 'linear-gradient(90deg, #7928ca, #0070f3)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 1,
  },
}));

const steps = ['Welcome', 'Presets', 'Requirements', 'Hardware', 'Review'];

const initialWizardData: WizardData = {
  presets: null,
  general: null,
  hardware: null,
};

const defaultConfigData: ConfiguratorData = {
  step1: {
    presets: presets,
  },
  step2: [
    {
      questionId: 'step2-goal',
      questionType: 'select',
      title: 'What is the primary goal of implementing the LLM Router?',
      shortDescription: 'Select the main objective for using the LLM Router.',
      bigDescription: {
        img: '',
        title: 'Primary Goal',
        description:
          'Understanding your main objective will help us tailor the solution.',
      },
      options: [
        { value: 'cost-optimization', label: 'Cost Optimization' },
        { value: 'response-quality', label: 'Improving Response Quality' },
        { value: 'latency-reduction', label: 'Reducing Latency' },
        { value: 'scalability', label: 'Scaling AI Systems' },
      ],
      defaultValue: 'cost-optimization',
      validation: { required: true },
    },
    {
      questionId: 'step2-request-types',
      questionType: 'checkbox',
      title: 'What types of requests will the LLM Router handle?',
      shortDescription: 'Select all applicable request types.',
      bigDescription: {
        img: '',
        title: 'Request Types',
        description:
          'This helps us understand the variety of tasks your system will handle.',
      },
      options: [
        { value: 'simple-queries', label: 'Simple Queries' },
        { value: 'complex-analytical-tasks', label: 'Complex Analytical Tasks' },
        { value: 'text-generation', label: 'Text Generation' },
        { value: 'other', label: 'Other (please specify)' },
      ],
      defaultValue: 'other',
      validation: { required: true },
    },
    {
      questionId: 'step2-metrics',
      questionType: 'textInput',
      title: 'What metrics will you use to evaluate the system?',
      shortDescription: 'List key performance indicators (KPIs).',
      bigDescription: {
        img: '',
        title: 'Evaluation Metrics',
        description:
          'Examples: response latency, accuracy, cost per query, etc.',
      },
      defaultValue: '',
      validation: { required: true },
    },
  ],
  step3: [
    {
      questionId: 'step3-cluster',
      questionType: 'radio',
      title: 'Which cluster will be used for deployment?',
      shortDescription: 'Select the cluster type for deploying the LLM Router.',
      bigDescription: {
        img: '',
        title: 'Cluster Selection',
        description:
          'Choose whether to use your own cluster or the client’s existing infrastructure.',
      },
      options: [
        { value: 'our-cluster', label: 'Use our cluster' },
        { value: 'client-cluster', label: 'Use the client’s cluster' },
      ],
      defaultValue: 'our-cluster',
      validation: { required: true },
    },
    {
      questionId: 'step3-gpu',
      questionType: 'select',
      title: 'Which GPUs are available in your cluster?',
      shortDescription: 'Select the GPU models you are using.',
      bigDescription: {
        img: '',
        title: 'GPU Models',
        description:
          'This helps us ensure compatibility and optimal performance.',
      },
      options: [
        { value: 'v100', label: 'NVIDIA V100' },
        { value: 't4', label: 'NVIDIA T4' },
        { value: 'a100', label: 'NVIDIA A100' },
        { value: 'h100', label: 'NVIDIA H100' },
        { value: 'other', label: 'Other (please specify)' },
      ],
      defaultValue: '',
      validation: { required: true },
    },
    {
      questionId: 'step3-latency',
      questionType: 'slider',
      title: 'What is the maximum acceptable latency for query processing?',
      shortDescription: 'Set the maximum latency threshold in milliseconds.',
      bigDescription: {
        img: '',
        title: 'Latency Requirements',
        description:
          'This helps us optimize the system for your performance needs.',
      },
      defaultValue: 100,
      validation: { required: true, minValue: 10, maxValue: 1000 },
    },
    {
      questionId: 'step3-models',
      questionType: 'checkbox',
      title: 'Which LLM models do you plan to use?',
      shortDescription: 'Select the models you want to integrate.',
      bigDescription: {
        img: '',
        title: 'LLM Models',
        description:
          'This helps us configure the routing logic for your specific models.',
      },
      options: [
        { value: 'llama-8b', label: 'Llama 3.1 8B' },
        { value: 'llama-70b', label: 'Llama 3.1 70B' },
        { value: 'mixtral-8x22b', label: 'Mixtral 8x22B' },
        { value: 'deepseek-r1', label: 'DeepSeek R1' },
        { value: 'other', label: 'Other (please specify)' },
      ],
      defaultValue: 'other',
      validation: { required: true },
    },
    {
      questionId: 'step3-routing-criteria',
      questionType: 'checkbox',
      title: 'What routing criteria do you want to use?',
      shortDescription: 'Select the criteria for directing queries to specific models.',
      bigDescription: {
        img: '',
        title: 'Routing Criteria',
        description:
          'This helps us design the routing logic for your system.',
      },
      options: [
        { value: 'task-complexity', label: 'Task Complexity' },
        { value: 'domain-knowledge', label: 'Domain Knowledge' },
        { value: 'cost', label: 'Cost of Processing' },
        { value: 'response-quality', label: 'Response Quality' },
      ],
      defaultValue: 'other',
      validation: { required: true },
    },
  ],
};

function Configurator() {
  const [activeStep, setActiveStep] = useState(0);
  const [wizardData, setWizardData] = useState<WizardData>(() => {
    const savedData = sessionStorage.getItem('wizardData');
    return savedData ? JSON.parse(savedData) : initialWizardData;
  });
  const [chatMessages, setChatMessages] = useState([]);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [configData, setConfigData] = useState<ConfiguratorData>(defaultConfigData);
  const [token, setToken] = useState('');
  const [conversationId, setConversationId] = useState('');
  
  useEffect(() => {
    sessionStorage.setItem('wizardData', JSON.stringify(wizardData));
  }, [wizardData]);
  
  useEffect(() => {
    sessionStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);
  
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch('http://0.0.0.0:8001/assistant/token', {
          method: 'GET',
          headers: { accept: 'application/json' },
        });
        const data = await res.json();
        setToken(data.token);
      } catch (err) {
        console.error('Error fetching token', err);
      }
    };
    fetchToken();
  }, []);
  
  useEffect(() => {
    if (token) {
      const createConversation = async () => {
        try {
          const res = await fetch('http://0.0.0.0:8001/assistant/conversation', {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: {}, conversation_id: '' }),
          });
          const data = await res.json();
          setConversationId(data.conversation_id);
        } catch (err) {
          console.error('Error creating conversation', err);
        }
      };
      createConversation();
    }
  }, [token]);
  
  const sendMessageAPI = async (message: string) => {
    if (!conversationId) return;
    try {
      await fetch(`http://0.0.0.0:8001/assistant/conversation/${conversationId}/message`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          token,
        },
        body: JSON.stringify({ content: message }),
      });
    } catch (err) {
      console.error('Error sending message', err);
    }
  };
  
  const addChatMessage = (sender, text, data) => {
    setChatMessages(prev => [...prev, { sender, text, data }]);
    sendMessageAPI(text);
  };
  
  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);
  
  const updateWizardData = (newData: Partial<WizardData>) => {
    setWizardData(prev => ({ ...prev, ...newData }));
  };
  
  const handleUserInput = (input: string) => {
    addChatMessage('user', input);
  };
  
  const handleChatRequest = ({ userSummary, context }) => {
    addChatMessage('user', `Explain Me: ${userSummary}`);
    const desc = context?.longDescription || context?.bigDescription;
    if (desc) {
      addChatMessage('ai', '', {
        title: desc.title,
        img: desc.img,
        description: desc.description,
      });
    } else {
      addChatMessage('ai', 'No additional explanation available.');
    }
  };
  
  const handleSendConfiguration = (data: WizardData) => {
    console.log('Sending configuration:', data);
    alert('Configuration has been sent!');
  };
  
  const handleContactUs = () => setIsContactModalOpen(true);
  const handleCloseContactModal = () => setIsContactModalOpen(false);
  
  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Welcome onNext={handleNext} />;
      case 1:
        return (
          <PresetsSelection
            presets={configData.step1.presets}
            onPresetSelect={preset => updateWizardData({ presets: preset })}
            onChatStart={handleChatRequest}
          />
        );
      case 2:
        return (
          <UserBusinessInfo
            data={wizardData.general}
            onUpdate={general => updateWizardData({ general })}
            onChatRequest={handleChatRequest}
            config={configData.step2}
          />
        );
      case 3:
        return (
          <HardwareSelection
            data={wizardData.hardware}
            onUpdate={hardware => updateWizardData({ hardware })}
            onChatRequest={handleChatRequest}
            config={configData.step3}
          />
        );
      case 4:
        return (
          <ReviewLaunch
            data={wizardData}
            onBack={handleBack}
            onSendConfiguration={handleSendConfiguration}
            onContactUs={handleContactUs}
          />
        );
      default:
        return null;
    }
  };
  
  const isBackBtnActive = activeStep > 1 && activeStep < steps.length - 1;
  const isNextBtnActive = activeStep !== 0 && activeStep < steps.length - 1;
  const isChatHide = activeStep === 0 || activeStep === steps.length - 1;
  
  const letters = ['s', 'y', 'n', 'k', 'r', 'o', 'A', 'I'];
  return (
    <ConfiguratorLayout chatMessages={chatMessages} onUserInput={handleUserInput} isHide={isChatHide}>
      <div className="account-wizard">
        <Box className="wizard-header">
          <div className="logo static-logo">
            {letters.map((letter, index) => (
              <span
                key={index}
                className={`logo-letter ${index >= letters.length - 2 ? 'gradient' : ''}`}
              >
                {letter}
              </span>
            ))}
          </div>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<SynkroStepConnector />}
            className="stepper-custom"
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        
        <Box className="wizard-content">{renderStepContent()}</Box>
        
        <Box className="wizard-controls">
          {isBackBtnActive && (
            <Button variant="synkro-button" onClick={handleBack}>
              Step Back
            </Button>
          )}
          {isNextBtnActive && (
            <Button className="synkro-button" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </div>
      
      <ContactUsModal
        open={isContactModalOpen}
        onClose={handleCloseContactModal}
        wizardData={wizardData}
      />
    </ConfiguratorLayout>
  );
}

export default Configurator;
