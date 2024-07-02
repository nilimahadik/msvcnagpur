import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/vendors/halpes-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/animate/animate.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";
import { appWithTranslation } from 'next-i18next';

// extra css
import "@/styles/globals.css";
import "@/styles/halpes.css";
import "@/styles/halpes-responsive.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default appWithTranslation(MyApp);

// import React from 'react';
// import { appWithTranslation } from 'next-i18next';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default appWithTranslation(MyApp);
