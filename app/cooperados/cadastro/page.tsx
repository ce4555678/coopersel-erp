import Container from "@/components/container";
import authOptions from "@/lib/authOptions";
import { UserRoundPlus } from "lucide-react";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const revalidate = 0;
export const metadata: Metadata = {
  title: "Cadastrar cooperado",
};
export default async function CadastroDeCooperados() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/");

  return (
    <Container>
      <div className="pt-4 flex items-center gap-2 justify-center">
        <UserRoundPlus className="h-7 w-7" />
        <h1 className="font-semibold antialiased text-2xl">
          Cadastrar cooperado
        </h1>
      </div>
    </Container>
  );
}
