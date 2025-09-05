"use client";

import { useState } from "react";

export default function Calendario() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    evento: "",
    servicos: [],
    data: "",
  });

  const servicosDisponiveis = [
    "Churrasqueiro",
    "Cozinheira",
    "Garçom",
    "Bar Woman",
  ];

  const handleCheckbox = (servico) => {
    setFormData((prev) => {
      const jáSelecionado = prev.servicos.includes(servico);
      return {
        ...prev,
        servicos: jáSelecionado
          ? prev.servicos.filter((s) => s !== servico)
          : [...prev.servicos, servico],
      };
    });
  };

  const enviarParaWhatsapp = () => {
    const msg = `Olá! Gostaria de solicitar um serviço.\n
       📆 Data: ${formData.data}
       🙋 Nome: ${formData.nome}
       📞 Telefone: ${formData.telefone}
       🎉 Evento: ${formData.evento}
       🛎️ Serviços: ${formData.servicos.join(", ")}`;

    const url = `https://wa.me/553597539844?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#181C1F] space-y-8 border-r-2 border-l-2 border-b-2 border-[#C99A45] rounded-b-xl">
      <div className="w-full bg-white flex flex-col justify-center items-center gap-5 p-6">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-center text-black">
          Solicite seu Serviço
        </h1>

        <span className="max-w-3xl">
          <h1 className="text-3xl font-serif text-[#BD8F42] ">Nota:</h1>
          <p>
            O calendário abaixo exibe a disponibilidade dos nossos serviços.
            Caso um dia esteja{" "}
            <span className="font-semibold text-red-400">indisponível</span>,
            ele será marcado com um aviso correspondente. Recomendamos escolher
            uma data livre antes de preencher o formulário.
          </p>
        </span>

        {/* 🔹 Google Calendar */}
        <div className="w-full flex justify-center items-start">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showPrint=0&showTabs=0&showCalendars=0&showTitle=0&src=ODcwZDhlNjE5NTJiODY4ZmVhZGU4MjdmNjZkZjZiYWEzOTFmMGE2NWVmZjk4YzhiMTNjYjJlM2ZiMTIwODNkMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5"
            className="w-full max-w-3xl h-[400px] border-2 rounded-xl border-[#BD8F42] outline-none"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-center p-4 gap-3">
        {/* 🔹 Formulário */}
        <div className="max-w-lg mx-auto h-[470px] bg-[#23282C] p-6 rounded-xl space-y-4 shadow-lg">
          <h1 className="text-center text-2xl italic font-serif text-white">
            Preencha o Formulário
          </h1>
          <input
            type="date"
            value={formData.data}
            onChange={(e) => setFormData({ ...formData, data: e.target.value })}
            className="w-full p-2 rounded text-black outline-none"
          />

          <input
            type="text"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full p-2 rounded text-black outline-none"
          />

          <input
            type="tel"
            placeholder="Telefone"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/\D/g, ""))
            }
            value={formData.telefone}
            onChange={(e) =>
              setFormData({ ...formData, telefone: e.target.value })
            }
            className="w-full p-2 rounded text-black outline-none"
          />

          <input
            type="text"
            placeholder="Tipo de evento"
            value={formData.evento}
            onChange={(e) =>
              setFormData({ ...formData, evento: e.target.value })
            }
            className="w-full p-2 rounded text-black"
          />

          <div className="space-y-2">
            <label className="block font-semibold text-[#BD8F42]">
              Selecione os serviços desejados:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {servicosDisponiveis.map((servico) => (
                <label
                  key={servico}
                  className="flex items-center gap-2 text-[#BD8F42]"
                >
                  <input
                    type="checkbox"
                    checked={formData.servicos.includes(servico)}
                    onChange={() => handleCheckbox(servico)}
                  />
                  {servico}
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={enviarParaWhatsapp}
            className="w-full bg-[#BD8F42] text-white py-3 rounded-xl font-bold hover:scale-105 transition"
          >
            Enviar Solicitação para WhatsApp
          </button>
        </div>

        {/* 🔹 E-mail */}
        <div className="max-w-lg mx-auto h-[470px] bg-[#23282C] p-6 rounded-xl space-y-4 shadow-lg">
          <h1 className="text-center text-2xl italic font-serif text-white">
            Envie-nos Um Email
          </h1>

          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-2 rounded text-black outline-none"
          />

          <input
            type="tel"
            placeholder="Telefone"
            onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
            className="w-full p-2 rounded text-black outline-none"
          />

          <input
            type="text"
            placeholder="E-Mail"
            className="w-full p-2 rounded text-black outline-none"
          />

          <textarea
            type="text"
            placeholder="E-Mail"
            className="w-full p-2 rounded text-black transition-all duration-200 min-w-[100px] max-w-full outline-none"
          />

          <button className="w-full bg-black text-white py-3 rounded-xl font-bold hover:scale-105 transition">
            Enviar E-mail
          </button>
        </div>
      </div>
    </div>
  );
}
