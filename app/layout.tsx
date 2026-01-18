import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amit Kumar Singh — Full Stack Developer | React & Next.js Specialist",
  description: "Software Developer with 3+ years of experience building scalable web applications. Specialized in React, Next.js, TypeScript, Node.js, and Firebase. Available for freelance and full-time opportunities.",
  keywords: ["Software Developer", "React Developer", "Full Stack Developer", "Next.js Developer", "TypeScript Developer", "Node.js Developer", "Frontend Developer", "Web Developer"],
  openGraph: {
    title: "Amit Kumar Singh — Full Stack Developer",
    description: "Software Developer with 3+ years of experience building scalable web applications with React, Next.js, and Node.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
