import React from 'react';
import {
  Box,
  TextField,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  Typography
} from '@mui/material';
import QuestionWrapper from '../QuestionWrapper/QuestionWrapper';
import { Question } from '../../../../types/IConfiguratorData';
import './DynamicQuestion.scss';

interface DynamicQuestionProps {
  question: Question;
  value: any;
  onChange: (newValue: any) => void;
  onChatRequest: (message: string) => void;
}

export default function DynamicQuestion({
                                          question,
                                          value,
                                          onChange,
                                          onChatRequest
                                        }: DynamicQuestionProps) {
  const handleExplain = () => {
    onChatRequest(`Explain ${question.title}: ${question.bigDescription.description}`);
  };
  
  const renderInput = () => {
    switch (question.questionType) {
      case 'textInput':
        return (
          <TextField
            className="dynamic-question__text-input"
            fullWidth
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
          />
        );
      case 'switch':
        return (
          <FormControlLabel
            className="dynamic-question__switch-label"
            control={
              <Switch
                className="dynamic-question__switch"
                checked={!!value}
                onChange={(e) => onChange(e.target.checked)}
                color="primary"
              />
            }
            label={question.title}
          />
        );
      case 'select':
        return (
          <Select
            className="dynamic-question__select"
            fullWidth
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
          >
            {question.options?.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        );
      default:
        return (
          <TextField
            className="dynamic-question__text-input"
            fullWidth
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
          />
        );
    }
  };
  
  return (
    <QuestionWrapper
      shortDescription={question.shortDescription}
      onExplainRequest={handleExplain}
    >
      <Typography variant="subtitle1" className="dynamic-question__title">
        {question.title}
      </Typography>
      <Box className="dynamic-question__input-container">
        {renderInput()}
      </Box>
    </QuestionWrapper>
  );
}
