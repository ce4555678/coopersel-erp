import Container from "@/components/container";
import type { Metadata } from "next";
import LoginForm  from "./loginForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Fazer login",
};
export default function Login() {
  return (
  <Container className="pt-10">
    <div className="flex items-center justify-center pb-4">
        <span className="h-24 w-24 border border-blue-200 rounded-full overflow-hidden">
    <Image alt="logo" src="/android-chrome-512x512.png" width={200} height={200}/>
        </span>
    </div>
    <h1 className="text-center font-semibold antialiased text-2xl">Faça login</h1>
    <div className="flex items-center w-full justify-center">
    <LoginForm/>
    </div>
  </Container>
  );
}
