import { ProjectDetailsType } from "@/Types/LinksTypes";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { IoArrowRedoOutline } from "react-icons/io5";


export default function Card({ Details }: { Details: ProjectDetailsType }) {
    return (
        <div className=" m-1 p-5">
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center p-5 m-1 bg-gradient-to-b from-green-800 to-blue-500 rounded-2xl">
                <div className=" rounded flex justify-center">
                    <Image src={Details.href} alt={Details.name} width={400} height={500}
                        className="rounded-2xl hover:scale-110 duration-1000" />
                </div>

                <div className=" w-[90%] md:w-1/2 text-center flex flex-col gap-2 p-1">
                    <h2 className="font-extrabold">{Details.name}</h2>
                    <p className="text-sm">{Details.about}</p>
                    <div className="grid grid-cols-4 m-2 justify-items-center place-content-center  [&>*]:bg-white gap-1  [&>*]:rounded-2xl [&>*]:text-xs [&>*]:w-15 [&>*]:h-5 ">
                        {
                            Details.tech.map((itm, i) => {
                                return (
                                    <span key={i} className="flex justify-center items-center">{itm}</span>

                                )
                            })
                        }
                    </div>
                    <div className=" flex mt-3  gap-6 justify-center items-center underline underline-offset-5 ">
                        <Link href={Details.resources.liveDemo} target="_blank" className="flex gap-2">Live Demo <IoArrowRedoOutline className="size-5" /></Link>
                        <Link href={Details.resources.github} target="_blank" className="flex gap-2">See on Github <FaGithub className="size-5" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}