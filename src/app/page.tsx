import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";


export default function Page() {
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
          <p className="font-light text-sm leading-tight mb-6 bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent">Get to know me</p>
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

        
          
      </section>


    </section>
  );
}