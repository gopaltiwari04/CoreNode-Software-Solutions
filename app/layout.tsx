import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreNode Software Solutions | Premium software, without the premium price",
  description: "CoreNode builds websites, applications, automation and AI-powered software with modern engineering and lean teams.",
  openGraph: { title: "CoreNode Software Solutions", description: "Software that moves your business forward.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
