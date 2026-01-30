import type { Metadata } from "next";
import "./globals.css";
import { CartProviderWrapper } from "@/components/CartProviderWrapper";

export const metadata: Metadata = {
  title: "BookNook Kits - DIY Craft Kits for Book Lovers",
  description: "Transform your bookshelf into a world of wonder with our handcrafted DIY book nook kits. Perfect for hobbyists and crafters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProviderWrapper>
          {children}
        </CartProviderWrapper>
      </body>
    </html>
  );
}
