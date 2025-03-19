import { ExternalLink, Facebook, LinkedinIcon, Search, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import HtMicron from "../../../public/htmicron.svg"
import Sap from "../../../public/sap.svg"
import React from 'react'

export default function Profissional() {
  return (
    <div className='flex flex-col gap-5 '>
        <div className="flex flex-col gap-5 p-6 pb-0">
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl font-bold text-[#1E1E1E]'>Profissional</h1>
                <p className='text-[#A5A5A5] text-sm'>Acesse os livros que você irá utilizar durante o trimestre</p>
            </div>
            <div className="p-4 w-full border-2 border-[#FA7B2B] flex justify-between items-center rounded-3xl ">
                <p className='text-[#A5A5A5] text-sm'>Pesquisar Empresas...</p>
                <Search />
            </div>
        </div>
        <h1 className='w-full text-center bg-[#FE4E03] py-6 text-2xl text-white font-semibold'>Empresas da Tecnosinos</h1>
        <div className="flex flex-col gap-5 px-6">
            <div className="bg-[#EDEBEB] shadow-2xl rounded-2xl p-5 flex flex-col gap-4">
                <Image src={HtMicron} alt='htmicron'/>
                <span className='h-0.5 w-full block bg-[#A5A5A5] rounded-2xl'></span>
                <div className="flex flex-col gap-2">
                    <div className="text-[#FE4E03] flex justify-between items-center">
                        <h2 className='font-semibold'>HT Micron</h2>
                        <h3 className='text-xs'>www.htmicron.com.br/site_ptbr/</h3>
                    </div>
                    <ul className='flex flex-col gap-1 text-sm'>
                        <li>htmicron@htmicron.com.br</li>
                        <li>(51) 3091-1100</li>
                        <li>Avenida Unisinos, 1550, São Leopoldo, RS 93022-000</li>
                    </ul>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <span className='bg-[#FE4E03] p-2 px-6 text-white rounded-2xl text-xs'>empresas consolidada</span>
                    <span className='bg-[#FE4E03] p-2 px-6 text-white rounded-2xl text-xs'>T.I</span>
                </div>
                <div className="flex justify-between mt-1">
                    <div className="flex gap-1 text-[#FE4E03]">
                        <LinkedinIcon className='size-7' />
                        <Facebook className='size-7' />
                        <YoutubeIcon className='size-7' />
                    </div>
                    <ExternalLink className='text-[#FE4E03] size-7'/>
                    
                </div>
            </div>

            <div className="bg-[#EDEBEB] shadow-2xl rounded-2xl p-5 flex flex-col gap-4">
                <Image src={Sap} alt='sap'/>
                <span className='h-0.5 w-full block bg-[#A5A5A5] rounded-2xl'></span>
                <div className="flex flex-col gap-2">
                    <div className="text-[#FE4E03] flex justify-between items-center">
                        <h2 className='font-semibold'>SAP Labs Latin America</h2>
                        <h3 className='text-xs'>www.sap.com/</h3>
                    </div>
                    <ul className='flex flex-col gap-1 text-sm'>
                        <li>(51) 3081-1003</li>
                        <li>Avenida SAP, 188 - Cristo Rei, São Leopoldo - RS, 93022-718</li>
                    </ul>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <span className='bg-[#FE4E03] p-2 px-6 text-white rounded-2xl text-xs'>empresas consolidada</span>
                    <span className='bg-[#FE4E03] p-2 px-6 text-white rounded-2xl text-xs'>T.I</span>
                </div>
                <div className="flex justify-between mt-1">
                    <div className="flex gap-1 text-[#FE4E03]">
                        <LinkedinIcon className='size-7' />
                        <Facebook className='size-7' />
                        <YoutubeIcon className='size-7' />
                    </div>
                    <ExternalLink className='text-[#FE4E03] size-7'/>
                    
                </div>
            </div>

        </div>
    </div>
  )
}
