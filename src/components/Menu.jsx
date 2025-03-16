import Image from "next/image";
import LogoGess from "../../public/Logo-Gess.svg";

export default function Menu() {
  return (
    <header className="flex justify-between items-center p-8 border-b-4 border-gray-400">
        <Image src={LogoGess} alt="Logo Do GESS" className="w-44"></Image>
        <div className="flex flex-col gap-2">
            <span className="w-9 h-1 bg-[#FA7B2B] block rounded"></span>
            <span className="w-9 h-1 bg-[#FA7B2B] block rounded"></span>
            <span className="w-9 h-1 bg-[#FA7B2B] block rounded"></span>
        </div>
    </header>
  )
}
