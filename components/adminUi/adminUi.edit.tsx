"use client";
import { Check, Save, SquarePen, Trash, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
type Props = {
  id: string;
  username: string;
};

export default function AdminUiEdit(props: Props) {
  return (
    <AlertDialog>
         <Tooltip>
        <TooltipTrigger asChild>
        <AlertDialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <SquarePen className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Editar</p>
        </TooltipContent>
      </Tooltip>

      
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Editar <strong>{props.username}</strong>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <X className="h-5 w-5 mr-2" />
            Fechar
          </AlertDialogCancel>
          <AlertDialogAction>
            <Save className="h-5 w-5 mr-2" /> Salvar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
