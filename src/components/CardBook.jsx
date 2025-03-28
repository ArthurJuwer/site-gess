import React from 'react'
import Link from 'next/link'

export default function CardBook({ book }) {
  return (
    <Link 
      href={book.link} 
      className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg px-8 py-6 h-28 relative"
    >
      <span className="text-white font-bold text-6xl absolute left-8">{book.year}</span>
      <span className="text-white font-bold text-4xl absolute left-17 bottom-11">º</span>
      <span className="text-white text-lg absolute left-18 bottom-7">ano</span>
    </Link>
  )
}
