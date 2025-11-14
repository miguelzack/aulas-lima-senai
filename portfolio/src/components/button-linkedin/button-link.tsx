import { LinkedinIco } from "@/assets/svgs/export";

export function ButtonLinkedin() {
  return (
    <a
      href="https://www.linkedin.com/in/miguel-zacharias-da-silva-8074b7323/"
      target="_blank"
      className="flex py-[15px] px-[25px] bg-white hover:bg-gray-500  hover:text-white border border-gray-custom rounded-[35px] justify-center items-center gap-2.5 lg:text-xl md:text-[18px] sm:text-base font-normal transition-all duration-300 ease-out hover:shadow-sm hover:-translate-y-1"
    >
      <LinkedinIco />
      Get in Touch
    </a>
  );
}
