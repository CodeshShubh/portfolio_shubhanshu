import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";


export default function Page() {
  // these links form -> https://devicon.dev/
  const techIcons = [
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


  return (
    <section className="">
      <div className=" flex justify-between items-center p-6 m-1 font-extrabold">
        <div className=" ">
          <h1>SHUBHANSHU SAADHIYAAN</h1>
        </div>
        <div className=" flex justify-center items-center gap-3">
          <Link href={'#about'}>About Me</Link>
          <Link href={'#skills'}>Skills</Link>
          <Link href={'/projects'}>Projects</Link>
          <Link href={'/contact'}>Contact</Link>
          <button className="ml-12 bg-green-800 font-bold rounded-2xl shadow-2xl text-sm cursor-pointer px-3 py-1.5 text-center ">Download CV</button>
        </div>
      </div>

      {/*  */}
      <div className="  flex justify-between items-center  m-8 mt-20 text-center">

        <div className=" w-4xl ">
          <h1 className=" font-extrabold text-5xl">Hi, I am<br />Shubhanshu Saadhiyaan</h1>
          <p className="  p-5 m-1 w-[89%] mx-auto">Experienced Full Stack Web Developer specializing in the MERN stack,
            with expertise in TypeScript, Next.js, Tailwind CSS, Styled Components,
            and Progressive Web Apps (PWAs). Skilled in building scalable,
            high-performance applications and deploying native-like apps via
            PWA Builder and the Google Play Console.</p>
          <div className="flex justify-center items-center gap-5   w-1/2 mx-auto">
            <button className="bg-green-800 font-bold rounded-2xl shadow-2xl text-sm cursor-pointer px-3 py-1.5 text-center ">Contact Me <TbHandClick className="inline-block ml-1 mb-0.5 size-5" />
            </button>
            <Link href={'/linkin'}><FaLinkedin className="size-10" />
            </Link>
            <Link href={'/github'}><FaGithub className="size-10" />
            </Link>
          </div>
        </div>


        <Image
          src={'/shubhanshu.jpg'}
          alt="Shubhanshu Saadhiyaan"
          width={400}
          height={400}
          className="rounded-2xl mr-15"
        />
      </div>


      {/* about me seciton */}
      <hr className="text-white font-light mt-20 mb-10 w-2/3 mx-auto" />

      <section id="about">

        <div className=" text-center p-3  w-[60%] mx-auto">
          <h1 className=" font-bold text-3xl text-green-800 ">About Me</h1>
          <p className="font-light text-sm leading-tight mb-6 bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent">Get to know me:</p>
          <div className="leading-relaxed space-y-5">
            <p>
              I’m an Experienced Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js)
              with a strong foundation in HTML, CSS, and JavaScript. I build scalable, high-performance,
              and user-friendly web applications with a focus on clean architecture and seamless user experiences.
            </p>

            <p>
              I’m proficient in modern front-end technologies like TypeScript, Next.js, Tailwind CSS, and Styled Components,
              and I have expertise in developing Progressive Web Apps (PWAs), including native app builds with PWA Builder and deployment via
              the Google Play Console.
            </p>

            <p>
              I also have hands-on experience in API integration, authentication (JWT, OAuth), state management (Redux Toolkit),
              and cloud deployment solutions. I enjoy solving complex problems, continuously learning new technologies, and collaborating with teams to bring ideas to life.
            </p>

            <p>
              Currently seeking opportunities to contribute to impactful projects and grow as a developer while delivering exceptional user experiences.
            </p>
          </div>

          <button className="mt-10 bg-green-800 font-bold rounded-2xl shadow-2xl text-sm cursor-pointer px-3 py-1.5 text-center ">Download CV</button>
        </div>

      </section>



      {/* skills section */}
      <hr className="text-white font-light mt-20 mb-10 w-2/3 mx-auto" />

      <section id='skills'>

        <div className="text-center">

          <h1 className=" font-bold text-3xl text-green-800 ">Skills</h1>
          <p className="font-light text-sm leading-tight mb-6 bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent">The skills, tools and technologies i am good at:</p>

        </div>

        <div className=" grid grid-cols-5 justify-items-center p-5 m-1  text-center">
          {
            techIcons.map((itm, i) => {
              return (
                <div key={i} className=" flex flex-col justify-center items-center gap-2 w-28 h-28">
                  <Image src={itm.link} alt={itm.name} width={50} height={50} className="object-contain hover:scale-120 transition duration-700 ease-out" />
                  <span className="text-xs bg-gradient-to-b form-green-800 to-blue-500 bg-clip-text text-transparent">{itm.name}</span>
                </div>
              )
            })
          }
        </div>

      </section>

      {/* projects section */}
      <hr className="text-white font-light mt-20 mb-10 w-2/3 mx-auto" />

      <section>

      </section>



    </section>
  );
}