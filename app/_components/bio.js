"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Lusitana } from "next/font/google";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Bio() {
  return (
    <div className="flex justify-center items-center p-3">
      <div className="flex flex-col lg:flex-row w-full max-w-[1200px] mx-auto border-2 border-black rounded-xl overflow-hidden">
        <div className="w-full lg:w-[600px] lg:max-w-[600px]">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent>
              {[
                "2_upscale_balanced.jpg",
                "3_upscale_balanced.jpg",
                "4_upscale_balanced.jpg",
                "5_upscale_balanced.jpg",
                "6_upscale_balanced.jpg",
                "7_upscale_balanced.jpg",
                "8_upscale_balanced.jpg",
              ].map((img, i) => (
                <CarouselItem key={i}>
                  <div
                    className="relative w-full 
                h-[400px] sm:h-[500px] 
                lg:h-[580px] aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto"
                  >
                    <Image
                      src={`/imagens/${img}`}
                      alt={`Imagem ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex flex-col justify-center items-center p-6 w-full lg:w-[600px] lg:max-w-[600px] bg-[#FF7AAC]">
          <h1
            className={`${lusitana.className} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl italic text-center font-bold`}
          >
            Professora Cleidiane Resende
          </h1>

          <span
            className={`${lusitana.className} mt-4 text-sm sm:text-base lg:text-lg xl:text-xl text-justify max-w-[500px]`}
          >
            Com mais de 30 anos de experiência no ensino de inglês, a Professora
            Cleidiane alia dedicação, paciência e uma metodologia adaptada a
            cada aluno. Reconhecida pela didática clara e acessível, já ajudou
            inúmeros estudantes a desenvolver fluência e confiança no idioma,
            além de ter auxiliado diversos alunos em sua formação acadêmica.
            Sempre valorizando o aprendizado como ferramenta de oportunidades e
            transformação, segue inspirando novas gerações a alcançarem seus
            objetivos.
          </span>
        </div>
      </div>
    </div>
  );
}
