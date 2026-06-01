import type { Metadata } from "next";
import "./globals.css";

// 굳쎈정형외과내과의원 메타 데이터 정의 (SEO 최적화)
export const metadata: Metadata = {
  title: "굳쎈정형외과내과의원 - 든든하고 정확한 협진 진료",
  description: "정형외과 전문의 2인, 내과 전문의 1인 협진 시스템. 척추관절 비수술 통증치료 및 위·대장내시경, 5대 암검진, 공단검진 전문 굳쎈정형외과내과입니다.",
  keywords: ["굳쎈정형외과내과", "정형외과", "내과", "도수치료", "체외충격파", "위내시경", "대장내시경", "5대암검진"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* 구글 웹폰트 및 아이콘 CDN 링크 로드 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Outfit:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
