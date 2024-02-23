import { Inter,Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ['500'],
})

export const metadata = {
  title: "Amazon Sign-in",
  description: "Amazon Sign In page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
    </html>
  );
}
