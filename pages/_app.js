import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Simple iron-session</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
