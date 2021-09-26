import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "object") {
    AOS.init();
  }

  return (
    <>
      <NextSeo
        title="Avneesh Agarwal"
        description="This is Avneesh's portfolio"
        canonical="https://www.avneesh.tech/"
        openGraph={{
          url: "https://www.avneesh.tech/",
          title: "Avneesh Agarwal",
          description: "Portfolio of Avneesh Agarwal",
          images: [
            {
              url: "/seo-image.png",
              width: 800,
              height: 420,
              alt: "Avneesh",
            },
          ],
          site_name: "Avneesh",
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
