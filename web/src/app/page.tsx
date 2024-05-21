import Link from "next/link";
import { api } from "@/trpc/server";
import { useContext } from "react";
import { getServerAuthSession } from "./auth/auth";

export default async function Home() {
  const data = await getServerAuthSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[200px] h-[200px] bg-white text-black"> 
        { data.user?.username }
      </div>
      <Link href="http://localhost:3001/auth/login/github" className="w-36 h-36 bg-white text-black">
        Entrar pelo gitHub
      </Link>
    </main>
  );
}
