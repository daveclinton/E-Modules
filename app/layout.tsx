import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { FloatingContact } from "@/components/floating-contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://edesignmodules.co.ke"),
  title: {
    default: "E‑Design Modules",
    template: "%s | E‑Design Modules",
  },
  description:
    "E‑Design Modules is a multidisciplinary construction and design company based in Kenya, providing integrated architectural, quantity surveying, and construction services. Trusted for accuracy, compliance, and reliable project delivery since 2010.",
  applicationName: "E‑Design Modules",
  authors: [{ name: "E‑Design Modules", url: "https://edesignmodules.co.ke" }],
  generator: "Next.js 15 + Shadcn UI",
  keywords: [
    "E‑Design Modules",
    "construction Kenya",
    "architectural design Nakuru",
    "quantity surveying Kenya",
    "building contractor Nairobi",
    "project management Kenya",
  ],
  creator: "E‑Design Modules",
  publisher: "E‑Design Modules",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://edesignmodules.co.ke",
  },
  openGraph: {
    type: "website",
    url: "https://edesignmodules.co.ke",
    title: "E‑Design Modules",
    description:
      "A multidisciplinary design and construction company offering architectural design, quantity surveying, and building solutions across Kenya.",
    siteName: "E‑Design Modules",
    locale: "en_KE",
    images: [
      {
        url: "https://edesignmodules.co.ke/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "E‑Design Modules | Designing with Purpose. Building to Standard.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E‑Design Modules",
    description:
      "Designing with Purpose. Building to Standard. Kenya’s trusted partner in integrated architectural design and construction.",
    images: ["https://edesignmodules.co.ke/og-image.jpg"],
    creator: "@edesignmodules",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  formatDetection: { telephone: false },
  verification: {
    google: "",
    other: { "msvalidate.01": "" },
  },
  category: "Construction & Design",
  classification: "Architecture & Construction Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}