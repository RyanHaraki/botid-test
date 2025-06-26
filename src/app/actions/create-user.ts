"use server";
import { checkBotId } from "botid/server";

export async function createUser(email: string, name: string) {
  const verification = await checkBotId();

  if (verification.isBot) {
    throw new Error("Access denied");
  }

  const userData = {
    name,
    email,
  };

  return { success: true, user: userData };
}
