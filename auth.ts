import NextAuth, { type DefaultSession } from "next-auth";
import Twitter from "next-auth/providers/twitter";
import type { TwitterProfile } from "next-auth/providers/twitter";
import clientPromise from "./app/lib/mongoAdapter";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { ObjectId } from "mongodb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  providers: [
    Twitter({
      clientId: process.env.AUTH_TWITTER_ID,
      clientSecret: process.env.AUTH_TWITTER_SECRET,
      profile(profile: TwitterProfile | any) {
        return {
          ...profile.data,
          refId: profile?.data?.username,
          twitter: profile.data.id,
          screenName: profile?.data?.username,
          discord: "",
          telegram: "",
          walletAddress: "",
          totalPoints: 0,
          finishedMissions: [],
          refList: [],
          refPoints: 0,
          refMultiplier: 0,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = await (
        await clientPromise
      )
        .db("dats_task")
        .collection("users")
        .findOne({
          _id: new ObjectId(token.sub),
        });
      return {
        ...session,
        user: {
          ...session.user,
          ...user,
        },
      } as any;
    },
  },
});
