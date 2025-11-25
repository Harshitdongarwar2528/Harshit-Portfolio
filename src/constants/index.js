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
  tripguide,
  threejs,
  logo,
  github,
  bootstrap,
  
  
 
} from "../assets";
import { Express } from "../assets";




export const navLinks = [
  {
    id: "about",
    title: "About",
  },
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
    title: "React.js Developer",
    icon: web, // you can keep the original icon or replace based on your design
  },
  {
    title: "Node.js & Express.js Developer",
    icon: mobile,
  },
  {
    title: "MongoDB & Database Management",
    icon: backend,
  },
  {
    title: "Stripe & Clerk Integration",
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
    title: "Freelance MERN Stack Developer",
    company_name: "Self Employed",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Developing and deploying full stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Creating responsive, user-friendly interfaces and integrating payment gateways using Stripe.",
      "Collaborating with clients to understand requirements and deliver tailored web solutions.",
      "Ensuring code quality, performance, and scalability across all projects.",
    ],
  },
  {
    title: "Web Application Developer",
    company_name: "Independent Projects",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
    points: [
      "Built dynamic and scalable web applications with React.js and RESTful APIs.",
      "Implemented authentication and authorization using Clerk and JWT.",
      "Optimized application performance and responsiveness across multiple devices.",
      "Integrated third-party APIs and enhanced UI/UX through modern design techniques.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "GitHub Community",
    icon: github,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Contributed to beginner-friendly open-source repositories by improving documentation, fixing minor bugs, and enhancing UI elements.",
      "Participated in discussions, issue tracking, and collaborative problem-solving within GitHub communities.",
      "Created and maintained small open-source utilities and component libraries to help other developers.",
      "Gained practical experience with Git workflows, pull requests, code reviews, and distributed version control.",
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
    name: "ROOMIFY : Hotel-Booking-Platform",
    description:
      "Roomify is a full-stack hotel booking platform built with the MERN stack, featuring secure user authentication with Clerk and seamless online payments powered by Stripe. Users can browse hotels, check availability, make bookings, and manage reservations through an intuitive and responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Render",
        color: "blue-text-gradient",
      },
    ],
    image: Hotel,
    source_code_link: "https://github.com/",
    
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };