"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "components/ui/card";
import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/ui/accordion";
import {
  GraduationCap,
  Award,
  Globe2,
  BookOpenText,
  Users,
  Briefcase,
  Mail,
  Linkedin,
  ArrowLeft,
  Download,
} from "lucide-react";
import { Lusitana } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function CurriculoCleidiane() {
  const whatsappLink =
    "https://wa.me/553597539844?text=Ol%C3%A1%2C%20Prof%C2%AA%20Cleidiane!%20Gostaria%20de%20conhecer%20melhor%20seu%20trabalho%20e%20ver%20disponibilidades%20para%20aulas.";

  return (
    <main
      className={`${lusitana.className} min-h-screen bg-white text-zinc-900`}
    >
      {/* Cabeçalho */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="w-full flex justify-end no-print">
          <Button
            variant="outline"
            size="sm"
            className="w-[180px] h-[40px] mb-3 rounded-xl bg-black text-white text-lg transform transition hover:scale-105 sm:hover:scale-110 "
            onClick={() => window.print()}
          >
            <Download className="h-4 w-4" />
            Imprimir / PDF
          </Button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:grid-cols-[180px_1fr]">
          <div className="relative h-40 w-40 overflow-hidden rounded-full md:h-44 md:w-44">
            <Image
              src="/imagens/7_upscale_balanced.jpg"
              alt="Foto da Professora Cleidiane Resende"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-balance text-4xl font-extrabold leading-tight tracking-tight md:text-4xl"
            >
              Professora Cleidiane Resende
            </motion.h1>
            <p className="max-w-prose text-lg text-zinc-700">
              Com mais de 30 anos de experiência no ensino de inglês, a
              Professora Cleidiane alia dedicação, paciência e uma metodologia
              adaptada a cada aluno. Reconhecida pela didática clara e
              acessível, já ajudou inúmeros estudantes a desenvolver fluência e
              confiança no idioma, além de ter auxiliado diversos alunos em sua
              formação acadêmica.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="text-md bg-[#FF7AAC]">
                Inglês • Todos os níveis
              </Badge>
              <Badge variant="secondary" className="text-md bg-[#FF7AAC]">
                Presencial & Online
              </Badge>
              <Badge variant="secondary" className="text-md bg-[#FF7AAC]">
                Preparatório: TOEFL | IELTS | ENEM
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-6xl" />

      {/* Seções principais */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 lg:grid-cols-3">
        {/* Formação Acadêmica */}
        <Card className="lg:col">
          <CardHeader className="flex flex-row items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <CardTitle className="text-xl font-bold">
              Formação Acadêmica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-7">
            <div>
              <p className="text-lg font-semibold">Licenciatura em Letras – Inglês</p>
              <p className="text-zinc-700">
                Universidade Federal de Minas Gerais (UFMG) · 1988
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">
                Pós-Graduação em Metodologia do Ensino de Línguas
              </p>
              <p className="text-zinc-700">PUC Minas · 1993</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Mestrado em Linguística Aplicada</p>
              <p className="text-zinc-700">
                Universidade de São Paulo (USP) · 2000
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold">Certificação Internacional CELTA</p>
              <p className="text-zinc-700">Cambridge English · 2005</p>
            </div>
          </CardContent>
        </Card>

        {/* Conquistas & Certificações */}
        <Card className="lg:col-span-2 ">
          <CardHeader className="flex flex-row items-center gap-2">
            <Award className="h-6 w-6 font-bold" />
            <CardTitle className="text-xl font-bold">
              Conquistas & Certificações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
              {[
                {
                  icon: <BookOpenText className="h-7 w-7" />,
                  title: "30+ anos de ensino",
                  desc: "Experiência com crianças, jovens e adultos.",
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "IELTS & TOEFL Trainer",
                  desc: "Preparação orientada para exames internacionais.",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "500+ alunos formados",
                  desc: "Resultados consistentes e acompanhamento próximo.",
                },
                {
                  icon: <Globe2 className="h-6 w-6" />,
                  title: "Vivência internacional",
                  desc: "Intercâmbio nos EUA e imersão cultural.",
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Professora Destaque",
                  desc: "Reconhecimentos locais (2015 • 2019 • 2022).",
                },
                {
                  icon: <BookOpenText className="h-6 w-6" />,
                  title: "Autora de materiais",
                  desc: "Didáticos para preparatórios e conversação.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col  items-center gap-3 rounded-lg border border-black p-3 w-full h-full min-w-[250px]"
                >
                  <div className="mt-0.5 flex items-center justify-center gap-2 w-full h-[50px]">
                    <span>{item.icon}</span>
                    <p className="text-lg font-semibold">{item.title}</p>
                  </div>
                  <div>
                    <p className="text-zinc-700 text-center text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-8 lg:grid-cols-3">
        {/* Experiência */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center gap-2">
            <Briefcase className="h-6 w-=6" />
            <CardTitle className="text-xl">Experiência Profissional</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  cargo: "Professora de Inglês e Coordenadora Pedagógica",
                  local: "CCAA",
                  periodo: "1989 – 2000",
                  detalhes: [
                    "Planejamento curricular e formação de professores.",
                    "Turmas do básico ao avançado.",
                  ],
                },
                {
                  cargo: "Docente Avançado & Preparatório TOEFL/IELTS",
                  local: "Cultura Inglesa",
                  periodo: "2000 – 2015",
                  detalhes: [
                    "Turmas focadas em certificações internacionais.",
                    "Criação de simulados e trilhas de estudo.",
                  ],
                },
                {
                  cargo: "Professora Universitária de Língua Inglesa",
                  local: "UEMG",
                  periodo: "2010 – 2018",
                  detalhes: [
                    "Aulas de linguística aplicada e didática.",
                    "Orientação de TCCs e projetos de extensão.",
                  ],
                },
                {
                  cargo: "Mentora Particular e Instrutora Online",
                  local: "Autônoma",
                  periodo: "2018 – atual",
                  detalhes: [
                    "Programas personalizados para fluência.",
                    "Atendimento presencial e remoto.",
                  ],
                },
              ].map((exp, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left">
                    <div className="flex w-full flex-col items-start">
                      <span className="text-lg font-semibold">{exp.cargo}</span>
                      <span className="text-zinc-700">
                        {exp.local} • {exp.periodo}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="ml-5 list-disc space-y-1 text-zinc-700 text-base">
                      {exp.detalhes.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Áreas de atuação */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <BookOpenText className="h-6 w-6" />
            <CardTitle className="text-xl">Áreas de Atuação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 text-lg">
              {[
                "Iniciantes",
                "Intermediário",
                "Avançado",
                "Conversação",
                "Gramática",
                "Negócios",
                "TOEFL",
                "IELTS",
                "ENEM",
              ].map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <Separator className="my-4" />
            <p className="text-base text-zinc-700">
              Aulas personalizadas com foco em objetivos reais: prova, carreira,
              intercâmbio ou viagem.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-12 lg:grid-cols-3">
        {/* Filosofia + Idiomas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Filosofia de Ensino</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="rounded-lg border bg-zinc-50 p-4 text-base text-zinc-700">
              “Cada aluno possui um ritmo e uma história única. Meu papel é
              criar um ambiente acolhedor, fortalecer a autoconfiança e
              transformar o inglês em uma ferramenta de oportunidades.”
            </blockquote>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Idiomas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-base">
            <div className="flex items-center justify-between">
              <span>Português</span>
              <Badge className="bg-[#FF7AAC] text-sm">nativo</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Inglês</span>
              <Badge className="bg-[#FF7AAC] text-sm">fluente</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Espanhol</span>
              <Badge className="bg-[#FF7AAC] text-sm">intermediário</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Projetos & Contato */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Projetos Recentes & Contato
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base">
            <ul className="ml-5 list-disc space-y-1 text-zinc-700">
              <li>Mentoria online “Fluência em 12 Meses” (2021–2025).</li>
              <li>Consultoria para escolas em ensino bilíngue.</li>
              <li>Voluntariado em projetos sociais de inglês.</li>
            </ul>
            <Separator />
            <div className="space-y-2">
              <Link
                href="mailto:cleidiane.resende@ingles.com"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail className="h-4 w-4" /> cleidiane.resende@ingles.com
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <FaWhatsapp className="h-4 w-4" /> WhatsApp
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Linkedin className="h-4 w-4" />{" "}
                linkedin.com/in/cleidiane-resende
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
