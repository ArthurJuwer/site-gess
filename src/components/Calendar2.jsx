import React from "react";
import { format, startOfMonth, endOfMonth, addDays, isSameMonth, isToday, getMonth, getYear } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const Calendar2 = ({ markedDays = [], month }) => {
  // Se 'month' não for passado, usa o mês atual
  const today = new Date();
  const selectedMonth = month || today; // Se o mês não for passado, usa a data atual
  
  const firstDay = startOfMonth(selectedMonth);
  const lastDay = endOfMonth(selectedMonth);

  const days = [];
  let currentDay = firstDay;

  while (currentDay <= lastDay) {
    days.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gray-200 shadow-xl ">
      <div className="flex items-center justify-center text-center font-bold p-1.5 text-xs bg-orange-600 text-white capitalize">
        {format(selectedMonth, "MMMM yyyy", { locale: ptBR })}
      </div>

      <div className="grid grid-cols-7 text-center p-2">
        {/* Ajusta para começar no dia correto da semana */}
        {Array.from({ length: firstDay.getDay() }).map((_, i) => (
          <div key={`empty-${i}`} className="py-2 w-5 h-5 mx-auto text-sm"></div>
        ))}

        {days.map((day, index) => {
          const dayNumber = format(day, "d");
          const isMarked = markedDays.includes(parseInt(dayNumber));

          return (
            <div
              key={index}
              className={`py-2.5 flex items-center justify-center w-5 h-4 mx-auto rounded-full
                text-black text-[10px]
                ${isMarked ? "bg-orange-500 text-white" : ""}
              `}
            >
              {dayNumber}
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default Calendar2;
