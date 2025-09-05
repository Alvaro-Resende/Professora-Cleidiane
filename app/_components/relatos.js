"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { Lusitana } from "next/font/google";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Relatos() {
  const testimonials = [
    {
      foto: "/imagens/ana.png",
      name: "Ana Beatriz",
      text: "As aulas da professora Cleide me deram confiança para aprender de verdade.",
      data: "Março 2025",
      profissao: "Estudante de Engenharia",
      estrelas: "★★★★★",
    },
    {
      foto: "/imagens/lucas.png",
      name: "Lucas Fernandes",
      text: "Nunca achei que estudar pudesse ser tão interessante e fácil!",
      data: "Abril 2025",
      profissao: "Designer Gráfico",
      estrelas: "★★★★★",
    },
    {
      foto: "/imagens/mariana.png",
      name: "Mariana Silva",
      text: "Com a Cleide, consegui entender conteúdos que antes pareciam impossíveis.",
      data: "Fevereiro 2025",
      profissao: "Advogada",
      estrelas: "★★★★",
    },
    {
      foto: "/imagens/joao.png",
      name: "João Pedro",
      text: "O jeito dela explicar faz toda a diferença. Recomendo muito!",
      data: "Janeiro 2025",
      profissao: "Engenheiro Civil",
      estrelas: "★★★★★",
    },
    {
      foto: "/imagens/beatriz.png",
      name: "Beatriz Oliveira",
      text: "Aprendi mais em algumas semanas do que em meses sozinha.",
      data: "Março 2024",
      profissao: "Analista de Sistemas",
      estrelas: "★★★★★",
    },
    {
      foto: "/imagens/rafael.png",
      name: "Rafael Costa",
      text: "O método da professora Cleide é simples e eficiente, adorei.",
      data: "Agosto 2024",
      profissao: "Músico",
      estrelas: "★★★★★",
    },
    {
      foto: "/imagens/camila.png",
      name: "Camila Santos",
      text: "Sinto que realmente evoluí desde que comecei as aulas.",
      data: "Setembro 2024",
      profissao: "Arquiteta",
      estrelas: "★★★★★",
    },
    {
      foto: "/imagens/gabriel.png",
      name: "Gabriel Lima",
      text: "Cada aula é motivadora e prática, faz você realmente aplicar o conhecimento.",
      data: "Outubro 2024",
      profissao: "Desenvolvedor Web",
      estrelas: "★★★★★",
    },
    {
      foto: "/imagens/julia.png",
      name: "Julia Almeida",
      text: "Nunca me senti tão confiante estudando. A Cleide é incrível!",
      data: "Maio 2025",
      profissao: "Professora",
      estrelas: "★★★★★",
    },
    {
      foto: "/imagens/pedro.png",
      name: "Pedro Henrique",
      text: "A didática dela é única. Aprendi muito e recomendo para todos.",
      data: "Junho 2025",
      profissao: "Estudante de Medicina",
      estrelas: "★★★★★",
    },
  ];
  return (
    <div className="w-full py-10">
      <Marquee
        gradient={false} // remove o fade nas bordas
        speed={50} // ajusta a velocidade da rolagem
        pauseOnHover={true} // pausa se o mouse estiver sobre os cards
      >
        <div className="flex items-start gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[200px] min-h-[300px] min p-3 bg-[#FF7AAC]  rounded mx-4 flex flex-col justify-center items-center"
            >
              <div className="w-[150px] h-[150px] flex flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden shadow-md border-2 border-white">
                  <img
                    src={t.foto}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className={`${lusitana.className} flex justify-center items-center text-xl font-bold mt-2`}
                >
                  {t.name}
                </span>
                <span
                  className={`${lusitana.className} text-center text-sm text-white`}
                >
                  {t.profissao}
                </span>
              </div>

              <div className="w-[150px] h-[150px] flex flex-col justify-start items-center mt-3">
                <span
                  className={`${lusitana.className} text-center text-mb text-gray-900`}
                >
                  {t.text}
                </span>
              </div>
              <span
                  className={`${lusitana.className} text-lg text-white font-bold`}
                >
                  {t.estrelas}
                </span>
                  <span
                  className={`${lusitana.className} text-sm text-gray-700 font-bold`}
                >
                  {t.data}
                </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
