import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moaz Ammar | Full Stack Dev. and Cyber-security Eng. Student Portfolio",
  description: "Portfolio of Moaz Ammar, a Cyber-security student and Full Stack Developer building exceptional web experiences.",
  verification: {
    google: "j4Pwsc_scIygJwPyAAt3CJKBSG6iUyYFy3lVDV2Oph8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className={`${inter.className} text-charcoal selection:bg-primary selection:text-white antialiased`}>
        <LoadingScreen minLoadTime={3500}>
          <SmoothScroll>{children}</SmoothScroll>
        </LoadingScreen>
      </body>
    </html>
  );
}
