import { LinkedinIco } from "@/assets/icons/export";

export function Header() {
    return (
        <header>
            <nav>
                <h2>Miguel <span>Silva.</span></h2>
                <div className="wrapper-links">
                    <a href="#">Home</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </div>
                <a href="https://www.linkedin.com/in/miguel-zacharias-da-silva-8074b7323/">
                    <LinkedinIco />
                    Get in Touch</a>
            </nav>
        </header>
    )
}