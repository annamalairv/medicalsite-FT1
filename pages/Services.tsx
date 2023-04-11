import Breadcrumbs, { BreadCrumbsProps } from "@/components/common/breadcrumbs";
import WorkingHours from "@/components/contact/working_hours";
import Departments from "@/components/service/departments";
import MakeAnAppointmentMini from "@/components/service/make_an_appointment_mini";
import React, { useState } from "react";

const Services = () => {
  const [breadCrumbsProps, setBreadCrumbsProps] = useState<BreadCrumbsProps>(
    new BreadCrumbsProps({
      backgroundColor: "#2e279d",
      backgroundImage: "assets/images/breadcrum-background.jpg",
      title: "Services",
      textColor: "white",
      previous: { name: "Home", route: "/home" },
    })
  );
  return (
    <div className="overflow-x-hidden ">
      <Breadcrumbs {...breadCrumbsProps} />
      <Departments />
      <MakeAnAppointmentMini />
      <div className=" flex flex-col-reverse md:flex-row gap-4 md:gap-10 lg:gap-16 md:py-20 px-4  md:px-6 lg:px-10 xl:px-32 py-4 px-10">
        <div className="w-full md:w-1/2 lg:w-[40%] slideRight">
          <WorkingHours background="bg-tertiary" />
        </div>
        <div className="flex-1 flex items-center md:w-fit pt-6 slideLeft">
          <img
            src="assets/images/testimonial_cover.jpg"
            alt=""
            className="object-cover 2xl:object-fill  "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
