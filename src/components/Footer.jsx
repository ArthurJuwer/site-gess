import Image from "next/image";
import LogoGess from "../../public/Logo-Gess.webp";

export default function Footer() {
  return (
    <div className="p-8 flex flex-col gap-3">
        <span className="border-t-[3px] border-[#FA7B2B] w-full block rounded"></span>
        <Image src={LogoGess} alt="Logo Do GESS" className="mt-3 w-32"></Image>
        <div className="flex text-[#FA7B2B] text-base font-semibold ">
            <h2>Grêmio Estudantil Senac São Leopoldo.</h2>
        </div>
    </div>
  )
}
