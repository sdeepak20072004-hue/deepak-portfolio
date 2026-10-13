import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak Saini | Full-Stack Development & AI Projects",
  description:
    "Portfolio of Deepak Saini, a B.Voc IT student building practical web applications, exploring AI and computer vision, and learning cloud computing through hands-on projects.",
  applicationName: "Deepak Saini Portfolio",
  openGraph: {
    title: "Deepak Saini | Developer Portfolio",
    description: "Practical web projects, AI prototypes, and learning labs—documented with honest status and evidence.",
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
