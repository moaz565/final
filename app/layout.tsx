import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio - Variant A",
  description: "Senior Full Stack Developer specializing in building exceptional digital experiences.",
  verification: {
    google: "google9bec847518c37f2d",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-charcoal selection:bg-primary selection:text-white antialiased`}>
        <LoadingScreen minLoadTime={3500}>
          <SmoothScroll>{children}</SmoothScroll>
        </LoadingScreen>
      </body>
    </html>
  );
}
