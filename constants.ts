import { Instagram, Linkedin, Youtube, Mail, MapPin, Award, Clock, Trophy } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SocialLink, Testimonial } from './types';

export const PROFILE_IMAGE_URL = "/profile-image.jpeg";

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
  },
  {
    platform: "WhatsApp",
    url: "https://wa.me/2349015785424",
    icon: FaWhatsapp
  }
];

export const STATS = [
  { label: "Experience", value: "5+ Years", icon: Clock },
  { label: "Certification", value: "ITF Level 1", icon: Award },
  { label: "Coaching Style", value: "Modern & Tactical", icon: Trophy },
];

export const TESTIMONIALS = [
  {
    name: "Emmanuel Aboderin",
    role: "Google Review",
    rating: 5,
    content:
      "First training went great. Warmed up, did drills, worked on specific game aspects, and applied them. Coach Abiodun is really passionate about coaching tennis, and it shows.",
  },
  {
    name: "Sheyi A.",
    role: "Local Guide • Google Review",
    rating: 5,
    content:
      "From the get go, I was able to enjoy my game, amazing rallies with sharp forehand. I am improving on my backhand as well. I will always use again and recommend their services.",
  },
  {
    name: "Abdulrahman Oyinlola",
    role: "Google Review",
    rating: 5,
    content:
      "With a few months in the academy, I noticed great development in my game—forehand and backhand strokes improved. It's a nice academy for better development.",
  },
  {
    name: "Mojeed Adeoye",
    role: "Google Review",
    rating: 5,
    content:
      "My rally consistency has improved and I'm working on my serve and volleys. Such a good academy for top-notch tennis development!",
  },
  {
    name: "Tolu Madamori",
    role: "Google Review",
    rating: 5,
    content:
      "Really professional. Teaches the basics and paces you properly. He sends a session plan before each session so you know what to expect.",
  },
  {
    name: "Adedamola Raji",
    role: "Google Review",
    rating: 5,
    content:
      "One of the best coaching experiences I've had. The patience and corrections were excellent. Great first session!",
  },
  {
    name: "Victoria A. Ayodeji",
    role: "Local Guide • Google Review",
    rating: 5,
    content:
      "I've been training with Abiodun Tennis Academy since Q4 2024. Coach Abiodun is professionally licensed and delivers top-level training. Each session is intense and focused on improvement. I train at Adamasingba Stadium and always book in advance because slots fill quickly. Highly recommended for serious players.",
  },
];