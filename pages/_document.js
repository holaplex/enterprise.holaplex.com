import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-MRLWZN25EP" />
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-PZJC5WH');`,
            }}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-MRLWZN25EP');`,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body className="bg-black">
          <Main />
          <NextScript />

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PZJC5WH"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        </body>
      </Html>
    );
  }
}
