import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import CursorOrbit from "@/components/ui/CursorOrbit";
import { SITE } from "@/config/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = { title: SITE.title, description: SITE.description };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-canvas font-sans text-neutral-950 antialiased">
        <Navbar />
        <CursorOrbit />
        {children}
      </body>
    </html>
  );
}

