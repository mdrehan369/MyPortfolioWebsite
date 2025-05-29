import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"
import "./globals.css";
import { Header } from "@/components/Header";

const jetBrains_Mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap"
})

export const metadata: Metadata = {
  title: "MD Rehan - Full Stack Software Engineer",
  description: "Portfolio for MD Rehan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains_Mono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
