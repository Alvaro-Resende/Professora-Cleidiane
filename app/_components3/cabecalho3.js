"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Lusitana } from "next/font/google";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Cabecalho3() {
  const router = useRouter();
  return (
    <div className="bg-[#FF7AAC] w-full flex flex-col sm:flex-row justify-between items-center p-2 gap-3 sm:gap-0">
      {/* Logo + Título */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
        <img
          src="/imagens/dona_neide-removebg-preview.png"
          alt="Logo do site"
          className="h-[50px] w-[50px]"
        />
        <h1
          className={`${lusitana.className} text-xl sm:text-2xl italic font-semibold mt-3`}
        >
          Dona Cleide
        </h1>
      </div>

      {/* Botões */}
      <div className="flex justify-center items-center gap-2 sm:gap-3 w-full sm:w-auto">
        <button
          onClick={() => router.push("/")}
          className="w-[180px] h-[48px] flex items-center justify-center rounded-xl bg-black text-white text-base sm:text-xl
                     shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl no-print"
        >
          <span
            className={`${lusitana.className} flex justify-center items-center gap-2 font-bold`}
          >
            <GrLinkPrevious /> Voltar
          </span>
        </button>

        <button
          onClick={() => router.push("/pagina2")}
          className="w-[180px] h-[48px] flex items-center justify-center rounded-xl bg-black text-white text-base sm:text-xl
                     shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl no-print"
        >
          <span
            className={`${lusitana.className} flex justify-center items-center gap-2 font-bold`}
          >
            Agendar Aula <GrLinkNext />
          </span>
        </button>
      </div>
    </div>
  );
}
