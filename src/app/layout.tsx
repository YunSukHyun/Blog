import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nanum_Gothic, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import PostPage from "./post/page";

const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({ subsets: ["latin"], variable: "--font-open" });
const gothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-gothic",
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Sell cool products",
  icons: {},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <PostPage />
        <Footer />
      </body>
    </html>
  );
}
