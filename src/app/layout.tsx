import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/providers";
import LandingPageNavBar from "./components/LandingPageNavBar";
import FooterSection from "./components/FooterSection";

export const metadata: Metadata = {
  title: "Resume Tailor",
  description:
    "Resume Tailor is a free AI-powered resume builder that helps you create a professional resume in minutes. Simply upload your existing resume or provide your work experience, and our AI will generate a polished resume tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <LandingPageNavBar />
          {children}
          <FooterSection />
        </body>
      </Providers>
    </html>
  );
}
