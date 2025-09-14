import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MegaHouse Invest - Строительная компания",
  description: "Профессиональное строительство домов и коммерческих объектов. Многолетний опыт, качественные материалы, современные технологии.",
  keywords: "строительство домов, строительная компания, коттеджи, коммерческое строительство, MegaHouse Invest",
  openGraph: {
    title: "MegaHouse Invest - Строительная компания",
    description: "Профессиональное строительство домов и коммерческих объектов",
    type: "website",
    locale: "ru_RU",
  },
  verification: {
    google: 'qQ9UQJvK8uULQxs8jTicz4SbeNFRQkJCmvEkFphnpFs',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
