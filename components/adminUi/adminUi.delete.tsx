"use client";
import { Check, Trash, X } from "lucide-react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
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

export default function AdminUiDelete(props: Props) {
  return (
    <AlertDialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <AlertDialogTrigger asChild>
            <Button variant="outline" size={"icon"}>
              <Trash className="h-4 w-4" />
            </Button>
          </AlertDialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Excluir</p>
        </TooltipContent>
      </Tooltip>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Excluir <strong>{props.username}</strong>
          </AlertDialogTitle>
          <AlertDialog>
            Fazendo isso, você excluirá este usuário permanentemente. Deseja
            continuar?
          </AlertDialog>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            <X className="h-5 w-5 mr-2" />
            Fechar
          </AlertDialogCancel>
          <AlertDialogAction>
            <Check className="h-5 w-5 mr-2" /> Sim
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
