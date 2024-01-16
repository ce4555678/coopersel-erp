import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import argon2 from "argon2";
import prisma from "./prisma";

const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Garimpô" },
        password: { label: "Senha", type: "password", placeholder: "Senha" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        if (typeof username !== "string") return null;

        // Add logic here to look up the user from the credentials supplied
        const userAuth = await prisma.user.findUnique({
          where: {
            username: username,
          },
        });

        if (!userAuth) {
          return null;
        }

        if (typeof password == "string" && password?.length >= 8) {
          const validPassword = await argon2.verify(
            userAuth.password_hash,
            password
          );

          if (validPassword == false) return null;
        }

        const user = {
          id: userAuth.id,
        };
        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }) {
      if (session?.user) {
        // @ts-expect-error
        session.user.id = token.uid;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.uid = user.id;
        token.picture = user.image
      }
      return token;
    },
  },
};

export default authOptions;
