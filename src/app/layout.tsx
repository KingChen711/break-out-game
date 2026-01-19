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
  title: "Break Out Dungeon - 3D Puzzle Game",
  description:
    "A challenging 3D puzzle game where you roll a cube hero through dungeons, collect keys and swords, and escape to freedom. Master the art of cube rolling and rotation!",
  keywords: [
    "puzzle game",
    "3D game",
    "cube rolling",
    "dungeon escape",
    "brain teaser",
    "logic puzzle",
    "web game",
  ],
  authors: [{ name: "King Chen" }],
  creator: "King Chen",
  openGraph: {
    title: "Break Out Dungeon - 3D Puzzle Game",
    description:
      "Roll, rotate, and escape! A challenging 3D cube puzzle game with dungeons, keys, and monsters.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Break Out Dungeon - 3D Puzzle Game",
    description:
      "Roll, rotate, and escape! A challenging 3D cube puzzle game with dungeons, keys, and monsters.",
  },
  icons: {
    icon: "/viking-helmet.png",
    shortcut: "/viking-helmet.png",
    apple: "/viking-helmet.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
