import "@/styles/globals.css";
import type { AppProps } from "next/app";
import local from "next/font/local";

const Std = local({
  src: [
    {
      path: "../public/fonts/CircularStd-Book.otf",
    },
  ],
  variable: "--font-circular",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${Std.variable}`}>
      <Component {...pageProps} />;
    </div>
  );
}
