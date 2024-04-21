/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBagShopping,
  faBars,
  faDiceD6,
  faEnvelope,
  faWindowRestore,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import {
  avatar,
  awsIcon,
  oKdramas,
  cssIcon,
  eslintIcon,
  gitIcon,
  githubIcon,
  htmlIcon,
  javaIcon,
  jsIcon,
  boba,
  musicLovers,
  nodeIcon,
  psqlIcon,
  pyIcon,
  reactIcon,
  reduxIcon,
  viteIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  reduxIcon,
  nodeIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there! I'm thrilled to have you here.",

    "I'm Camille, a 24-year-old recent graduate from App Academy Coding Bootcamp, specializing in Full Stack Software Engineering. Growing up surrounded by computers and emerging technologies, my passion for web development naturally took root.",

    "Outside of my coding adventures, I indulge in the joy of cooking various recipes, with my parents serving as my wonderful taste testers during my free time. I also cherish spending quality moments with friends and exploring new local areas.",

    "I am constantly excited to collaborate with individuals and teams who share my enthusiasm for creating exceptional experiences.",

    "Your visit to my portfolio is truly appreciated!",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "oKdramas",
    description:
      "A review site for your favorite Korean Drama Shows where you can learn more about the actors and other dramas that may spark your interest!",
    image: oKdramas,
    source_code_link: "https://github.com/camillejoanie/oKdrama",
    demo_link: "https://okdramas.onrender.com/",
  },
  {
    name: "Music Lovers",
    description: "A Spotify Clone with a stylistic twist",
    image: musicLovers,
    source_code_link: "https://github.com/syped/music-lovers",
    demo_link: "https://music-lovers-docker.onrender.com/",
  },
  {
    name: "AirBnBOBA",
    description: "Try booking your favorite boba spot for your next big event!",
    image: boba,
    source_code_link: "https://github.com/camillejoanie/AirBnBoba",
    demo_link: "https://camille-airbnb-api.onrender.com/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "aws",
    title: "Amazon Web Services",
    icon: awsIcon,
    description:
      "I'm AWS certified, skilled in cloud infrastructure and security. I manage access, design secure networks, implement encryption, adhere to best practices, comply with standards, and monitor security.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "psql",
    title: "Postgresql",
    icon: psqlIcon,
    description:
      "I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
  },
  {
    id: "py",
    title: "Python",
    icon: pyIcon,
    description:
      "With my Python expertise, I excel in coding functions, crafting graphical interfaces, and developing robust applications using frameworks such as Flask for creating lightweight and efficient web applications. I'm adept at leveraging the features of these frameworks to rapidly develop scalable and maintainable solutions. Additionally, I have experience integrating backend services, managing databases, and implementing authentication and authorization mechanisms within these frameworks.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  {
    id: "express",
    title: "Express",
    icon: nodeIcon,
    description:
      "Proficient in creating robust APIs and server-side applications, I leverage Express to build scalable and efficient backends that seamlessly handle HTTP requests and enhance overall application performance.",
  },
  {
    id: "redux",
    title: "Redux",
    icon: reduxIcon,
    description:
      "With Redux, I efficiently manage state in React applications, ensuring a single source of truth for data and facilitating seamless communication between components. I utilize Redux middleware for handling asynchronous actions, optimizing performance, and enhancing code maintainability.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills };
