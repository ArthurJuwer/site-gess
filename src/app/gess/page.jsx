import React from 'react'
import ArthurJuwer from "../../../public/ArthurJuwer.svg"
import ClaraMiranda from "../../../public/ClaraMiranda.svg"
import AnaBeatriz from "../../../public/AnaBeatriz.svg"

import Image from 'next/image'
export default function Gess() {
  return (
    <div className='flex flex-col gap-5 '>
      <div className="flex flex-col gap-5 p-6 pb-0">
        <div className="flex flex-col gap-2">
            <h1 className='text-2xl font-bold text-[#1E1E1E]'>Sobre o GESS 2025</h1>
            <p className='text-[#A5A5A5] text-sm'>Conheça a equipe do GESS que inovou o jeito que vemos o Grêmio Estudantil nas escolas através de um aplicativo e de suas iniciativas dos alunos pros alunos @senac.gess</p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center gap-4">
            <Image src={ArthurJuwer} className="border-2 border-black" alt=''/>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className='bg-[#FF6900] text-[#1E1E1E] p-1 px-4 rounded text-center text-xl font-semibold'>Arthur Juwer Rambo</h1>
              <h2 className='text-[#1E1E1E] text-lg font-semibold'>Presidente</h2>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image src={ClaraMiranda} className="border-2 border-black" alt=''/>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className='bg-[#FF6900] text-[#1E1E1E] p-1 px-4 rounded text-center text-xl font-semibold'>Clara Miranda Vieira</h1>
              <h2 className='text-[#1E1E1E] text-lg font-semibold'>Vice-Presidente</h2>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Image src={AnaBeatriz} className="border-2 border-black" alt=''/>
            <div className="flex flex-col gap-2 items-center justify-center">
              <h1 className='bg-[#FF6900] text-[#1E1E1E] p-1 px-4 rounded text-center text-xl font-semibold'>Ana Beatriz Barreiro</h1>
              <h2 className='text-[#1E1E1E] text-lg font-semibold'>Tesoureira</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
