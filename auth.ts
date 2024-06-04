import NextAuth, { type DefaultSession } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      name: string;
      image: string;
      twitterId: string;
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    TwitterProvider({
      clientId: process.env.AUTH_TWITTER_ID!,
      clientSecret: process.env.AUTH_TWITTER_SECRET!,
    }),
  ],
  callbacks: {
    jwt({ token, account }) {
      if (account) {
        token.twitterId = account?.providerAccountId;
      }
      return token;
    },
    session({ session, token }) {
      session.user.twitterId = token.twitterId as string;
      return session;
    },
  },
});
