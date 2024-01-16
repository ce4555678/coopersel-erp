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

export default function Home() {
  return (
    <main>
      <h1 className="py-8 text-center text-2xl md:text-3xl font-bold antialiased">
        Menu de navegação
      </h1>
      <Container className="pb-8 md:pb-12">
        <div className="justify-center  flex">
          <div className="gap-3 md:gap-5 lg:gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {menu.map(({ title, href, icon }, index) => (
              <HomeUi.card key={index} title={title} href={href} icon={icon} />
            ))}
          </div>
        </div>
      </Container>
    </main>
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
    title: "Garimpô ecoloja",
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
    title: "Devedores Garimpô",
    icon: ShoppingCart,
    href: "/rateio",
  },
  {
    title: "Administrador",
    icon: UserCog,
    href: "/admin",
  },
];
