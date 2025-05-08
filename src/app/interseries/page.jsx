import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function Interseries() {
  return (
    <div className='flex flex-col gap-5 p-6'>
        <h1 className='text-2xl font-bold text-[#1E1E1E]'>Interséries</h1>
        {/* <div className="bg-[#FA7B2B] text-white p-3 xl:p-4 xl:text-lg w-full rounded-2xl text-center font-semibold">Parabéns a Equipe Campeã XXXX !!! </div> */}
        <h2 className='text-xl font-bold text-[#1E1E1E]'>Chaveamento de Inverno - 21/07/25</h2>
        <div className="">
            <div className="w-full relative">
                <select className="bg-[#FA7B2B] appearance-none outline-0  text-white flex justify-between items-center p-3 w-full" name="" id="">
                    <option value="atletismo">Atletismo</option>
                    <option value="basquete">Basquete</option>
                    <option value="brawl-stars">Brawl Stars</option>
                    <option value="clash-royale">Clash Royale</option>
                    <option value="futsal">Futsal</option>
                    <option value="programacao">Programação</option>
                    <option value="volei">Vôlei</option>
                    <option value="xadrez">Xadrez</option>
                </select>
                <div className='absolute right-4 transform -translate-y-1/2 top-1/2' >
                    <ChevronDown className='size-7 text-white'/>
                </div>
            </div>
            <div className="bg-[#ECECEC] h-[40dvh] shadow-2xl flex justify-center items-center">
                <h1>Ainda não disponivel...</h1>
            </div>
        </div>
        <h2 className='text-xl font-bold text-[#1E1E1E]'>Fotos</h2>
        <div className="w-full h-[30dvh] bg-[#EDBEA0] flex justify-center items-center">
            <h1>Ainda não disponivel</h1>
        </div>


    </div>
  )
}
