import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  mysql,
  codeigniter,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  php,
  elivate,
  alminprinting,
  cardashcamera,
  gpt3,
  moviehub,
  doorringer,
  promptopia,
  hiddengems,
  summize,
  village88,
  laravel,
  rootsofhealth,
  miniblogsite,
  quizapp,
  postman,
  fhsis
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
    title: "Front End Development",
    icon: web,
  },
  {
    title: "Back End Development",
    icon: backend,
  },
  {
    title: "API Development",
    icon: mobile,
  },
  {
    title: "Performance Optimization",
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
    name: "Php",
    icon: php,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Code Igniter",
    icon: codeigniter,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Information Technology Officer",
    company_name: "Roots of Health",
    icon: rootsofhealth,
    iconBg: "#fff",
    date: "Sep 2023 - Present",
    points: [
      "Technical Support: Provide hands-on technical support to staff members, assisting with hardware, software, network, and other IT-related issues.",
      "IT Infrastructure Management: Oversee and maintain the organization's IT infrastructure, including laptops, printers, network devices, and other technology equipment.",
      "Cloud Services Administration: Support in the management and provision of user accounts of cloud services such as Google Workspace, Trello, and also of the WordPress websites hosted in a third-party hosting.",
      "Web Database Administration: Support in administering and maintaining the customized web database used for clinical data, ensuring data security and system integrity.",
      "Data Management: Support in processing data of IT services provided to partner LGUs, including cleaning, storage, and migration",
      "Data Solutions Development: Assisting the development of data and software solutions.",
      "Maintaining the organization's websites and assisting with the development of new sites",
    ],
  },
  {
    title: "Web Development Trainee",
    company_name: "Village88",
    icon: village88,
    iconBg: "#fff",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Completed a comprehensive 4-month training program, focusing on various programming languages and frameworks, including PHP, JS, HTML, CSS, CodeIgniter, Nodejs, and ReactJS.",
      "Gained proficiency in multiple programming languages and acquired practical skills to develop web applications and websites using the mentioned technologies.",
      "Participated in hands-on projects and exercises to reinforce the learning process, enhancing problem-solving abilities and critical thinking skills.",
      "Demonstrated exceptional performance by winning one of the Best in Capstone award during the final week of training, showcasing a high level of expertise and creativity in project development.",
    ],
  },
  {
    title: "Front End Developer (OJT)",
    company_name: "Elivate IT Solution",
    icon: elivate,
    iconBg: "#fff",
    date: "Jan 2020 - Apr 2020",
    points: [
      "Create webpages from scratch based on client requirements, utilizing provided assets such as images or PSD files of the website design.",
      "Tailor webpage designs to match the client's vision, incorporating their desired aesthetic and branding elements.",
      "Utilize HTML, CSS, JavaScript, Bootstrap, and jQuery to develop interactive and visually appealing webpages.",
      "Ensure webpages are responsive, adapting seamlessly to different devices and screen sizes. Prioritize user-friendly interfaces for an enhanced browsing experience.",
    ],
  },
  {
    title: "Layout / Graphic Artist (Summer Job)",
    company_name: "Almin Printing",
    icon: alminprinting,
    iconBg: "#fff",
    date: "Mar 2018 - Jul 2018",
    points: [
      "Create visually appealing designs for various print materials based on client requirements.",
      "Tailor designs to match the client's vision and incorporate their desired aesthetic and branding elements.",
      "Work closely with clients, understanding their design preferences, and collaborating with them to create high-quality graphic designs.",
      "Utilize design software such as Adobe Photoshop to develop unique and eye-catching designs for various print materials.",
    ],
  },
];

const projects = [
  {
    name: "FHSIS Management System",
    description:
      "A Laravel-based system that streamlines the submission of health data from municipalities by replacing email-based reporting. It ensures timely uploads, tracks monthly submissions, and highlights which areas have or haven't submitted their data—solving the issue of missed reports in cluttered inboxes.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "authentication",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: fhsis,
    source_code_link: "https://fhsis.ugatngkalusugan.org",
  },
  {
    name: "Clinic Data to Spreadsheet Automation",
    description:
      "This project automates the process of fetching data from a Clinic Database via an API and transferring it into a Google Spreadsheet using Apps Script. The spreadsheet is designed to help clinics track and analyze their key performance indicators (KPIs) efficiently.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "postman",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: postman,
    source_code_link: "https://github.com/raymondfajiculay/clinic-database-api",
  },
  {
    name: "Quiz App (Pre & Post Test)",
    description:
      "A full-stack quiz application built with Laravel 11 and React, designed for pre- and post-assessment tests. It includes user authentication, dynamic quizzes, result tracking, and interactive charts using Chart.js. Ideal for monitoring learning progress.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: quizapp,
    source_code_link: "https://quizzes.ugatngkalusugan.org",
  },
  {
    name: "Mini Blog Site",
    description:
      "A Laravel 11 project I crafted for learning purposes, encompassing CRUD operations, email verification, and image upload functionalities. Powered by Laravel and MySQL, it's a hands-on journey into web development.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "email-verification",
        color: "pink-text-gradient",
      },
    ],
    image: miniblogsite,
    source_code_link: "https://github.com/raymondfajiculay/Mini-Blog-Site",
  },
  {
    name: "Promptopia",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover, create, and share creative prompts",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/raymondfajiculay/Promptopia",
  },
  {
    name: "GPT3",
    description:
      "This project is a frontend implementation of a landing page for a website called GPT3. The landing page is built using React.js and is designed to be responsive, adapting to different screen sizes and devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/raymondfajiculay/GPT3",
  },
  {
    name: "Moviehub",
    description:
      "This is a front-end application built using ReactJS that allows users to search for movies and view relevant information about them. The app provides a user-friendly interface where you can enter the name of a movie and retrieve a list of matching results.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: moviehub,
    source_code_link: "https://github.com/raymondfajiculay/Moviehub",
  },
  {
    name: "AI Article Summarizer",
    description:
      "This is a front-end application built using ReactJS that allows users to summarize article using the power or AI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: summize,
    source_code_link: "https://github.com/raymondfajiculay/Summize",
  },
  {
    name: "Hidden Gems",
    description:
      "The project is a treasure hunting web/mobile app that allows the admin to set up different treasures at different sites. The app uses GPS to determine when a user is within the radius of a treasure, and then presents a riddle or clue that the user must solve to find the treasure in that area. The treasure locations are strategically placed in hotspots or places that encourage bonding and exploration.",
    tags: [
      {
        name: "react & react native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: hiddengems,
    source_code_link: "https://github.com/raymondfajiculay/Hidden-Gems",
  },
  {
    name: "Car Dash Camera",
    description:
      "This project is a responsive front-end implementation of a Car Dash Camera application. It provides a user-friendly interface for viewing and interacting with the application. The front-end is built using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: cardashcamera,
    source_code_link: "https://github.com/raymondfajiculay/Car-Dash-Camera",
  },
  {
    name: "Door Ringer",
    description:
      "This project is a responsive front-end implementation of a Door Ringer Website. It provides a user-friendly interface for placing sports bets and managing user accounts. The front-end is built using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: doorringer,
    source_code_link: "https://github.com/raymondfajiculay/Door-Ringer",
  },
];

export { services, technologies, experiences, projects };
