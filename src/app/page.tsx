"use client";

import Link from "next/link";
import { createUser } from "./actions/create-user";

export default function Home() {
  const handleClick = async () => {
    const result = await createUser("John Doe", "john.doe@example.com");
    console.log(result);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button
        className="bg-black text-white p-3 rounded-md cursor-pointer hover:bg-gray-800"
        onClick={handleClick}
      >
        run sensitive action
      </button>
      <div className="flex gap-4">
        <Link href="/protected">Protected</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </div>
  );
}
