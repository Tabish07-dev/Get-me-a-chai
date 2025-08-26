import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/sessionwrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a chai - fund your projects with chai",
  description: "This website is a crowdfunding platform for chai lovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
 <Navbar />
<div className="min-h-[87vh]  bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"> {children}  </div>
        <Footer />
        </SessionWrapper>
       
     
      </body>
    </html>
  );
}