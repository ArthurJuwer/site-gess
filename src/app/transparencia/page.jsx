import { TrendingDown, TrendingUp, Wallet } from 'lucide-react'
import React from 'react'

export default function Transparencia() {
  return (
    <div className='flex flex-col gap-6 p-6'>
        <div className="flex flex-col gap-2">
            <h1 className='text-2xl font-bold text-[#1E1E1E]'>Portal de Transparência</h1>
            <p className='text-[#A5A5A5] text-sm'>Todos os valores que o GESS movimentou durante 2025</p>
        </div>
        <div className="w-full flex flex-col gap-5">
            <div className="flex gap-5 items-center bg-[#EFEFEF] shadow-xl p-5 rounded-xl">
                <Wallet className='text-[#FE4E03] size-10'/> 
                <div className="">
                    <h4 className='text-sm'>Valor em Caixa:</h4>
                    <h2 className='text-[#FE4E03] text-2xl font-bold'>R$1.000,00</h2>
                </div>
            </div>

            <div className="flex gap-5 items-center bg-[#EFEFEF] shadow-xl p-5 rounded-xl">
                <TrendingUp className='text-[#126A0D] size-10'/> 
                <div className="">
                    <h4 className='text-sm'>Total de Entradas:</h4>
                    <h2 className='text-[#126A0D] text-2xl font-bold'>R$2.100,00</h2>
                </div>
            </div>

            <div className="flex gap-5 items-center bg-[#EFEFEF] shadow-xl p-5 rounded-xl">
                <TrendingDown className='text-[#980B0B] size-10'/> 
                <div className="">
                    <h4 className='text-sm'>Total de Saídas:</h4>
                    <h2 className='text-[#980B0B] text-2xl font-bold'>R$-1.100,00</h2>
                </div>
            </div>
        </div>
        <h1 className='text-2xl font-bold text-[#1E1E1E]'>Últimas Movimentações</h1>
        <div className="bg-[#F5F5F5] rounded-2xl shadow-2xl w-full p-3 h-56 flex justify-center items-center">
            <h1>Ainda não foi movimentado nada...</h1>
        </div>
        <button className='bg-[#FA7B2B] text-white p-2.5 text-base rounded-full mx-16'>Notas Fiscais e Recibos</button>

    </div>
  )
}
