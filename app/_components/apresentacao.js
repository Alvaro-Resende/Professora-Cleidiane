"use client";
import React from "react";
import { Lusitana } from "next/font/google";
import { GrLinkNext } from "react-icons/gr";
import { useRouter } from "next/navigation";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Apresentacao() {
  const router = useRouter();
  return (
    <section
      className="w-full bg-[#FF7AAC] flex flex-col-reverse sm:flex-col-reverse md:flex-row 
                 items-center md:items-center gap-8 px-12 py-12 "
    >
      <div className="flex flex-col gap-6 justify-start items-start w-full md:w-[600px]">
        <h1
          className={`${lusitana.className} text-3xl sm:text-4xl md:text-6xl font-bold leading-tight`}
        >
          Aprenda inglês com paciência e dedicação, em aulas personalizadas!
        </h1>
        <button
          onClick={() => router.push("/pagina2")}
          className="w-full sm:w-full md:w-[300px] flex items-center justify-center rounded-xl mt-6 bg-black text-white text-xl px-6 py-3
                     shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        >
          <span
            className={`${lusitana.className} flex justify-center items-center text-xl font-bold gap-2`}
          >
            Agendar Aula <GrLinkNext />
          </span>
        </button>
      </div>

      <div className="relative w-full max-w-[350px] md:max-w-[500px] flex justify-start items-start mb-8 md:mb-0">
        <div className="relative z-30 w-full">
          <img
            src="/imagens/1.png"
            alt="Foto dona Cleide"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="absolute left-[24%] top-[8%] z-20 w-[85%]">
          <img
            src="/imagens/1.png"
            alt="Sobreposição 1"
            className="w-full h-auto rounded"
          />
        </div>

        <div className="absolute left-[48%] top-[16%] z-10 w-[70%]">
          <img
            src="/imagens/1.png"
            alt="Sobreposição 2"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}
