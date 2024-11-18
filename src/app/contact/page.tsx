import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <div className="bg-[#070F2B] min-h-screen flex flex-col items-center">
      <div className="mt-20 px-6 md:px-20 max-w-4xl text-center md:text-start">
        <h1 className="pt-32 text-[#F6F7C4] font-extrabold text-[40px] md:text-[60px] lg:text-[80px] leading-tight">
          Laissez-moi un message
        </h1>
        <p className="text-[15px] md:text-[17px] text-white font-medium mt-4">
          Planifiez un appel avec moi via Google Meet & Zoom
        </p>
        <div className="flex justify-center md:justify-start space-x-6 mt-10">
          <FaGithub
            size={50}
            className="text-gray-400 hover:text-gray-800 hover:scale-105 transition duration-300 cursor-pointer"
          />
          <FaXTwitter
            size={50}
            className="text-gray-400 hover:text-gray-700 hover:scale-105 transition duration-300 cursor-pointer"
          />
          <FaLinkedin
            size={50}
            className="text-gray-400 hover:text-blue-600 hover:scale-105 transition duration-300 cursor-pointer"
          />
          <MdOutlineMailOutline
            size={50}
            className="text-gray-400 hover:text-red-600 hover:scale-105 transition duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
