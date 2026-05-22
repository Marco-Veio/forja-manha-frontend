"use client";

import { Aluno } from "@/interfaces/alunos";
import { useParams, useRouter } from "next/navigation";
import { SubmitEvent, useEffect, useState } from "react";
import { getAluno, updateAluno } from "../actions";
import { Curso } from "@/interfaces/cursos";
import { getCursos } from "@/app/cursos/actions";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

export default function AlunoPage() {
  const { id } = useParams();
  const [aluno, setAluno] = useState({} as Aluno);
  const [cursos, setCursos] = useState([] as Curso[]);
  const [matriculado, setMatriculado] = useState([] as Curso[]);
  const [naoMatriculado, setNaoMatriculado] = useState([] as Curso[]);
  const router = useRouter();

  useEffect(() => {
    getAluno(Number(id)).then((response) => setAluno(response));
    getCursos().then((response) => setCursos(response));
  }, [id]);

  useEffect(() => { 
    if (aluno.cursos) {
      const matriculadoTemp = [] as Curso[];
      const naoMatriculadoTemp = [] as Curso[];

      for (const curso of cursos) {
        if (aluno.cursos.find((c) => c.id === curso.id)) {
          matriculadoTemp.push(curso);
        } else {
          naoMatriculadoTemp.push(curso);
        }
      }

      setMatriculado(matriculadoTemp);
      setNaoMatriculado(naoMatriculadoTemp);
    }
  }, [cursos, aluno]);

  function handleChange(value: string | number, key: keyof Aluno) {
    setAluno((oldState) => ({ ...oldState, [key]: value }));
  }

  async function handleUpdate(e: SubmitEvent) {
    e.preventDefault();
    const response = await updateAluno(Number(id), aluno);

    if (response) {
      alert(response);
      return;
    }

    router.push(`/aluno/${id}`);
  }

  function matricular(curso: Curso) {
    setMatriculado((oldState) => [...oldState, curso]);
    setNaoMatriculado((oldState) => oldState.filter((c) => c.id !== curso.id));
  }

  function desmatricular(curso: Curso) {
    setMatriculado((oldState) => oldState.filter((c) => c.id !== curso.id));
    setNaoMatriculado((oldState) => [...oldState, curso]);
  }

  return (
    <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center">
      <form
        className="p-6 bg-white text-black rounded-lg shadow shadow-white max-w-md flex flex-col items-center gap-2"
        onSubmit={handleUpdate}
      >
        <input
          value={aluno.nome}
          onChange={(e) => handleChange(e.target.value, "nome")}
          className="w-full border border-black px-1"
        />
        <input
          value={aluno.cpf}
          type="number"
          onChange={(e) => handleChange(Number(e.target.value), "cpf")}
          className="w-full border border-black px-1"
        />
        <input
          value={aluno.idade}
          type="number"
          onChange={(e) => handleChange(Number(e.target.value), "idade")}
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

      <div className="bg-white rounded-xl h-[40%] overflow-y-auto flex text-black p-4 gap-1 w-[50%]">
        <ul className="w-[50%]">
          <h2 className="text-center">Matriculado</h2>
          {matriculado.map((curso) => (
            <li
              key={curso.id}
              className="underline w-full px-2 flex justify-between"
            >
              {curso.nome}
              <button onClick={() => desmatricular(curso)} className="cursor-pointer">
                <ArrowRightCircle />
              </button>
            </li>
          ))}
        </ul>

        <ul className="w-px h-full bg-black" />

        <ul className="w-[50%] text-end">
          <h2 className="text-center">Não matriculado</h2>
          {naoMatriculado.map((curso) => (
            <li
              key={curso.id}
              className="underline w-full px-2 flex justify-between"
            >
              <button onClick={() => matricular(curso)} className="cursor-pointer">
                <ArrowLeftCircle />
              </button>
              {curso.nome}
            </li>
          ))}
        </ul>
      </div>

      <button className="bg-white text-black rounded-xl px-10 py-2 cursor-pointer">Salvar matrículas</button>
    </div>
  );
}
