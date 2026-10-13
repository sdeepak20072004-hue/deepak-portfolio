import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak Saini | Full-Stack Developer & AI Engineer",
  description:
    "The portfolio of Deepak Saini, a B.Voc IT student exploring full-stack development, AI engineering, and the DIS AI project.",
  applicationName: "Deepak Saini Portfolio",
  openGraph: {
    title: "Deepak Saini | Developer Portfolio",
    description: "Building software, exploring intelligent systems, and learning by creating.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
