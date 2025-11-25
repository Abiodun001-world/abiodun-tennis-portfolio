import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  price: string;
  icon: React.ComponentType<any>;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image?: string;
}