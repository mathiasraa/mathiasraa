import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Source_Serif_4 } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathias Skogen Raa",
  description: "Personal website of Mathias Skogen Raa",
  authors: [{ name: "Mathias Skogen Raa" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
