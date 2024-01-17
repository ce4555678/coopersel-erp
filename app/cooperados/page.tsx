import Container from "@/components/container";
import CooperadosUi from "@/components/cooperadosUi";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function Cooperados() {
  return (
    <Container className="pt-10">
      <div className="pb-4 flex items-center gap-2 justify-center">
        <Users className="h-7 w-7" />
        <h1 className="font-semibold antialiased text-2xl">Cooperados</h1>
      </div>

      <Card>
        <CooperadosUi.table>
          
        </CooperadosUi.table>
      </Card>
    </Container>
  );
}
