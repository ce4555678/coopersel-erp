import Container from "@/components/container";
import HomeUi from "@/components/homeUi";
import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  BarChart3,
  BarChartBig,
  Bird,
  BookOpen,
  BookText,
  BookUser,
  CircleDollarSign,
  ClipboardList,
  DollarSign,
  Droplet,
  Gift,
  Layers,
  Package,
  PiggyBank,
  Recycle,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Truck,
  UserCircle,
  UserCog,
  Users,
  Users2,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garimpô",
};

export default function Home() {
  return (
    <Container className="pt-4">
      <div className="flex justify-center items-center pb-4 gap-2">
        <ShoppingBag className="h-7 w-7" />
        <h1 className="text-2xl md:text-3xl font-semibold antialiased">
          Menu de navegação - Garimpô
        </h1>
      </div>
      <div className="justify-center  flex">
        <div className="gap-3 md:gap-5 lg:gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {menu.map(({ title, href, icon }, index) => (
            <HomeUi.card key={index} title={title} href={href} icon={icon} px />
          ))}
        </div>
      </div>
    </Container>
  );
}

const menu = [
  {
    title: "Vender",
    icon: CircleDollarSign,
    href: "/dre",
  },
  {
    title: "Vendas",
    icon: ShoppingCart,
    href: "/dre",
  },
  {
    title: "Clientes",
    icon: UserCircle,
    href: "/dre",
  },
  {
    title: "Cooperados",
    icon: Users2,
    href: "/dre",
  },
  {
    title: "Estoque",
    icon: Shirt,
    href: "/dre",
  },
  {
    title: "Balanço",
    icon: BarChart3,
    href: "/dre",
  },
  {
    title: "Depositos",
    icon: PiggyBank,
    href: "/dre",
  },
  {
    title: "Promoções",
    icon: Gift,
    href: "/dre",
  },
  {
    title: "Relatórios",
    icon: ClipboardList,
    href: "/dre",
  },
  {
    title: "Fiados",
    icon: Bird,
    href: "/dre",
  },
  {
    title: "Despesas",
    icon: ArrowDownWideNarrow,
    href: "/dre",
  },
];
