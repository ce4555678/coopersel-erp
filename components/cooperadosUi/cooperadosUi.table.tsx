import type { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card } from "../ui/card";

type Props = {
  children: ReactNode;
};
export default function CooperadosUiTable(props: Props) {
  return (
    <Card>
      <Table>
        <TableCaption>Lista de cooperados.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Matrícula</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Idade</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>RG</TableHead>
            <TableHead>Adesão</TableHead>
            <TableHead>Desligamento</TableHead>
            <TableHead>Gênero</TableHead>
            <TableHead>Carteira de trabalho</TableHead>
            <TableHead>Título de eleitor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{props.children}</TableBody>
      </Table>
    </Card>
  );
}
