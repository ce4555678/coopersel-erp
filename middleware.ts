export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/", "/admin", "/cooperados", "/cooperados/cadastro"],
};
