"use client";

import { useParams } from "next/navigation";

export default function AlunoPage() {
  const { id } = useParams();

  return <p className="text-white">{id}</p>;
}
