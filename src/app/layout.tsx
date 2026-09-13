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
  title: "JAJulveLabs | Johnjulve - Systems & Full-Stack Engineering",
  description:
    "Personal engineering portfolio of Johnjulve showcasing high-performance architectures, automated testing harnesses, and resilient full-stack systems.",
  authors: [{ name: "Johnjulve", url: "https://github.com/Johnjulve" }],
  keywords: [
    "Johnjulve",
    "JAJulveLabs",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js 15",
    "TypeScript",
    "UniversalTester",
    "E_Botar",
    "Clean Architecture",
  ],
  openGraph: {
    title: "JAJulveLabs | Johnjulve - Systems & Full-Stack Engineering",
    description:
      "Personal engineering portfolio of Johnjulve showcasing high-performance architectures, automated testing harnesses, and resilient full-stack systems.",
    type: "website",
    siteName: "JAJulveLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAJulveLabs | Johnjulve - Systems & Full-Stack Engineering",
    description:
      "Personal engineering portfolio of Johnjulve showcasing high-performance architectures, automated testing harnesses, and resilient full-stack systems.",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth scroll-pt-24`}
    >
      <body className="min-h-screen flex flex-col bg-[#02070c] text-slate-100">{children}</body>
    </html>
  );
}
