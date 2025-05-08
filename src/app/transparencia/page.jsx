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
            <div className="flex gap-5 xl:gap-6 items-center bg-[#EFEFEF] shadow-xl p-5 xl:p-8 rounded-xl">
                <Wallet className='text-[#FE4E03] size-10'/> 
                <div className="">
                    <h4 className='text-sm'>Valor em Caixa:</h4>
                    <h2 className='text-[#FE4E03] text-2xl font-bold'>R$100,00</h2>
                </div>
            </div>

            <div className="flex gap-5 xl:gap-6 items-center bg-[#EFEFEF] shadow-xl p-5 xl:p-8 rounded-xl">
                <TrendingUp className='text-[#126A0D] size-10'/> 
                <div className="">
                    <h4 className='text-sm'>Total de Entradas:</h4>
                    <h2 className='text-[#126A0D] text-2xl font-bold'>R$100,00</h2>
                </div>
            </div>

            <div className="flex gap-5 xl:gap-6 items-center bg-[#EFEFEF] shadow-xl p-5 xl:p-8 rounded-xl">
                <TrendingDown className='text-[#980B0B] size-10'/> 
                <div className="">
                    <h4 className='text-sm'>Total de Saídas:</h4>
                    <h2 className='text-[#980B0B] text-2xl font-bold'>R$0,00</h2>
                </div>
            </div>
        </div>
        <h1 className='text-2xl font-bold text-[#1E1E1E]'>Últimas Movimentações</h1>
        <div className="bg-[#E9E9E9] shadow-md rounded-2xl p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse ">
            <thead>
                <tr className="border-b text-xs border-[#D9D9D9]">
                    <th className="p-3 pt-1 font-semibold border-r border-[#D9D9D9]">DATA</th>
                    <th className="p-3 pt-1 font-semibold border-r border-[#D9D9D9]">DESCRIÇÃO</th>
                    <th className="p-3 pt-1 font-semibold border-r border-[#D9D9D9]">TIPO</th>
                    <th className="p-3 pt-1 font-semibold">VALOR</th>
                </tr>
            </thead>
            <tbody>
                <tr className=" text-xs">
                    <td className="p-3 border-r border-[#D9D9D9]">12/05/2025</td>
                    <td className="p-3 border-r border-[#D9D9D9]">Saldo Inicial</td>
                    <td className="p-3 border-r border-[#D9D9D9]">
                        <span className="bg-green-600 text-green-900 px-3 py-1 rounded-full text-xs">Entrada</span>
                    </td>
                    <td className="p-2 text-green-700 font-semibold text-xs">R$100,00</td>
                </tr>
                {/* <tr className='text-xs'>
                    <td className="p-3 border-r border-[#D9D9D9]">21/06/2024</td>
                    <td className="p-3 border-r border-[#D9D9D9]">Bolsa Interséries</td>
                    <td className="p-3 border-r border-[#D9D9D9]">
                        <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs">Saída</span>
                    </td>
                    <td className="p-2 text-red-600 font-semibold">R$ 75,00</td>
                </tr> */}
            </tbody>
        </table>
        {/* <div className="mt-4 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-gray-500"></div>
        </div> */}
    </div>
        <a 
            className='bg-[#FA7B2B] text-white p-2.5 text-base rounded-full mx-16 xl:mx-80 text-center cursor-pointer'
            target='_blank'
            href='https://clammy-cupboard-c83.notion.site/GESS-Portal-de-Transpar-ncia-1d8f87756c0780d7bb21c2cde80e4dad?pvs=4'
        >
            Notas Fiscais e Recibos
        </a>

    </div>
  )
}
