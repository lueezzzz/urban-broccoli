import Footer from "@/components/sections/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen">
        <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>
        <Footer />
      </div>
    </>
  );
}
