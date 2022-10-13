import splitbee from "@splitbee/web";
import { useEffect } from "react";
import "../styles/fonts.scss";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init({
      token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN,
      // scriptUrl: "/bee.js", // disabled until I figure out redirects
      // apiUrl: "/_hive",
    });
  }, []);

  return <Component {...pageProps} />;
}
