// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import zidio_d from './assets/tech_logo/zidio_d.jpeg';

// Project Section Logo's
import githubdetLogo from './assets/tech_logo/vercel.png';
import csprepLogo from './assets/tech_logo/vercel.png';
import movierecLogo from './assets/tech_logo/vercel.png';
import taskremLogo from './assets/tech_logo/vercel.png';
import npmLogo from './assets/tech_logo/vercel.png';
import webverLogo from './assets/tech_logo/vercel.png';
import cmLogo from'./assets/tech_logo/vercel.png';
import imagesearchLogo from './assets/tech_logo/vercel.png';
import removebgLogo from'./assets/tech_logo/vercel.png';
import alumni from './assets/tech_logo/alumni.png';
import grabsaver from './assets/tech_logo/grabsaver.png';
import interview from  './assets/tech_logo/interview.png';
import portfolio from './assets/tech_logo/portfolio.png';
import agri from './assets/tech_logo/agri.png';
import resume from './assets/tech_logo/resume.png';

// Education Section Logo's
import mgm_logo from './assets/tech_logo/mgm_logo.jpeg';
import bsaLogo from './assets/tech_logo/vercel.png';
import Gurukul from './assets/tech_logo/Gurukul.png';
import kusumtai from './assets/tech_logo/kusumtai.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: zidio_d,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "August 2025 - November 2025",
    desc: "During my internship at Zidio Development, I worked as a Web Development Intern, where I developed an Excel Analytics Platform using the MERN stack. The project enables users to securely upload Excel or CSV files, process the data, and visualize it through interactive 2D and 3D charts. ilwind CSS, and built efficient backend APIs for data analytics. This experience strengthened my skills in full-stack development, data visualization, and real-world project deployment. ",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
     
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      
     
    ],
  },
  // {
  //   id: 1,
  //   img: vercelLogo,
  //   role: "Fullstack Engineer",
  //   company: "Agumentik Group of Companies",
  //   date: "July 2023 - March 2024",
  //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "HTML",
  //     "CSS",
  //     "SQL",
  //   ],
  // },
  // {
  //   id: 2,
  //   img: vercelLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "Javascript",
  //     "Bootstrap",
  //     "Figma",
  //     "Material UI",
  //   ],
  // },
];

export const projects = [
  {
      id: 0,
      title: "My Portfolio",
      description:
        "A modern, responsive portfolio website showcasing my skills, education, and projects. Built with clean, professional design, smooth animations, and interactive features, it includes dedicated sections for skills, education, projects, and contact information. Fully optimized for all devices, the site highlights my ability to build polished and functional web applications.",
      image: portfolio,
      tags: ["HTML", "CSS","TailwindCSS", "React","JavaScript"],
      github: "https://github.com/Shivani544/Grab_Saver",
      webapp: "/",
    },
    {
      id: 1,
      title: "GrabSaver",
      description:
        "GrubSaver is a smart web-based platform that connects food donors such as restaurants and households with NGOs, buyers, and biogas plants, ensuring that extra edible food is redistributed efficiently instead of being wasted, thereby promoting sustainability and reducing environmental impact.",
      image: grabsaver,
      tags: ["HTML", "CSS", "Flask", "MongoDB", "API"],
      github: "https://github.com/Shivani544/Grab_Saver",
      webapp: "/",
    },
    {
      id: 2,
      title: "InterviewHelper.ai",
      description:
        "This web application is designed to help users enhance their interview preparation through AI-powered personalized question generation. It provides a user-friendly dashboard where users can track their progress and access topic-focused questions based on their interests and experience. The platform ensures an interactive and efficient way to practice and build confidence for technical interviews.",
      image: interview,
      tags: ["React JS", "Node.js", "MongoDB", "Express",  "JavaScript"],
      github: "https://github.com/Shivani544/InterviewHelper.ai",
      webapp: "https://interviewhelper-ai.onrender.com",
    },
    
  
    {
      id: 3,
      title: "Alumni Management System",
      description:
        "This web application The Alumni Management System is a web-based platform designed to help colleges manage alumni data and strengthen alumni-institute connections. It includes features like registration, login, search, and news updates, built using HTML, CSS, JavaScript, PHP, and MySQL. ",
      image: alumni,
      tags: ["React JS", "Node.js", "MongoDB", "Express",  "JavaScript"],
      github: "https://github.com/Shivani544/Alumni_Management_System",
      webapp: "/",
    },
    {
      id: 4,
      title: "AI-Driven Smart Seeding",
      description:
        "The AI-Driven Smart Seeding Decision Support System uses machine learning and real-time weather data to recommend accurate seed quantity and proper spacing for different crops. This helps reduce seed wastage, lower farming costs, and improve crop yield through precision agriculture.",
      image: agri,
      tags: ["React JS", "Node.js","Express", "Tailwind CSS","JavaScript"],
      github: "https://github.com/Shivani544/Smart_seeding_DSS",
      webapp: "https://smart-seeding-dss.onrender.com/",
    },
    {
      id: 5,
      title: "Resume Builder",
      description:
        "The Resume Builder is a web application that enables users to create, manage, and download professional resumes through a guided interface. It simplifies resume creation by automating formatting and providing ready-to-use templates.",
      image: resume,
      tags: ["React JS", "Node.js","Express", "Tailwind CSS","JavaScript","MongoDB"],
      github: "https://github.com/Shivani544/Resume-Builder",
      webapp: "https://resume-builder-frontend-3y6h.onrender.com/",
    },
    
  ];  

  export const education = [
    {
      id: 0,
      img: mgm_logo,
      school: "MGM's College Of Engineering, Nanded",
      date: "Aug 2022 - Present",
      grade: "7.04 CGPA",
      desc: "I am in the final year of my B.Tech in Computer Science and Engineering at MGM's College of Engineering, Nanded. Over the course of my studies, I have built a strong grasp of key computer science areas including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. Beyond academics, I’ve actively engaged in coding competitions, technical workshops, and various student-led tech events, all of which have sharpened my hands-on abilities and kept me in touch with evolving industry trends. My journey at MGM has been instrumental in developing both my technical skill set and my overall professional outlook.",
      degree: "Bachelor of Technology - BTech (Computer Science and Engineering)",
    },
    {
      id: 1,
      img: kusumtai,
      school: "Kusumati Jr. College, Cidco",
      date: "March 2021- March 2022",
      grade: "67.00%",
      desc: "I completed my Higher Secondary Education (12th) from Kusumtai Junior College, Cidco. under the Maharashtra State board with a focus on science. where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Higher Secondary Education - HSC (Science)",
    },
  
    {
      id: 2,
      img: Gurukul,
      school: "Gurukul Public School, Dabhad",
      date: "Apr 2019 - March 2020",
      grade: "87.20%",
      desc: "I completed my Class 10 education under the Maharashtra State Board from Gurukul Public School, Dabhad , where I studied core subjects like Marathi, English, Mathematics, Science, and Social Science, along with Computer Science.",
      degree: "Secondary School Certificate, SSC (Semi-English)",
    },
  ];
