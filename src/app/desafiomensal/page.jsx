import Image from "next/image";
import Estrelas from "../../../public/star.svg"
import { ChevronDown } from "lucide-react";

export default function DesafioMensal() {
  return (
    <div className="flex flex-col items-center gap-5">
        <section className="w-full bg-[#FFE09A] p-8 flex flex-col gap-5">
            <h1 className="text-[#FA7B2B] text-3xl font-bold">Desafio Mensal</h1>
            <p className="text-[#665A3E] text-sm">
                HTML is the standard markup language for Web pages.
                <br /><br />
                With HTML you can create your own Website.
                <br /><br />
                HTML is easy to learn - You will enjoy it!
            </p>
            <button className="bg-[#FA7B2B] text-white w-44 px-4 h-10 rounded-full">Acessar</button>
        </section>
        
        <main className="px-8 w-full space-y-4">
          <span className="block bg-[#D9D9D9] w-full h-0.5"></span>
          <h1 className="text-[#1E1E1E] text-xl font-semibold">01/05 Easy Learning with HTML </h1>
          <p className="text-[#4B4B4B] text-sm">With our "Try it Yourself" can edit the HTML code and view the result.</p>
          <div className="bg-[#FFE09A] h-80 w-full rounded-3xl p-8 flex flex-col gap-5">
            <h1 className="text-[#1E1E1E] text-xl font-semibold">Exemplo de Código:</h1>
            <div className="bg-white w-full h-full border-l-4 border-l-orange-600">
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center">
              <h2 className="text-sm font-semibold">Dificuldade: </h2>
              <Image src={Estrelas} alt="" className="size-6" />
              <Image src={Estrelas} alt="" className="size-6" />
              <Image src={Estrelas} alt="" className="size-6" />
              <Image src={Estrelas} alt="" className="size-6" />
              <Image src={Estrelas} alt="" className="size-6" />
            </div>
            <button className="bg-[#1E1E1E] text-white rounded-full px-4 py-2 text-xs">Enviar Desafio</button>
          </div>
        </main>
        <section className="px-8 w-full space-y-4">
          <span className="block bg-[#D9D9D9] w-full h-0.5"></span>
          <h1 className="text-xl font-semibold text-[#1E1E1E]">Desafios anteriores:</h1>
          <div className="flex flex-col gap-4 items-center w-full">
            <div className="w-full text-white flex justify-between px-4 py-3 bg-[#FA7B2B] rounded-xl">
              <h2 className="font-semibold">01/04 - Easy Learning with HTML</h2>
              <ChevronDown className="size-7"/>
            </div>
            <div className="w-full text-white flex justify-between px-4 py-3  bg-[#FA7B2B] rounded-xl">
              <h2 className="font-semibold">01/03 - Easy Learning with HTML</h2>
              <ChevronDown className="size-7"/>
            </div>
          </div>
        </section>
        
    </div>
  )
}
