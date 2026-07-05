import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UnderConstructionPage from "./under-construction/page";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rian Luis Mabait",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isUnderConstruction =
        process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION === "true";

    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">
                {isUnderConstruction ? <UnderConstructionPage /> : children}
            </body>
        </html>
    );
}
