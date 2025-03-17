import { Swords, Briefcase, CalendarFold, Map, Trophy, Eye, UserCircle2, LibraryBig, MessageSquareText, AtSign } from "lucide-react";

export const useItems = () => {
  const items = [
    { icone: <Swords className="size-7" />, texto: "Desafio Mensal", href: "/desafiomensal"},
    { icone: <Briefcase className="size-7"/>,  texto: "Projetos GESS" },
    { icone: <CalendarFold className="size-7" />, texto: "Calendário" },
    { icone: <Map className="size-7" />, texto: "Mapa SENAC" },
    { icone: <Trophy className="size-7" />, texto: "Interséries" },
    { icone: <Eye className="size-7" />, texto: "Transparência" },
    { icone: <UserCircle2 className="size-7" />, texto: "Profissional" },
    { icone: <LibraryBig className="size-7" />, texto: "Livros" },
    { icone: <MessageSquareText className="size-7" />, texto: "Chat" },
    { icone: <AtSign className="size-7" />, texto: "GESS 2025" },
  ];

  return items;
};