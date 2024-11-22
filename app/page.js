import Image from "next/image";
import Link from "next/link";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiYoutubeFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" wrapper">
      <img src="/logo.png"/>
    <h1>coming soon<span className="dot">.</span></h1>
    <p>We are under construction.</p>
    <div className="icons flex gap-1 justify-center ">
      <Link className="h-12 w-12 bg-white rounded-full flex justify-center items-center"  href=""><PiInstagramLogoFill className="text-black text-2xl" /></Link>
      <Link className="h-12 w-12 bg-white rounded-full flex justify-center items-center" href=""><RiYoutubeFill className="text-black text-2xl" /></Link>
      <Link className="h-12 w-12 bg-white rounded-full flex justify-center items-center" href=""><FaFacebook className="text-black text-2xl" /></Link>
 
    </div>
   </div>
  );
}
