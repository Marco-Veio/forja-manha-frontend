"use client";

import Link from "next/link";
import { Trash } from "lucide-react";
import { deleteAluno } from "@/app/alunos/actions";
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  nome: string;
}

export default function AlunoItem({ id, nome }: Props) {
  const router = useRouter();

  function handleDelete() {
    deleteAluno(id);
    router.refresh();
  }

  return (
    <div className="flex gap-1">
      <Link href={`/aluno/${id}`}>
        <li>{nome}</li>
      </Link>
      <button
        className="text-red-500 cursor-pointer"
        onClick={handleDelete}
      >
        <Trash />
      </button>
    </div>
  );
}
