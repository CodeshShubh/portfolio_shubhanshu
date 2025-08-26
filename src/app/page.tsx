import { techIcons, navLinks, projectDetails } from './_lib/Links'
import Header from "@/Components/HeaderSection";
import About from "@/Components/AboutSection";
import Skill from "@/Components/SkillSection";
import Projects from "@/Components/ProjectsSection";
import Contact from '@/Components/Contact';
import Footer from '@/Components/FooterSection';
import { Metadata } from 'next';
import Script from 'next/script';


// ✅ HOMEPAGE metadata (extended, includes projects & keywords)
export const metadata: Metadata = {
  title: "Portfolio of Shubhanshu Saadhiyaan | MERN Projects & Full Stack Developer",
  description:
    "Explore the portfolio of Shubhanshu Saadhiyaan – MERN Stack Developer. Projects include CodeCraft, Physics Preparation, Shop Me, Bollywood Cafe, Quiz App, Instagram Clone, and Yellow Truck.",
  keywords: [
    "Shubhanshu Saadhiyaan",
    "CodeCraft App",
    "Physics Preparation App",
    "Shop Me Shopping Cart",
    "Bollywood Cafe Website",
    "Quiz App",
    "Instagram Clone",
    "Yellow Truck PWA",
    "MERN Projects",
    "Next.js Projects",
    "Full Stack Developer Portfolio",
    "Web Developer India"
  ],
  alternates: {
    canonical: "https://webdevshubhanshu.netlify.app/",
  },
};

export default function Page() {

  return (
    <section className="">

       {/* JSON-LD for SEO */}
      {/* ✅ JSON-LD for Projects (homepage only, auto-generated) */}
      <Script
        id="ld-json-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            projectDetails.map((project) => ({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication", // or CreativeWork
              name: project.name,
              description: project.about,
              image: `https://webdevshubhanshu.netlify.app${project.href}`,
              applicationCategory: "WebApplication",
              operatingSystem: "Any",
              author: {
                "@type": "Person",
                name: "Shubhanshu Saadhiyaan",
                url: "https://webdevshubhanshu.netlify.app",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              url: project.resources.liveDemo,
              codeRepository: project.resources.github,
            }))
          ),
        }}
      />





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
      <section id="projects" className="projects p-0.5 md:p-5 m-0 md:m-1 text-black">
        <Projects projectDetails={projectDetails} />
      </section>

      <section id='contact'>
         <Contact/>
      </section>

      <Footer/>
    </section>
  );
}