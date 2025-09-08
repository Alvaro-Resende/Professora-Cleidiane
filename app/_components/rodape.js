"use client";

import React from "react";
import { Lusitana } from "next/font/google";
import { FaYoutube, FaGlobe, FaFileAlt, FaHeadphones, FaChalkboardTeacher } from "react-icons/fa";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Rodape() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center justify-center max-w-full bg-[#121117] text-white p-3`}
    >
      <div className="flex items-center gap-2 mb-2">
        <img
          src="/imagens/dona_neide-removebg-preview.png"
          alt="Logo do site"
          className="h-[30px] w-[30px]"
        />

        <h1 className="text-2xl mt-2">Dicas da Prof.ª Cleide</h1>
      </div>
      <span className="text-lg italic text-center">
        Aqui estão algumas sugestões de materiais gratuitos para estudar inglês.
      </span>

      <div className="flex flex-wrap justify-start items-start gap-8 w-full mt-3">
        {/*Videoaula*/}
        <div className="w-[250px] mt-3 p-3 flex flex-col gap-4 items-start rounded">
          <h2 className="font-bold text-lg flex items-center gap-2"> <FaYoutube className="text-xl"/> Videoaulas</h2>
          <a
            href="https://www.youtube.com/watch?v=bmkHG9c8ohk"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Speak With Me: prática de conversação em inglês.
          </a>

          <a
            href="https://www.youtube.com/watch?v=EX8RJR4-6PE"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            15 Minutes Listening – Aula de listening rápida e prática..
          </a>

          <a
            href="https://www.youtube.com/watch?v=lk5PI69auoY"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Listening Practice Test – Teste de compreensão auditiva com
            histórias.
          </a>
        </div>


        {/*Sites e plataformas gratuitas*/}
        <div className="w-[250px] mt-3 p-3 flex flex-col gap-4 items-start rounded">
          <h2 className="font-bold text-lg flex items-center gap-2"> <FaGlobe className="text-xl"/> Sites e Plataformas Gratuitas</h2>
          <a
            href="https://www.cambridgeenglish.org/learning-english/free-resources/"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Cambridge English – Recursos gratuitos para praticar inglês.
          </a>

          <a
            href="https://www.perfect-english-grammar.com/grammar-exercises.html"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Perfect English Grammar – Exercícios claros de gramática.
          </a>

          <a
            href="https://www.vocabulary.com/"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Vocabulary.com – Aprenda e revise vocabulário interativo.
          </a>

           <a
            href="https://learnenglish.britishcouncil.org/skills/listening"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            British Council Listening – Atividades de listening para todos níveis.
          </a>

          <a
            href="https://www.usalearns.org/"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            USA Learns – Cursos gratuitos completos de inglês.
          </a>
        </div>


        {/*Documentos e Postilas Gratuitas*/}
        <div className="w-[250px] mt-3 p-3 flex flex-col gap-4 items-start rounded">
          <h2 className="font-bold text-lg flex items-center gap-2"> <FaFileAlt className="text-xl"/> Documentos e Postilas Gratuitas</h2>
          <a
            href="https://www.englishgrammar.org/exercises/"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            EnglishGrammar.org – Exercícios interativos de gramática.
          </a>

          <a
            href="https://www.esl-lounge.com/student/grammar-exercises.php"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            ESL Lounge Grammar – Gramática prática para todos níveis.
          </a>

          <a
            href="https://www.usalearns.org/english-vocabulary"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Learn English Vocabulary – Vocabulário gratuito online.
          </a>

          <a
            href="https://learnvocabularyfree.com/"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Learn Vocabulary Free – Plataforma gratuita para reforço de palavras.
          </a>
        </div>

        {/*Prática de Listening e Speaking*/}
        <div className="w-[250px] mt-3 p-3 flex flex-col gap-4 items-start rounded">
          <h2 className="font-bold text-lg flex items-center gap-2"> <FaHeadphones className="text-xl"/>Prática de Listening e Speaking</h2>
          <a
            href="https://www.elllo.org/"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            ELLLO – Mais de 3.000 lições de listening online.
          </a>

          <a
            href="https://www.oxfordonlineenglish.com/free-english-listening-lessons"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Oxford Online English – Lições de listening com diálogos.
          </a>

          <a
            href="https://speakandimprove.com/"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Speak & Improve – Pratique sua fala com feedback automático.
          </a>

          <a
            href="https://www.free4talk.com/"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Free4Talk – Conversação com falantes nativos.
          </a>
        </div>


        {/*Cursos Online*/}
        <div className="w-[250px] mt-3 p-3 flex flex-col gap-4 items-start rounded">
          <h2 className="font-bold text-lg flex items-center gap-2"> <FaChalkboardTeacher className="text-xl"/>Cursos Gratuitos de Inglês</h2>
          <a
            href="https://kultivi.com/cursos/idiomas/ingles"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Kultivi: Curso com 225 aulas, abordando desde o básico até conversação, gramática e vocabulário.
          </a>

          <a
            href="https://play.senai.br/curso/ingles-nivel-basico"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            SENAI Play: Microcurso com 26 aulas, desde o "verb to be" até "modal verbs".
          </a>

          <a
            href="https://www.edunecursos.com.br/curso/ingles-intermediario"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Edune Cursos: Curso online gratuito com certificado válido conforme a legislação brasileira.
          </a>

          <a
            href="https://www.santanderopenacademy.com/pt_br/courses/business-english-listening-communication-skills-1.html"
            target="_blank"
            className="text-sm text-white hover:text-bold hover:border-b hover:border-white hover:scale-105"
          >
            Santander Open Academy: Curso com vocabulário e gramática de negócios intermediários e avançados.
          </a>
        </div>

      </div>
    </div>
  );
}
