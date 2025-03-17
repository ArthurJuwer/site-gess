import React from 'react'

export default function ItemMenu({icone, texto, index, cor}) {
  return (
    <div className={`flex items-center pb-2  ${index === 9 ? 'border-0' : `border-b-[3px]`}`} style={{borderColor: `${cor}`}} >
        <span style={{color: `${cor}`}}>{icone}</span>
        <h1 className={`uppercase absolute transform -translate-x-1/2 left-1/2 text-lg font-semibold`} style={{color: `${cor}`}}>{texto}</h1>
    </div>
  )
}
