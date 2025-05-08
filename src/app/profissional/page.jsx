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
          website: "https://www.htmicron.com.br/site_ptbr/",
          contact: [
            "htmicron@htmicron.com.br",
            "(51) 3091-1100",
            "Avenida Unisinos, 1550, São Leopoldo, RS 93022-000"
          ],
          tags: ["empresa consolidada", "T.I."],
          imageSrc: "HtMicron", // Substitua por referência real à imagem
        },
        {
          id: 2,
          name: "W3K Tecnologia",
          website: "https://www.w3k.com.br",
          contact: [
            "contato@w3k.com.br",
            "(51) 3081-5900",
            "Av. Theodomiro Porto da Fonseca, 3101, Prédio 10, Sala 209, São Leopoldo, RS"
          ],
          tags: ["empresa consolidada", "T.I."],
          imageSrc: "W3K", // Substitua por referência real à imagem
        },
        {
          id: 3,
          name: "SKA",
          website: "https://www.ska.com.br",
          contact: [
            "ska@ska.com.br",
            "0800 510 2900",
            "Avenida Theodomiro Porto da Fonseca, 3101, Prédio 9, São Leopoldo, RS"
          ],
          tags: ["empresa consolidada", "T.I."],
          imageSrc: "SKA", // Substitua por referência real à imagem
        },
        {
          id: 4,
          name: "CWI Software",
          website: "https://www.cwi.com.br",
          contact: [
            "contato@cwi.com.br",
            "(51) 3590-8500",
            "Av. Theodomiro Porto da Fonseca, 3101, São Leopoldo, RS"
          ],
          tags: ["empresa consolidada", "T.I."],
          imageSrc: "CWI", // Substitua por referência real à imagem
        },
        {
          id: 5,
          name: "ConstructIn",
          website: "https://www.constructin.com.br",
          contact: [
            "contato@constructin.com.br",
            "(51) 99378-2909",
            "Av. Unisinos, 950, Unitec I, sala 120, São Leopoldo, RS"
          ],
          tags: ["startup incubada", "T.I."],
          imageSrc: "ConstructIn", // Substitua por referência real à imagem
        },
        {
          id: 6,
          name: "Saipos",
          website: "https://saipos.com",
          contact: [
            "contato@saipos.com",
            "(54) 98135-3503",
            "Av. Unisinos, 950 - Unitec I - Sala 105, 106 e 107, São Leopoldo, RS"
          ],
          tags: ["startup graduada", "T.I."],
          imageSrc: "Saipos", // Substitua por referência real à imagem
        },
        {
          id: 7,
          name: "Teikon",
          website: "https://www.teikon.com.br",
          contact: [
            "teikon@teikon.com.br",
            "(51) 3081-8650",
            "Av. Unisinos, 1550, Conjunto A, São Leopoldo, RS"
          ],
          tags: ["empresa consolidada", "T.I."],
          imageSrc: "Teikon", // Substitua por referência real à imagem
        },
        {
          id: 8,
          name: "SBPA Simulators",
          website: "https://www.flysbpa.com.br",
          contact: [
            "adriano.oliveira@flysbpa.com.br",
            "(51) 359-8624",
            "Av. Unisinos, 950, sala 208 - Prédio da Unitec, São Leopoldo, RS"
          ],
          tags: ["startup graduada", "T.I."],
          imageSrc: "SBPA", // Substitua por referência real à imagem
        },
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