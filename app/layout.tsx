import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CoreNode Software Solutions | Premium software, without the premium price",
  description: "CoreNode builds websites, applications, automation and AI-powered software with modern engineering and lean teams.",
  openGraph: { title: "CoreNode Software Solutions", description: "Software that moves your business forward.", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
