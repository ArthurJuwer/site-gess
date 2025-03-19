import Link from 'next/link'
import React from 'react'

export default function Livros() {
  return (
    <div className='flex flex-col gap-5 '>
        <div className="flex flex-col gap-5 p-6 pb-0">
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl font-bold text-[#1E1E1E]'>Livros</h1>
                <p className='text-[#A5A5A5] text-sm'>Acesse os livros que você irá utilizar durante o trimestre</p>
            </div>
            <div className="flex flex-col gap-5">
            <Link href={'/livros/turma/1'} className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg px-8 py-6 h-28 relative">
                <span className="text-white font-bold text-6xl absolute left-8">1</span>
                <span className="text-white font-bold text-4xl absolute left-17 bottom-11">º</span>
                <span className="text-white text-lg absolute left-18 bottom-7">ano</span>
            </Link>

            <Link href={'/livros/turma/2'} className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg px-8 py-6 h-28 relative">
                <span className="text-white font-bold text-6xl absolute left-8">2</span>
                <span className="text-white font-bold text-4xl absolute left-17 bottom-11">º</span>
                <span className="text-white text-lg absolute left-18 bottom-7">ano</span>
            </Link>

            <Link href={'/livros/turma/3'} className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg px-8 py-6 h-28 relative">
                <span className="text-white font-bold text-6xl absolute left-8">3</span>
                <span className="text-white font-bold text-4xl absolute left-17 bottom-11">º</span>
                <span className="text-white text-lg absolute left-18 bottom-7">ano</span>
            </Link>

        </div>
        </div>
        
    </div>
  )
}
