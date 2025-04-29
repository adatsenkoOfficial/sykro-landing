export type QuestionType = 'switch' | 'select' | 'textInput' | 'radio' | 'checkbox' | 'slider';

export interface Preset {
  name: string;
  shortDescription: string;
  categories?: string[];
  longDescription: {
    img: string;
    title: string;
    description: string;
  };
}

export interface Question {
  questionId: string;
  questionType: QuestionType;
  title: string;
  shortDescription: string;
  bigDescription: {
    img: string;
    title: string;
    description: string;
  };
  // For question types that require options (select, radio, checkbox)
  options?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  // Default answer value (could be string, boolean, or number)
  defaultValue?: string | boolean | number;
  validation?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    minValue?: number;
    maxValue?: number;
    pattern?: string;
  };
}

export interface ConfiguratorData {
  step1: {
    presets: Preset[];
    advanced?: unknown;
  };
  step2: Question[];
  step3: Question[];
}
