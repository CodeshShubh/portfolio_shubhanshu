import { TechIconType, ProjectDetailsType, NavLinkType } from "@/Types/LinksTypes"

// these links form -> https://devicon.dev/
export const techIcons:TechIconType[] = [
    { name: "JavaScript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "EJS", link: "/ejs.svg" },
    { name: "React.js", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "PWA", link: "https://raw.githubusercontent.com/CodeshShubh/icons/main/pwa.png" },
    { name: "Redux Toolkit", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    { name: "Manifest.json", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" },
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
    { name: "TailwindCSS", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "StyledComponents", link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/styledcomponents/styledcomponents-original.svg" },
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




export const projectDetails:ProjectDetailsType[] = [
    {
        name: "Code Craft",
        href: "/yellowTrucks.png",
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente totam, minus suscipit amet hic delectus explicabo,maxime maiores et culpa optio deleniti atque dolor id laboriosam",
        tech: ["JS", "Html5", "Css3", "Dom", "PWA", "M.json", "SW", "SEO"],
        resources: {
            liveDemo: "https://your-demo-link.com",
            github: "github.com"
        }
    },
]