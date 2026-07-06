import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <>
            <section className="mt-16 flex flex-col gap-6">
                <div className="text-7xl">
                    <b>Rian Mabait</b>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                        <Link
                            href="https://www.linkedin.com/in/rian-mabait-a1044626b/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Link
                            href="https://github.com/lueezzzz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                </div>

                <div>
                    <b>I build with purpose, passion & curiosity</b>
                </div>

                <div>
                    <p className="text-justify">
                        Full Stack Developer, focused on building scalable web &
                        mobile applications. Experienced in owning product
                        delivery from development to deployment
                    </p>
                </div>
            </section>
        </>
    );
}
