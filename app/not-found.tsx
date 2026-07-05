export default function NotFound() {
    return (
        <>
            <div className="hero-copy">
                <p className="eyebrow">404 error</p>
                <h1 id="page-title">Page Not Found</h1>
                <p>The page you were looking for doesn&apos;t exist.</p>
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
        </>
    );
}
