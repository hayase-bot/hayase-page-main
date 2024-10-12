// app/layout.tsx
import type { Metadata } from "next";
import { Providers } from './providers';
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../../public/assets/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hayasebot.app'),
  title: "Hayase",
  description: "Hayase - 디스코드 게임서버 현황 봇: 게임서버의 상태를 디스코드 채널에 실시간으로 갱신합니다.",
  openGraph: {
    url: 'https://hayasebot.app',
    type: 'website',
    siteName: 'Hayase',
    title: 'Hayase - 실시간 게임서버 현황 디스코드 봇',
    description: '게임서버의 상태를 디스코드 채널에 실시간으로 갱신합니다.',
    images: '/assets/images/static/og.webp'
  },
  twitter: {
    site: '@discord_hayase',
    creator: '@discord_hayase',
    title: 'Hayase - 실시간 게임서버 현황 디스코드 봇',
    description: '게임서버의 상태를 디스코드 채널에 실시간으로 갱신합니다.',
    card: 'summary_large_image',
    images: '/assets/images/static/og.webp',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='ko'>
      <body className={pretendard.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}