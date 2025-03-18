'use client'
import { BusFront, Container, Cross, Landmark, Paperclip, Utensils } from 'lucide-react'
import React from 'react'

export default function Mapa() {
  return (
    <div className='flex flex-col gap-5 p-6'>
        <h1 className='text-2xl font-bold text-[#1E1E1E]'>Mapa da Unisinos</h1>
        <p>Ainda não disponivel...</p>
        {/* <iframe class="rounded-2xl border-4 border-orange-500" height={350} frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Unisinos&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
        <h1 className='text-2xl font-bold text-[#1E1E1E]'>Selecione item desejado:</h1>
        <div className="grid grid-cols-2 w-full gap-6">
            <div className="flex rounded-3xl items-center justify-center p-8 w-full flex-col gap-5 bg-[#FA7B2B] text-white">
                <Utensils className='size-12'/>
                <h2>Restaurantes</h2>
            </div>
            
            <div className="flex rounded-3xl items-center justify-center p-8 w-full flex-col gap-5 bg-[#FA7B2B] text-white">
                <Cross className='size-12'/>
                <h2>Farmácias</h2>
            </div>
            
            <div className="flex rounded-3xl items-center justify-center p-8 w-full flex-col gap-5 bg-[#FA7B2B] text-white">
                <Paperclip className='size-12'/>
                <h2>Impressoras</h2>
            </div>
            
            <div className="flex rounded-3xl items-center justify-center p-8 w-full flex-col gap-5 bg-[#FA7B2B] text-white">
                <BusFront className='size-12'/>
                <h2>Circulares</h2>
            </div>
            
            <div className="flex rounded-3xl items-center justify-center p-8 w-full flex-col gap-5 bg-[#FA7B2B] text-white">
                <Landmark className='size-12'/>
                <h2>Bancos</h2>
            </div>
            
            <div className="flex rounded-3xl items-center justify-center p-8 w-full flex-col gap-5 bg-[#FA7B2B] text-white">
                <Container className='size-12'/>
                <h2>Correios</h2>
            </div>
        </div>
    </div>
  )
}
