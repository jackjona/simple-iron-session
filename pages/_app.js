import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Simple iron-session</title>
        <meta
          name="description"
          content="A simple iron-session implementation in Next.js."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
