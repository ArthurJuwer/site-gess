import { Heart } from 'lucide-react'
import React from 'react'

export default function CardComment({titulo, texto, data}) {
  return (
    <div className="w-full bg-[#FA7B2B] rounded-2xl p-4 text-white flex flex-col gap-5">
        <h1 className='font-semibold'>{titulo}</h1>
        <p className='text-xs text-[#FDBD95]'>{texto}</p>
        <div className="flex justify-between">
            <span className=""></span>
            <h3 className='text-sm'>{data}</h3>
        </div>
    </div>
  )
}
