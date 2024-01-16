import Link from "next/link";
import { ElementType } from "react";

type Props = {
  title: string;
  icon: ElementType;
  href: string;
};

export default function HomeUiCard({ title, icon: Icon, href }: Props) {
  return (
    <Link href={href} prefetch>
      <div className="transform duration-100 ease-in py-3 px-4 md:px-12 rounded-md bg-slate-50 border-slate-200 shadow-sm hover:shadow-sky-300 hover:border-sky-400 hover:bg-sky-400 border group">
        <div className="p-3 w-full flex justify-center items-center">
          <Icon className="h-8 w-8 text-gray-700 group-hover:text-black" />
        </div>
        <span className="text-gray-700 group-hover:text-black text-center flex items-center justify-center text-lg sm:text-xl font-bold antialiased">
          {title}
        </span>
      </div>
    </Link>
  );
}