import React from "react";
import { format, startOfMonth, endOfMonth, addDays, isSameMonth, isToday, getMonth, getYear } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const Calendar = ({ markedDays = [] }) => {
  const today = new Date();
  const month = new Date(getYear(today), getMonth(today)); // Mês atual

  const firstDay = startOfMonth(month);
  const lastDay = endOfMonth(month);

  const days = [];
  let currentDay = firstDay;

  while (currentDay <= lastDay) {
    days.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }

  return (
    <div className="w-full max-w-md mx-auto bg-gray-200 shadow-xl">
      <div className="grid grid-cols-7 text-center font-bold text-white bg-orange-600 text-sm">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((day) => (
          <div key={day} className="py-2">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-center p-2">
        {/* Ajusta para começar no dia correto da semana */}
        {Array.from({ length: firstDay.getDay() }).map((_, i) => (
          <div key={`empty-${i}`} className="py-3 w-10 h-10 mx-auto text-sm"></div>
        ))}

        {days.map((day, index) => {
          const dayNumber = format(day, "d");
          const isMarked = markedDays.includes(parseInt(dayNumber));

          return (
            <div
              key={index}
              className={`py-3 flex items-center justify-center w-9 h-9 mx-auto rounded-full
                text-black text-sm
                ${isToday(day) ? "bg-orange-500 text-white" : ""}
                ${isMarked ? "bg-blue-500 text-white" : ""}
              `}
            >
              {dayNumber}
            </div>
          );
        })}
      </div>

      <div className="text-right font-bold p-4 pt-0 text-sm text-[#1E1E1E] capitalize">
        {format(month, "MMMM yyyy", { locale: ptBR })}
      </div>
    </div>
  );
};

export default Calendar;
