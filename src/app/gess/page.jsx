import React from 'react'
import ArthurJuwer from "../../../public/equipe/ArthurJuwer.svg";
import ClaraMiranda from "../../../public/equipe/ClaraMiranda.svg";
import AnaBeatriz from "../../../public/equipe/AnaBeatriz.svg";
import LuizaFedeski from "../../../public/equipe/LuizaFedeski.svg"
import LiviaMichels from "../../../public/equipe/LiviaMichels.svg"
import IsadoraDaSilva from "../../../public/equipe/IsadoraDaSilva.svg"
import EllenVieira from "../../../public/equipe/EllenVieira.svg"
import ArthurMachado from "../../../public/equipe/ArthurMachado.svg"
import RaulPontes from "../../../public/equipe/RaulPontes.svg"
import CardTeam from '@/components/CardTeam';

const membros = [
  {
    nome: "Arthur Juwer Rambo",
    cargo: "Presidente",
    imagem: ArthurJuwer,
  },
  {
    nome: "Clara Miranda Vieira",
    cargo: "Vice-Presidente",
    imagem: ClaraMiranda,
  },
  {
    nome: "Ana Beatriz Barreiro",
    cargo: "Tesoureira",
    imagem: AnaBeatriz,
  },
  {
    nome: "Luiza Eduarda Fedeski",
    cargo: "Secretária",
    imagem: LuizaFedeski,
  },
  {
    nome: "Lívia Michels",
    cargo: "Diretora Cultural",
    imagem: LiviaMichels,
  },
  {
    nome: "Isadora da Silva",
    cargo: "Diretora Social",
    imagem: IsadoraDaSilva,
  },
  {
    nome: "Éllen Vieira",
    cargo: "Diretora de Imprensa",
    imagem: EllenVieira,
  },
  {
    nome: "Arthur Machado Pereira",
    cargo: "Diretor de Esportes",
    imagem: ArthurMachado,
  },
  {
    nome: "Raul Pontes",
    cargo: "Diretor da Saúde",
    imagem: RaulPontes,
  },
];


export default function Gess() {
  return (
    <div className='flex flex-col gap-5 '>
      <div className="flex flex-col gap-5 p-6 pb-0 xl:px-0">
        <div className="flex flex-col xl:items-center gap-2 xl:gap-3">
            <h1 className='text-2xl font-bold text-[#1E1E1E] xl:text-center'>Sobre o GESS 2025</h1>
            <p className='text-[#A5A5A5] text-sm xl:text-center xl:w-3/5'>Conheça a equipe do GESS que inovou o jeito que vemos o Grêmio Estudantil nas escolas através de um aplicativo e de suas iniciativas dos alunos pros alunos. @senac.gess</p>
        </div>
        <div className="mt-5 grid grid-cols-1 xl:grid-cols-3 gap-5">
        {membros.map((membro, index) => (
          <CardTeam key={index} image={membro.imagem} nome={membro.nome} cargo={membro.cargo} />
        ))}
        </div>
      </div>
    </div>
  )
}
