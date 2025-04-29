import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Preset } from '../../../types/IConfiguratorData';
import './ReviewLaunch.scss';

export interface WizardData {
  presets: Preset | null;
  general: { [key: string]: any } | null;
  hardware: { [key: string]: any } | null;
}

interface ReviewLaunchProps {
  data: WizardData;
  onBack: () => void;
  onSendConfiguration: (data: WizardData) => void;
  onContactUs: () => void;
}

export default function ReviewLaunch({
                                       data,
                                       onBack,
                                       onSendConfiguration,
                                       onContactUs,
                                     }: ReviewLaunchProps) {
  const handleSendConfiguration = () => {
    onSendConfiguration(data);
  };
  
  const renderListItem = (label: string, value: any) => (
    <Box key={label} className="review-launch__item">
      <Typography variant="subtitle2" className="review-launch__item-label">{label}</Typography>
      <Typography variant="body1" className="review-launch__item-value">
        {Array.isArray(value) ? value.join(', ') : value || 'N/A'}
      </Typography>
    </Box>
  );
  
  return (
    <Box className="review-launch">
      <Typography variant="h5" className="review-launch__title" gutterBottom>
        Review
      </Typography>
      
      <Box className="review-launch__section">
        <Typography variant="h6" className="review-launch__section-title" gutterBottom>
          Selected Preset
        </Typography>
        {data.presets ? (
          <Box className="review-launch__preset">
            <Typography variant="subtitle1" className="review-launch__preset-name">
              {data.presets.name}
            </Typography>
            <Typography variant="body2" className="review-launch__preset-description">
              {data.presets.shortDescription}
            </Typography>
          </Box>
        ) : (
          <Typography variant="body1" className="review-launch__not-selected">
            Not selected
          </Typography>
        )}
      </Box>
      
      <Box className="review-launch__section">
        <Typography variant="h6" className="review-launch__section-title" gutterBottom>
          Business Requirements
        </Typography>
        {data.general ? (
          Object.entries(data.general).map(([key, value]) =>
            renderListItem(key.replace('step2-', ''), value)
          )
        ) : (
          <Typography variant="body1" className="review-launch__not-selected">
            N/A
          </Typography>
        )}
      </Box>
      
      <Box className="review-launch__section">
        <Typography variant="h6" className="review-launch__section-title" gutterBottom>
          Hardware Requirements
        </Typography>
        {data.hardware ? (
          Object.entries(data.hardware).map(([key, value]) =>
            renderListItem(key.replace('step3-', ''), value)
          )
        ) : (
          <Typography variant="body1" className="review-launch__not-selected">
            N/A
          </Typography>
        )}
      </Box>
      
      <Box className="review-launch__actions">
        <Button variant="outlined" onClick={onBack} className="review-launch__btn review-launch__btn--back">
          Back
        </Button>
        <Button variant="contained" onClick={handleSendConfiguration} className="review-launch__btn review-launch__btn--send">
          Send Configuration
        </Button>
        <Button variant="contained" color="secondary" onClick={onContactUs} className="review-launch__btn review-launch__btn--contact">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
