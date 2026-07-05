export default function UnderConstructionPage() {
    return (
        <main className="construction-page">
            <section className="construction-card" aria-labelledby="page-title">
                <header className="brand-mark">rian mabait</header>

                <div className="hero-copy">
                    <h1 id="page-title">Under Construction</h1>
                    <p>
                        I&apos;m building a sharper home for my work, notes, and
                        experiments. Thanks for your patience.
                    </p>

                    <nav className="social-links" aria-label="Social links">
                        <a
                            href="https://www.linkedin.com/in/rian-mabait-a1044626b/"
                            target="_blank"
                            rel="noopener"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/lueezzzz"
                            target="_blank"
                            rel="noopener"
                        >
                            GitHub
                        </a>
                    </nav>
                </div>

                <div className="alien-orbit" aria-hidden="true">
                    <div className="pixel-alien">
                        <span className="antenna antenna-left" />
                        <span className="antenna antenna-right" />
                        <span className="alien-head">
                            <span className="alien-eye alien-eye-left" />
                            <span className="alien-eye alien-eye-right" />
                            <span className="alien-smile" />
                        </span>
                        <span className="alien-body" />
                        <span className="alien-foot alien-foot-left" />
                        <span className="alien-foot alien-foot-right" />
                    </div>
                </div>
            </section>
        </main>
    );
}
