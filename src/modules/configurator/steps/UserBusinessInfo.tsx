import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Question } from "../../../types/IConfiguratorData";
import DynamicQuestion from "../components/DynamicQuestion/DynamicQuestion";
import './UserBusinessInfo.scss';

interface UserBusinessInfoProps {
  data: any;
  onUpdate: (general: any) => void;
  onChatRequest: (payload: { userSummary: string; context: object }) => void;
  config: Question[];
}

export default function UserBusinessInfo({ data, onUpdate, onChatRequest, config }: UserBusinessInfoProps) {
  const [answers, setAnswers] = useState<{ [key: string]: any }>(data || {});
  
  useEffect(() => {
    onUpdate(answers);
  }, [answers, onUpdate]);
  
  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };
  
  return (
    <Box className="user-business-info">
      <Typography variant="h5" className="user-business-info__title" gutterBottom>
        Business Information
      </Typography>
      <Box className="user-business-info__questions">
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
