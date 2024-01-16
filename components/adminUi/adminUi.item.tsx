import { Dot } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import type { ReactNode } from "react";

type Props = {
  id: string;
  role: string;
  username: string;
  createdAt: Date;
  children: ReactNode;
};

export default function AdminUiItem(props: Props) {
  dayjs().locale("pt-br").format();
  dayjs.extend(relativeTime)

  return (
    <TableRow>
      <TableCell className="font-medium antialiased">
        {props.username}
      </TableCell>
      <TableCell className="capitalize font-medium antialiased">
        {props.role.toLocaleLowerCase()}
      </TableCell>
      <TableCell>{dayjs().to(dayjs(props.createdAt))}</TableCell>
      <TableCell>
        <span className="flex gap-3">
        {props.children}
        </span>
      </TableCell>
    </TableRow>
  );
}
