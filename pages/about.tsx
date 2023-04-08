import AboutMainScreen from "@/components/about/about_main_screen";
import Breadcrumbs, { BreadCrumbsProps } from "@/components/common/breadcrumbs";
import WhyChooseUs from "@/components/contact/why_choose_us";
import { useState } from "react";

export default function AboutPage() {
  const [breadCrumbsProps, setBreadCrumbsProps] = useState<BreadCrumbsProps>(
    new BreadCrumbsProps({
      backgroundColor: "#2e279d",
      backgroundImage: "assets/images/breadcrum-background.jpg",
      title: "About Us",
      textColor: "white",
      previous: { name: "Home", route: "/home" },
    })
  );
  return (
    <div className="">
      <Breadcrumbs {...breadCrumbsProps} />
      <AboutMainScreen/>
      <WhyChooseUs/>
    </div>
  );
}
