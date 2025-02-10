import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  debug: true ,
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  callbacks: {
    async session({ session, token }) {
      console.log("Session callback - session:", session);
      console.log("Session callback - token:", token);
      if (session.user && token) {
        session.user.id = token.sub ?? ''
      }
      return session
    },
     async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
      }
      return token
    }
  },
}

// Type augmentation for Session
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      providerAccountId?: string
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }