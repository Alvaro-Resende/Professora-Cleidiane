"use client";

import React from "react";
import { Lusitana } from "next/font/google";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Dinamica() {
  return (
    <div
      className={`${lusitana.className} max-w-full p-8 flex gap-6 justify-start xl:justify-center items-stretch overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200`}
    >
      {/* Card Base */}
      <div className="flex-shrink-0 w-[400px] h-[550px] p-5 border border-black rounded-lg flex flex-col justify-between items-start gap-4 bg-white overflow-hidden">
        <h1 className="text-3xl font-bold bg-[#3DDABE] w-[40px] h-[35px] text-center rounded">
          1
        </h1>

        <span className="text-3xl font-bold">Agende de forma simples</span>

        <span className="text-lg flex-1">
          Escolha o melhor horário, selecione no calendário e combine os
          detalhes pelo WhatsApp. Todo o processo é rápido e direto, garantindo
          praticidade desde o primeiro contato.
        </span>

        <div className="relative w-full h-[250px]">
          {/* Foto maior */}
          <div className="absolute bottom-0 left-0 z-10 w-[235px] h-[220px] rounded-t-lg rounded-bl  overflow-hidden border border-black">
            <img
              src="/imagens/11.png"
              alt="Foto maior"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Foto menor */}
          <div className="absolute bottom-0 right-0 z-20 w-[160px] h-[180px] rounded-t-lg rounded-br overflow-hidden border border-black">
            <img
              src="/imagens/12.png"
              alt="Foto menor"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card Base */}
      <div className="flex-shrink-0 w-[400px] h-[550px] p-5 border border-black rounded-lg flex flex-col justify-between items-start gap-4 bg-white overflow-hidden">
        <h1 className="text-3xl font-bold bg-[#FFE03D] w-[40px] h-[35px] text-center rounded">
          2
        </h1>

        <span className="text-3xl font-bold">
          Aprender com leveza e clareza
        </span>

        <span className="text-lg flex-1">
          A Professora Cleidiane transmite confiança e tranquilidade em cada
          aula. Sua paciência e atenção individual tornam o aprendizado mais
          leve e estimulante.
        </span>

        <div className="relative flex items-center justify-start w-full h-[250px] flex-shrink-0 ">
          <div className="absolute right-0  z-30 w-[70%] rounded-lg border border-black overflow-hidden mr-5">
            <img
              src="/imagens/9.png"
              alt="Foto 1"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute right-[15%]  z-20 w-[65%] rounded-lg border border-black overflow-hidden mr-5">
            <img
              src="/imagens/9.png"
              alt="Foto 2"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute right-[30%] z-10 w-[60%] rounded-lg border border-black overflow-hidden mr-5">
            <img
              src="/imagens/9.png"
              alt="Foto 3"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card Base */}
      <div className="flex-shrink-0 w-[400px] h-[550px] p-5 border border-black rounded-lg flex flex-col justify-between items-start gap-4 bg-white overflow-hidden">
        <h1 className="text-3xl font-bold bg-[#2885FD] w-[40px] h-[35px] text-center rounded">
          3
        </h1>

        <span className="text-3xl font-bold">Fluência com confiança</span>

        <span className="text-lg flex-1">
          Mais do que aprender inglês, você vai ganhar segurança para se
          expressar em diferentes contextos: em viagens, no ambiente acadêmico
          ou no trabalho. Cada conquista é celebrada e o progresso é visível a
          cada semana.
        </span>

        <div className="flex justify-center items-center relative w-full h-[250px] ">
          <div className="absolute left-0 z-30 w-[70%] rounded-lg border border-black overflow-hidden">
            <img
              src="/imagens/10.png"
              alt="Foto 1"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute left-[15%] z-20 w-[70%] rounded-lg border border-black overflow-hidden">
            <img
              src="/imagens/10.png"
              alt="Foto 2"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute left-[30%] z-10 w-[70%] rounded-lg border border-black overflow-hidden">
            <img
              src="/imagens/10.png"
              alt="Foto 3"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
