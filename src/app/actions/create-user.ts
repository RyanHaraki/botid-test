"use server";
import { checkBotId } from "botid/server";

const saveUser = async (userData: any) => {
  localStorage.setItem("user", JSON.stringify(userData));
  return userData;
};

export async function createUser(email: string, name: string) {
  const verification = await checkBotId();

  if (verification.isBot) {
    throw new Error("Access denied");
  }

  const userData = {
    name,
    email,
  };

  const user = await saveUser(userData);
  return { success: true, user };
}
