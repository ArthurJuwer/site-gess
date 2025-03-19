import { Swords, Briefcase, CalendarFold, Map, Trophy, Eye, UserCircle2, LibraryBig, MessageSquareText, AtSign } from "lucide-react";

export const useItems = () => {
  const items = [
    { icone: <Swords className="size-7" />, texto: "Desafio Mensal", href: "/desafiomensal"},
    { icone: <Briefcase className="size-7"/>,  texto: "Projetos GESS", href: "/projetos" },
    { icone: <CalendarFold className="size-7" />, texto: "Calendário", href: "/calendario" },
    { icone: <Map className="size-7" />, texto: "Mapa SENAC", href: "/mapa" },
    { icone: <Trophy className="size-7" />, texto: "Interséries", href: "/interseries" },
    { icone: <Eye className="size-7" />, texto: "Transparência", href: "/transparencia" },
    { icone: <UserCircle2 className="size-7" />, texto: "Profissional", href: "/profissional" },
    { icone: <LibraryBig className="size-7" />, texto: "Livros" , href: "/livros" },
    { icone: <MessageSquareText className="size-7" />, texto: "Chat", href: "/chatsenac" },
    { icone: <AtSign className="size-7" />, texto: "GESS 2025", href: "/gess" },
  ];

  return items;
};