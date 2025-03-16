import Image from "next/image";
import CapaGess from "../../public/Capa-Home.svg";
import ItemMenu from "@/components/ItemMenu";
import { Swords, Map, Eye, Briefcase, Trophy, AtSign, MessageSquareText, LibraryBig, UserCircle2, CalendarFold } from 'lucide-react';
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  const items = [
    { icone: <Swords className="text-[#FA7B2B] size-7"/>, texto: "DESAFIO MENSAL" },
    { icone: <Briefcase className="text-[#FA7B2B] size-7"/>, texto: "PROJETOS GESS" },
    { icone: <CalendarFold className="text-[#FA7B2B] size-7"/>, texto: "CALENDÁRIO" },
    { icone: <Map className="text-[#FA7B2B] size-7"/>, texto: "MAPA SENAC" },
    { icone: <Trophy className="text-[#FA7B2B] size-7"/>, texto: "INTERSÉRIES" },
    { icone: <Eye className="text-[#FA7B2B] size-7"/>, texto: "TRANSPARÊNCIA" },
    { icone: <UserCircle2 className="text-[#FA7B2B] size-7"/>, texto: "PROFISSIONAL" },
    { icone: <LibraryBig className="text-[#FA7B2B] size-7"/>, texto: "LIVROS" },
    { icone: <MessageSquareText className="text-[#FA7B2B] size-7"/>, texto: "CHAT" },
    { icone: <AtSign className="text-[#FA7B2B] size-7"/>, texto: "GESS 2025" },
  ];
  return (
    <div className="">
      <Menu />
      <main>
        <Image src={CapaGess} alt="Logo Do GESS" className="w-full"></Image>
      </main>
      <nav className="mt-8 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-2xl text-[#1E1E1E] font-semibold">Menu</h1>
        <ul className="flex flex-col gap-8 w-full px-20 relative">
        {items.map((item, index) => (
            <li key={index}>
              <ItemMenu icone={item.icone} texto={item.texto} index={index} />
            </li>
          ))}
        </ul>
      </nav>
      <Footer />
      
    </div>
  );
}
