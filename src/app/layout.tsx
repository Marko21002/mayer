import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const boeck = localfont({
  src: [
    {
      path: "../../public/font/Boecklins_Universe.ttf",
      weight: "700",
    },
  ],
  variable: "--font-boeck",
});

export const metadata: Metadata = {
  title: "Cafe Mayer",
  description:
    "ndulge in our delicious desserts at Cafe Mayer. A sweet haven for dessert lovers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="cafe mayer, desserts, sweet treats, bakery, coffee shop"
        />
      </head>
      <body className={boeck.variable}>{children}</body>
    </html>
  );
}
