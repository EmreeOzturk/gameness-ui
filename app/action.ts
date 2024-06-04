"use server";

import { signIn } from "@/auth";

export default async function signWithX() {
  await signIn("twitter", { redirectTo: "/missions" });
}
