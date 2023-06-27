import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Mulish } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/components/Provider/Provider";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ToastContainer
        autoClose={1500}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
        rtl={false}
        theme="dark"
      />
      <body
        className={`bg-ScissorPrimary-100 h-screen w-screen relative min-h-screen font-[Mulish] ${mulish.className}`}
      >
        <Providers>
          <Navbar />
          <div className={`px-[120px] py-6 ${mulish.className}`}>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
