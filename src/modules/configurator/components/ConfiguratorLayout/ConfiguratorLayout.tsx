import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import './ConfiguratorLayout.scss';

interface ChatMessage {
  sender: 'user' | 'ai';
  data?: {
    title: string;
    description: string;
    img: string;
  };
  text?: string;
}

interface ConfiguratorLayoutProps {
  chatMessages: ChatMessage[];
  onUserInput: (input: string) => void;
  isHide?: boolean;
  children: React.ReactNode;
}

export default function ConfiguratorLayout({
                                             chatMessages,
                                             onUserInput,
                                             isHide = true,
                                             children,
                                           }: ConfiguratorLayoutProps) {
  const [userInput, setUserInput] = useState('');
  const [isMouseInside, setIsMouseInside] = useState(false);
  
  const handleSend = () => {
    if (userInput.trim()) {
      onUserInput(userInput);
      setUserInput('');
    }
  };
  
  return (
    <Box className="configurator-layout">
      <Box className="configurator-layout__content">{children}</Box>
      {!isHide && (
        <Box
          className="configurator-layout__chat"
          onMouseEnter={() => setIsMouseInside(true)}
          onMouseLeave={() => setIsMouseInside(false)}
        >
          <Box
            className={`configurator-layout__chat-messages ${isMouseInside ? 'expanded' : 'collapsed'}`}
          >
            {chatMessages.map((msg, index) => (
              <React.Fragment key={index}>
                {msg.sender === 'ai' && msg.data && msg.data.img ? (
                  <>
                    <Box className="configurator-layout__chat-message ai-message-image">
                      <img src={msg.data.img} alt={msg.data.title || 'AI image'} />
                    </Box>
                    {(msg.data.title || msg.data.description || msg.text) && (
                      <Box className="configurator-layout__chat-message ai-message-text">
                        {msg.data.title && (
                          <Typography variant="h3">{msg.data.title}</Typography>
                        )}
                        {msg.data.description && (
                          <Typography variant="body2">{msg.data.description}</Typography>
                        )}
                        {msg.text && (
                          <Typography variant="body2">{msg.text}</Typography>
                        )}
                      </Box>
                    )}
                  </>
                ) : (
                  <Box className={`configurator-layout__chat-message ${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}>
                    {msg.text && <Typography variant="body2">{msg.text}</Typography>}
                  </Box>
                )}
              </React.Fragment>
            ))}
          </Box>
          <Box className="configurator-layout__chat-input">
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <Button variant="contained" onClick={handleSend}>
              Send
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
