"use client";
import { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, isSameDay } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Lusitana } from "next/font/google";
import Modal from "../_components2/modal";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoPartlySunny } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaLaptopHouse } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { ImPushpin } from "react-icons/im";
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const locales = { "pt-BR": ptBR };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }),
  getDay,
  locales,
});

const formats = {
  weekdayFormat: (date) =>
    format(date, "E", { locale: ptBR }).slice(0, 3).toUpperCase(),
  dayFormat: (date) => format(date, "d", { locale: ptBR }),
  monthHeaderFormat: (date) =>
    format(date, "MMMM yyyy", { locale: ptBR }).toUpperCase(),
};

export default function Calendario() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // evento selecionado
  const [showModal, setShowModal] = useState(false); // controla se o modal abre ou não
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [step, setStep] = useState(0);
  const validarConflito = () => {
    const inicio = new Date(
      `${formData.data.split("/").reverse().join("-")}T${
        formData.horarioInicio
      }`
    );
    const fim = new Date(
      `${formData.data.split("/").reverse().join("-")}T${formData.horarioFim}`
    );

    for (let ev of events) {
      if (
        (inicio >= ev.start && inicio < ev.end) ||
        (fim > ev.start && fim <= ev.end) ||
        (inicio <= ev.start && fim >= ev.end)
      ) {
        return true; // existe conflito
      }
    }
    return false;
  };
  const [formData, setFormData] = useState({
    data: null,
    turno: "",
    horarioInicio: "",
    horarioFim: "",
    formato: "",
    nivel: "",
    objetivo: "",
    nome: "",
    observacoes: "",
  });
  const [modalData, setModalData] = useState({
    show: false,
    title: "",
    content: null,
  });
  const openModal = (title, content) => {
    setModalData({ show: true, title, content: content || null });
  };

  // 🔹 Buscar eventos do Google Calendar
  useEffect(() => {
    const fetchEvents = async () => {
      const calendarId = encodeURIComponent(
        "870d8e61952b868feade827f66df6baa391f0a65eff98c8b13cb2e3fb12083d0@group.calendar.google.com"
      );
      const apiKey = "AIzaSyAZS0z1AbABg0m7aEfWT1wnwyQZVVNxnLY";
      const timeMin = new Date().toISOString();
      const timeMax = new Date(
        new Date().setMonth(new Date().getMonth() + 2)
      ).toISOString();

      try {
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`
        );
        const data = await res.json();

        if (data.items) {
          const formatted = data.items.map((ev) => ({
            title: ev.summary,
            start: new Date(ev.start.dateTime || ev.start.date),
            end: new Date(ev.end.dateTime || ev.end.date),
          }));
          setEvents(formatted);
        }
      } catch (err) {
        console.error("Erro ao buscar eventos:", err);
      }
    };
    fetchEvents();

    // ⏰ atualiza a cada 60 segundos
    const interval = setInterval(fetchEvents, 10 * 1000);

    return () => clearInterval(interval); // limpa quando desmontar
  }, []);

  // 🔹 Destacar dia selecionado
  const dayPropGetter = (date) => {
    const today = new Date();

    if (selectedDate && isSameDay(date, selectedDate)) {
      // Dia selecionado
      return {
        style: {
          backgroundColor: "#FF7AAC",
          transition: "0.3s",
        },
      };
    } else if (isSameDay(date, today)) {
      // Dia atual
      return {
        style: {
          backgroundColor: "#3DDABE",
          transition: "0.3s",
        },
      };
    }

    return {};
  };

  // 🔹 Eventos ocupados
  const eventPropGetter = () => ({
    style: {
      backgroundColor: "#ca003f",
      color: "white",
      borderRadius: "5px",
    },
  });

  // 🔹 Selecionar dia/horário livre
  const handleSelectSlot = (slotInfo) => {
    const hoje = new Date();
    const diaSelecionado = slotInfo.start;

    if (diaSelecionado < hoje.setHours(0, 0, 0, 0)) {
      openModal("Não é possível agendar em uma data que já passou.");
      return;
    }

    setSelectedDate(diaSelecionado);
    setFormData({
      ...formData,
      data: format(diaSelecionado, "dd/MM/yyyy", { locale: ptBR }),
    });
  };

  // 🔹 Clicar em evento existente
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  // 🔹 Enviar para WhatsApp
  const enviarParaWhatsapp = () => {
    if (
      !formData.data ||
      !formData.turno ||
      !formData.horarioInicio ||
      !formData.horarioFim ||
      !formData.formato ||
      !formData.nivel ||
      !formData.objetivo ||
      !formData.nome
    ) {
      openModal("Preencha todos os campos obrigatórios antes de enviar.");
      return;
    }

    if (validarConflito()) {
      openModal("Já existe uma aula nesse horário.");
      return;
    }

    const msg = `Olá Professora Cleide ❤️\n
Me chamo *${formData.nome}*.\n\n
Gostaria de agendar uma aula no dia *${formData.data}*, no período da *${
      formData.turno
    }* ⏰ das *${formData.horarioInicio}* às *${formData.horarioFim}*.\n\n
Atualmente estou no nível *${formData.nivel}* 📚 e estudo com o objetivo de *${
      formData.objetivo
    }* 🎯.\n\n
Aqui vão algumas observações 📝:\n
${formData.observacoes || "Nenhuma observação adicionada."}\n\n
Podemos alinhar os valores e já deixar a aula marcada? 😊`;

    window.open(
      `https://wa.me/553597539844?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div
      className={`${lusitana.className} p-4 flex flex-col justify-center items-center`}
    >
      <h1 className="text-3xl font-bold text-center mb-4">Agende sua Aula</h1>

      <p className="sm:text-xl text-base text-gray-700 italic mb-4 sm:text-start text-center">
        <span className="text-2xl text-[#FF7AAC]"><strong>Nota:</strong></span> As aulas e valores são combinadas diretamente pelo WhatsApp. <br></br> Para agendar, selecione uma data no calendário e preencha o
        formulário ao lado. <br></br> As aulas já reservadas aparecerão marcadas no
        calendário.
      </p>
      <Modal
        show={modalData.show}
        title={modalData.title}
        onClose={() => setModalData({ ...modalData, show: false })}
      >
        {modalData.content}
      </Modal>
      {/* 🔹 Modal/Card do Evento */}
      {showModal && selectedEvent && (
        <div
          className="fixed h-full w-full inset-0 z-50 bg-black bg-opacity-20 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-[#FF7AAC] border-2 border-black p-3 flex flex-col rounded-xl shadow-xl max-h-[260px] w-[350px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center w-full">
              <div className="w-[80px]">
                <img
                  src="/imagens/dona_neide-removebg-preview.png"
                  alt="Logo do site"
                  className="h-[40px] w-[40px]"
                />
              </div>
              <span className="text-xl flex items-center gap-2 font-bold">
                <ImPushpin
                  className="text-2xl mb-2 text-[#e71d1d]"
                  style={{
                    filter: "drop-shadow(1px 1px 1px rgba(255,255,255,5))",
                  }}
                />{" "}
                Detalhes da Reserva
              </span>
            </div>

            <h2 className="text-2xl text-white font-bold italic mb-2 mt-5">
              {selectedEvent.title}
            </h2>
            <p className="flex items text-lg gap-2">
              <FaRegCalendarAlt className="text-xl" /> Data:{" "}
              {format(selectedEvent.start, "dd/MM/yyyy", { locale: ptBR })}
            </p>
            <p className="text-lg flex items-center gap-2">
              <AiOutlineClockCircle className="text-lg" /> Horário:{" "}
              {format(selectedEvent.start, "HH:mm", { locale: ptBR })} -{" "}
              {format(selectedEvent.end, "HH:mm", { locale: ptBR })}
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="rounded-xl mt-6 bg-black text-white text-xl px-6 py-3
                     shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center items-start p-4">
        <div className="grid grid-cols-1 break-1150:grid-cols-2 gap-12 items-stretch">
          {/* Calendário */}
          <div className="bg-white rounded-xl p-4 shadow-lg border border-[#FF7AAC] sm:w-[550px] min-h-[450px] flex-1 lg:h-auto">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100%" }}
              selectable
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              views={["month"]}
              step={30}
              timeslots={2}
              date={date}
              view={view}
              onNavigate={setDate}
              onView={setView}
              dayPropGetter={dayPropGetter}
              eventPropGetter={eventPropGetter}
              formats={formats}
              messages={{
                next: "Próximo",
                previous: "Anterior",
                today: "Hoje",
              }}
            />
          </div>

          {/* Formulário */}
          <div className="bg-[#3DDABE] text-black p-3 sm:p-4 rounded-xl w-full space-y-4 sm:w-[550px] flex-1">
            <h2 className="text-3xl italic font-bold mb-2 text-center">
              Formulário
            </h2>

            {/* Dia Selecionado */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
              <h2 className="text-sm sm:text-base flex items-center gap-1 font-bold">
                <FaRegCalendarAlt className="text-lg" />
                Dia Selecionado:
              </h2>
              <input
                type="text"
                value={formData.data}
                readOnly
                placeholder="Selecione no calendário"
                className="w-full sm:w-[60%] font-bold bg-transparent p-2 rounded text-xl italic text-[#FF7AAC] outline-none placeholder:text-white placeholder:text-lg"
                style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
              />
            </div>

            {/* Turno */}
            <div>
              <label className="flex items-center gap-1 font-bold text-sm mb-1">
                <IoPartlySunny className="text-base sm:text-lg" />
                Turno
              </label>
              <div className="flex gap-3">
                <label className="text-sm">
                  <input
                    type="radio"
                    name="turno"
                    value="manha"
                    checked={formData.turno === "manha"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        turno: e.target.value,
                        horarioInicio: "",
                        horarioFim: "",
                      })
                    }
                  />{" "}
                  Manhã
                </label>
                <label className="text-sm">
                  <input
                    type="radio"
                    name="turno"
                    value="tarde"
                    checked={formData.turno === "tarde"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        turno: e.target.value,
                        horarioInicio: "",
                        horarioFim: "",
                      })
                    }
                  />{" "}
                  Tarde
                </label>
              </div>
            </div>

            {/* Horário */}
            <div>
              <label className="flex items-center gap-1 font-bold text-sm mb-1">
                <AiOutlineClockCircle className="text-base sm:text-lg" />
                Horário
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Início */}
                <select
                  value={formData.horarioInicio}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      horarioInicio: e.target.value,
                      horarioFim:
                        formData.horarioFim &&
                        e.target.value > formData.horarioFim
                          ? ""
                          : formData.horarioFim,
                    });
                  }}
                  className="w-full p-2 rounded text-black text-sm"
                >
                  <option value="">Início</option>
                  {(formData.turno === "manha"
                    ? [
                        "08:00",
                        "08:30",
                        "09:00",
                        "09:30",
                        "10:00",
                        "10:30",
                        "11:00",
                        "11:30",
                      ]
                    : formData.turno === "tarde"
                    ? [
                        "14:00",
                        "14:30",
                        "15:00",
                        "15:30",
                        "16:00",
                        "16:30",
                        "17:00",
                      ]
                    : []
                  ).map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>

                {/* Fim */}
                <select
                  value={formData.horarioFim}
                  onChange={(e) =>
                    setFormData({ ...formData, horarioFim: e.target.value })
                  }
                  className="w-full p-2 rounded text-black text-sm"
                >
                  <option value="">Fim</option>
                  {(formData.turno === "manha"
                    ? [
                        "08:30",
                        "09:00",
                        "09:30",
                        "10:00",
                        "10:30",
                        "11:00",
                        "11:30",
                      ]
                    : formData.turno === "tarde"
                    ? ["14:30", "15:00", "15:30", "16:00", "16:30", "17:00"]
                    : []
                  )
                    .filter(
                      (h) =>
                        !formData.horarioInicio || h > formData.horarioInicio
                    )
                    .map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* Formato */}
            <div>
              <label className="flex items-center gap-1 font-bold text-sm mb-1">
                <FaLaptopHouse className="text-base sm:text-lg" />
                Formato
              </label>
              <div className="flex gap-3">
                <label className="text-sm">
                  <input
                    type="radio"
                    name="formato"
                    value="online"
                    checked={formData.formato === "online"}
                    onChange={(e) =>
                      setFormData({ ...formData, formato: e.target.value })
                    }
                  />{" "}
                  Online
                </label>
                <label className="text-sm">
                  <input
                    type="radio"
                    name="formato"
                    value="presencial"
                    checked={formData.formato === "presencial"}
                    onChange={(e) =>
                      setFormData({ ...formData, formato: e.target.value })
                    }
                  />{" "}
                  Presencial
                </label>
              </div>
            </div>

            {/* Nível */}
            <div>
              <label className="flex gap-1 font-bold text-sm mb-1 items-center">
                <FaBook className="text-base sm:text-lg" />
                Nível
              </label>
              <select
                value={formData.nivel}
                onChange={(e) =>
                  setFormData({ ...formData, nivel: e.target.value })
                }
                className="w-full p-2 rounded text-black text-sm"
              >
                <option value="">Selecione</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>

            {/* Objetivo */}
            <div>
              <label className="flex gap-1 font-bold text-sm mb-1 items-center">
                <TbTargetArrow className="text-base sm:text-lg" />
                Objetivo
              </label>
              <select
                value={formData.objetivo}
                onChange={(e) =>
                  setFormData({ ...formData, objetivo: e.target.value })
                }
                className="w-full p-2 rounded text-black text-sm"
              >
                <option value="">Selecione</option>
                <option value="academico">Acadêmico</option>
                <option value="trabalho">Trabalho</option>
                <option value="hobby">Hobby</option>
              </select>
            </div>

            {/* Nome */}
            <input
              type="text"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              className="w-full p-2 rounded text-black text-sm"
            />

            {/* Observações */}
            <textarea
              placeholder="Observações (opcional)"
              value={formData.observacoes}
              onChange={(e) =>
                setFormData({ ...formData, observacoes: e.target.value })
              }
              className="w-full p-2 rounded text-black text-sm"
            />

            {/* Botão */}
            <button
              onClick={enviarParaWhatsapp}
              className="w-full bg-[#FF7AAC] py-2 rounded-lg text-sm sm:text-base font-bold hover:scale-105 transition text-white"
              style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}
            >
              <span className="flex items-center justify-center gap-2">
                Enviar para WhatsApp{" "}
                <FaWhatsapp
                  className="text-lg sm:text-xl"
                  style={{ filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.8))" }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
