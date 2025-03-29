import React, { useState } from 'react';
import Image from 'next/image';
import Podium from "../../public/Podium.png";
import Taberna from "../../public/Taberna.png";
import Subway from "../../public/Subway.png";
import Agafarma from "../../public/Agafarma.png";
import Hss from "../../public/Hss.png";

export default function ModalMap({ isOpen, onClose, label, category, onSelectLocation }) {
  const [selectedItem, setSelectedItem] = useState(null);

  // Dados simulados para diferentes categorias
  const data = {
    restaurante: [
      { name: "Podium Lanches", type: "Restaurante/Lancheria", distance: "900m", hours: "Aberto até 23:00", image: Podium, latlang: [-29.79762567197966, -51.15178068173709] },
      { name: "Taberna", type: "Restaurante/Lancheria", distance: "1.64km", hours: "Fechado até amanhã", image: Taberna, latlang: [-29.795012, -51.152220] },
      { name: "Subway", type: "Restaurante", distance: "2.5km", hours: "Aberto até 22:00", image: Subway, latlang: [-29.794328, -51.155661] }
    ],
    impressoras: [
      { name: "HSS Assessoria em Informática", type: "Impressora", distance: "1.21km", hours: "Aberto 24h", image: Hss, latlang: [-29.794817, -51.155989] }
    ],
    farmacia: [
      { name: "Agafarma Sinos SL", type: "Farmácia", distance: "500m", hours: "08:00-22:00", image: Agafarma, latlang: [-29.794910, -51.155919] },
    ],
    circulares: [],
    bancos: [],
    correios: [],
  };

  if (!isOpen) return null;

  // Filtra os dados de acordo com a categoria
  const categoryData = data[category] || [];

  // Função para selecionar um item e atualizar a localização no mapa
  const handleSelectItem = (index) => {
    setSelectedItem(index);
    const selected = categoryData[index];

    if (selected.latlang) {
      console.log("Coordenadas do item selecionado:", selected.latlang);
      onSelectLocation(selected.latlang); // Passa as coordenadas para o pai
    }
    onClose()
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="bg-white p-6 rounded-lg shadow-xl opacity-100 w-11/12 xl:max-w-lg xl:w-full">
        <h2 className="text-xl font-bold mb-6 text-center text-gray-800">Opções para {label}</h2>
        <ul className="space-y-4">
          {categoryData.map((item, index) => (
            <li
              key={index}
              className={`p-5 flex justify-between items-center rounded-lg shadow-md transition-all duration-300 ease-in-out transform ${selectedItem === index ? 'bg-blue-100 scale-105' : 'bg-white'}`}
              onClick={() => handleSelectItem(index)}
            >
              <div className="flex flex-col xl:flex-row xl:items-center gap-4">
                <Image src={item.image} alt={item.name} width={60} height={60} />
                <div>
                  <p className='text-sm xl:text-lg font-medium text-gray-900'>{item.name}</p>
                  <p className='text-xs text-gray-500'>{item.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className='text-xs text-gray-500'>Distância</p>
                <p className='text-lg font-medium text-gray-900'>{item.distance}</p>
                <p className="text-xs text-gray-500">{item.hours}</p>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
          onClick={onClose}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
