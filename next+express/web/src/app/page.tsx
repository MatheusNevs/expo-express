import { api } from "@/trpc/server";

export default function Home() {
  const msg = api.helloWorld.query();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <p className="text-center">
      { msg }
     </p>
    </main>
  );
}
