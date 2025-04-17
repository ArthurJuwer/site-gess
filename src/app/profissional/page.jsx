'use client'
import { Search} from 'lucide-react'
import Image from 'next/image'
import HtMicron from "../../../public/empresas-profissional/htmicron.svg"
import Sap from "../../../public/empresas-profissional/sap.svg"
import React, { useState } from 'react'
import CardCompany from '@/components/CardCompany'

export default function Profissional() {
    const companies = [
        {
          id: 1,
          name: "HT Micron",
          website: "www.htmicron.com.br/site_ptbr/",
          contact: ["htmicron@htmicron.com.br", "(51) 3091-1100", "Avenida Unisinos, 1550, São Leopoldo, RS 93022-000"],
          tags: ["empresas consolidada", "T.I"],
          imageSrc: HtMicron,
        },
        {
          id: 2,
          name: "SAP Labs Latin America",
          website: "www.sap.com/",
          contact: ["(51) 3081-1003", "Avenida SAP, 188 - Cristo Rei, São Leopoldo - RS, 93022-718"],
          tags: ["empresas consolidada", "T.I"],
          imageSrc: Sap,
        }
      ];
      const [valueSearch, setValueSearch] = useState('')
      const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(valueSearch.toLowerCase())
      );
  return (
    
    <div className='flex flex-col gap-5 '>
        <div className="flex flex-col gap-5 p-6 pb-0 xl:px-0">
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl font-bold text-[#1E1E1E]'>Profissional</h1>
                <p className='text-[#A5A5A5] text-sm'>Acesse os livros que você irá utilizar durante o trimestre</p>
            </div>
            <div className="relative w-full">
              <input 
                className="p-4 w-full border-2 border-[#FA7B2B] flex justify-between items-center rounded-3xl outline-0 placeholder:text-[#A5A5A5] text-sm" 
                placeholder='Pesquisar Empresa...' 
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
              />
                <Search className='absolute transform -translate-y-1/2 top-1/2 right-6'/>
            </div>
            
        </div>
        <h1 className='w-full text-center bg-[#FE4E03] py-6 text-2xl text-white font-semibold xl:rounded-2xl'>Empresas da Tecnosinos</h1>
        <div className="grid grid-cols-1 gap-5 px-6 xl:px-0 xl:gap-10 xl:grid-cols-2">
        {filteredCompanies.map((company) => (
            <CardCompany key={company.id} company={company} />
        ))}

        </div>
    </div>
  )
}
