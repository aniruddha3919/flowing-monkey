import { 
  Dumbbell, Users, History, Brain, Trophy, Zap
} from 'lucide-react';
import React from 'react';

export const siteConfig = {
  name: "Flowing Monkey",
  description: "Building functional strength through unconventional tools and natural movement patterns.",
  contact: {
    phone: "+91 9051292950",
    email: "",
    address: "38/F, Ramesh Mitra Rd, Bakul Bagan, Kalighat, Kolkata, West Bengal 700025"
  },
  social: {
    instagram: "https://www.instagram.com/flowingmonkeyfitness/",
    
  },
  navLinks: ['Home', 'Training Arsenal', 'Meet Coach'],
  
  hero: {
    badge: "Movement · Strength · Freedom",
    titleLine1: "Where Strength",
    titleLine2: "Meets Movement",
    description: "Master the art of mace, gada, and animal flow. Unleash your primal potential with India's most unique fitness community."
  },

  philosophy: {
    badge: "Core Philosophy",
    title: "What is Flowing Monkey Fitness?",
    descriptionStart: "We are a movement-focused training studio dedicated to restoring natural human movement patterns. Our training revolves around the fundamentals of being human:",
    descriptionHighlight: "Crawling, Squatting, Pulling, Pushing, Rotating, and Carrying.",
    cards: [
      { title: 'Natural Patterns', iconName: 'zap' },
      { title: 'Functional Strength', iconName: 'dumbbell' },
      { title: 'Mobility First', iconName: 'users' },
    ]
  },

  tools: [
    { name: 'Steel Mace & Gada', iconName: 'dumbbell' },
    { name: 'Kettlebells', iconName: 'dumbbell' },
    { name: 'Persian Mills / Jodi', iconName: 'dumbbell' },
    { name: 'Indian Clubs', iconName: 'dumbbell' },
    { name: 'Barbells & Dumbbells', iconName: 'dumbbell' }
  ],

  founder: {
    badge: "Meet Your Founder",
    name: "Madhav Halder",
    description: "Madhav Halder is the founder and head coach of Flowing Monkey Fitness. He is a movement-based strength coach specializing in unconventional training methods, corrective exercise, and functional strength development. With a strong athletic background, Madhav was a district-level swimmer and water polo player and a national gold medalist in rowing. His experience in competitive sports shapes his practical and performance-driven training approach. Certifications:",
    stats: [
      { value: "250+", label: "Students" },
      { value: "4+", label: "Certifications" }
    ]
  },

  howWeTrain: [
    { num: '01', title: 'Movement First Approach', desc: 'Quality over quantity. We ensure you move correctly before adding load.' },
    { num: '02', title: 'Unconventional Training', desc: 'Using tools like Gadas and Maces to build rotational power and stability.' },
    { num: '03', title: 'Corrective Exercise', desc: 'Fixing imbalances and preventing injuries through targeted mobility work.' },
  ],

  difference: [
    { title: 'Community Driven', desc: 'Join a tribe of like-minded movers who support your growth.', iconName: 'users' },
    { title: 'Ancient Heritage', desc: 'Rooted in the traditional Akhada culture of India.', iconName: 'history' },
    { title: 'Mindful Movement', desc: 'Focus on neuro-muscular connection and body awareness.', iconName: 'brain' },
    { title: 'Proven Results', desc: 'Structured programming that translates to real-world strength.', iconName: 'trophy' },
    { title: 'Dynamic Energy', desc: 'Sessions designed to leave you energized, not just exhausted.', iconName: 'zap' },
  ],

  comparison: {
    traditional: ['Machine-based training', 'Muscle isolation focus', 'Linear, repetitive movements'],
    flowingMonkey: ['Functional movement patterns', 'Whole-body integration', 'Joint health & longevity']
  },

  whoIsThisFor: ['Strength Seekers', 'Weight Loss', 'Athletes', 'Beginners Welcome', 'Mobility & Pain Issues'],

  trainingStructure: [
    { value: '60 Min', label: 'Session Duration' },
    { value: '1-on-1', label: 'Or Small Groups' },
    { value: '3x / Week', label: '12 Sessions / Month' },
  ],

  faqs: [
    { 
      q: 'Do I need prior fitness experience to join?', 
      a: 'No. Beginners are absolutely welcome. Every program at Flowing Monkey Fitness is designed according to the individual’s fitness level, movement ability, and goals.' 
    },
    { 
      q: 'Can this training help with weight loss?', 
      a: 'Yes. The training approach combines strength training, movement training, and conditioning, which helps improve metabolism, burn fat, and build lean muscle. Programs are designed to support sustainable weight loss while also improving strength, mobility, and overall health.' 
    },
    { 
      q: 'Is this training safe for people with pain or injuries?', 
      a: 'Yes. Corrective exercise and movement assessment are part of the process. Training programs are designed to improve mobility, reduce pain, and strengthen the body safely.' 
    },
    { 
      q: 'Can children train at Flowing Monkey Fitness?', 
      a: 'Yes. Children can benefit greatly from movement-based training. Sessions for kids focus on developing coordination, balance, mobility, strength, and body awareness through fun and engaging movements.' 
    },
  ],

  cta: {
    title: "Start Moving Better Today",
    description: "Join our tribe and rediscover your natural strength."
  }
};

// Helper to map icon names to actual Lucide components
export const getIconComponent = (name: string, props?: any) => {
  switch (name) {
    case 'dumbbell': return React.createElement(Dumbbell, props);
    case 'users': return React.createElement(Users, props);
    case 'zap': return React.createElement(Zap, props);
    case 'history': return React.createElement(History, props);
    case 'brain': return React.createElement(Brain, props);
    case 'trophy': return React.createElement(Trophy, props);
    default: return null;
  }
};
