import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/app/ui/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drew T. Johnson Portfolio",
  description: "A full-stack developer with a design and customer service background.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
