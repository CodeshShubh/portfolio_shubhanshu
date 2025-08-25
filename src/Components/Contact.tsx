import Link from "next/link";
import { BsCopy } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaMobileAlt,FaInstagram,FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





export default function Contact() {
    return (
        <div className="text-center">
            <h1 className=" font-bold text-3xl text-green-800 ">{"Let's Connect"}</h1>
            <p className="font-light text-sm leading-tight mb-6 bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent">Get to know me:</p>
            <div className="flex flex-col justify-center 
            items-center 
            gap-5
            [&>*]:rounded
            md:[&>*]:w-2/3
            [&>*]:w-[90%]
            w-[90%]
            md:w-[50%]
            mx-auto
            [&>input]:h-12
            [&>*]:px-4
            [&>*]:border
          [&>*]:border-gray-700
            [&>*]:outline-0
            [&_*::placeholder]:bg-gradient-to-b
            [&_*::placeholder]:from-green-800
            [&_*::placeholder]:to-blue-500
            [&_*::placeholder]:bg-clip-text
            [&_*::placeholder]:text-transparent
                ">
                     <input type="text" placeholder="example@gmail.com"/>

                     <input type="text" placeholder="Full Name"/>

                     <input type="text" placeholder="Subject"/>

                     <textarea className="w-2/3 h-40 resize-none"  placeholder="Message" />
                 <button className=" bg-green-800 font-bold text-black cursor-pointer hover:bg-green-600 transition duration-1000">Get In Touch</button>
            </div>

         <div className="mt-18 flex flex-col justify-center items-center gap-2">
             <p className="w-[80%] md:w-130 text-center bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent">{"What's next?"} Feel free to reach out to me if you are looking for a devloper, have a query, or simply want to connect</p>

             <Link href={'mailto:shubhanshu.saadhiyaan@gmail.com'} className="flex justify-center items-center gap-3 ">
             <MdOutlineMailOutline className="size-10 bg-gradient-to-b from-green-800 to-blue-500 rounded-xl p-0.5" />
             <p className="bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent hover:scale-110 transition duration-1000">Shubhanshu.Saadhiyaan@gmail.com</p>
             <BsCopy  />
            </Link>
            <Link href={'tel:+917060821855'} className=" flex justify-center items-center  gap-3">
             <FaMobileAlt className="size-10 bg-gradient-to-b from-green-800 to-blue-500 rounded-xl p-1" />
              <p className="bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition duration-1000">+91-70608-21855</p>
             <BsCopy />
            </Link>
            <div className="mb-3 mt-3">
                <p className="bg-gradient-to-b from-green-800 to-blue-500 bg-clip-text text-transparent">You may also find me</p>
                <div className="flex justify-center items-center gap-2">
                <Link href={""}><FaXTwitter className="size-6 bg-gradient-to-b from-green-800 to-blue-500 rounded-xl hover:scale-150 transition duration-1000" /></Link>
                <Link href={""}><FaInstagram className="size-6 bg-gradient-to-b from-green-800 to-blue-500 rounded-xl hover:scale-150 transition duration-1000"/></Link>
                <Link href={""}><FaFacebookSquare className=" size-6 bg-gradient-to-b from-green-800 to-blue-500 rounded-xl hover:scale-150 transition duration-1000" /></Link>
                </div>
            </div>
         </div>

        </div>
    );
}