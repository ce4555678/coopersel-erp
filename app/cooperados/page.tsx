import Container from "@/components/container";
import CooperadosUi from "@/components/cooperadosUi";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Metadata } from "next";
import GetAllCooperados from "./getAllCooperados";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata : Metadata = {
  title: "Cooperados"
}
export const revalidate = 0;

export default async function Cooperados(props: Props) {
  const query =
    typeof props.searchParams.q == "string" ? props.searchParams.q : undefined;

  const regexNumeros = /^\d+$/;
  const pagination =
    typeof props.searchParams.pagination == "string"
      ? regexNumeros.test(props.searchParams.pagination)
        ? parseInt(props.searchParams.pagination)
        : undefined
      : undefined;
      const cooperados = await GetAllCooperados({ input: ""})
  return (
    <Container className="pt-4">
      <div className="pb-4 flex items-center gap-2 justify-center">
        <Users className="h-7 w-7" />
        <h1 className="font-semibold antialiased text-2xl">Cooperados</h1>
      </div>

      <Card>
        <CooperadosUi.table>
         {cooperados.map((cooperado, index) => (
          <CooperadosUi.item cooperado={cooperado} key={cooperado.id + index}/>
         ))} 
        </CooperadosUi.table>
      </Card>
    </Container>
  );
}
