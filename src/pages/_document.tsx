import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        

        {/* Favicon */}
        <link rel="icon" href="/home/logo.jpg" type="BeaverHealthAI" className="w-32 h-28" />
        <title>BeaverHealthAI</title>

         
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
