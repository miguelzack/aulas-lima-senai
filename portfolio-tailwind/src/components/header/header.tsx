"use client";
import { useState } from "react";
import { ButtonLinkedin } from "../button-linkedin/button-link";
import { MenuIco, XIco } from "@/assets/svgs/export";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center xl:gap-[220px] w-full md:justify-center md:gap-6 justify-between">
      <h2 className="xl:text-[40px] md:text-[23px] text-[24px] font-extrabold">
        Miguel <span className="text-primary">Silva.</span>
      </h2>

      <div className="wrapper-nav hidden md:flex items-center xl:gap-[220px] gap-6">
        <nav className="flex py-[15px] px-[90px] gap-[75px] items-center justify-center rounded-[35px] bg-white shadow-[0_4px_15px_0_rgba(0,0,0,0.10)]">
          <a href="#home" className="text-gray-custom hover:text-black-hover xl:text-xl text-base font-normal">
            Home
          </a>
          <a href="#portfolio" className="text-gray-custom hover:text-black-hover xl:text-xl text-base font-normal">
            Portfolio
          </a>
          <a href="#" className="text-gray-custom hover:text-black-hover xl:text-xl text-base font-normal">
            Contact
          </a>
        </nav>
        <ButtonLinkedin />
      </div>

      <button
        className="md:hidden focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="open menu"
      >
        <MenuIco />
      </button>

      {/* MENU SEM DESMONTAR (AGORA ANIMA!) */}
      <div
        className={`
          fixed inset-0 bg-bg-menu w-[315px] right-0 ml-auto
          flex flex-col gap-[35px]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex pt-[29px] justify-between px-[19px]">
          <ButtonLinkedin />
          <button onClick={() => setOpen(false)} aria-label="close menu">
            <XIco />
          </button>
        </div>

        <nav className="w-full flex py-[15px] px-[90px] flex-col justify-center items-center gap-[75px]">
          <a href="#home" onClick={() => setOpen(false)} className="text-gray-custom hover:text-black-hover text-xl sm:text-3xl font-normal">
            Home
          </a>
          <a href="#portfolio" onClick={() => setOpen(false)} className="text-gray-custom hover:text-black-hover text-xl sm:text-3xl font-normal">
            Portfolio
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-gray-custom hover:text-black-hover text-xl sm:text-3xl font-normal">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
