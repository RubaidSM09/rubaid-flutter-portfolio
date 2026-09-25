export const profile = {
  name: 'Rubaid Sharif Mahbub',
  title: 'Flutter Developer',
  email: 'rubimah09@gmail.com',
  phone: '+880 1875976488',
  location: 'Mirpur DOHS, Dhaka, Bangladesh',
  github: 'https://github.com/RubaidSM09',
  linkedin: 'https://www.linkedin.com/in/rubaid-sharif-mahbub-159510313',
  resume: '/assets/Rubaid_Sharif_Mahbub_CV.pdf',
  portrait: '/assets/profile/professional-photo.webp',
};

export type Project = {
  id: string; name: string; category: string; description: string;
  technologies: string[]; platforms: string[]; status?: string;
  features: string[]; screenshots: {src: string; label: string}[];
  links: {label: string; url: string}[]; logo?: string;
  color: string; featured: boolean;
};

export const projects: Project[] = [
  {
    id: 'prochesta', name: 'Prochesta', category: 'EdTech · Government exam preparation',
    description: 'A focused place to prepare for BCS and government job exams, with practice, competition, and AI-assisted learning.',
    technologies: ['Flutter', 'Firebase', 'REST API'], platforms: ['Android'],
    status: 'Published on Google Play',
    features: ['Practice, model, and live exams', 'Leaderboards and performance analytics', 'AI-assisted learning'],
    screenshots: ['home','exam-details','exam','leaderboard'].map((s,i)=>({src:`/assets/prochesta/screenshot-${s}.webp`,label:['Home','Exam details','Practice exam','Leaderboard'][i]})),
    links: [{label:'Google Play',url:'https://play.google.com/store/apps/details?id=com.minimaticsolutions.prochesta'}],
    logo: '/assets/prochesta/logo.webp', color: 'cyan', featured: true,
  },
  {
    id: 'pollable', name: 'Pollable', category: 'Social · Polls & community',
    description: 'A social polling app that brings opinions into the conversation. Create polls, explore real-time feeds, and connect through messaging.',
    technologies: ['Flutter', 'REST API', 'RevenueCat', 'Google Pay', 'Apple Pay'], platforms: ['Android','iOS'],
    status: 'Launch scheduled · October 1, 2026',
    features: ['Real-time feeds, messaging, and poll creation', 'Poll boosting and subscriptions', 'Deep linking'],
    screenshots: ['poll','feed','create','chat'].map((s,i)=>({src:`/assets/pollable/screenshot-${s}.webp`,label:['Image poll','Feed','Create a poll','Messaging'][i]})),
    links: [{label:'Project website',url:'https://pollableapp.com/'}],
    logo: '/assets/pollable/logo.webp', color: 'violet', featured: true,
  },
  {
    id: 'dr-panda', name: 'Dr Panda MD Academy', category: 'EdTech · Medical exam preparation',
    description: 'A medical exam companion that brings practice, flashcards, and study resources into one cross-platform learning experience.',
    technologies: ['Flutter','REST API','RevenueCat'], platforms: ['Android','iOS'],
    status: 'Coming soon · Google Play & App Store',
    features: ['Practice Mode, Full Exams, and Flashcards', 'Analytics, Med Notes, and Live Tutoring', 'Bilingual support and daily learning activities'],
    screenshots: ['home','practice','result','notes'].map((s,i)=>({src:`/assets/dr-panda/screenshot-${s}.webp`,label:['Home','Practice Mode','Results','Med Notes'][i]})),
    links: [{label:'Project website',url:'https://thedoctorpanda.com/'}],
    logo: '/assets/dr-panda/logo.webp', color: 'blue', featured: true,
  },
  {
    id:'grez', name:'GREZ Simulator', category:'Web · Encryption learning',
    description:'A web-based simulator for learning and visualizing encryption algorithms.',
    technologies:['Flutter','Firebase'], platforms:['Web'], features:[], screenshots:[],
    links:[{label:'Live demo',url:'https://grez-algorithm.web.app/'}],color:'cyan',featured:false,
  },
  {
    id:'la-recette',name:'La-Recette',category:'Mobile · Recipe sharing',
    description:'A mobile app for browsing and sharing recipes, with data-management features.',
    technologies:['Flutter','Firebase','Python Flux'],platforms:['Mobile'],features:[],screenshots:[],links:[],color:'violet',featured:false,
  },
  {
    id:'aqua-track',name:'Aqua Track',category:'IoT · Water usage tracking',
    description:'An IoT water-usage tracking solution connecting a Flutter app with ESP32 hardware.',
    technologies:['Flutter','Firebase','ESP32'],platforms:['Mobile','IoT'],features:[],screenshots:[],links:[],color:'blue',featured:false,
  },
];

export const experience = [
  {
    company:'Minimatic Solutions',period:'July 2025 — Present',
    summary:'Turning Figma designs into responsive Flutter interfaces, integrating REST APIs, and preparing Android and iOS builds for production release.',
    roles:[
      // {title:'Executive Flutter Developer',date:'July 2026 — Present',current:true},
      {title:'Junior Flutter Developer',date:'July 2025 — Present'},
      // {title:'Trainee Flutter Developer',date:'July — September 2025'},
    ],tags:['Flutter','REST APIs','Android & iOS'],
  },
  {
    company:'Inception Studio',period:'May — August 2025',
    summary:'Hands-on training in Unity workflows, interactive design, and game-development concepts.',
    roles:[{title:'Trainee Unity Developer',date:'May — August 2025'}],tags:['Unity','Interactive design'],
  },
  {
    company:'Brain Station 23',period:'February — March 2024',
    summary:'Built an e-commerce app during industry-based Flutter training and strengthened mobile-development workflows in a professional environment.',
    roles:[{title:'Industrial Attachment — Flutter',date:'February — March 2024'}],tags:['Flutter','E-commerce'],
  },
];

export const skillGroups = [
  {title:'Mobile development',description:'Interfaces built for both platforms.',icon:'mobile',skills:['Flutter','Dart','Cross-platform development','Android & iOS','Figma to Flutter UI']},
  {title:'Architecture & state',description:'Structure behind the experience.',icon:'layers',skills:['Clean Architecture','State Management','Provider','Riverpod','GetX']},
  {title:'Backend integration',description:'Connecting the interface to real data.',icon:'network',skills:['REST APIs','JSON','Firebase','RevenueCat']},
  {title:'Development workflow',description:'From design handoff to release.',icon:'code',skills:['Git & GitHub','Android Studio','VS Code','Version Control','Android & iOS Release Support']},
];

export const education = [
  {degree:'B.Sc. in Computer Science and Engineering',school:'Military Institute of Science and Technology',date:'April 2021 — June 2025',result:'CGPA 3.69 / 4.00'},
  {degree:'Higher Secondary School Certificate',school:'Notre Dame College, Dhaka',date:'July 2018 — October 2020',result:'GPA 5.00 / 5.00'},
  {degree:'Secondary School Certificate',school:'Adamjee Cantonment Public School',date:'January 2016 — March 2018',result:'GPA 5.00 / 5.00'},
];

export const awards = [
  {place:'Runner-up',event:'Intra MIST Hackathon',date:'2025'},
  {place:'Dean’s List of Honor',event:'Military Institute of Science and Technology',date:'2022–23'},
  {place:'2nd Runner-up',event:'Anatolian Rover Challenge',date:'2022'},
  {place:'7th place',event:'Independence Day Programming Contest',date:'2022'},
  {place:'Runner-up',event:'Math Olympiad · ACPS Cultural Week',date:'2017'},
];

export const leadership = [
  {club:'MIST Computer Club',role:'Vice President, Committee of Skill Development',date:'April 2024 — August 2025',description:'Led skill-development initiatives and supported technical learning activities.'},
  {club:'MIST Cyber Security Club',role:'Vice President, Publishing and Designing',date:'April 2024 — August 2025',description:'Contributed to communications, publication design, event branding, and creative activities.'},
];
