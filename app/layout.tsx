import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreNode Software Solutions | Custom Websites, SaaS & Business Tools",
  description:
    "CoreNode Software Solutions builds customized business websites, ₹99 starter landing pages, cafe ordering systems, and tailored digital tools for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}