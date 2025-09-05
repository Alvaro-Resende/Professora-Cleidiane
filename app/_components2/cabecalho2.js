"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Cabecalho2() {
  const router = useRouter();
  return (
    <div className="border-l-2 border-r-2 border-t-2 rounded-t-xl border-[#C99A45] w-full h-[100px] md:h-[98px] flex justify-center md:justify-between items-center p-5 bg-[#181C1F] gap-20">
      <div className="relative h-[85px] w-[100px] ml-3">
        <Image src="/imagens/Logo.png" alt="Logo da lojas" fill className="" />
      </div>

        <button
          onClick={() => router.push("/")}
          className="w-[130px] md:w-[160px] h-[48px] sm:h-[60px] rounded-xl border bg-[#BD8F42] border-white text-white transform text-xl transition hover:scale-105 sm:hover:scale-110 font-serif hover:border-white hover:text-2xl"
        >
          <span className="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            Voltar
          </span>
        </button>
      
    </div>
  );
}
