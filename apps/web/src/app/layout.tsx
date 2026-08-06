import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { site } from "@sabores/config";
import SvgDefs from "@/components/SvgDefs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Fx from "@/components/Fx";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: {
    default: site.seo.title,
    template: `%s · ${site.businessName}`,
  },
  description: site.seo.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <SvgDefs />
        <Header />
        <main>{children}</main>
        <Footer />
        <Fx />
      </body>
    </html>
  );
}
