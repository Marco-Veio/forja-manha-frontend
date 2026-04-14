import Link from "next/link";

interface Props {
  id: number;
  nome: string;
}

export default function AlunoItem({ id, nome }: Props) {
  return (
    <Link href={`/aluno/${id}`}>
      <li>{nome}</li>
    </Link>
  );
}
