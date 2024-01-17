import { cn } from "@/lib/utils";
import Link from "next/link";
import { ElementType } from "react";

type Props = {
  title: string;
  icon: ElementType;
  href: string;
  px?: boolean;
};

export default function HomeUiCard(props: Props) {
  const PropsIcon = props.icon;

  return (
    <Link href={props.href} prefetch>
      <div className={cn(`"transform duration-100 ease-in py-3 px-4 md:px-12 rounded-md bg-slate-50 border-slate-200 shadow-sm hover:shadow-sky-300 hover:border-sky-400 hover:bg-sky-400 border group"`, props.px && "px-20 md:px-20")}>
        <div className="p-3 w-full flex justify-center items-center">
          <PropsIcon className="h-8 w-8 text-gray-700 group-hover:text-black" />
        </div>
        <span className="text-gray-700 group-hover:text-black text-center flex items-center justify-center text-lg sm:text-xl font-bold antialiased">
          {props.title}
        </span>
      </div>
    </Link>
  );
}