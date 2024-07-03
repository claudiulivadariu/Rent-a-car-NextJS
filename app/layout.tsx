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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-[#fcfcfc] font-sans antialiased md:px-[200px] px-[10px]",
                    inter.className
                )}
            >
                <div className="md:mx-[150px] mt-2">
                    <Nav />
                </div>
                {children}
            </body>
        </html>
    );
}
