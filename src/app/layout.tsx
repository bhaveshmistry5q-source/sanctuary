import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./CustomCursor";

export const metadata: Metadata = {
  title: "Sanctuary // For Vaiduu",
  description: "A piece of forever, carved out of time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" className="cursor-none">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}