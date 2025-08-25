import { AiTwotoneCopyrightCircle } from "react-icons/ai";
import { IoMdHeartHalf } from "react-icons/io";


export default function Footer() {
    return (
        <div className="mt-5 h-20 rounded-t-2xl bg-gradient-to-b from-green-800 to-blue-500 flex justify-center items-center">
            <p className="flex justify-center items-center gap-1 text-black font-extralight text-sm"><AiTwotoneCopyrightCircle />2025 | Designed and coded with<IoMdHeartHalf /> by Shubhanshu Saadhiyaan</p>
        </div>
    );
}