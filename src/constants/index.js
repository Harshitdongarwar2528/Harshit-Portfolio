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
  jobit,
  tripguide,
  threejs,
  logo,
  
 
} from "../assets";




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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
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
    icon: shopify,
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
    title: "Internship Developer (IoT & Python)",
    company_name: "Tech Internship Program",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2023 - Dec 2023",
    points: [
      "Developed IoT dashboards and automation scripts using Python and sensor-based data.",
      "Worked on backend data handling, device connectivity, and API integration.",
      "Collaborated with a small team to improve workflow and project efficiency.",
      "Gained hands-on experience with real-world application development and debugging.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "GitHub",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Contributed to open-source projects by resolving issues and implementing new features.",
      "Enhanced documentation and improved project maintainability.",
      "Collaborated with other developers using Git and GitHub version control.",
      "Learned best practices for teamwork and scalable code contributions.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
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