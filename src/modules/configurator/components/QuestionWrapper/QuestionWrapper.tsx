import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import './QuestionWrapper.scss';

interface QuestionWrapperProps {
  shortDescription: string;
  onExplainRequest: () => void;
  children: React.ReactNode;
}

function HelpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
            stroke-width="3"
            d="M37.7,21.5c0.2-0.8,0.2-1.7,0.2-2.6c0-8.2-7.1-14.8-15.5-13.9c-2.4,0.3-4.7,1.2-6.6,2.5"></path>
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
            stroke-width="3"
            d="M11.5,12.8c-0.7,1.4-1.2,3-1.4,4.6c-0.7,5.9,2.4,11.2,7.1,13.8V34c0,1.4,1.1,2.5,2.5,2.5h8.4	c1.4,0,2.5-1.1,2.5-2.5v-2.8c1.8-1,3.3-2.3,4.5-3.9"></path>
      <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
            stroke-width="3" d="M26,42.5H22c-1.4,0-2.5-1.1-2.5-2.5v-3.5h9V40C28.5,41.4,27.4,42.5,26,42.5z"></path>
    </svg>
  );
}

export default function QuestionWrapper({
  shortDescription,
  onExplainRequest,
  children,
}: QuestionWrapperProps) {
  return (
    <Box className="question-wrapper">
      <Box className="question-wrapper__header">
        <Typography variant="h6">Question</Typography>
        <IconButton onClick={onExplainRequest}>
          <HelpIcon/>
        </IconButton>
      </Box>
      <Box className="question-wrapper__content">{children}</Box>
      <Typography
        variant="body2"
        color="text.secondary"
        className="question-wrapper__short-description"
      >
        {shortDescription}
      </Typography>
    </Box>
  );
}
