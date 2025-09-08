"use client";
import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}

export default function Modal({ show, onClose, title, children }: ModalProps) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#FF7AAC] border-2 border-black p-4 flex flex-col rounded-xl shadow-xl w-[350px] max-w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="flex items-center gap-3 mb-2">
          <img
            src="/imagens/dona_neide-removebg-preview.png"
            alt="Logo do site"
            className="h-[40px] w-[40px]"
          />
          <span className="text-xl font-bold text-center">{title}</span>
        </div>

        {/* Botão fechar */}
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="rounded-xl bg-black text-white text-xl px-6 py-2 mt-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
