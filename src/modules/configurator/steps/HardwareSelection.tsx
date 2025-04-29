import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import DynamicQuestion from "../components/DynamicQuestion/DynamicQuestion";
import { Question } from "../../../types/IConfiguratorData";
import './HardwareSelection.scss';

interface HardwareSelectionProps {
  data: any;
  onUpdate: (hardware: any) => void;
  onChatRequest: (payload: { userSummary: string; context: object }) => void;
  config: Question[];
}

export default function HardwareSelection({ data, onUpdate, onChatRequest, config }: HardwareSelectionProps) {
  const [answers, setAnswers] = useState<{ [key: string]: any }>(data || {});
  
  useEffect(() => {
    onUpdate(answers);
  }, [answers, onUpdate]);
  
  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };
  
  return (
    <Box className="hardware-selection">
      <Typography variant="h5" className="hardware-selection__title" gutterBottom>
        Hardware Selection
      </Typography>
      <Box className="hardware-selection__questions">
        {config.map((question) => (
          <DynamicQuestion
            key={question.questionId}
            question={question}
            value={answers[question.questionId]}
            onChange={(value) => handleAnswerChange(question.questionId, value)}
            onChatRequest={(message) =>
              onChatRequest({ userSummary: message, context: question })
            }
          />
        ))}
      </Box>
    </Box>
  );
}
