import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carta - O Churrasco do Floro",
  description: "Carta digital de O Churrasco do Floro en Noia, A Coruña.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${cinzel.variable} bg-background text-on-background antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
