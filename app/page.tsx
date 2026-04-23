import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="w-screen h-20 flex justify-evenly bg-gray-500 items-center">
        <Link href="/">Home</Link>
        <Link href="/alunos">Alunos</Link>
        <span>Sair</span>
      </div>
    </div>
  );
}
