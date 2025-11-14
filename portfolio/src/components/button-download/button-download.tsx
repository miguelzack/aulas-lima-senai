import { DownloadIco } from "@/assets/svgs/export";

export default function ButtonDownload() {
  return (
    <a
      href="https://curriculo-web-puce.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex py-[15px] px-[25px] justify-center items-center gap-2.5 rounded-[35px] bg-primary text-white text-xl font-normal hover:bg-orange-700 transition-all duration-300 ease-out hover:shadow-sm hover:-translate-y-1"
    >
      <DownloadIco />
      Download Resume
    </a>
  );
}
