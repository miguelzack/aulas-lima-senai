import { ButtonLinkedin } from "../button-linkedin/button-link";

export function Header() {
    return (
        <header className="flex flex-row items-center justify-between w-full">
            <h2 className="text-[40px] font-extrabold">Miguel <span className="text-primary">Silva.</span>
            </h2>
            <nav className="flex py-[15px] px-[90px] gap-[75px] items-center justify-center rounded-[35px] bg-white shadow-[0_4px_15px_0_rgba(0,0,0,0.10)]">
                <a href="#" className="text-gray-custom hover:text-black-hover text-xl font-normal">Home</a>
                <a href="#" className="text-gray-custom hover:text-black-hover text-xl font-normal">Portfolio</a>
                <a href="#" className="text-gray-custom hover:text-black-hover text-xl font-normal">Contact</a>
            </nav>
           <ButtonLinkedin/>
        </header>
    )
}