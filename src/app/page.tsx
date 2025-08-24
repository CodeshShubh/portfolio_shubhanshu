import Image from "next/image";
import { techIcons, navLinks, projectDetails } from './_lib/Links'
import Card from "@/Components/Card";
import Header from "@/Components/HeaderSection";
import About from "@/Components/AboutSection";
import Skill from "@/Components/SkillSection";
import Projects from "@/Components/ProjectsSection";



export default function Page() {

  return (
    <section className="">

      <Header navLinks={navLinks} />

      <hr className="text-white font-light mt-20 mb-10 w-2/3 mx-auto" />

      {/* about me seciton */}
      <section id="about">
        <About />
      </section>

      <hr className="text-white font-light mt-20 mb-10 w-2/3 mx-auto" />

      {/* skills section */}
      <section id='skills'>
        <Skill techIcons={techIcons} />
      </section>

      <hr className="text-white font-light mt-20 mb-10 w-2/3 mx-auto" />

      {/* projects section */}
      <section className="projects p-5 m-1 text-black">
        <Projects projectDetails={projectDetails} />
      </section>

    </section>
  );
}