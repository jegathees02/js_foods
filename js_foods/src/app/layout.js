import { Kreon } from "next/font/google";
import "./globals.css";

const kreon = Kreon({ subsets: ["latin"] });

export const metadata = {
  title: "Js foods",
  description: "Food Ordering Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kreon.className}>{children}</body>
    </html>
  );
}
