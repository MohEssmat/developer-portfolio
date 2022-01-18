import emoji from "react-easy-emoji";

export const greetings = {
  name: "Mohamed Essmat",
  title: "Hi all, I'm Moe",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
  resumeLink: "/Essmat-Resume.pdf",
};

export const openSource = {
  githubUserName: "MohEssmat",
};

export const contact = {};

export const socialLinks = {
  github: "https://github.com/MohEssmat",
  linkedin: "https://www.linkedin.com/in/mohamed-essmat-0b771123/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "logos:flutter",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "vscode-icons:file-type-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "University of Denver",
    subHeader: "Full Stack Web Developer Boot Camp",
  },
  {
    schoolName: "Cairo University",
    subHeader: "Bachelor of business",
  },
];

export const experience = [
  {
    role: "Full-Stack Web Developer",
    company: "Freelance - Self Employed",
    companylogo: "/img/icons/common/google.svg",
    date: "April 2020 – Present",
    desc: "Create commercial websites for several clients - Wrote structured, tested, readable, and maintainable code - Developed code following common security practices and development design patterns",
  },
];

export const projects = [
  {
    name: "Watch-iT Movie App",
    desc: "Watch-iT application is a movie app. It pulls movies from The Movie Database using API calls. Users have the option to view the Now Playing, Upcoming, Tob Rated and Popular movies, sort them by genre or search for other movies using the search feature, and get back information about each movie they want to watch, including a trailer! Sign up to create a list of your favorites!",
    link: "https://thawing-fjord-57482.herokuapp.com/",
  },
  {
    name: "uProjekt Project Calendar",
    desc: "Programmers require a responsive online planner for scheduling timeframes to complete their projects: uProjekt. The planner will be allocated based on a project's deadline, with Typical, Accelerated, and Custom options available. Currently these features are in a placeholder stage.",
    github: "https://github.com/MohEssmat/uProjekt",
    link: "https://mohessmat.github.io/uProjekt/",
  },
  {
    name: "Lit Custom Shop",
    desc: "Lit custom shop is e-commerce website allow users to custom, upload and design their Design/Logo/Image, It's print on demand clothes website",

    link: "https://www.litcustomshop.com/",
  },
  {
    name: "View More Project",

    link: "https://github.com/MohEssmat",
  },
];

export const feedbacks = [
  {
    name: "Hassan Mehmood",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Maheen Altaf",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];
