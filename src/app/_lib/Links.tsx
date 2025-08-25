import { TechIconType, ProjectDetailsType, NavLinkType } from "@/Types/LinksTypes"

// these links form -> https://devicon.dev/
export const techIcons:TechIconType[] = [
    { name: "JavaScript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "EJS", link: "/ejs.svg" },
    { name: "React.js", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "PWA", link: "https://raw.githubusercontent.com/CodeshShubh/icons/main/pwa.png" },
    { name: "Redux", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "JSON", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
    { name: "Node.js", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", link: "/express.png" },
    { name: "Socketio", link: "/Socket.png" },
    { name: "MongoDB", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    { name: "MySql", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Mongoose", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" },
    { name: "Razorpay", link: "/razorpay.png" },
    { name: "HTML5", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" },
    { name: "CSS3", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "StyledC", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg" },
    { name: "Bootstrap", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "Postman", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Vercel", link: "/vercel.png" },
    { name: "Netlify", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
    { name: "Github", link: "/github.png" },
]

// nav Links
export const navLinks:NavLinkType[] = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

//Projects Detils
export const projectDetails:ProjectDetailsType[] = [
    {
        name: "Code Craft",
        href: "/projects/CodeCraft.png",
        about: "Code Craft is a full-stack web application built with React, Redux, Node.js, Express, and MongoDB, featuring secure authentication with JWT, media handling via Cloudinary, and integrated payments through Razorpay.",
        tech: ["React", "Express", "MongoDB", "Node.js","ChakraUI", "Redux", "Razorpay", "Cloudinary", "JWT"],
        resources: {
            liveDemo: "https://codecraftin.netlify.app/",
            github: "https://github.com/CodeshShubh/codeCraft-Frontend"
        },
        
    },
        {
        name: "Physics Prepration",
        href: "/projects/PhysicsPrep.png",
        about: "Physics Preparation is a full-stack learning platform built with React, Redux, Node.js, Express, and MongoDB, featuring secure authentication with JWT and media management via Cloudinary to help students practice and prepare physics concepts effectively.",
        tech: ["React", "Express", "MongoDB", "Node.js","Tailwind", "Redux", "Cloudinary", "JWT"],
        resources: {
            liveDemo: "https://physicsprepration.netlify.app/",
            github: "https://github.com/CodeshShubh/PhysicsPrepration"
        },
        
    },
            {
        name: "Shop Me",
        href: "/projects/ShopMe.png",
        about: "Shop Me is a front-end shopping cart application built with HTML, CSS, and JavaScript, using JSON for data handling, DOM manipulation for interactivity, and integrated Razorpay for secure checkout and payments.",
        tech: ["HTML", "CSS", "JS", "DOM", "JSON", "JSAuth", "RazorPay"],
        resources: {
            liveDemo: "https://shopme-shubhanshu.netlify.app/",
            github: "https://github.com/CodeshShubh/Shopping-Cart"
        },
        
    },
            {
        name: "The BollyWood Cafe",
        href: "/projects/TheBollywoodCafe.png",
        about: "The Bollywood Cafe is a responsive restaurant website built with HTML, CSS, JavaScript, and Bootstrap, designed to showcase a modern food menu and engaging user experience.",
        tech: ["HTML", "CSS", "JS", "Bootstrap"],
        resources: {
            liveDemo: "https://thebollywoodcafe.netlify.app/",
            github: "https://github.com/CodeshShubh/Shubh-Pizza-Restaurant"
        },
        
    },
            {
        name: "Quiz App",
        href: "/projects/QuizApp.png",
        about: "Quiz App is an interactive web application built with HTML, CSS, JavaScript, and Bootstrap, featuring dynamic questions, instant feedback, and a responsive design for an engaging learning experience.",
        tech: ["HTML", "CSS", "JS", "Bootstrap"],
        resources: {
            liveDemo: "https://quiz-application-shubhanshusaadhiyaan.netlify.app/",
            github: "https://github.com/CodeshShubh/Quiz-app-accio"
        },
        
    },
            {
        name: "Insatgram Clone",
        href: "/projects/IstaClone.png",
        about: "Insatgram Clone is a simple front-end project built with HTML and Bootstrap, replicating the core UI of Instagram to practice responsive layouts and modern design principles.",
        tech: ["HTML","BootStrap"],
        resources: {
            liveDemo: "https://shubhanshu-saadhiyaan-insta-gram.netlify.app/",
            github: "https://github.com/CodeshShubh/insta-Clone"
        },
        
    },
            {
        name: "Yellow Truck",
        href: "/projects/yellowtruck.png",
        about: "Yellow Truck is a business website built using HTML, CSS, and GoDaddy tools, enhanced with PWA support for fast, reliable, and mobile-friendly performance.",
        tech: ["HTML", "CSS", "PWA",],
        resources: {
            liveDemo: "https://yellowtruck.in/",
            github: "https://yellowtruck.in/"
        },
        
    }
]