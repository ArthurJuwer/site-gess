import React from 'react'

export default function ItemMenu({icone, texto, index}) {
  return (
    <div className={`flex items-center pb-2  ${index === 9 ? 'border-0' : 'border-b-[3px] border-[#FA7B2B]'}`}>
        {icone}
        <h1 className="absolute transform -translate-x-1/2 left-1/2 text-[#FA7B2B] text-xl font-semibold">{texto}</h1>
    </div>
  )
}
