"use client";

import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "../actions";

export default function AlunoPage() {
  const { id } = useParams();
  const [aluno, setAluno] = useState({} as Aluno);

  useEffect(() => {
    getAluno(Number(id)).then((response) => setAluno(response));
  }, [id]);

  function handleChange(value: string, key: keyof Aluno) {
    setAluno((oldState) => ({ ...oldState, [key]: value }));
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center gap-2">
        <input
          value={aluno.nome}
          onChange={(e) => handleChange(e.target.value, "nome")}
          className="w-full border border-black px-1"
        />
        <input
          value={aluno.cpf}
          type="number"
          onChange={(e) => handleChange(e.target.value, "cpf")}
          className="w-full border border-black px-1"
        />
        <input
          value={aluno.email}
          onChange={(e) => handleChange(e.target.value, "email")}
          className="w-full border border-black px-1"
        />

        <button className="bg-black text-white rounded-xl px-10 py-2 cursor-pointer hover:opacity-80">
          Editar
        </button>
      </form>
    </div>
  );
}
