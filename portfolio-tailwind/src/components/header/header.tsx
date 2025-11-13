"use client";
import { useState } from "react";
import { ButtonLinkedin } from "../button-linkedin/button-link";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex items-center xl:gap-[102px] w-full md:justify-center md:gap-4 justify-between">
      <h2 className="xl:text-[40px] md:text-xl sm:text-[40px]  font-extrabold">
        Miguel <span className="text-primary">Silva.</span>
      </h2>
      <div className="wrapper-nav hidden md:flex items-center xl:gap-[102px] gap-4">
        <nav className="flex py-[15px] px-[90px] gap-[75px] items-center justify-center rounded-[35px] bg-white shadow-[0_4px_15px_0_rgba(0,0,0,0.10)]">
          <a
            href="#home"
            className="text-gray-custom hover:text-black-hover xl:text-xl text-base font-normal"
          >
            Home
          </a>
          <a
            href="#portfolio"
            className="text-gray-custom hover:text-black-hover xl:text-xl text-base font-normal"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="text-gray-custom hover:text-black-hover xl:text-xl text-base font-normal"
          >
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
        <div className="w-6 h-[3px] bg-black mb-[5px]"></div>
        <div className="w-6 h-[3px] bg-black mb-[5px]"></div>
        <div className="w-6 h-[3px] bg-black"></div>
      </button>

      {open && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setOpen(false)}
            aria-label="close menu"
          >
            x
          </button>

          {/* LINKS */}
          <nav className="flex flex-col gap-10 text-3xl font-light text-black">
          <div className="mt-16">
            <ButtonLinkedin />
          </div>
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#portfolio" onClick={() => setOpen(false)}>
              Portfolio
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>

          {/* BOTÃO LINKEDIN */}
        </div>
      )}
    </header>
  );
}
