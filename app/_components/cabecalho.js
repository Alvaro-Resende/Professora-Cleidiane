"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Lusitana } from "next/font/google";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Cabecalho() {
  const router = useRouter();
  return (
    <div className="bg-[#FF7AAC] w-full flex justify-between items-center p-1">
      <div className="flex justify-center items-center gap-3 ">
        <img
          src="/imagens/dona_neide-removebg-preview.png"
          alt="Logo do site"
          className="h-[50px] w-[50px]"
        />

        <h1
          className={`${lusitana.className} text-2xl italic font-semibold mt-3`}
        >
          Dona Cleide
        </h1>
      </div>

      <button
        onClick={() => router.push("/pagina3")}
        className="group w-[180px] h-[48px] mr-2 rounded-xl bg-black text-white transform text-xl transition hover:scale-105 sm:hover:scale-110 hover:text-2xl"
      >
        <span
          className={`${lusitana.className} flex justify-center items-center text-xl font-bold gap-2`}
        >
          Meu Currículo
          <FaRegHeart className="text-white group-hover:hidden" />
          <FaHeart className="hidden group-hover:inline text-white" />
        </span>
      </button>

      {/* 
      <div className="flex items-center gap-3 md:r-3">
        <button
          onClick={() => {
            const section = document.getElementById("quem-somos");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-[115px] md:w-[160px] h-[40px] rounded-xl border border-[#BD8F42] text-[#BD8F42] transform transition hover:scale-105 sm:hover:scale-110 font-serif hover:bg-white"
        >
          Quem Somos ?
        </button>
        <button
          onClick={() => {
            const section = document.getElementById("servicos");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-[85px] md:w-[160px] h-[40px] rounded-xl border border-[#BD8F42] text-[#BD8F42] transform transition hover:scale-105 sm:hover:scale-110 font-serif hover:bg-white"
        >
          Serviços
        </button>
        <button
          onClick={() => router.push("/pagina2")}
          className="w-[130px] md:w-[160px] h-[48px] sm:h-[60px] rounded-xl border bg-[#BD8F42] border-white text-white transform text-xl transition hover:scale-105 sm:hover:scale-110 font-serif hover:border-white hover:text-2xl"
        >
          <span className="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
            Contratar
          </span>
        </button>
      </div>
      */}
    </div>
  );
}
