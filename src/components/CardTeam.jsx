import React from 'react'
import Image from 'next/image'

export default function CardTeam({image, nome, cargo}) {
  return (
    <div className="flex flex-col items-center gap-4">
        <Image src={image} className="border-2 border-black" alt=''/>
        <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className='bg-[#FF6900] text-[#1E1E1E] p-1 px-4 rounded text-center text-xl font-semibold'>{nome}</h1>
            <h2 className='text-[#1E1E1E] text-lg font-semibold'>{cargo}</h2>
        </div>
    </div>
  )
}
