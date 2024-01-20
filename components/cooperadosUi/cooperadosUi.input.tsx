"use client";
import { useRef, useState } from "react";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

type Props = {
  search: string | null;
};

export default function CooperadosUiInput({ search }: Props) {
  const [input, setInput] = useState(search ? search : "");
  const router = useRouter();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Input
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      ref={ref}
      onKeyDown={(e) => {
        if (e.code == "Backspace") router.push("/cooperados");
        if (e.code == "Enter") {
          if (input.length !== 0) {
            ref.current?.blur();
            router.push(`/cooperados?q=${input}`);
          }
        }
      }}
      className="w-1/2 md:w-1/4"
      placeholder="Pesquisar por nome"
      type="text"
    />
  );
}