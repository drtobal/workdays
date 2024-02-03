import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workdays | Cristóbal Díaz Álvarez",
  description: "Workdays | Cristóbal Díaz Álvarez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
