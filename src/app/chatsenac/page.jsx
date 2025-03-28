'use client'
import CardComment from '@/components/CardComment'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'

export default function ChatSenac() {

  const comments = [
    {
      titulo: 'Podium está com promoção esta semana!',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
      curtidas: 4,
      data: '11/03/2024'
    },
    {
      titulo: 'Há poucos mouses na sala 101',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
      curtidas: 1,
      data: '11/03/2024'
    },
    {
      titulo: 'Faltam poucos dias para Interséries!',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
      curtidas: 2,
      data: '11/03/2024'
    }
  ]

  // Estado para controlar quantos comentários mostrar
  const [showAll, setShowAll] = useState(false)

  // Lógica para mostrar até dois comentários ou todos dependendo do estado
  const displayedComments = showAll ? comments : comments.slice(0, 2)

  return (
    <div className='flex flex-col gap-5 p-6 xl:px-0'>
      <h1 className='text-2xl font-bold text-[#1E1E1E]'>Chat Anônimo</h1>
      <div className="flex flex-col gap-2 xl:gap-3">
        {/* Renderizando os CardComments com base no estado de exibição */}
        {displayedComments.map((comment, index) => (
          <CardComment
            key={index}
            titulo={comment.titulo}
            texto={comment.texto}
            curtidas={comment.curtidas}
            data={comment.data}
          />
        ))}

        {comments.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)} // Alterna entre mostrar todos ou apenas 2
            className='text-[#FA7B2B] font-semibold cursor-pointer'
          >
            {showAll ? 'Ver menos' : 'Ver mais'}
          </button>
        )}

        <h1 className='text-2xl font-bold text-[#1E1E1E] mt-4'>Fazer Comentário</h1>
        <div className="border-2 border-black p-5 rounded-2xl flex flex-col gap-3">
          <div className="">
            <h4 className='text-sm '>Escreva o titulo:</h4>
            <input type="text" name="" id="" className='bg-[#FCB98A] border border-black w-full rounded-lg p-2' />
          </div>
          <div className="">
            <h4 className='text-sm '>Escreva a descrição:</h4>
            <textarea type="text" name="" id="" className='resize-none bg-[#FCB98A] border border-black w-full rounded-lg p-2 h-24 ' />
          </div>
        </div>
        <div className="flex justify-end mt-1">
          <button className='text-white bg-[#FA7B2B] p-2 px-8 rounded-3xl'>Enviar</button>
        </div>
      </div>
    </div>
  )
}
