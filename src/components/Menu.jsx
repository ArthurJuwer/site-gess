'use client'
import Image from "next/image";
import LogoGess from "../../public/Logo-Gess.svg";
import { useState } from "react";
import { useItems } from "@/hooks/useItensMenu";
import ItemMenu from "./ItemMenu";
import Link from "next/link";

export default function Menu() {
  const items = useItems()
  const [isOpen, setIsOpen] = useState(false) 
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <header className="flex justify-between items-center p-8 border-b-4 border-gray-400">
        <Link href={'/'}>
          <Image src={LogoGess} alt="Logo Do GESS" className="w-36 mt-1" />
        </Link>
        <button 
          className="flex flex-col gap-2 relative w-9 h-8"
          onClick={toggleMenu}
        >
          <span 
            className={`w-9 h-1 bg-[#FA7B2B] block rounded absolute transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-[6px]' : 'translate-y-0'
            }`}
          />
          <span 
            className={`w-9 h-1 bg-[#FA7B2B] block rounded absolute transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100 translate-y-[12px]'
            }`}
          />
          <span 
            className={`w-9 h-1 bg-[#FA7B2B] block rounded absolute transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[-6px]' : 'translate-y-[24px]'
            }`}
          />
        </button>
      </header>

      <nav className={`fixed left-0 top-0 w-4/5 p-8 bg-[#FA7B2B] min-h-dvh transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <Image src={LogoGess} alt="Logo Do GESS" className="w-36 mb-10"/>
        <ul className="flex flex-col gap-10">
            {items.map((item, index) => (
                <Link href={item.href || ''} key={index}>
                    <ItemMenu icone={item.icone} texto={item.texto} index={index} cor={'#FFF'}/>
                </Link>
            ))}
        </ul>
      </nav>
    </>
  )
}
