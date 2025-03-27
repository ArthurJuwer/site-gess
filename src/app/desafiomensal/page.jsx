'use client'
import { useState } from "react";
import Image from "next/image";
import Estrelas from "../../../public/star.svg";
import { ChevronDown } from "lucide-react";

export default function DesafioMensal() {
  const desafios = [
    {
      id: "01/05",
      titulo: "Números Perfeitos",
      descricao:
        "Um número perfeito é aquele em que a soma de seus divisores (exceto ele mesmo) é igual a ele.",
      entrada: `1 | Digite um número: 28`,
      saida: `2 | Divisores: 1, 2, 4, 7, 14  
3 | 28 é um número perfeito!`,
      dificuldade: 3,
    },
    {
      id: "01/04",
      titulo: "Easy Learning with HTML",
      descricao: "Aprenda o básico de HTML com exercícios simples e práticos.",
      entrada: `1 | Digite o código HTML`,
      saida: `2 | O código HTML foi validado!`,
      dificuldade: 2,
    },
    {
      id: "01/03",
      titulo: "Easy Learning with HTML",
      descricao: "Aprofunde seus conhecimentos de HTML com exercícios interativos.",
      entrada: `1 | Digite o código HTML`,
      saida: `2 | O código HTML foi validado corretamente!`,
      dificuldade: 1,
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const toggleDesafio = (id) => {
    setExpanded(expanded === id ? null : id); // Alterna o estado de expandido
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <section className="w-full bg-[#FFE09A] p-8 flex flex-col gap-5">
        <h1 className="text-[#FA7B2B] text-3xl font-bold">Desafio Mensal</h1>
        <p className="text-[#665A3E] text-sm">
          O GESS está te desafiando a fazer estes exercicios!
          <br />
          <br />
          Reforce seu aprendizado no Técnico com esta seção
          <br />
          <br />
          Eai, Preparado?
        </p>
        <a
          href="#main"
          className="bg-[#FA7B2B] flex items-center justify-center text-white w-44 px-4 h-10 rounded-full"
        >
          Acessar
        </a>
      </section>

      <main id="main" className="px-8 w-full space-y-4">
        <span className="block bg-[#D9D9D9] w-full h-0.5"></span>
        <h1 className="text-[#1E1E1E] text-xl font-semibold">
          {desafios[0].id} {desafios[0].titulo}
        </h1>
        <p className="text-[#4B4B4B] text-sm">{desafios[0].descricao}</p>
        <div className="bg-[#FFE09A] h-auto w-full rounded-3xl p-6 flex flex-col gap-5">
          <h1 className="text-[#1E1E1E] text-xl font-semibold">Exemplo de Entrada:</h1>
          <section className="bg-white w-full h-full border-l-4 border-l-orange-600 p-4">
            <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm font-mono">
              <code>{desafios[0].entrada}</code>
            </pre>
          </section>

          <h1 className="text-[#1E1E1E] text-xl font-semibold">Exemplo de Saída:</h1>
          <section className="bg-white w-full h-full border-l-4 border-l-orange-600 p-4">
            <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm font-mono">
              <code>{desafios[0].saida}</code>
            </pre>
          </section>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-x-2">
            <h2 className="text-sm font-semibold">Dificuldade: </h2>
            {Array.from({ length: desafios[0].dificuldade }).map((_, index) => (
              <Image key={index} src={Estrelas} alt="" className="size-6" />
            ))}
          </div>
          <button className="bg-[#1E1E1E] text-white rounded-full px-4 py-2 text-xs">
            Enviar Desafio
          </button>
        </div>
      </main>

      <section className="px-8 w-full space-y-4">
        <span className="block bg-[#D9D9D9] w-full h-0.5"></span>
        <h1 className="text-xl font-semibold text-[#1E1E1E]">Desafios anteriores:</h1>
        <div className="flex flex-col gap-4 items-center w-full">
          {desafios.slice(1).map((desafio) => (
            <div
              key={desafio.id}
              className="w-full text-white flex justify-between px-4 py-3 bg-[#FA7B2B] rounded-xl cursor-pointer"
              onClick={() => toggleDesafio(desafio.id)} // Aciona o toggle para abrir/fechar
            >
              <h2 className="font-semibold">
                {desafio.id} - {desafio.titulo}
              </h2>
              <ChevronDown className="size-7" />
            </div>
          ))}

          {/* Exibe o conteúdo do desafio expandido logo abaixo do título do desafio */}
          {desafios.slice(1).map((desafio) => (
            expanded === desafio.id && (
              <div
                key={desafio.id}
                className="bg-[#FFE09A] w-full rounded-3xl p-6 flex flex-col gap-5 mt-2"
              >
                <h1 className="text-[#1E1E1E] text-xl font-semibold">Exemplo de Entrada:</h1>
                <section className="bg-white w-full h-full border-l-4 border-l-orange-600 p-4">
                  <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm font-mono">
                    <code>{desafio.entrada}</code>
                  </pre>
                </section>

                <h1 className="text-[#1E1E1E] text-xl font-semibold">Exemplo de Saída:</h1>
                <section className="bg-white w-full h-full border-l-4 border-l-orange-600 p-4">
                  <pre className="bg-gray-100 p-3 rounded-md overflow-x-auto text-sm font-mono">
                    <code>{desafio.saida}</code>
                  </pre>
                </section>
              </div>
            )
          ))}
        </div>
      </section>
    </div>
  );
}
