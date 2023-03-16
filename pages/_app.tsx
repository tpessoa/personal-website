import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Navbar />
      <div className="mx-5 my-6 h-screen md:mx-20 md:my-20">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
