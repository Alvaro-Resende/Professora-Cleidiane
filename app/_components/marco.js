"use client";
import React from "react";
import { Lusitana } from "next/font/google";
import { BiSolidBookHeart } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Marco() {
  return (
    <div className="flex px-10 py-10 justify-center items-center gap-3 flex-wrap">
      <div className="w-[300px] h-[130px] p-3 ">
        <span
          className={`${lusitana.className} flex justify-center items-center text-xl font-bold gap-2`}
        >
          <BiSolidBookHeart className="text-3xl mr-1" /> 25+ anos de ensino
        </span> 

        <span
          className={`${lusitana.className} text-center text-mb block mt-3`}
        >
          Décadas dedicadas ao ensino de inglês com paciência e dedicação.
        </span>
      </div>

      <div className="w-[300px] h-[130px] p-3 ">
        <span
          className={`${lusitana.className} flex justify-center items-center text-xl font-bold gap-2`}
        >
          <FaGraduationCap className="text-3xl mr-1" /> Formada em Letras/Inglês
        </span>

        <span
          className={`${lusitana.className} text-center text-mb block mt-3`}
        >
          Diploma em Letras pela Universidade USP.
        </span>
      </div>

      <div className="w-[300px] h-[130px] p-3">
        <span
          className={`${lusitana.className} flex justify-center items-center text-xl font-bold gap-2`}
        >
          <FaGlobeAmericas className="text-3xl mr-1" /> Experiência Internacional
        </span>

        <span
          className={`${lusitana.className} text-center text-mb block mt-3`}
        >
          Vivência em intercâmbio nos Estados Unidos.
        </span>
      </div>

      <div className="w-[330px] h-[130px] p-3">
        <span
          className={`${lusitana.className} flex justify-center items-center text-center text-xl font-bold`}
        >
          <FaUserGraduate className="text-3xl mr-1" /> Centenas de alunos formados
        </span>

        <span
          className={`${lusitana.className} text-center text-mb block mt-3`}
        >
          Mais de 500 estudantes alcançaram seus objetivos.
        </span>
      </div>
    </div>
  );
}
