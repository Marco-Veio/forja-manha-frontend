import AlunoItem from "@/components/AlunoItem";

import { getAlunos } from "./actions";

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
    </div>
  );
}
