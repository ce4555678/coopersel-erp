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
export default function AdminUiTable(props: Props) {
  return (
    <Card>
      <Table>
        {/* <TableCaption>Lista de usuários do sistema.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Permissão de acesso</TableHead>
            <TableHead>Criado</TableHead>
            <TableHead>Opções</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{props.children}</TableBody>
      </Table>
    </Card>
  );
}
