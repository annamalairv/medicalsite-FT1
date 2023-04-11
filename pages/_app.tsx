import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect} from "react";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url:any) => {
  //    window.scrollTo(0,0);
  //   }

  //   router.events.on('routeChangeStart', handleRouteChange)

  //   // If the component is unmounted, unsubscribe
  //   // from the event with the `off` method:
  //   return () => {
  //     router.events.off('routeChangeStart', handleRouteChange)
  //   }
  // }, [])

  useEffect(() => {
      let options = {
        root: null,
        threshold: 0,
        rootMargin: "200px 0px -50px 0px",
      };
      let animatedComponent =
        document.querySelectorAll(".slideLeft, .slideRight, .zoomIn,.zoomOut, .fadeIn")
      console.log(animatedComponent,"animatedComponent");
      
      let animatedComponentObserver = new IntersectionObserver(animate, options);
      animatedComponent?.forEach((component: any) => {
        if(component && typeof component != "number")
        animatedComponentObserver?.observe(component);
      });
  }, [router]);

  function animate(entries: any) {
    entries.forEach((element: any) => {
      element.target.classList.toggle("animate", element.isIntersecting);
    });
  }
  return (
    <div className="">
      <Header />
        <Component {...pageProps} className="" />
      <Footer  />
    </div>
  );
}
