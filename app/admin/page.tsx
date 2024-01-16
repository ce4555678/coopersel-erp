import AdminUi from "@/components/adminUi";
import Container from "@/components/container";
import authOptions from "@/lib/authOptions";
import prisma from "@/lib/prisma";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Administrador",
};

export const revalidate = 0;

export default async function Admin() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/");

  const isAdmin = await prisma.user.findUnique({
    where: {
      // @ts-expect-error
      id: session.user.id,
    },
  });

  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      role: true,
      createdAt: true
    },
  });

  if (isAdmin?.role !== "ADMIN") return redirect("/");
  return (
    <Container className="pt-10">
      <h1 className="text-center pb-4 font-semibold antialiased text-2xl">
        Administrador
      </h1>
      <AdminUi.table>
        {users.map((user, index) => (
          <AdminUi.item
            id={user.id}
            role={user.role}
            username={user.username}
            key={`${user.id} ${index}`}
            createdAt={user.createdAt}
          >
            <AdminUi.delete id={user.id} username={user.username}/>
            <AdminUi.edit id={user.id} username={user.username}/>
          </AdminUi.item>
        ))}
      </AdminUi.table>
    </Container>
  );
}
