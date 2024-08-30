import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const WorkSans = Work_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | FAQ Accordion",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-dark-purple bg-light-pink ${WorkSans.className}`}>{children}</body>
    </html>
  );
}
