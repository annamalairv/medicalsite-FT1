import React from "react";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
const HelpSection = () => {
  let helpserv = [
    {
      service:
        "25-30% estimated savings in implementation when using Mobile Health Clinics",
    },
    { service: "Activate Mobile Health Clinics in just weeks" },
    { service: "Flexible, on-demand access to care services" },
    {
      service:
        "Supports referrals to provider networks and care management programs",
    },
  ];

  return (
    <div className=" ">
      <div
        className={` z-1 inset-0 text-center flex flex-col items-center justify-center bg-[#499AFA]`}
        style={{ opacity: 0.85 }}
      >
        <div className="text-[26px] xl:text-[42px] 2xl:text-[45px] p-8 text-white">
          Learn better health outcomes, improve costs and increase productivity
          for your business
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 container mx-auto px-20 md:px-18 lg:px-20 py-20 pt-32 2xl:px-30 ">
        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="text-tertiary">How Can We Help</div>
          <div className="text-2xl md:text-3xl lg:text-4xl text-black pt-2">
            Flexible & Responsive to Changing Need
          </div>
          <div className="text-secondary pt-2">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperieaqueys epsa quae
            abillo inventore veritatis et quase
          </div>
          {helpserv.map((prop) => {
            return (
              <div className="flex flex-col   w-3/5 " key={prop.service}>
                <div className="flex items-center ">
                  <div className="rounded-full  text-[#499AFA] ">
                    <CheckCircleRoundedIcon color="inherit" />
                  </div>
                  <div className="text-primary pl-2 mt-1">{prop.service}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" flex items-center justify-center mx-auto h-full">
          <div className="flex items-center">
            <img
              src="assets/images/help-section-img.jpg"
              alt=""
              className="object-cover 2xl:object-fill"
              style={{ width: `500px` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
