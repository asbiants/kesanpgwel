import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "PG-Weelll",
    template: "%s | PGWEB L"
  },
  description: "Kesan dan pesan dari para asisten PGWEB L untuk para peserta yang telah menyelesaikan 12 acara.",
  keywords: ["PGWEB L", "Kesan Pesan", "Acara 12", "Asisten PGWEB"],
  authors: [{ name: "Asbi, Alip, Diva, Della" }],
  openGraph: {
    title: "Kesan Pesan PGWEB L - Acara 12",
    description: "Kesan dan pesan dari para asisten PGWEB L untuk para peserta yang telah menyelesaikan 12 acara.",
    type: "website",
    images: [
      {
        url: "/astronaut.png",
        width: 150,
        height: 150,
        alt: "Astronot PGWEB L",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesan Pesan PGWEB L - Acara 12",
    description: "Kesan dan pesan dari para asisten PGWEB L untuk para peserta yang telah menyelesaikan 12 acara.",
    images: ["/astronaut.png"],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
