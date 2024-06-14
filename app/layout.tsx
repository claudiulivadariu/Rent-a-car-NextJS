import type { Metadata } from "next";
import { Inter, Lusitana } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/navigation/navbar";

const inter = Inter({ subsets: ["latin"] });
const lusitana = Lusitana({ subsets: ["latin"], weight: ["400", "700"] });

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
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased md:mx-[200px] mx-[10px]",
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
