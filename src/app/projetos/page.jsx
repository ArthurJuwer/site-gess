import React from 'react'

export default function Projetos() {
  return (
    <div className=''>
        <div className="flex flex-col justify-center items-center text-center gap-5 mt-10">
            <div className="flex flex-col items-center justify-center gap-2">
                <h1 className='text-[#1E1E1E] text-3xl font-bold'>PROJETOS GESS</h1>
                <p className='text-[#A5A5A5] w-4/5'>Nossa história, o que fazemos, departamentos, projetos e muito mais.</p>
            </div>
            
            <div className="h-[50dvh] bg-[#FDD9C2] w-full flex items-center justify-center">
                <h1>Ainda não há projetos...</h1>
            </div>
        </div>
    </div>
  )
}
