import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Rent a car!",
    description: "Rent a car Romania!",
};
const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased md:mx-[500px] mx-[10px]", fontSans.variable)}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
