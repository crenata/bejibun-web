import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Bejibun - A typescript framework using Bun runtime",
    description: "A typescript framework using Bun runtime",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    }
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning={true}
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0F] text-white`}
            >
                {children}
            </body>
        </html>
    );
};