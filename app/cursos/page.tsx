import AlunoItem from "@/components/AlunoItem";

import { getAlunos } from "./actions";
import Link from "next/link";

export default async function AlunosPage() {
  const alunos = await getAlunos();

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h1 className="mt-10 mb-50 text-5xl font-bold">Lista de alunos</h1>

      <div className="w-[90%] h-100 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto">
        <ul className="flex flex-col items-center gap-2">
          {alunos.map((aluno) => (
            <AlunoItem key={aluno.id} nome={aluno.nome} id={aluno.id} />
          ))}
        </ul>
      </div>

      <Link
        href="/aluno/cadastro"
        className="px-5 py-2 bg-white text-black mt-5 rounded-lg"
      >
        Cadastrar aluno
      </Link>
    </div>
  );
}
