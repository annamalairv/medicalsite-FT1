import { useState } from "react";

export interface DepartmentProps {}

const Departments: React.FC<DepartmentProps> = () => {
  function Title({ name }: { name: string }) {
    return (
      <div className="flex items-center gap-4 text-white pt-4 pb-2 whitespce-nowrap">
        <div className="flex-1 text-sm md:text-lg lg:text-xl">
          {">"}&nbsp; {name}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-10 lg:gap-16 md:py-20 px-4  md:px-6 lg:px-10 xl:px-32 py-4 px-10 ">
      <div className="w-full md:w-1/2 lg:w-[40%]">
        <div
          className={`bg-tertiary p-8 md:p-12 xl:p-18 rounded-lg shadow h-full`}
        >
          <div className="text-[27px] md:text-[32px] text-white pt-4 pb-2 lora-bold">
            Departments
          </div>
          {[
            "Orthopedic Care",
            "Gynecology Care",
            "Primary Care",
            "Cardiology Care",
            "Cancer Care",
            "Dentistry Care",
          ].map((ele) => {
            return <Title name={ele} />;
          })}
        </div>
      </div>
      <div className="flex-1 flex items-center md:w-fit pt-6">
                        <img src="assets/images/testimonial_cover.jpg" alt="" className="object-cover 2xl:object-fill  "  />
                    </div>
    </div>
  );
};
export default Departments;
