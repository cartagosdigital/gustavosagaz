import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gustavosagaz.com"),
  title: {
    default: "Gustavo Sagaz — Case Studies",
    template: "%s · Gustavo Sagaz",
  },
  description:
    "Full-stack performance marketer & marketing/RevOps builder — paid media, automation & AI, and web development case studies.",
  openGraph: {
    type: "website",
    siteName: "Gustavo Sagaz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        <LangProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
