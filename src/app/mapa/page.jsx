'use client'
import ButtonMap from '@/components/ButtonMap';
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

import ModalMap from '@/components/ModalMap';
import { BusFront, Container, Cross, Landmark, Paperclip, Utensils } from 'lucide-react'
import React, { useState } from 'react'

export default function Mapa() {
    const buttons = [
        { icon: Utensils, label: "Restaurantes", category: "restaurante" },
        { icon: Cross, label: "Farmácias", category: "farmacia" },
        { icon: Paperclip, label: "Impressoras", category: "impressoras" },
        { icon: BusFront, label: "Circulares", category: "circulares" },
        { icon: Landmark, label: "Bancos", category: "bancos" },
        { icon: Container, label: "Correios", category: "correios" }
        ];
        const [modalOpen, setModalOpen] = useState(false);
        const [latlang, setLatLang] = useState(false);
        const [selectedLabel, setSelectedLabel] = useState("")
        const [category, setCategory] = useState("")
        const handleButtonClick = (label) => {
            setSelectedLabel(label);
            setModalOpen(true);
          };
  return (
    <div className='flex flex-col gap-5 p-6'>
        <h1 className='text-2xl font-bold text-[#1E1E1E]'>Mapa da Unisinos</h1>
        <Map latlang={latlang} />

        <h1 className='text-2xl font-bold text-[#1E1E1E]'>Selecione item desejado:</h1>
        <div className="grid grid-cols-2 w-full gap-6">
        {buttons.map((btn, index) => (
          <ButtonMap key={index} icon={btn.icon} label={btn.label} onClick={() => {
            handleButtonClick(btn.label);
            setCategory(btn.category)
        }
          }  />
        ))}
        <ModalMap isOpen={modalOpen} onClose={() => setModalOpen(false)} label={selectedLabel} category={category} onSelectLocation={setLatLang} />

        </div>
    </div>
  )
}
