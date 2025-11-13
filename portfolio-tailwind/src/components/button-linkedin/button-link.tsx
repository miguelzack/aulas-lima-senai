import { LinkedinIco } from "@/assets/svgs/export";

export function ButtonLinkedin() {
  return (
    <a
      href="https://www.linkedin.com/in/miguel-zacharias-da-silva-8074b7323/"
      target="_blank"
      className="flex py-[15px] px-[25px] bg-white border border-gray-custom rounded-[35px] justify-center items-center gap-2.5 xl:text-xl text-xs font-normal"
    >
      <LinkedinIco/>
      Get in Touch
    </a>
  );
}
