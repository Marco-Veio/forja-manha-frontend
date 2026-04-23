"use client";

import { Aluno } from "@/interfaces/alunos";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAluno } from "./actions";

export default function AlunoPage() {
  const { id } = useParams();
  const [aluno, setAluno] = useState({} as Aluno);

  useEffect(() => {
    getAluno(Number(id)).then((response) => setAluno(response));
  }, [id]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">{aluno.nome}</h1>
        <p>{aluno.cpf}</p>
        <p>{aluno.email}</p>
        <p className="mt-10 mb-2">Cursos:</p>
        <ul className="flex flex-col gap-1 list-disc list-inside">
          {aluno.cursos?.map((curso) => (
            <li key={curso.id}>{curso.nome}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
