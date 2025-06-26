"use server";
import { checkBotId } from "botid/server";

const saveUser = async (userData: any) => {
  localStorage.setItem("user", JSON.stringify(userData));
  return userData;
};

export async function createUser(formData: FormData) {
  const verification = await checkBotId();

  if (verification.isBot) {
    throw new Error("Access denied");
  }

  const userData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
  };

  const user = await saveUser(userData);
  return { success: true, user };
}
