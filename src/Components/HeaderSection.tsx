import { NavLinkType } from "@/Types/LinksTypes";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbHandClick } from "react-icons/tb";

export default function Header({ navLinks }: { navLinks: NavLinkType[] }) {
    return (
        <div>
            <div className=" flex justify-between items-center p-6 m-1 font-extrabold">
                <div className=" ">
                    <h1 className="font-extrabold
  bg-gradient-to-r from-green-800 via-blue-500 to-purple-600 
  bg-clip-text text-transparent 
  animate-gradient ">SHUBHANSHU SAADHIYAAN</h1>
                </div>
                <div className=" flex justify-center items-center gap-3">
                    {
                        navLinks.map((itm, i) => {
                            return (
                                <Link href={itm.href} key={i}>{itm.name}</Link>
                            )
                        })
                    }
                    <button className="ml-12 bg-green-800 hover:bg-green-600 duration-1000 font-bold rounded-2xl shadow-2xl text-sm cursor-pointer px-3 py-1.5 text-center ">Download CV</button>
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
                        <button className="bg-green-800 hover:bg-green-600 duration-1000 font-bold rounded-2xl shadow-2xl text-sm cursor-pointer px-3 py-1.5 text-center ">
                            Contact Me <TbHandClick className="inline-block ml-1 mb-0.5 size-5" />
                        </button>
                        <Link href={'https://www.linkedin.com/in/shubhanshu-saadhiyaaan/'} className="hover:scale-110 duration-1000" target="_blank"><FaLinkedin className="size-10" />
                        </Link>
                        <Link href={'https://github.com/CodeshShubh'} className="hover:scale-110 duration-1000" target="_blank"><FaGithub className="size-10" />
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
        </div>
    );
}