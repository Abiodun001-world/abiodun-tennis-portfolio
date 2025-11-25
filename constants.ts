import { Instagram, Linkedin, Youtube, Mail, MapPin, Award, Clock, Trophy } from 'lucide-react';
import { SocialLink, Testimonial } from './types';

// REPLACE THIS URL WITH YOUR ACTUAL IMAGE URL
export const PROFILE_IMAGE_URL = "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"; 
// To use the image you uploaded, you would typically host it (e.g., Imgur, S3) 
// and paste the link above, or if running locally, put it in public folder.
// Since I cannot see the file upload in the code context, I used a high-quality placeholder.

export const COACH_NAME = "Abiodun Adekunle";
export const COACH_TITLE = "ITF Level 1 Certified Coach";
export const EXPERIENCE_YEARS = "5+";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/abiodunadekunle",
    icon: Linkedin
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/_abiodunadekunle",
    icon: Instagram
  },
  {
    platform: "Youtube",
    url: "https://www.youtube.com/@abiodun_tennis",
    icon: Youtube
  }
];

export const STATS = [
  { label: "Experience", value: "5+ Years", icon: Clock },
  { label: "Certification", value: "ITF Level 1", icon: Award },
  { label: "Coaching Style", value: "Modern & Tactical", icon: Trophy },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "David O.",
    role: "Junior Tournament Player",
    content: "Coach Abiodun completely transformed my serve. Before training with him, I struggled with consistency, but now it's my biggest weapon. I recently won my first U-14 tournament thanks to his tactical advice!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Sarah Jenkins",
    role: "Adult Club Player",
    content: "I was nervous getting back into tennis after 10 years, but Abiodun made the process so enjoyable. He is patient, encouraging, and knows exactly how to explain complex techniques simply. My confidence is back!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Fred J.",
    role: "Tennis Parents",
    content: "We are thrilled with our son's progress. Beyond the strokes, Coach Abiodun teaches discipline and sportsmanship. He truly cares about the holistic development of his students.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  }
];