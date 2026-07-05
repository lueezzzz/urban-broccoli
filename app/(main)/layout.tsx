export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="min-h-scree">
                <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>
            </div>
        </>
    );
}
