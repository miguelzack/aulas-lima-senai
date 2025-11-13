import "@/styles/global.css";
import { Header } from "@/components/header/header";
import { Badge } from "@/components/check-prof/check";
import { Perfil, ProjectBusPoint, ProjectSenaiExchage } from "@/assets/images/export";
import Image from "next/image";
import ButtonDownload from "@/components/button-download/button-download";
import { ProjectCard } from "@/components/project-card/project-card";

export default function Home() {
  return (
    <div className="all-page">
      <main className="flex flex-col justify-center py-[52px] px-[58px] bg-[url('/bg-main.jpg')] bg-cover bg-no-repeat bg-[lightgray] bg-center items-center gap-[62px] self-stretch">
        <Header />
        <section id="home" className="hero w-[878px] flex flex-col items-center">
          <Image
            src={Perfil}
            alt="Minha foto de perfil"
            className="w-[424px] h-[424px]"
          />
          <div className="flex flex-col items-center self-stretch">
            <div className="flex items-center gap-[21px]">
              <Badge label="Web Developer" />
              <Badge label="UI/UX Designer" />
            </div>
            <h1 className="text-[90px] font-extrabold">
              <span className="text-primary">Miguel</span> Silva.
            </h1>
            <div className="flex flex-col items-center self-stretch gap-[30px]">
              <p className="text-xl font-normal text-utility-gray text-center">
                With a solid foundation in my Technical Informatics studies and
                practical front-end experience, I am always seeking opportunities
                to apply my skills in programming and development. Bringing an
                entrepreneurial mindset and hands-on experience in web development
                and problem-solving, I am actively seeking my first opportunity in
                the job market. Whether you're looking to discuss a new project,
                seek a collaboration, or explore new possibilities, I am available
                to talk.
              </p>
              <ButtonDownload />
            </div>
          </div>
        </section>
      </main>
      <section id="portfolio" className="flex py-[108px] flex-col justify-center items-center gap-2.5 self-stretch">
        <div className="flex flex-col justify-center items-center gap-[54px] w-[75%]">
          <h2 className="text-center text-[40px] font-extrabold">Portfolio</h2>
          <div className="flex items-center gap-[30px] self-stretch w-full">
            <ProjectCard
              imageSrc={ProjectSenaiExchage}
              altText="Capa do projeto Senai Exchange"
              title="SENAI Exchange"
              description="Senai Exchange Senai Exchange was a student project for my course, developed as a web application for SENAI students. Its main objective is to connect students, promote collaborative learning, and strengthen their personal and professional development. The platform allows students to exchange knowledge, share content, ask questions, and share experiences."
              projectLink="https://github.com/senai-exchange/frontend-senai-exchange"
            />
            <ProjectCard
              imageSrc={ProjectBusPoint}
              altText="Capa do projeto BusPoint"
              title="BusPoint"
              description="BusPoint BusPoint is an application designed to facilitate the public transportation experience, ensuring users never miss their stop by providing precise alerts. Our goal is to ensure a smooth and worry-free trip by offering a practical, intuitive, and reliable solution for daily commutes. This is a project I am currently developing together with my classmates."
              projectLink="https://buspoint-landpage.vercel.app/"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
