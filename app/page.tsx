import Container from "@/components/container";
import HomeUi from "@/components/homeUi";
import {
  ArrowUpWideNarrow,
  BarChart3,
  BarChartBig,
  BookOpen,
  BookText,
  BookUser,
  ClipboardList,
  DollarSign,
  Droplet,
  Layers,
  Package,
  Recycle,
  ShoppingBag,
  ShoppingCart,
  Truck,
  UserCog,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="pt-4">
      <div className="flex items-center justify-center py-4 gap-2">
        <div className="h-24 w-24 border border-blue-200 rounded-full overflow-hidden">
          <Image
            alt="logo"
            src="/android-chrome-512x512.png"
            width={200}
            height={200}
          />
        </div>
      </div>
      <h1 className="text-center text-2xl font-semibold antialiased">
          Menu de navegação - Coopersel ERP
        </h1>
      <div className="justify-center pt-4 flex">
        <div className="gap-3 md:gap-5 lg:gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {menu.map(({ title, href, icon }, index) => (
            <HomeUi.card key={index} title={title} href={href} icon={icon} />
          ))}
        </div>
      </div>
    </Container>
  );
}

const menu = [
  {
    title: "DRE",
    icon: BarChartBig,
    href: "/dre",
  },
  {
    title: "Gerenciar cooperados",
    icon: Users,
    href: "/cooperados",
  },
  {
    title: "Coleta de oléo",
    icon: Droplet,
    href: "/coleta-de-oleo",
  },
  {
    title: "Coleta seletiva",
    icon: Recycle,
    href: "/coleta-seletiva",
  },
  {
    title: "Venda de materiais",
    icon: BarChart3,
    href: "/venda-de-materiais",
  },
  {
    title: "Material de catadores",
    icon: Package,
    href: "/material-de-catadores",
  },
  {
    title: "Garimpô EcoLoja",
    icon: ShoppingBag,
    href: "/garimpo",
  },
  {
    title: "Ficha de presença",
    icon: ClipboardList,
    href: "/ficha-de-presença",
  },
  {
    title: "Currículos",
    icon: BookUser,
    href: "/curriculos",
  },
  {
    title: "Gerenciar frota",
    icon: Truck,
    href: "/frota",
  },
  {
    title: "Documentação",
    icon: BookOpen,
    href: "/documentos",
  },
  {
    title: "Gerenciar boletos",
    icon: BookText,
    href: "/boletos",
  },
  {
    title: "Demanda de afazeres",
    icon: ArrowUpWideNarrow,
    href: "/boletos",
  },
  {
    title: "Rateio",
    icon: DollarSign,
    href: "/rateio",
  },
  {
    title: "Controle de prensagem",
    icon: Layers,
    href: "/controle-de-prensagem",
  },
  {
    title: "Administrador",
    icon: UserCog,
    href: "/admin",
  },
];
