'use client';
import Calendar2 from '@/components/Calendar2';
import Image from 'next/image';
import React, { useState } from 'react';
import brazilJs from '../../../public/braziljs.svg';
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
    { month: 0, markedDays: [23, 15] }, // Janeiro
    { month: 1, markedDays: [10, 25] }, // Fevereiro
    { month: 2, markedDays: [5, 18] },  // Março
    { month: 3, markedDays: [12, 20] }, // Abril
    { month: 4, markedDays: [8, 22] },  // Maio
    { month: 5, markedDays: [2, 14] },  // Junho
    { month: 6, markedDays: [19, 26] }, // Julho
    { month: 7, markedDays: [4, 16] },  // Agosto
    { month: 8, markedDays: [11, 27] }, // Setembro
    { month: 9, markedDays: [9, 22] },  // Outubro
    { month: 10, markedDays: [3, 17] }, // Novembro
    { month: 11, markedDays: [7, 21] }, // Dezembro
  ];

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };
  return (
    <div className='flex flex-col gap-5 p-6'>
      <h1 className='text-center text-2xl font-bold text-[#1E1E1E]'>Calendário</h1>
      <Calendar markedDays={markedDaysForMonths[selectedMonth.getMonth()].markedDays} selectedMonth={selectedMonth} />

      <div className="bg-[#FA7B2B] rounded-4xl text-white p-6 pb-3 flex flex-col gap-3 shadow-xl">
        <h1 className='text-center text-xl font-semibold'>Passeio BrazilJS</h1>
        <div className="flex flex-col gap-2">
          <h2 className='font-semibold'>Informações:</h2>
          <div className="flex items-center bg-white p-6 rounded-2xl gap-10">
            <div className="">
              <Image src={brazilJs} alt='brazil js' />
            </div>
            <div className="">
              <ul className='text-[#FA7B2B] text-xs font-semibold list-disc'>
                <li>Uniforme obrigatório</li>
                <li>Lanche Coletivo</li>
                <li>Valor: R$ 45,00</li>
                <li>Levar RG</li>
                <li>Saida: 8:00h</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <span className='text-[#FA7B2B] bg-white px-3 py-1 font-semibold text-xl rounded-2xl text-center'>11/05</span>
          </div>
        </div>
      </div>

      <h1 className='text-left text-2xl font-bold text-[#1E1E1E]'>Calendário Anual</h1>
      <p>Ainda não disponível...</p>
      <div className="grid grid-cols-2 gap-4">
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
