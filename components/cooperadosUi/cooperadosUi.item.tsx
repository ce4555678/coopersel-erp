import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { Cooperados } from "@prisma/client";
import RelativeTime from "../relativeTime";
import { Badge } from "@/components/ui/badge";

type Props = {
  cooperado: Cooperados;
};
export default function CooperadosUiItem(props: Props) {
  return (
    <TableRow>
      <TableCell>{props.cooperado.id}</TableCell>
      <TableCell>{props.cooperado.nome}</TableCell>
      <TableCell>
        <Badge
          className={cn(
            props.cooperado.saida && "text-red-700",
            !props.cooperado.saida && "text-green-700"
          )}
          variant={"outline"}
        >
          {props.cooperado.saida ? "Desligado" : "Ativo"}
        </Badge>
      </TableCell>
      <TableCell>
        {new Date().getFullYear() - props.cooperado.birth.getFullYear()}
      </TableCell>
      <TableCell>{props.cooperado.CPF}</TableCell>
      <TableCell>{props.cooperado.RG}</TableCell>
      <TableCell>{RelativeTime({ data: props.cooperado.entrada })}</TableCell>
      <TableCell>
        <Badge variant={"outline"}>
          {props.cooperado.saida
            ? RelativeTime({ data: props.cooperado.saida })
            : "Não está desligado"}
        </Badge>
      </TableCell>
      <TableCell className="capitalize">
        <Badge variant={"outline"}>{props.cooperado.genero.toLowerCase()}</Badge>
      </TableCell>
      <TableCell>{props.cooperado.carteiraDeTrabalho}</TableCell>
      <TableCell>{props.cooperado.tituloDeEleitor}</TableCell>
    </TableRow>
  );
}
