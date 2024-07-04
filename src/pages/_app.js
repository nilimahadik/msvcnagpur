import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/vendors/halpes-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/animate/animate.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";

// extra css
import "@/styles/globals.css";
import "@/styles/halpes.css";
import "@/styles/halpes-responsive.css";
// import 'antd/dist/antd.css';



const MyApp = ({ Component, pageProps }) => {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};

export default MyApp;
