import ApiFetch from "@/components/custom/ApiFetch";
import ClientComponent from "@/components/custom/ClientComponent";
import { ClientFetch } from "@/components/custom/ClientFetch";
import ServerActionFetch from "@/components/custom/ServerActionFetch";
import ServerComponent from "@/components/custom/ServerComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid w-[100dvw] h-[100dvh] grid-cols-1 grid-rows-5 gap-8 px-8  ">
        <ApiFetch />
        <ClientComponent />
        <ClientFetch />
        <ServerActionFetch />
        <ServerComponent />
      </div>
    </main>
  );
}
