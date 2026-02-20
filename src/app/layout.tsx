import type { Metadata } from "next";
import { Rubik, Open_Sans } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider/MainProvider";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Zavisoft’s Frontend Task",
  description: "Zavisoft Frontend Implementation Task - Built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${openSans.variable} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
