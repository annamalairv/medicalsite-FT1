import Breadcrumbs, { BreadCrumbsProps } from "@/components/common/breadcrumbs";
import { useState } from "react";

export default function DoctorsPage() {
  const [breadCrumbsProps, setBreadCrumbsProps] = useState<BreadCrumbsProps>(
    new BreadCrumbsProps({
      backgroundColor: "#2e279d",
      backgroundImage: "assets/images/breadcrum-background.jpg",
      title: "Courses we offer",
      textColor: "white",
      previous: { name: "Home", route: "/home" },
    })
  );

  function Course({ course, index }: { course: any; index: number }) {
    return (
      <div className={`h-screen bg-${course.background}`}>
        <div
          className={`container mx-auto h-full items-center px-4 md:px-6 lg:px-10 xl:px-20 gap-4 md:gap-6 lg:gap-10 flex ${
            index % 2 == 0 ? " text-white flex-row" : " flex-row-reverse "
          }`}
        >
          <div className="flex-1 flex flex-col gap-4 slideRight">
            <div className="text-[46px] xl:text-[62px] 2xl:text-[75px] py-4 lora-bold">
              {course.name}
            </div>
            <div className="text-lg md:text-xl lg:text-2xl lora-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              sit illo excepturi veritatis accusantium, quisquam error dolores
              tempore cum consequatur earum officia mollitia ea aliquam maiores,
              voluptates at consectetur dignissimos!
            </div>
          </div>
          <img src={course.url} alt="" className="w-[40%] slideLeft" />
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <Breadcrumbs {...breadCrumbsProps} />
      {[
        {
          name: "Course 1",
          background: "primary",
          url: "/assets/images/course_1.jpg",
        },
        {
          name: "Course 1",
          background: "white",
          url: "/assets/images/course_2.jpg",
        },
        {
          name: "Course 1",
          background: "primary",
          url: "/assets/images/course_1.jpg",
        },
      ].map((course, index) => {
        return <Course course={course} index={index} />;
      })}
    </div>
  );
}
