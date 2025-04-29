import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { WizardData } from '../../modules/configurator/steps/ReviewLaunch';
import './ContactUsModal.scss';
import axios from "axios";

interface ContactUsModalProps {
  open: boolean;
  onClose: () => void;
  wizardData?: WizardData;
}

const ContactUsModal = ({ open, onClose, wizardData }: ContactUsModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  
  const handleSend = async () => {
    const payload = {
      name,
      email,
      comment,
      wizardData,
    };
    console.log('Sending contact info:', payload);
    await axios.post('/api/contact', payload);
    onClose();
  };
  
  return (
    <Modal open={open} onClose={onClose} className="contact-us-modal">
      <Box className="contact-us-modal__box">
        <Typography variant="h6" className="contact-us-modal__title">
          Contact Us
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          className="contact-us-modal__input"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          className="contact-us-modal__input"
        />
        <TextField
          label="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
          multiline
          rows={3}
          className="contact-us-modal__textarea"
        />
        <Box className="contact-us-modal__actions">
          <Button
            variant="outlined"
            onClick={onClose}
            className="contact-us-modal__btn contact-us-modal__btn--cancel"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSend}
            className="contact-us-modal__btn contact-us-modal__btn--send"
          >
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContactUsModal;
