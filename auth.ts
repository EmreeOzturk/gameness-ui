import NextAuth, { type DefaultSession } from "next-auth";
import Twitter from "next-auth/providers/twitter";
import type { TwitterProfile } from "next-auth/providers/twitter";
import type { ProfileCallback } from "next-auth/providers";
import clientPromise from "./app/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { ObjectId } from "mongodb";
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: number;
//       name: string;
//       image: string;
//       twitter: string;
//       refId: string;
//       screenName: string;
//       discord: string;
//       telegram: string;
//       walletAddress: string;
//       totalPoints: number;
//       finishedMissions: string[];
//       refList: string[];
//       refPoints: number;
//       refMultiplier: number;
//     };
//   }
// }

//  refId: string;
//     screenName?: string;
//     twitter: string;
//     discord: string;
//     telegram: string;
//     walletAddress: string;
//     totalPoints: number;
//     finishedMissions: string[];
//     refList: string[];
//     refPoints: number;
//     refMultiplier: number;

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  debug: true,
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
        .db("test")
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
      };
    },
  },
});
