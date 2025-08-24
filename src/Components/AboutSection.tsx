export default function About() {
    return (
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
    );
}