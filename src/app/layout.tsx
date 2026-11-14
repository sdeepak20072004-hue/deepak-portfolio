import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepak Saini | Full-Stack Developer & AI Project Portfolio",
  description:
    "Explore Deepak Saini's practical software projects, AI and computer-vision prototypes, tool stacks, engineering workflows, and evidence-led project case studies.",
  applicationName: "Deepak Saini Portfolio",
  openGraph: {
    title: "Deepak Saini | Developer Portfolio",
    description:
      "Full-stack development, AI experiments, computer-vision prototypes, and detailed engineering case studies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Saini | Developer Portfolio",
    description:
      "Practical projects, technology stacks, and engineering workflows—documented with honest status and evidence.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080d",
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
