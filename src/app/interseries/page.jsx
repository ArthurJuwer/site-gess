import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function Interseries() {
  return (
    <div className='flex flex-col gap-5 p-6'>
        <h1 className='text-2xl font-bold text-[#1E1E1E]'>Interséries</h1>
        <div className="bg-[#FA7B2B] text-white p-3 w-full rounded-2xl text-center font-semibold">Parabéns a Equipe Campeã XXXX !!! </div>
        <h2 className='text-xl font-bold text-[#1E1E1E]'>Chaveamento de Inverno - 22/07</h2>
        <div className="">
            <div className="bg-[#FA7B2B] text-white flex justify-between items-center p-2">
                <h3>Vôlei</h3>
                <ChevronDown className='size-7'/>
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
