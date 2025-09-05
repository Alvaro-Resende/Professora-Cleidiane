"use client";
import React from "react";
import { Lusitana } from "next/font/google";
import { motion } from "framer-motion";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Remember() {
  return (
    <div className="w-full bg-[#FF7AAC] flex flex-col justify-center items-center p-2 mt-8">
      <h1
        className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl xl:text-3xl italic text-center font-bold`}
      >
        Lembre-se, onde há vontade, há caminho!
      </h1>
      <h1
        className={`${lusitana.className} text-2xl text-white sm:text-3xl lg:text-4xl xl:text-3xl italic text-center font-bold`}
      >
        Remember, where there is a will, there is a way!
      </h1>
    </div>
  );
}
