'use client';

import { ChevronLeft, FileText } from 'lucide-react';
import { useParams } from 'next/navigation';
// import Metamorfose from '../../../../../public/pdfs/A_Metamorfose-Franz_Kafka.pdf'

const livrosPorTurma = {
  1: [
    {
      titulo: 'A Metamorfose - Franz Kafka.pdf',
      data: '20/03/2025',
      link: '/pdfs/A_Metamorfose-Franz_Kafka.pdf', // Corrigido!
    },
    // {
    //   titulo: 'O Pequeno Príncipe - Saint.pdf',
    //   data: '16/06/2025',
    //   link: '/pdfs/O Pequeno Príncipe - Saint.pdf',
    // },
  ],
  2: [
    // {
    //   titulo: 'Dom Casmurro - Machado de Assis.pdf',
    //   data: '10/04/2025',
    //   link: '/pdfs/Dom Casmurro - Machado de Assis.pdf',
    // },
    // {
    //   titulo: 'Memórias Póstumas de Brás Cubas.pdf',
    //   data: '22/07/2025',
    //   link: '/pdfs/Memórias Póstumas de Brás Cubas.pdf',
    // },
  ],
  3: [
    // {
    //   titulo: '1984 - George Orwell.pdf',
    //   data: '15/05/2025',
    //   link: '/pdfs/1984 - George Orwell.pdf',
    // },
    // {
    //   titulo: 'Fahrenheit 451 - Ray Bradbury.pdf',
    //   data: '30/08/2025',
    //   link: '/pdfs/Fahrenheit 451 - Ray Bradbury.pdf',
    // },
  ],
};

export default function Turma() {
  const { turma } = useParams();
  const livros = livrosPorTurma[turma];

  return (
    <div className='flex flex-col gap-5'>
      <div className="flex flex-col gap-5 pt-6">
        <div className="flex flex-col gap-2">
          <h1 className='text-2xl font-bold text-[#1E1E1E]'>Livros</h1>
          <p className='text-[#A5A5A5] text-sm'>Acesse os livros que você irá utilizar durante o trimestre</p>
        </div>

        <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg px-8 py-6 h-28 relative">
          <span className="text-white font-bold text-6xl absolute left-8">{turma}</span>
          <span className="text-white font-bold text-4xl absolute left-17 bottom-11">º</span>
          <span className="text-white text-lg absolute left-18 bottom-7">ano</span>
        </div>

        <div className="flex flex-col gap-4">
        {livros ? livros.map((livro, index) => (
          <a
          href={livro.link}
          download
        >
            <div key={index} className="bg-[#EEEEEE] p-4 px-6 rounded-xl flex items-center gap-5 justify-between shadow-xl">
              <FileText className='size-5'/>
              <h2 className='text-xs flex-1'>{livro.titulo}</h2>
              <h2 className='text-xs'>{livro.data}</h2>
            </div>
          </a>
        )) : (
          <p className="text-sm text-gray-500">Nenhum livro disponível para esta turma.</p>
        )}
        </div>

        <h3 onClick={() => history.go(-1)} className='flex items-center gap-2 text-base cursor-pointer'>
          <ChevronLeft className='size-5' /> Voltar
        </h3>
      </div>
    </div>
  );
}
