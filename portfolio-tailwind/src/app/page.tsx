import { Header } from "@/components/header/header";
import { Badge } from "@/components/check-prof/check";
import { Perfil } from "@/assets/images/export"
import { DownloadIco } from "@/assets/svgs/export";
import "@/styles/global.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center py-[52px] px-[58px] bg-[url('/bg-main.jpg')] bg-cover bg-no-repeat bg-[lightgray] bg-center items-center gap-[62px] self-stretch">
      <Header />
      <section className="hero w-[878px] flex flex-col items-center">

        <Image src={Perfil} alt="Preview do mapa do aplicativo" className="w-[424px] h-[424px]" />
        <div className="flex flex-col items-center self-stretch">
          <div className="flex items-center gap-[21px]">
            <Badge label="Web Developer" />
            <Badge label="UI/UX Designer" />
          </div>
          <h1 className="text-[90px] font-extrabold"><span className="text-primary">Miguel</span> Silva.</h1>
          <div className="flex flex-col items-center self-stretch gap-[30px]">
            <p className="text-xl font-normal text-utility-gray text-center">With a solid foundation in my Technical Informatics studies and practical front-end experience, I am always seeking opportunities to apply my skills in programming and development. Bringing an entrepreneurial mindset and hands-on experience in web development and problem-solving, I am actively seeking my first opportunity in the job market. Whether you're looking to discuss a new project, seek a collaboration, or explore new possibilities, I am available to talk.</p>
            <a href="/curriculodev.pdf" target="_blank" className="flex py-[15px] px-[25px] justify-center items-center gap-2.5 rounded-[35px] bg-primary text-white">
              <DownloadIco />
              Download Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
}
