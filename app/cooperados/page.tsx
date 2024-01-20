import Container from "@/components/container";
import CooperadosUi from "@/components/cooperadosUi";
import { Card } from "@/components/ui/card";
import { List, Plus, SlidersHorizontal, UserRoundPlus, Users } from "lucide-react";
import { Metadata } from "next";
import GetAllCooperados from "./getAllCooperados";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Cooperados",
};
export const revalidate = 0;

export default async function Cooperados(props: Props) {
  const query =
    typeof props.searchParams.q == "string" ? props.searchParams.q : null;

  const regexNumeros = /^\d+$/;
  const pagination =
    typeof props.searchParams.pagination == "string"
      ? regexNumeros.test(props.searchParams.pagination)
        ? parseInt(props.searchParams.pagination)
        : undefined
      : undefined;

  const cooperados = await GetAllCooperados({ input: "" });

  return (
    <Container className="">
             <div className="pt-4 sm:pt-6 flex justify-center sm:hidden items-center">
          <Users className="h-7 w-7 mr-2" />
          <h1 className="font-semibold antialiased text-2xl">Cooperados</h1>
        </div>

      <div className="py-4 sm:py-6 flex items-center justify-between">
        <Button variant={"outline"}>
          <List className="h-4 w-4 mr-2" /> Resumo
        </Button>

        <div className="hidden sm:flex items-center">
          <Users className="h-7 w-7 mr-2" />
          <h1 className="font-semibold antialiased text-2xl">Cooperados</h1>
        </div>
        <Button variant={"outline"}>
          <SlidersHorizontal className="h-4 w-4 mr-2" /> Filtrar
        </Button>
      </div>

      <div className="pb-4 flex items-center w-full justify-between">
        <CooperadosUi.input search={query} />

        <Link href={"/cooperados/cadastro"} prefetch>
          <Button variant={"outline"}>
            <UserRoundPlus className="h-4 w-4 mr-2" /> Cadastrar
          </Button>
        </Link>
      </div>

      <Card>
        <CooperadosUi.table>
          {cooperados.map((cooperado, index) => (
            <CooperadosUi.item
              cooperado={cooperado}
              key={cooperado.id + index}
            />
          ))}
        </CooperadosUi.table>
      </Card>
    </Container>
  );
}
