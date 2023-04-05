import AboutMainScreen from "@/components/about/about_main_screen";
import Breadcrumbs, { BreadCrumbsProps } from "@/components/common/breadcrumbs";
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
    </div>
  );
}
