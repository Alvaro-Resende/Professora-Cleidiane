"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Lusitana } from "next/font/google";
import { IoHome, IoHomeOutline } from "react-icons/io5";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Cabecalho() {
  const router = useRouter();
  return (
    <div className="bg-[#FF7AAC] w-full flex justify-between items-center p-2">
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
        onClick={() => router.push("/")}
        className="group w-[180px] h-[48px] mr-2 rounded-xl bg-black text-white transform text-xl transition hover:scale-105 sm:hover:scale-110 hover:text-2xl"
      >
        <span
          className={`${lusitana.className} flex justify-center items-center text-xl font-bold gap-2`}
        >
          Ínicio
          <IoHomeOutline className="text-white group-hover:hidden" />
          <IoHome className="hidden group-hover:inline text-white" />
        </span>
      </button>
    </div>
  );
}
