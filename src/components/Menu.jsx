'use client';
import Image from "next/image";
import LogoGess from "../../public/Logo-Gess.webp";
import { useState } from "react";
import { useItems } from "@/hooks/useItensMenu";
import ItemMenu from "./ItemMenu";
import Link from "next/link";

export default function Menu() {
  const items = useItems(); // Hook para pegar os itens do menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="flex justify-between items-center p-8 border-b-4 border-gray-400">
        <Link href={'/'}>
          <Image src={LogoGess} alt="Logo Do GESS" className="w-36 mt-1" />
        </Link>
        <button
          className={`cursor-pointer flex-col gap-2 relative w-9 h-8 ${isOpen ? 'hidden' : 'flex'}`}
          onClick={toggleMenu}
        >
          <span className="w-9 h-1 bg-[#FA7B2B] block rounded" />
          <span className="w-9 h-1 bg-[#FA7B2B] block rounded" />
          <span className="w-9 h-1 bg-[#FA7B2B] block rounded" />
        </button>
      </header>

      {isOpen && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black opacity-45 z-40 overflow-y-auto"
          onClick={toggleMenu}
        />
      )}

      <nav 
        className={`fixed left-0 top-0 w-4/5 xl:w-2/6 p-8 bg-[#FA7B2B] h-full transition-transform duration-300 z-50 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-10">
          <Link href={'/'}>
            <Image src={LogoGess} alt="Logo Do GESS" className="w-36" />
          </Link>
          <button 
            className="cursor-pointer flex items-center justify-center flex-col gap-2 relative w-9 h-8"
            onClick={toggleMenu}
          >
            <span 
              className="w-9 h-1 bg-white block rounded absolute transition-transform duration-300 rotate-45 translate-y-[6px]"
            />
            <span 
              className="w-9 h-1 bg-white block rounded absolute transition-transform duration-300 -rotate-45 translate-y-[6px]"
            />
          </button>
        </div>

        <ul className="flex flex-col gap-10">
          {items.map((item, index) => (
            <Link href={item.href || ''} key={index} onClick={toggleMenu}>
              <ItemMenu icone={item.icone} texto={item.texto} index={index} cor={'#FFF'}/>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
