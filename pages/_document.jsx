import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      className="scroll-smooth"
      prefix="https://ogp.me/ns/website#"
      lang="en"
    >
      <Head>
        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Explore ham radio with Ram, an enthusiast embracing technology since 1988. Discover insights, experiences, and projects."
        />
        <meta
          name="google-site-verification"
          content="9Ea5q_QyyDIDJlHRpDoi2buGhg-nAPOmID2U73VgMK0"
        />
        <meta
          name="keywords"
          content="ram,ham,radio,VU2RCY,satellite,HF,VHF,UHF,MMDVM,APRS,RMS,homebrew,equipment,shack,qrz,qth,qsl,cq,qrzcq,logbook,antenna"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="M.G.Ramachandran(VU2RCY)" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vu2rcy.com" />
        <meta
          property="og:title"
          content="VU2RCY - Ram: Ham Radio Enthusiast"
        />
        <meta
          property="og:description"
          content="Explore ham radio with Ram, an enthusiast embracing technology since 1988. Discover insights, experiences, and projects."
        />
        <meta property="og:image" content="https://vu2rcy.com/Banner.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vu2rcy.com" />
        <meta
          property="twitter:title"
          content="VU2RCY - Ram: Ham Radio Enthusiast"
        />
        <meta
          property="twitter:description"
          content="Explore ham radio with Ram, an enthusiast embracing technology since 1988. Discover insights, experiences, and projects."
        />
        <meta
          property="twitter:image"
          content="https://vu2rcy.com/Banner.png"
        />
        {/* WhatsApp */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="VU2RCY - Ram: Ham Radio Enthusiast"
        />
        <meta
          property="og:description"
          content="Explore ham radio with Ram, an enthusiast embracing technology since 1988. Discover insights, experiences, and projects."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://vu2rcy.com/Banner.png"
        />
        {/* Canonical links */}
        <link rel="canonical" href="https://vu2rcy.com" />

        <link
          rel="search"
          href="/opensearch.xml"
          type="application/opensearchdescription+xml"
          title="VU2RCY - Ram: Ham Radio Enthusiast"
        />
        {/*  */}
        <link rel="icon" type="image/x-icon" href="./logo_16x16.png"></link>
        <link rel="icon" sizes="16x16" href="./logo_16x16.png" />
        <link rel="icon" sizes="32x32" href="./logo_32x32.png" />
        <link rel="icon" sizes="96x96" href="./logo_96x96.png" />
        <link rel="icon" sizes="192x192" href="./logo_192x192.png" />
        {/*  */}
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="back font-out mx-auto bg-[#ffffffb7] dark:bg-[#242424] overflow-x-hidden lg:transform-gpu ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
