import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AnimatePresence>
  );
}
