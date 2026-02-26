import { SiFacebook, SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa";

export const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT ?? 3000;
export const SITE_URL = isProduction ? "https://nevin.vercel.app" : `http://localhost:${PORT}`;

export const GITHUB_USERNAME = "sibinsabu2019"; 
export const SITE_NAME = "Sibin Sabu";
export const SITE_GITHUB_URL = "https://github.com/sibinsabu2019/";
export const SITE_FACEBOOK_URL = "https://www.facebook.com/";
export const SITE_INSTAGRAM_URL = "https://www.instagram.com/sibin_sabu_____";
export const SITE_LINKEDIN_URL = "https://www.linkedin.com/in/sibin-sabu-4159b5277/";

export const authorName = "Sibin Sabu";

export const SITE_KEYWORDS = [
  `${authorName}`, "Software Engineer", "React Developer", "Next.js Developer", "Full Stack Developer", 
  "Mendix Developer", "TypeScript Developer", "JavaScript Developer", "Web Developer", "Web Development", "Tech Enthusiast", 
  "Frontend Developer", "Backend Developer", "App Development", "Tech Portfolio", "GitHub", "Personal Website", 
  "Software Development", "Software Solutions", "Web Apps", "Tech Projects", "Tech Stack", "Developer Portfolio",
  "Developer Journey", "Software Engineering", "React Projects", "Full Stack Projects", "Next.js Projects", 
  "TypeScript Projects", "App Development Projects", "Open Source Projects", "Tech Expertise"
];

export const SOCIAL_LINKS = [
  {
    href: SITE_GITHUB_URL,
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: SITE_FACEBOOK_URL,
    title: "Facebook",
    icon: SiFacebook,
  },
  {
    href: SITE_INSTAGRAM_URL,
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: SITE_LINKEDIN_URL,
    title: "LinkedIn",
    icon: FaLinkedinIn,
  },
];

//Layout
export const layoutUI = {
  lightImagePath: "/images/logo/nlogo-black-transparent.svg",
  darkImagePath: "/images/logo/nlogo-white-transparent.svg",
};

//Home Page
export const homePage = {
  title: "Sibin Sabu's Portfolio",
  description: "Sibin Sabu's Portfolio Website Home Page",
  metaTitle: `Meet ${authorName} - Building the Future with Modern Technology`,
  metaDesc: `${authorName} is a Software Engineer with a drive for creating impactful, scalable solutions across platforms using the latest in modern technology and development tools.`,
  metaKeywords: [
    "Software Engineer", "Digital Solutions", "Web Development", "Modern Technologies", 
    "React", "Next.js", "TypeScript", "JavaScript", "Frontend Developer", "Tech Enthusiast", 
    "Portfolio", "Web Apps", "India Developer", "GitHub", "Personal Website"
  ],
};

export const ABOUTME = {
  aboutMe: "About Me",
  knowMore: "Know more about me",
} as const;

export const contactInfo = {
  promptHeading: "Any questions?",
  promptText: "Feel free to reach out to me!",
  email: "sibinsabu2019@gmail.com",
};

export const introText = {
  greetingLeft: `I'm ${authorName}, a Software Engineer building`,
  greetingRight: "websites & Mobiles Apps- using modern technologies",
  location: "India • UTC/GMT +5:30",
  imagePath: "/images/logo/nlogo-black-bg.svg",
};

export const techTags: TechTags = {
  author: "Sibin", // First name only
  imagePath: "/images/logo/nlogo-black-bg.svg",
  label: "Next.js",
  label2: "React.js",
  label3: "Flutter",
  label4: "Firebase",
};

//About Page
export const aboutPage = {
  title: "About",
  description: `Hi there! I am ${authorName}, a Software Engineer who loves to solve problems using modern technologies.`,
  metaTitle: `Get to Know ${authorName} - Passionate Software Engineer & Tech Enthusiast`,
  metaDesc: `Explore ${authorName}'s background, skills, and mindset. Learn how his love for technology, creativity, and problem-solving defines his journey as a software engineer.`,
  metaKeywords: [
    "Software Engineer", `About ${authorName}`, "Tech Professional", "Web Developer", 
    "Tech Enthusiast", "React.js", "Next.js", "Full Stack Developer", "Software Development", 
    "Creative Thinker", "Problem Solver", "Team Player", "Software Solutions", "Developer Journey"
  ],
};

export const whoAmIData = {
  bio: {
    role: "Software Engineer",
    birthDate: "2000-03-01", //yyyy-mm-dd format strictly
    description: "I'm passionate about building cutting-edge applications that solve real-world problems. With a blend of technical expertise, creative thinking, and a constant hunger for learning, I develop solutions that are not only functional but also impactful.",
  },
  skills: [
  "Flutter",
  "Dart",
  "Firebase",
  ".NET",
  "MySQL",
  "PostgreSQL",
  "Spring Boot",
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "REST API Development",
  "Android Studio",
  "Git",
  "GitHub",
  "DigitalOcean",
  "Linux",
  "VS Code",
  "IntelliJ IDEA",
  "Canva",
  "Photoshop"
],
  whyMe: [
    {
      id: 1,
      text: "A creative thinker with a knack for solving challenging problems.",
    },
    {
      id: 2,
      text: "Always on the pulse of the latest tech trends to deliver forward-thinking solutions.",
    },
    {
      id: 3,
      text: "A team player with a passion for collaboration and innovation.",
    },
  ],
  aboutThisSite: {
    Framework: "Next.js",
    Authentication: "Next Auth",
    "State Management": "Zustand",
    Deployment: "Vercel",
    Styling: "Tailwind CSS",
    "UI Components": ["Headless UI", "Radix UI", "Shadcn UI"],
    Animations: ["Motion", "React Spring", "TailwindCSS Animate"],
  },
};

//Cert Page
export const certPage = {
  title: "Certificates",
  description: "Check out some of the certifications I have earned.",
  metaTitle: `${authorName}'s Certifications & Achievements`,
  metaDesc: `Explore the professional certifications of ${authorName}, highlighting his expertise and commitment to mastering modern software technologies.`,
  metaKeywords: [
    `${authorName} Projects`, "Software Engineering Projects", "Web Development Projects", 
    "React Projects", "Next.js Projects", "TypeScript Projects", "GitHub Portfolio", "Tech Projects", 
    "Full Stack Development", "Open Source Projects", "Software Solutions", "App Development"
  ],  
};

export const certificates: Certificate[] = [
  {
    id: 1,
    certificateName: "AI For Everyone",
    description: "AI For Everyone is an online course authorized by deeplearning.ai and offered through Coursera.",
    issuer: "deeplearning.ai",
    issueDate: "06-06-2020",
    imgPath: "/images/certificates/cert1.webp",
  },
  {
    id: 2,
    certificateName: "IT Security: Defense against the digital dark arts",
    description: "IT Security: Defense against the digital dark arts is an online course authorized by Google and offered through Coursera.",
    issuer: "Google",
    issueDate: "07-10-2023",
    imgPath: "/images/certificates/cert2.webp",
  },
  {
    id: 3,
    certificateName: "Python Data Structures",
    description: "Python Data Structures is an online course authorized by the University of Michigan and offered through Coursera.",
    issuer: "University of Michigan",
    issueDate: "04-02-2022",
    imgPath: "/images/certificates/cert3.webp",
  },
  {
    id: 4,
    certificateName: "Programming for Everybody",
    description: "Programming for Everybody (Getting Started with Python) is an online course authorized by the University of Michigan and offered through Coursera.",
    issuer: "University of Michigan",
    issueDate: "06-02-2020",
    imgPath: "/images/certificates/cert4.webp",
  },
  {
    id: 5,
    certificateName: "Mendix Rapid Developer Certification",
    description: "Certification awarded for completing the Mendix Rapid Developer course, demonstrating proficiency in Mendix low-code development.",
    issuer: "Mendix",
    issueDate: "2023-09-04",
    imgPath: "/images/certificates/cert5.webp",
  },
  {
    id: 6,
    certificateName: "Voice of Customer (VoC)",
    description: "Voice of Customer (VoC) Training held in December 2021 as part of the Young Innovators Programme (YIP) 2021 conducted by the Kerala Development and Innovation Strategic Council (K-DISC).",
    issuer: "K-DISC",
    issueDate: "15-10-2021",
    imgPath: "/images/certificates/cert6.webp",
  },
  {
    id: 7,
    certificateName: "Workshop on UI/UX Design",
    description: "Workshop on UI/UX Design organized by the IEEE Photonics Society Student Chapter, Mangalam College of Engineering, Kottayam, Kerala, India.",
    issuer: "IEEE Photonics Society",
    issueDate: "17-06-2021",
    imgPath: "/images/certificates/cert7.webp",
  },
];

//Journey Page
export const journeyPage = {
  title: "Journey",
  description: "Explore my experiences and learning path that shaped my career in software development.",
  metaTitle: `${authorName}'s Career & Education Timeline`,
  metaDesc: `Trace the growth of Software Engineer ${authorName} through his academic milestones and industry experience in software development and innovation.`,
  metaKeywords: [
    `${authorName} Journey`, "Software Engineer Career", "Developer Education", "Tech Career Path", 
    "Software Engineer Experience", "Developer Timeline", "Tech Education", "Professional Development", 
    "Tech Experience", "Software Engineering Journey", "Tech Milestones", "Career Timeline", "Industry Experience"
  ],  
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer",
    organization: "Cinque Technologies",
    date: "June 2025 - Present",
    description: ["Developing and maintaining software applications."],
  },
  {
    id: 2,
    title: "Software Engineer",
    organization: "Verdant IT solutions ",
    date: "september 2023 - june 2024",
    description: ["Worked on WEB & MOBILE Development ,FLutter,Next js, HTML, CSS and other technologies.",],
  },
  {
    id: 3,
    title: "Intern",
    organization: "Verdant IT solutions",
    date: "june 2023 - september 2023",
    description: ["Worked on WEB & MOBILE Development ,FLutter,Next js, HTML, CSS and other technologies."],
  },
];

export const education: Education[] = [
  {
    id: 1,
    course: "Computer Science & Engineering",
    institution: "College of Engineering and Management Punnapra, Alappuzha, Kerala",
    period: "2019 - 2023",
  },
   {
    id: 2,
    course: "Deploma in Computer Engineering ",
    institution: "Sree Narayayana Higher Secondary school Poothadi",
    period: "2017 - 2019",
  },
  {
    id: 3,
    course: "Higher Secondary",
    institution: "Sree Narayayana Higher Secondary school Poothadi",
    period: "2015 - 2017",
  },
  {
    id: 4,
    course: "High School",
    institution: "Sree Narayayana Higher Secondary school Poothadi",
    period: "2013 - 2015",
  },
];

//Projects Page
export const projectPage = {
  title: "Projects",
  description: "Check out some of the projects I've worked on.",
  metaTitle: `${authorName}'s Project Portfolio`,
  metaDesc: `Browse through ${authorName}'s latest development projects, featuring modern tech stacks like React, Next.js, TypeScript, Spring Boot, and Tailwind CSS. Built to be performant, scalable, and visually stunning.`,
  metaKeywords: [
    `${authorName} Projects`, "Software Engineering Projects", "Web Development Projects", 
    "React Projects", "Next.js Projects", "TypeScript Projects", "GitHub Portfolio", "Tech Projects", 
    "Full Stack Development", "Open Source Projects", "Software Solutions", "App Development"
  ],
};

export const projects: Project[] = [
  {
    id: "project1",
    name: "QK wash",
    description: "A smart laundry platform for booking and activating automated washing machines",
    detailedDescription: "QK Wash is a Flutter-based smart laundry platform that allows users to locate nearby washing hubs, make secure payments via Razorpay, and remotely activate automated washing machines. The system integrates Firebase backend services for real-time data and user management.",
    techstack:  [
  "Flutter",
  "Firebase Authentication",
  "Cloud Firestore",
  "Razorpay",
  "IoT Integration",
],
    slug: "qk-wash",
    website: "",
    imgPath: "/images/projects/qkwash.webp"
  },
  {
    id: "project2",
    name: "Badminton FSPC MU",
    description: "A badminton club booking platform to reserve slots, explore coaches, and review clubs",
    detailedDescription: "Badminton FSPC MU is a Check Republic–based badminton discovery and booking app that lets users browse clubs and coaches, book available court slots, and share reviews. Built with Firebase, it supports real-time slot availability, user accounts, and secure data management.",
    techstack: ["Firebase", "Thymeleaf", "Bootstrap", "MySQL", "Tomcat"],
    slug: "badminton-fspc-mu",
    website: "https://badmintonfsps.cz/",
    imgPath: "/images/projects/Badminton.webp"
  },
  {
    id: "project3",
    name: "LicenseMaster",
    description: "A comprehensive driving license preparation app with practice tests, road signs, and RTO resources.",
    detailedDescription: "LicenseMaster is a Flutter-based driving license preparation app that helps users practice exam questions, learn road signs, explore RTO codes, and find nearby driving schools by city. Powered by Firebase, it delivers real-time updates, structured learning modules, and push notifications for test reminders.",
    techstack: [
  "Flutter",
  "Firebase Authentication",
  "Cloud Firestore",
  "Firebase Storage",
  "Push Notifications (FCM)"
],
    slug: "licensemaster",
    github: "https://play.google.com/store/apps/details?id=com.nextgen.app&pcampaignid=web_share",
    imgPath: "/images/projects/license.webp"
  },
  {
    id: "project4",
    name: "Mehndi & Hair Design",
    description: "A beauty inspiration app for mehndi and hairstyle designs with uploads, ads, and premium content",
    detailedDescription: "Mehndi & Hair Design is a Flutter-based design gallery app featuring curated mehndi and hairstyle collections, with the ability for users to upload and share custom designs. Built with Firebase, it supports real-time content updates, push notifications, AdMob monetization, and in-app purchases for premium design packs.",
    techstack: [ "Flutter",
  "Firebase Authentication",
  "Cloud Firestore",
  "Firebase Storage",
  "Firebase Cloud Messaging (Push Notifications)",
  "Google AdMob",
  "In-App Purchases"],
    slug: "mehndi-hair-design",
    github: "https://play.google.com/store/apps/details?id=com.techify.mehandidesigns&pcampaignid=web_share",
    imgPath: "/images/projects/mehandi.webp"
  },
  {
    id: "project5",
    name: "Qatar Money Exchange",
    description: "A secure money exchange platform for real-time international remittances from Qatar.",
    detailedDescription: "Qatar Money Exchange is a cross-platform remittance application that enables users to transfer funds globally based on live market exchange rates. The system integrates biometric verification, secure authentication, and real-time transaction tracking, backed by a .NET and MySQL server infrastructure.",
    techstack: [  "Flutter",
  ".NET Core",
  "MySQL",
  "Firebase SMS Authentication",
  "Biometric Authentication",],
    slug: "qatar-money-exchange",
    github: "https://play.google.com/store/apps/details?id=com.nec.remittance&pcampaignid=web_share",
    imgPath: "/images/projects/exchange.webp"
  },
   {
    id: "project6",
    name: "Bhagyam-Lottery App",
    description: "A real-time lottery tracking app with barcode scanning and instant result notifications.",
    detailedDescription: "Lottery Live is a Flutter-based application that delivers real-time lottery results, barcode scanning for ticket validation, and instant push notifications for winning updates. Built on Firebase, the platform ensures live data synchronization and predictive insights for enhanced user engagement.",
    techstack:[
  "Flutter",
  "Firebase Authentication",
  "Cloud Firestore / Realtime Database",
  "Firebase Cloud Messaging",
  "Barcode Scanner Integration"
],
    slug: "bhagyam-lottery",
    github: "https://play.google.com/store/apps/details?id=com.RatingApps.keralaLotteryResult&pcampaignid=web_share",
    imgPath: "/images/projects/lottery.webp"
  }
]

//Tech Page
export const techPage = {
  title: "Tech",
  description: "Check out some of the technologies and tools i am using",
  metaTitle: `${authorName}'s Tech Stack`,
  metaDesc: `Browse through ${authorName}'s latest development projects, featuring modern tech stacks like React, Next.js, TypeScript, Spring Boot, and Tailwind CSS. Built to be performant, scalable, and visually stunning.`,
 metaKeywords: [
  "Tech Stack",
  "Tools I Use",
  "Flutter",
  "Dart",
  "Firebase",
  "Android Development",
  ".NET",
  "MySQL",
  "PostgreSQL",
  "Spring Boot",
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "GitHub",
  "DigitalOcean",
  "Linux",
  "VS Code",
  "IIS Server",
  "REST API",
  "Full Stack Development",
  "Mobile App Development",
  "Backend Development"
],
};

export const stackGroups = [
  {
    id: "coding",
    name: "Coding Tools",
    menuItems: [
      {
        imagePath: "/images/tech/vscode.png",
        name: "VS Code",
        description: "Code editor",
        url: "https://code.visualstudio.com/",
      },
      {
        imagePath: "/images/tech/material-icon-theme.png",
        name: "Material Icons",
        description: "VS Code theme",
        url: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
      },
      {
        imagePath: "/images/tech/flutter.png",
        name: "Flutter",
        description: "Android KIT",
        url: "https://flutter.dev/",
      },
      {
        imagePath: "/images/tech/Android Studio.png",
        name:"Android Studio",
        description: "Android IDE",
        url: "https://developer.android.com/studio",
      },
      {
        imagePath: "/images/tech/git.png",
        name: "Git",
        description: "Version control",
        url: "https://git-scm.com",
      },
      {
        imagePath: "/images/tech/github.png",
        name: "GitHub",
        description: "Code hosting",
        url: "https://github.com",
      },
    ],
  },
  {
    id: "design",
    name: "Design Tools",
    menuItems: [
      {
        imagePath: "/images/tech/figma.png",
        name: "Figma",
        description: "UI design",
        url: "https://www.figma.com",
      },
      {
        imagePath: "/images/tech/canva.png",
        name: "Canva",
        description: "Graphic design",
        url: "https://www.canva.com",
      },
      {
        imagePath: "/images/tech/picsart.png",
        name: "Picsart",
        description: "Photo editor",
        url: "https://picsart.com",
      },
    ],
  },
  {
    id: "hosting",
    name: "Deployment & Hosting",
    menuItems: [
      {
        imagePath: "/images/tech/vercel.png",
        name: "Vercel",
        description: "Web hosting",
        url: "https://vercel.com",
      },
      {
        imagePath: "/images/tech/netlify.png",
        name: "Netlify",
        description: "Deploy platform",
        url: "https://www.netlify.com",
      },
      {
        imagePath: "/images/tech/cloudflare.png",
        name: "Cloudflare",
        description: "DNS & CDN",
        url: "https://www.cloudflare.com/",
      },
    ],
  },
  {
    id: "tools",
    name: "Productivity Tools",
    menuItems: [
      {
        imagePath: "/images/tech/postman.png",
        name: "Postman",
        description: "API testing",
        url: "https://www.postman.com/",
      },
      {
        imagePath: "/images/tech/chatgpt.png",
        name: "ChatGPT",
        description: "AI assistant",
        url: "https://chat.openai.com",
      },
    ],
  },
  {
    id: "utilities",
    name: "Utilities",
    menuItems: [
      {
        imagePath: "/images/tech/winrar.png",
        name: "WinRAR",
        description: "File archiver",
        url: "https://www.win-rar.com",
      },
      {
        imagePath: "/images/tech/winscp.png",
        name: "WinSCP",
        description: "FTP client",
        url: "https://winscp.net",
      },
    ],
  },
  {
    id: "browsers",
    name: "Browsers",
    menuItems: [
      {
        imagePath: "/images/tech/chrome.png",
        name: "Chrome",
        description: "Web browser",
        url: "https://www.google.com/chrome/",
      },
      {
        imagePath: "/images/tech/brave.png",
        name: "Brave",
        description: "Private browser",
        url: "https://brave.com",
      },
    ],
  },
];

//Coming Soon Page
export const comingSoon = {
  title: "Coming soon",
  description: "The page you are viewing is under construction",
  metaTitle: `Coming soon`,
  metaDesc: `The page you are viewing is under construction`,
  metaKeywords: [
    "Coming Soon", "Under Construction"
  ],  
};

// Default Metadata
export const metadataValues = {
  description: `I'm ${authorName}, a passionate software engineer specializing in building innovative digital solutions using modern technologies like React, Next.js, and TypeScript.`,
  openGraph: {
    description: `Explore the portfolio of ${authorName} — a Software Engineer creating impactful projects, sharing his career journey, and more. Dive into his work with cutting-edge technologies.`,
    imagePath: "/images/logo/share.png",
    imageType: "image/png",
  },
  twitter: {
    description: "Software engineer crafting seamless digital experiences with Next.js, React, TypeScript, and more.",
    imagePath: `/images/logo/share.png`,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};