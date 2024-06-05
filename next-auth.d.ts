import { DefaultSession, DefaultUser } from "next-auth";
export interface User {
  _id: string;
  refId: string;
  name?: string;
  email?: string;
  screenName?: string;
  twitter: string;
  discord: string;
  telegram: string;
  walletAddress: string;
  totalPoints: number;
  finishedMissions: string[];
  refList: string[];
  refPoints: number;
  refMultiplier: number;
  profile_image_url: string;
}
declare module "next-auth" {
  // Adding the new field to the User interface

  interface User extends DefaultUser {
    _id: string;
    refId: string;
    screenName?: string;
    twitter: string;
    discord: string;
    telegram: string;
    walletAddress: string;
    totalPoints: number;
    finishedMissions: string[];
    refList: string[];
    refPoints: number;
    refMultiplier: number;
    profile_image_url: string;
  }

  // Here I add the user object to the session object so I can access it easily.

  interface Session extends DefaultSession {
    user: User;
  }
}
