import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Under Construction | Rian Mabait",
    description:
        "I am building a sharper home for my work, notes, and experiments.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function UnderConstructionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
