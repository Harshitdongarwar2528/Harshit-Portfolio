import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  Hotel,
  jobit,
  comingsoon,
  tripguide,
  threejs,
  logo,
  github,
  bootstrap,
  
  
 
} from "../assets";
import { Express } from "../assets";




export const navLinks = [
 
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web, // you can keep the original icon or replace based on your design
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Database & Authentication",
    icon: backend,
  },
  {
    title: "Payments & Integrations",
    icon: creator,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "BootStrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
    {
    name: "Express",
    icon: Express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },

];

const experiences = [
  {
    title: "Full Stack Developer (Personal & Client Projects)",
    company_name: "Self-Directed",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
   points: [
  "Built and deployed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
  "Implemented authentication, REST APIs, and database schemas for real-world use cases.",
  "Integrated third-party services such as Stripe for payments and Clerk for authentication.",
  "Focused on writing clean, maintainable code and improving performance and scalability.",
],

  },
  {
    title: "Web Application Developer",
    company_name: "Independent Projects",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
points: [
  "Developed multiple web applications using React.js and RESTful APIs.",
  "Implemented authentication and authorization using JWT and Clerk.",
  "Optimized frontend performance and ensured responsiveness across devices.",
  "Worked on API integration and improved overall UI/UX consistency.",
],
  },
  {
    title: "Open Source Contributor",
    company_name: "GitHub Community",
    icon: github,
    iconBg: "#383E56",
    date: "Ongoing",
points: [
  "Contributed to beginner-friendly open-source repositories through documentation improvements and minor bug fixes.",
  "Participated in issue discussions and pull requests to understand collaborative development workflows.",
  "Gained hands-on experience with Git, GitHub, and version control best practices.",
],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ROOMIFY – Hotel Booking Platform",
    description:
      "ROOMIFY is a full-stack hotel booking platform similar to Airbnb, where users can search, filter, and sort hotel listings, view detailed property information, and make secure bookings. The platform includes user authentication using Clerk, Stripe-powered payment processing, a dedicated earnings section for hosts, and Cloudinary integration for image storage and management. The application focuses on clean API design, scalable data handling, and a responsive user experience.",
    tags: [
      {
        name: "react",
        color: "text-blue-400",
      },
      {
        name: "node",
        color: "text-green-400",
      },
      {
        name: "express",
        color: "text-green-500",
      },
      {
        name: "mongodb",
        color: "text-emerald-400",
      },
      {
        name: "stripe",
        color: "text-purple-400",
      },
      {
        name: "clerk",
        color: "text-pink-400",
      },
      {
        name: "cloudinary",
        color: "text-sky-400",
      },
    ],
    image: Hotel,
    source_code_link: "https://github.com/Harshitdongarwar2528/MernHotelProject",
    live_demo_link: "https://roomify-roan-eight.vercel.app",
  },


  // {
  //   name: "CraveCart : Food delivery website",
  //   description:
  //     "CraveCart is a MERN-stack food delivery platform, featuring dedicated dashboards for Owners, Customers, and Delivery Partners. It focuses on a smooth React UI, a robust Node.js/Express backend, and secure MongoDB data handling, and will soon be added to my portfolio.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: comingsoon,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Assistly - Speak, Ask, and Automate.",
  //   description:
  //     "Assistly is an intelligent virtual assistant capable of understanding natural language commands, allowing users to play songs, open YouTube, check weather, and automate everyday tasks. This NLP-powered bot is currently under development and will soon be added to my portfolio.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: comingsoon,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };