import "@/styles/global.css";
import { Header } from "@/components/header/header";
import { Badge } from "@/components/check-prof/check";
import { Perfil, ProjectBusPoint, ProjectSenaiExchage } from "@/assets/images/export";
import Image from "next/image";
import ButtonDownload from "@/components/button-download/button-download";
import { ProjectCard } from "@/components/project-card/project-card";
import { ButtonLinkedin } from "@/components/button-linkedin/button-link";
import { SendEmailIco } from "@/assets/svgs/export"

export default function Home() {
  return (
    <div className="all-page">
      <main id="home" className="flex flex-col justify-center lg:py-[52px] py-[60px] lg:px-[58px] px-9 bg-[url('/bg-main.jpg')] bg-cover bg-no-repeat bg-[lightgray] bg-center items-center lg:gap-[62px] gap-[57px] self-stretch">
        <Header />
        <section className="hero lg:w-[878px] flex flex-col items-center">
          <Image
            src={Perfil}
            alt="Minha foto de perfil"
            className="md:w-[424px] w-[280px] md:mb-0 mb-[57px]"
          />
          <div className="flex flex-col items-center self-stretch md:gap-0 gap-[15px] w-full">
            <div className="flex items-center gap-[21px]">
              <Badge label="Web Developer" />
              <Badge label="UI/UX Designer" />
            </div>
            <h1 className="md:text-[90px] text-[65px] font-extrabold">
              <span className="text-primary">Miguel</span> Silva.
            </h1>
            <div className="flex flex-col items-center self-stretch gap-[30px]">
              <p className="text-xl font-normal text-utility-gray text-center w-full">
                With a solid foundation in my Technical Informatics studies and
                practical front-end experience, I am always seeking opportunities
                to apply my skills in programming and development. Bringing an
                entrepreneurial mindset and hands-on experience in web development
                and problem-solving, I am actively seeking my first opportunity in
                the job market. Whether you're looking to discuss a new project,
                seek a collaboration, or explore new possibilities, I am available
                to talk.
              </p>
              <div className="md:mt-0 mt-[15px]">
                <ButtonDownload />
              </div>
            </div>
          </div>
        </section>
      </main>
      <section id="portfolio" className="flex py-[108px] flex-col justify-center items-center gap-2.5 self-stretch">
        <div className="flex flex-col justify-center items-center gap-[54px] w-[75%]">
          <h2 className="text-center text-[40px] font-extrabold">Portfolio</h2>
          <div className="flex lg:flex-row flex-col items-center gap-[30px] self-stretch w-full">
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
      <section id="contact" className="flex flex-col items-start gap-2.5 self-stretch bg-primary">
        <div className="flex md:flex-row flex-col py-[100px] md:px-0 px-[65px] justify-center items-center md:gap-[141px] gap-[75px] self-stretch">
          <div className="flex md:w-[45.572%] w-full flex-col md:items-start justify-center items-center gap-5">
            <Image
              src={Perfil}
              alt="Minha foto de perfil"
              className="w-[183px]"
            />
            <h5 className="text-white text-[40px] font-extrabold">Contact me</h5>
            <p className="self-stretch text-xl font-normal text-white md:text-start text-center">Interested in discussing web development, sharing ideas about software projects, or exploring new solutions in programming? Feel free to reach out—let's connect and keep building.</p>
            <ButtonLinkedin />
          </div>
          <div className="flex p-10 flex-col justify-center items-center gap-[25px] rounded-xl bg-white md:w-[23%]">
            <h6 className="text-primary text-base font-extrabold">Let's Stay Connected</h6>
            <form action="" method="post" className="flex flex-col items-start gap-5 self-stretch">
              <input placeholder="Your Name*" type="text" id="name" className="flex w-full px-[25px] py-2.5 rounded-lg border border-border-form text-base text-font-form font-normal" />
              <input placeholder="Email ID*" type="email" id="email" className="flex w-full px-[25px] py-2.5 rounded-lg border border-border-form text-base text-font-form font-normal" />
              <input placeholder="Phone No*" type="number" id="number" className="flex w-full px-[25px] py-2.5 rounded-lg border border-border-form text-base text-font-form font-normal" />
              <textarea name="message" id="message" placeholder="Message*" className="w-full h-[105px] py-2.5 px-[25px] items-start gap-2.5 rounded-lg border border-border-form text-base text-font-form font-normal"></textarea>
              <button className="login flex py-[15px] px-[25px] justify-center items-center gap-2.5 rounded-[35px] border border-white bg-primary text-xl font-normal text-white" type="submit"> <SendEmailIco /> Send email</button>
            </form>
          </div>
        </div>
      </section>
      <footer className="flex py-[50px] justify-center items-center gap-2.5 self-stretch bg-black">
        <p className="text-gray-custom text-base font-normal">Copyright 2025 @CIT || All Rights Reserved</p>
      </footer>
    </div>
  );
}
