import CardBook from '@/components/CardBook';
import React from 'react'

export default function Livros() {
const books = [
    { id: 1, year: 1, link: "/livros/turma/1" },
    { id: 2, year: 2, link: "/livros/turma/2" },
    { id: 3, year: 3, link: "/livros/turma/3" }
    ];
      
  return (
    <div className='flex flex-col gap-5 '>
        <div className="flex flex-col gap-5 p-6 pb-0 xl:px-0">
            <div className="flex flex-col gap-2">
                <h1 className='text-2xl font-bold text-[#1E1E1E]'>Livros</h1>
                <p className='text-[#A5A5A5] text-sm'>Acesse os livros que você irá utilizar durante o trimestre</p>
            </div>
            <div className="flex flex-col gap-5">
            {books.map((book) => (
                <CardBook key={book.id} book={book} />
            ))}

        </div>
        </div>
        
    </div>
  )
}
