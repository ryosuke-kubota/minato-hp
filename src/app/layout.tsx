import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import nextConfig from "../../next.config.js";

const BASE_PATH = nextConfig.basePath || "";

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
  metadataBase: new URL('https://ryosuke-kubota.github.io/minato-hp/'),
  openGraph: {
    title: "株式会社ミナト | 地域の文化と発展を",
    description: "沖縄県那覇市を拠点とする株式会社ミナト。不動産売買・管理、ホテル売買・管理、資産管理を通じて地域の文化と発展に貢献いたします。",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: `${BASE_PATH}/images/ogp.png`, // Replace with the actual path to your image
        width: 1200, // Optional: specify the width of the image
        height: 630, // Optional: specify the height of the image
        alt: "株式会社ミナト", // Optional: provide an alt text for the image
      },
    ]
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
