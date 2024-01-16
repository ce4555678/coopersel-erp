import { Dot } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

type Props = {
  id: string;
  role: string;
  username: string;
  createdAt: Date;
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
      <TableCell className="flex items-center">
        <Dot className="h-4 w-4" />
        <Dot className="h-4 w-4" />
        <Dot className="h-4 w-4" />
        <Dot className="h-4 w-4" />
      </TableCell>
    </TableRow>
  );
}
