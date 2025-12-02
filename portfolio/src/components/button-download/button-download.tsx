import GitHubIco from "@/assets/svgs/githubIco";

export default function ButtonDownload() {
  return (
    <a
      href="https://github.com/miguelzackk"
      target="_blank"
      rel="noopener noreferrer"
      className="flex py-[15px] px-[25px] justify-center items-center gap-2.5 rounded-[35px] bg-primary text-white text-xl font-normal hover:bg-orange-700 transition-all duration-300 ease-out hover:shadow-sm hover:-translate-y-1"
    >
      <GitHubIco />
      Visit my GitHub
    </a>
  );
}
