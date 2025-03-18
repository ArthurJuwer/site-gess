import Calendar from '@/components/Calendar'
import Image from 'next/image'
import React from 'react'
import brazilJs from '../../../public/braziljs.svg'

export default function Calendario() {
  return (
    <div className='flex flex-col gap-5 p-6'>
        <h1 className='text-center text-2xl font-bold text-[#1E1E1E]'>Calendário</h1>
        <Calendar />
        <div className="bg-[#FA7B2B] rounded-4xl text-white p-6 pb-3 flex flex-col gap-3 shadow-xl">
            <h1 className='text-center text-xl font-semibold'>Passeio BrazilJS</h1>
            <div className="flex flex-col gap-2">
                <h2 className='font-semibold'>Informações:</h2>
                <div className="flex items-center bg-white p-6 rounded-2xl gap-10">
                    <div className="">
                        <Image src={brazilJs} alt='brazil js'/>
                    </div>
                    <div className="">
                        <ul className='text-[#FA7B2B] text-xs font-semibold list-disc'>
                            <li>Uniforme obrigatório</li>
                            <li>Lanche Coletivo</li>
                            <li>Valor: R$ 45,00</li>
                            <li>Levar RG</li>
                            <li>Saida: 8:00h</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-3 flex justify-end">
                    <span className='text-[#FA7B2B] bg-white px-3 py-1 font-semibold text-xl rounded-2xl text-center'>11/05</span>
                </div>
            </div>
        </div>
        <h1 className='text-left text-2xl font-bold text-[#1E1E1E]'>Calendário Anual</h1>
        <p>Ainda não disponivel...</p>
        {/* <div className="grid gap-4">
            <Calendar />
        </div> */}
        
    </div>
  )
}
