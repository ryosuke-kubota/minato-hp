import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株式会社ミナト | 地域の文化と発展を",
  description: "沖縄県那覇市を拠点とする株式会社ミナト。不動産売買・管理、ホテル売買・管理、資産管理を通じて地域の文化と発展に貢献いたします。",
  keywords: "株式会社ミナト, 沖縄, 那覇, 不動産, ホテル, 資産管理, 売買, 管理",
  authors: [{ name: "株式会社ミナト" }],
  openGraph: {
    title: "株式会社ミナト | 地域の文化と発展を",
    description: "沖縄県那覇市を拠点とする株式会社ミナト。不動産売買・管理、ホテル売買・管理、資産管理を通じて地域の文化と発展に貢献いたします。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geist.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
