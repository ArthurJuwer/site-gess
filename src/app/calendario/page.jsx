'use client';
import Calendar2 from '@/components/Calendar2';
import Image from 'next/image';
import React, { useState } from 'react';
import brazilJs from '../../../public/fotos-calendario/braziljs.svg';
import Google from '../../../public/fotos-calendario/Google.png';
import CopaGess from '../../../public/fotos-calendario/CopaGess.jpeg';
import Calendar from '@/components/Calendar';
import { format, startOfMonth, endOfMonth, addDays, getMonth, getYear } from 'date-fns';

export default function Calendario() {

  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today);

  const generateMonthsUntilDecember = () => {
    const months = [];
    const currentYear = today.getFullYear();

    for (let i = 0; i <= 11; i++) {
      const month = new Date(currentYear, i, 1); 
      months.push(month);
    }

    return months;
  };

  const monthsUntilDecember = generateMonthsUntilDecember();

  const markedDaysForMonths = [
    { month: 0, markedDays: [] }, // Janeiro
    { month: 1, markedDays: [] }, // Fevereiro
    { month: 2, markedDays: [] },  // Março
    { month: 3, markedDays: [12, 20] }, // Abril
    { month: 4, markedDays: [29] },  // Maio
    { month: 5, markedDays: [] },  // Junho
    { month: 6, markedDays: [] }, // Julho
    { month: 7, markedDays: [] },  // Agosto
    { month: 8, markedDays: [] }, // Setembro
    { month: 9, markedDays: [] },  // Outubro
    { month: 10, markedDays: [] }, // Novembro
    { month: 11, markedDays: [] }, // Dezembro
  ];

  const passeios = [
    {
      id: "abril-12",
      data: "12/04",
      imagem: brazilJs,
      titulo: "Passeio Brazil JS", 
      texto: `Uniforme obrigatório
      Lanche Coletivo
      Valor: R$ 45,00
      Levar RG
      Saída: 8:00h`
    },
    {
      id: "abril-20",
      data: "20/04",
      imagem: Google,
      titulo: "Visita Google",
      texto: `Uniforme opcional
      Lanche Único
      Valor: R$ 55,00
      Levar CNH
      Saída: 8:30h`
    },
    {
      id: "maio-29",
      data: "29/05",
      imagem: CopaGess,
      titulo: "Copa GESS",
      texto: `Uniforme do Time
      Local: Quadra 1 Unisinos
      Valor: R$ 8,90
      Levar Ingresso
      Começo: 19:00h`
    }
  ];

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }); 
  };
  const [selectedPasseioId, setSelectedPasseioId] = useState(0);

  const handleDayClick = (id) => {
    setSelectedPasseioId(id);
    console.log(selectedPasseioId)
  };

  return (
    <div className='flex items-center flex-col gap-5'>
      <div className="w-full h-full flex items-center flex-col lg:gap-16 gap-8 bg-orange-200 p-6 pb-10">

      <div className="flex flex-col gap-4 w-full">
        <h1 className='text-center text-2xl font-bold text-[#1E1E1E]'>Calendário</h1>
        <Calendar 
          markedDays={markedDaysForMonths[selectedMonth.getMonth()].markedDays} 
          selectedMonth={selectedMonth}
          onDayClick={handleDayClick}
        />
      </div>
      
        <div className="bg-[#FA7B2B] lg:w-3/5 rounded-4xl text-white p-6 pb-3 flex flex-col gap-3 shadow-xl">
          <h1 className='text-center text-xl font-semibold'>{passeios.find(passeio => passeio.id === selectedPasseioId || passeio.id === 'abril-12')?.titulo}</h1>
          <div className="flex flex-col gap-2">
            <h2 className='font-semibold'>Informações:</h2>
            <div className="flex items-center bg-white p-6 xl:p-10 rounded-2xl gap-10">
            <div className="">
                <Image 
                  src={passeios.find(passeio => passeio.id === selectedPasseioId || passeio.id === 'abril-12')?.imagem } 
                  alt='passeio'
                  width={100}
                  height={100}
                />
              </div>
              <div className="">
              <ul className='text-[#FA7B2B] text-sm font-semibold list-disc'>
                {passeios.find(passeio => passeio.id === selectedPasseioId || passeio.id === 'abril-12')?.texto.split('\n').map((linha, index) => (
                  <li key={index}>{linha.trim()}</li>
                ))} 
              </ul>
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <span className='text-[#FA7B2B] bg-white px-3 py-1 font-semibold text-xl rounded-2xl text-center'>{passeios.find(passeio => passeio.id === selectedPasseioId || passeio.id === 'abril-12')?.data} </span>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-left text-2xl font-bold text-[#1E1E1E]'>Calendário Anual</h1>
      <div className="grid w-full grid-cols-2 gap-4 p-2 lg:p-0">
        {monthsUntilDecember.map((month, index) => {
          const markedDays = markedDaysForMonths.find(item => item.month === index)?.markedDays || [];

          return (
            <div
              key={index}
              onClick={() => handleMonthClick(month)} 
              className="cursor-pointer hover:bg-gray-200 rounded-md w-full max-w-md mx-auto"
            >
              <Calendar2 markedDays={markedDays} month={month} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
