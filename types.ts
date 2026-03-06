import React from 'react';

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export interface UseCase {
  title: string;
  description: string;
  prompt: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.FC<{className?: string}>;
}