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
    {
      titulo: 'Vila Sapo - José Falero.pdf',
      data: '19/02/2025',
      link: '/pdfs/2ano/Vila Sapo - José Falero.pdf',
    },
    {
      titulo: 'A Moreninha.pdf',
      data: '17/04/2025',
      link: '/pdfs/2ano/A moreninha.pdf',
    },
    {
      titulo: 'Baleia.pdf',
      data: '08/05/2025',
      link: '/pdfs/2ano/Baleia.pdf',
    },
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
    <div className='flex flex-col gap-5 p-6 lg:p-0'>
      <div className="flex flex-col gap-5 pt-6">
        <div className="flex flex-col gap-2">
          <h1 className='text-2xl font-bold text-[#1E1E1E]'>Livros</h1>
          <p className='text-[#A5A5A5] text-sm'>Acesse os livros que você irá utilizar durante o trimestre.</p>
        </div>

        <div 
          className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg px-8 py-6 h-28 lg:h-[7.5rem] lg:py-8 flex items-center"
        >
          <div className="flex items-baseline space-x-1">
            <span className="text-white font-bold text-6xl flex ">
              {turma}
              <span className="text-4xl mt-1">º</span>
            </span>
            <span className="text-white -ml-4  text-lg">ano</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
        {livros ? livros.map((livro, index) => (
          <a
          key={index}
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
