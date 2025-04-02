'use client'

import CardComment from '@/components/CardComment'
import { Heart } from 'lucide-react'
import React, { useState } from 'react'


// import emailjs from '@emailjs/browser'
// INSTALAR

export default function ChatSenac() {
  const comments = [
    {
      titulo: 'Podium está com promoção esta semana!',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
      data: '11/03/2024'
    },
    {
      titulo: 'Há poucos mouses na sala 101',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
      data: '11/03/2024'
    },
    {
      titulo: 'Faltam poucos dias para Interséries!',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...',
      data: '11/03/2024'
    }
  ]

  const [showAll, setShowAll] = useState(false)
  const [formData, setFormData] = useState({ titulo: '', descricao: '' })

  const displayedComments = showAll ? comments : comments.slice(0, 2)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      titulo: formData.titulo,
      descricao: formData.descricao,
    }, 'YOUR_PUBLIC_KEY')
    .then((response) => {
      alert('Email enviado com sucesso!')
      setFormData({ titulo: '', descricao: '' })
    })
    .catch((error) => {
      console.error('Erro ao enviar o email:', error)
      alert('Erro ao enviar o email')
    })
  }

  return (
    <div className='flex flex-col gap-5 p-6 xl:px-0'>
      <h1 className='text-2xl font-bold text-[#1E1E1E]'>Chat Anônimo</h1>
      <div className='flex flex-col gap-2 xl:gap-3'>
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
          <button onClick={() => setShowAll(!showAll)} className='text-[#FA7B2B] font-semibold cursor-pointer'>
            {showAll ? 'Ver menos' : 'Ver mais'}
          </button>
        )}

        <h1 className='text-2xl font-bold text-[#1E1E1E] mt-4'>Fazer Comentário</h1>
        <form onSubmit={sendEmail} className='border-2 border-black p-5 rounded-2xl flex flex-col gap-3'>
          <div>
            <h4 className='text-sm'>Escreva o título:</h4>
            <input 
              type='text' 
              name='titulo' 
              value={formData.titulo} 
              onChange={handleChange} 
              className='bg-[#FCB98A] border border-black w-full rounded-lg p-2' 
              required 
            />
          </div>
          <div>
            <h4 className='text-sm'>Escreva a descrição:</h4>
            <textarea 
              name='descricao' 
              value={formData.descricao} 
              onChange={handleChange} 
              className='resize-none bg-[#FCB98A] border border-black w-full rounded-lg p-2 h-24' 
              required 
            />
          </div>
          <div className='flex justify-end mt-1'>
            <button type='submit' className='text-white bg-[#FA7B2B] p-2 px-8 rounded-3xl'>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
