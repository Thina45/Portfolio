const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Services",
    link: "#services",
  },
];

const words = [
  { text: "Cofee", imgPath: "/images/ideas.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Chaos", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Cofee", imgPath: "/images/ideas.svg" },
  { text: "Chaos", imgPath: "/images/concepts.svg" },
  { text: "Cofee", imgPath: "/images/ideas.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Tech Stack Mastered" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Commitment to Growth" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "public/images/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "public/images/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "public/images/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "public/images/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "public/images/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const educationCards = [
  {
    description:
      "VIT provided me with a comprehensive understanding of advanced computing concepts and industry practices. The institution was pivotal in shaping my professional foundation.",
    logoPath: "/images/Vellore.jpeg",
    title: "Master of Computer Applications",
    date: "2024 - 2026",
    responsibilities: [
      "Specialized in Full Stack Web Development, Cloud, and Quantum Computing.",
      "Built industry-ready projects like PG Admission System and Quantum Apriori Algorithm.",
      "Actively participated in coding contests, seminars, and club activities.",
    ],
  },
  {
    description:
      "Bharath Institute of Technology empowered me to build strong programming skills and explore real-time applications. It laid the groundwork for my transition into MCA.",
    logoPath: "/images/Bharath.jpg",
    title: "Bachelor of Computer Applications",
    date: "2021 - 2024",
    responsibilities: [
      "Studied core subjects like Java, DBMS, Web Technologies, and Data Structures.",
      "Completed mini-projects using Unity, Java, and MERN stack.",
      "Presented papers and workshops at intercollegiate symposiums.",
    ],
  },
  {
    description:
      "My schooling years at SRM Muthamizhl Hr. Sec. School, from Class 6 to 12, shaped my curiosity, discipline, and love for computers.",
    logoPath: "/images/SRM.jpg",
    title: "School Education",

    date: "2013 - 2020",
    responsibilities: [
      " Studied from Class 6 to 12 in the same institution, developing a strong academic foundation.",
      "Opted for Maths-Biology in Higher Secondary, strengthening scientific skills.",
      "Consistently scored high marks in academics and board exams.",
    ],
  },
];

const educationLogos = [
  {
    name: "VIT",
    imgPath: "/images/Vellore.jpeg",
  },
  {
    name: "Bharath Institute",
    imgPath: "/images/Bharath.jpg",
  },
  {
    name: "SRM",
    imgPath: "/images/SRM.jpg",
  },
];

const services = [
  {
    name: "FULL STACK DEVELOPMENT",
    description:
      "Building interactive front-ends and managing back-ends to bring ideas to life.",
  },
  {
    name: "QISKIT",
    description:
      "Building quantum ML models using Qiskit for advanced data solutions.",
  },
  {
    name: "ML ALGORITHM INTEGRATION",
    description:
      "Integrating machine learning algorithms into applications for smarter solutions.",
  },
  {
    name: "API DEVELOPMENT",
    description:
      "Creating APIs to enable seamless communication between services.",
  },

  {
    name: "REACT & NEXT.JS",
    description:
      "Using React and Next.js to build modern, fast, and responsive web applications.",
  },
  {
    name: "DATABASE HANDLING",
    description:
      "Managing databases to store, retrieve, and structure data efficiently.",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/thinakaran.__",
  },

  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/Thinasharma45",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/thinakaran-p",
  },
];

export {
  words,
  abilities,
  counterItems,
  educationCards,
  educationLogos,
  services,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
