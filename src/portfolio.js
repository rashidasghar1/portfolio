import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration Toggle
const illustration = {
  animated: true
};

// Greeting
const greeting = {
  username: "Rashid Asghar",
  title: "Hi all, I'm Rashid",
  subTitle: emoji(
    "A passionate Data Scientist and AI Engineer 🚀 with experience designing and deploying diverse AI solutions using LangChain, LangGraph, Agentic AI, and RAG. Proficient in Python, pandas, NumPy, and building robust LLM-powered applications across multiple domains."
  ),

    resumeLink: "https://drive.google.com/file/d/1N3sCwXgeRGboAGmk2oy-VnKctDq0mmca/view?usp=drivesdk"
,
  displayGreeting: true
};

// Social Media
const socialMediaLinks = {
  github: "https://github.com/rashidasghar1",
  linkedin: "https://www.linkedin.com/in/rashidasghar/",
  email: "rashidasghar1609@gmail.com",
  display: true
};

// Skills
const skillsSection = {
  title: "What I do",
  subTitle:
    "CURIOUS DATA SCIENTIST WHO BUILDS PRACTICAL AI SYSTEMS WITH DATA, ML & LLMs",
  skills: [
    emoji(
      "⚡ Design and develop intelligent applications using Large Language Models (LLMs), RAG, and Agentic AI"
    ),
    emoji(
      "⚡ Build machine learning pipelines for classification, prediction, and automation tasks"
    ),
    emoji(
      "⚡ Work with LangChain, LangGraph, and vector databases to orchestrate advanced AI workflows"
    ),
    emoji(
      "⚡ Analyze, clean, and manipulate structured and unstructured data using pandas and NumPy"
    ),
    emoji(
      "⚡ Deploy AI-powered tools and APIs using FastAPI, Streamlit, and cloud integrations"
    )
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "NumPy", fontAwesomeClassname: "fas fa-square-root-alt" },
    { skillName: "Pandas", fontAwesomeClassname: "fas fa-database" },
    { skillName: "FastAPI", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Streamlit", fontAwesomeClassname: "fas fa-stream" },
    { skillName: "LangChain", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "LangGraph", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "RAG", fontAwesomeClassname: "fas fa-book-open" },
    { skillName: "OpenAI", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Microsoft Azure", fontAwesomeClassname: "fas fa-cloud" }
  ],
  display: true
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Jadavpur University",
      logo: require("./assets/images/julogo.png"),
      subHeader: "Bachelor of Engineering in Electronics & Instrumentation",
      duration: "2020-2024",
      // desc: "Worked on data-centric projects and published 3 papers.",
      // descBullets: [
      //   "Focused coursework in AI, ML, and Control Systems",
      //   "Led AI-based research initiatives"
      // ]
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Science / ML", progressPercentage: "85%" },
    { Stack: "AI Engineering (LLMs, RAG, LangChain)", progressPercentage: "80%" },
    { Stack: "Python Programming", progressPercentage: "90%" },
    { Stack: "Backend APIs (FastAPI, Streamlit)", progressPercentage: "75%" },
    { Stack: "Cloud & DevOps (AWS, Azure, Docker)", progressPercentage: "70%" },
    { Stack: "Frontend / UI (basic HTML, CSS, JS)", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Scientist",
      company: "PwC",
      companylogo: require("./assets/images/logo.png"),
      desc: "Contributing to scalable, data-driven solutions using machine learning and LLM-based tools.",
      descBullets: [
        "Designed and deployed AI workflows using FastAPI, OpenAI, and LangChain",
        "Built data pipelines using Pandas, NumPy, and SQL",
        "Worked with AWS and Azure for model deployment and monitoring"
      ]
    }
  ]
};

// Open Source
const openSource = {
  showGithubProfile: true,
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Certifications and awards showcasing technical and academic accomplishments.",
  achievementsCards: [
    {
      title: "Stanford University - Machine Learning",
      subtitle: "Completed Andrew Ng’s ML course with distinction",
      image: require("./assets/images/stanfordlogo.webp"),
      imageAlt: "Stanford Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/7WM6JSAEQB9I"
        }
      ]
    },
    {
      title: "IBM Generative AI Engineering Professional",
      subtitle: "Earned professional certification in Generative AI from IBM",
      image: require("./assets/images/ibmlogo.webp"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/2R8QCL664AVO" // 🔄 Replace with actual link if available
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      subtitle: "Validated foundational AI knowledge and Azure services",
      image: require("./assets/images/microsoftlogo.webp"),
      imageAlt: "Microsoft Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-us/users/RashidAsghar-3432/credentials/B5A9A7CB8AB27BC6?ref=https%3A%2F%2Fwww.linkedin.com%2F" // 🔄 Replace with actual link if available
        }
      ]
    },
    {
      title: "Google Data Analytics Professional Certificate",
      subtitle: "Completed Google’s Data Analytics program on Coursera",
      image: require("./assets/images/googlelogo.webp"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/63XLWCE2QWFA" // 🔄 Replace with actual link if available
        }
      ]
    },
    {
      title: "AI Project Presentation Awards",
      subtitle: "Presented multiple AI projects at tech fests and symposiums, recognized for clarity and innovation",
      image: require("./assets/images/presentationAward.webp"),
      imageAlt: "Presentation Award",
      footerLink: []
        // {
        //   name: "Event Highlights",
        //   url: "https://yourportfolio.com/presentations" // 🔄 Replace with actual link if available
        // }
      
    },
    {
      title: "Public Speaking & Seminars",
      subtitle: "Recognized for public speaking and participation in inter-college speaking competitions and seminars",
      image: require("./assets/images/publicSpeaking.webp"),
      imageAlt: "Public Speaking",
      footerLink: []
      //   {
      //     name: "Seminar Snapshots",
      //     url: "https://yourportfolio.com/public-speaking" // 🔄 Replace with actual link if available
      //   }
      // ]
    }
  ],
  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open.",
  // number: "+91-XXXXXXXXXX",
  email_address: "rashidasghar1609@gmail.com"
};

// Hireable
const isHireable = true;

// Final Export
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable
};
