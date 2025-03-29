import React from 'react'

export default function ButtonMap({label, icon: Icon, onClick}) {
  return (
    <div className="flex rounded-3xl items-center justify-center p-8 w-full flex-col gap-5 bg-[#FA7B2B] text-white cursor-pointer hover:bg-[#e76a1e] transition-all" onClick={onClick}>
      <Icon className='size-12'/>
      <h2>{label}</h2>
    </div>
  )
}
