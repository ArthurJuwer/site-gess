import React from 'react'
import Link from 'next/link'

export default function CardBook({ book }) {
  return (
    <Link 
      href={book.link} 
      className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg px-8 py-6 h-28 lg:h-[7.5rem] lg:py-8 flex items-center"
    >
      <div className="flex items-baseline space-x-1">
        <span className="text-white font-bold text-6xl flex ">
          {book.year}
          <span className="text-4xl mt-1">º</span>
        </span>
        <span className="text-white -ml-4  text-lg">ano</span>
      </div>
    </Link>
  )
}
