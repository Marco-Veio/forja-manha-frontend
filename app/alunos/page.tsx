import AlunoItem from "@/components/AlunoItem";

export default async function AlunosPage() {
  const alunos = await fetch("http://localhost:8080/alunos").then((res) =>
    res.json(),
  );

  console.log(alunos);

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h1 className="mt-10 mb-50 text-5xl font-bold">Lista de alunos</h1>

      <div className="w-[90%] h-100 bg-white rounded-md shadow-md shadow-white text-black p-2 overflow-auto">
        <ul className="flex flex-col items-center gap-2">
          <AlunoItem id={1} nome="Marco Aurélio" />
        </ul>
      </div>
    </div>
  );
}
