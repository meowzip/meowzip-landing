import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://landing.meowzip.com'),
  title: "냥.zip - 스마트한 길고양이 돌봄 일지",
  description: "길고양이 케어테이커를 위한 스마트한 돌봄 일지 앱, 냥.zip. 길냥이 프로필 관리, 돌봄 일지 작성, 공동 냥육, 커뮤니티 기능을 경험해보세요.",
  keywords: ["길고양이", "고양이 돌봄", "돌봄 일지", "캣맘", "캣대디", "냥집사", "유기묘", "동물보호", "냥스타그램", "meowzip"],
  openGraph: {
    title: "냥.zip - 스마트한 길고양이 돌봄 일지",
    description: "길고양이 케어테이커를 위한 스마트한 돌봄 일지 앱, 냥.zip. 길냥이 프로필 관리, 돌봄 일지 작성, 공동 냥육, 커뮤니티 기능을 경험해보세요.",
    url: 'https://landing.meowzip.com',
    siteName: "냥.zip",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "냥.zip - 스마트한 길고양이 돌봄 일지",
    description: "길고양이 케어테이커를 위한 스마트한 돌봄 일지 앱, 냥.zip. 길냥이 프로필 관리, 돌봄 일지 작성, 공동 냥육, 커뮤니티 기능을 경험해보세요.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
