import type { Metadata } from "next";
import { Josefin_Sans, Outfit } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700", "800"], // Using Outfit Bold/ExtraBold as fallback for Avant Garde
});

export const metadata: Metadata = {
  title: "MetalVale | SaaS Dashboard",
  description: "Painel de gestão e e-commerce MetalVale - Força e Confiabilidade Industrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${josefin.variable} ${outfit.variable} antialiased font-josefin`}
      >
        {children}
      </body>
    </html>
  );
}

