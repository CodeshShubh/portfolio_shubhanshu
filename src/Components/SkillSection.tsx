import { TechIconType } from "@/Types/LinksTypes";
import Image from "next/image";

export default function Skill({techIcons}:{techIcons:TechIconType[]}) {
    return (
        <div>
            <div className="text-center">

                <h1 className=" font-bold text-3xl text-green-800 ">Skills</h1>
                <p className="font-light text-sm leading-tight mb-6 bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent">The skills, tools and technologies i am good at:</p>

            </div>

            <div className=" grid grid-cols-5 justify-items-center p-5 m-1  text-center">
                {
                    techIcons.map((itm, i) => {
                        return (
                            <div key={i} className=" flex flex-col justify-center items-center gap-2 w-28 h-28">
                                <Image src={itm.link} alt={itm.name} width={50} height={50} className="object-contain hover:scale-120 transition duration-1000 ease-out" />
                                <span className="text-xs bg-gradient-to-b form-green-800 to-blue-500 bg-clip-text text-transparent">{itm.name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}