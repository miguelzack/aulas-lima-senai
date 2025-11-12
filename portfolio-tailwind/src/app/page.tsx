import { Header } from "@/components/header/header";
import "@/styles/global.css";

export default function Home() {
  return (
    <main className="flex justify-center py-[52px] px-[58px] bg-[url('/bg-main.jpg')] bg-cover bg-no-repeat bg-[lightgray] bg-center items-center gap-[62px] self-stretch">
      <Header />
    </main>
  );
}
