import React from "react";
import Head from "next/head";
import { SITE } from "../data/portfolio";
import CustomCursor from "./ui/CustomCursor";
import Loader from "./ui/Loader";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{SITE.name} — {SITE.title}</title>
        <meta name="description" content={SITE.subtitle} />
        <meta name="theme-color" content="#0b0f17" />
      </Head>
      <div className="min-h-screen text-gray-100 selection:bg-electric selection:text-black">
        <CustomCursor />
        <Loader />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
