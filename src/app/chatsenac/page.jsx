import { Heart } from 'lucide-react'
import React from 'react'

export default function ChatSenac() {
  return (
    <div className='flex flex-col gap-5 p-6'>
        <h1 className='text-2xl font-bold text-[#1E1E1E]'>Chat Anônimo</h1>
        <div className="flex flex-col gap-2">
            <div className="w-full bg-[#FA7B2B] rounded-2xl p-4 text-white flex flex-col gap-5">
                <h1 className='font-semibold'>Há poucos mouses na sala 101</h1>
                <p className='text-xs text-[#FDBD95]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-1 text-sm">
                        <Heart className='size-5'/>
                        <h3>1</h3>
                    </div>
                    <h3 className='text-sm'>11/03/2024</h3>
                </div>
            </div>
            <div className="w-full bg-[#FA7B2B] rounded-2xl p-4 text-white flex flex-col gap-5">
                <h1 className='font-semibold'>Podium esta com promoção esta semana!</h1>
                <p className='text-xs text-[#FDBD95]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                <div className="flex justify-between">
                    <div className="flex items-center gap-1 text-sm">
                        <Heart className='size-5' fill='#ffffff'/>
                        <h3>4</h3>
                    </div>
                    <h3 className='text-sm'>11/03/2024</h3>
                </div>
            </div>
            <button className='bg-[#FA7B2B] text-white p-2.5 text-base rounded-full mx-28 mt-2'>Ver Mais</button>
            <h1 className='text-2xl font-bold text-[#1E1E1E] mt-4'>Fazer Comentário</h1>
            <div className="border-2 border-black p-5 rounded-2xl flex flex-col gap-3">
                <div className="">
                    <h4 className='text-sm '>Escreva o titulo:</h4>
                    <input type="text" name="" id="" className='bg-[#FCB98A] border border-black w-full rounded-lg p-2' />
                </div>
                <div className="">
                    <h4 className='text-sm '>Escreva a descrição:</h4>
                    <input type="text" name="" id="" className='bg-[#FCB98A] border border-black w-full rounded-lg p-2' />
                </div>
            </div>
            <div className="flex justify-end mt-1">
                <button className='text-white bg-[#FA7B2B] p-2 px-8 rounded-3xl'>Enviar</button>
            </div>
            
            
        </div>
    </div>

  )
}
