import { Inter,Open_Sans } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const amazonEmber = localFont({
  src: "../../public/assets/AmazonEmber_Rg.ttf",
  display:'swap'
})

export const metadata = {
  title: "Amazon Sign-in",
  description: "Amazon Sign In page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={amazonEmber.className}>{children}</body>
    </html>
  );
}
