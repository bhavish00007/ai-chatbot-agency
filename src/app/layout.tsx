import type { Metadata } from "next";
// @ts-ignore: Cannot find module or type declarations for side-effect import of './globals.css'.
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Chatbot Agency",
  description: "Transform Your Customer Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body>{children}</body>
    </html>
  );
}
