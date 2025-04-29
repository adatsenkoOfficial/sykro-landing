import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@mui/material';
import { Preset } from '../../../types/IConfiguratorData';
import { HASHTAG_CLOUD } from '../../../constants/hashtagsSearchQery';
import './PresetsSelection.scss';

interface Props {
  presets: Preset[];
  onPresetSelect: (preset: Preset) => void;
  onChatStart: (params: { userSummary: string; context?: any }) => void;
}

const PresetsSelection: React.FC<Props> = ({ presets, onPresetSelect, onChatStart }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [step, setStep] = useState<number>(0);
  const [expandedPreset, setExpandedPreset] = useState<Preset | null>(null);
  
  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 1200)
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);
  
  const filteredPresets = useMemo(() => {
    if (!presets || selectedTags.length === 0) return [];
    return presets.filter(p => p.categories?.some(tag => selectedTags.includes(tag)));
  }, [presets, selectedTags]);
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };
  
  const handleCardClick = (preset: Preset) => {
    const newPreset = expandedPreset?.name === preset.name ? null : preset;
    setExpandedPreset(newPreset);
    if (newPreset) onPresetSelect(newPreset);
  };
  
  const handleExplainClick = (preset: Preset, e: React.MouseEvent) => {
    e.stopPropagation();
    onChatStart({
      userSummary: preset.name,
      context: {
        longDescription: preset.longDescription,
        title: preset.name,
        description: preset.shortDescription
      }
    });
  };
  
  const handleBackToTags = () => {
    setSelectedTags([]);
    setExpandedPreset(null);
  };
  
  const isTagging = selectedTags.length > 0;
  
  useEffect(() => {
    const cards = document.querySelectorAll(".preset-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.classList.add("visible");
      }, 100 + i * 80);
    });
  }, [filteredPresets]);
  
  return (
    <div className="preset-selector">
      {!isTagging && (
        <>
          <h2 className="presets-selection__title">Choose your business focus</h2>
          <div className="presets-selection__hashtags">
            {HASHTAG_CLOUD.map(tag => (
              <div
                key={tag}
                className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                #{tag}
              </div>
            ))}
          </div>
          <div className="presets-selection__or">or</div>
          <div className="presets-selection__hint">
            You can just describe your use case and our system will guide you
          </div>
        </>
      )}
      
      {isTagging && (
        <div className="presets-selection__back">
          <button className="back-button" onClick={handleBackToTags}>
            ← Back to categories
          </button>
        </div>
      )}
      
      <div className="presets-selection__cards">
        {filteredPresets.map(preset => (
          <div
            key={preset.name}
            className={`preset-card ${
              expandedPreset?.name === preset.name ? 'preset-card--expanded' : ''
            }`}
            onClick={() => handleCardClick(preset)}
          >
            <div className="preset-card__title">{preset.name}</div>
            <div className="preset-card__desc">{preset.shortDescription}</div>
            <div className="preset-card__actions">
              <Button onClick={e => handleExplainClick(preset, e)}>EXPLAIN IN DETAIL</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresetsSelection;
