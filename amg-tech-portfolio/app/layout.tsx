import type { Metadata } from "next";
import { Manrope, Fira_Code } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amg-tech.vercel.app"),

  title: {
    default: "Muhammed Adamu Girei | Web Developer",
    template: "%s | amg-tech",
  },

  description:
    "Portfolio of Muhammed Adamu Girei — a Nigerian web developer building responsive, modern and user-focused digital experiences.",

  keywords: [
    "Muhammed Adamu Girei",
    "amg-tech",
    "web developer",
    "frontend developer",
    "Next.js developer",
    "React developer",
    "Nigeria",
  ],

  authors: [
    {
      name: "Muhammed Adamu Girei",
    },
  ],

  creator: "Muhammed Adamu Girei",

  openGraph: {
    type: "website",
    locale: "en_NG",
    title: "Muhammed Adamu Girei | Web Developer",
    description:
      "I build modern, responsive web experiences with React, Next.js and TypeScript.",
    siteName: "amg-tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammed Adamu Girei — Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammed Adamu Girei | Web Developer",
    description:
      "Web developer building modern digital experiences with React and Next.js.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fira.variable}`}
    >
      <body className="font-sans antialiased">
        <div className="site-grid" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}