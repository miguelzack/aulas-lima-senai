import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Portfolio - Miguel Silva",
  description: "Portfolio de Miguel Silva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
