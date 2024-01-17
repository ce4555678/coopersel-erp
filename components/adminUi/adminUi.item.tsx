import { Dot, EyeOff, MoreHorizontal } from "lucide-react";
import { TableCell, TableRow } from "../ui/table";
import type { ReactNode } from "react";
import RelativeTime from "../relativeTime";

type Props = {
  id: string;
  role: string;
  username: string;
  createdAt: Date;
  children: ReactNode;
};

export default function AdminUiItem(props: Props) {
  return (
    <TableRow>
      <TableCell>{props.username}</TableCell>
      <TableCell className="capitalize">{props.role.toLocaleLowerCase()}</TableCell>
      <TableCell>
        <RelativeTime data={props.createdAt} />
      </TableCell>
      <TableCell>
        <MoreHorizontal className="h-7 w-7" />
      </TableCell>
      <TableCell>{props.children}</TableCell>
    </TableRow>
  );
}
