import prisma from "@/lib/prisma";

type Props = {
    input?: string
}

export default async function GetAllCooperados(props : Props) {
  const cooperados = await prisma.cooperados.findMany();

  return cooperados;
}
