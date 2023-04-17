import React from "react";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
const HelpSection = () => {
  let helpserv = [
    {
      service:
        "We provide intern over Tamilnadu in various reputed Clinics, HR, Counselling, Deaddiction and Industrial sectors.lp",
    },
    { service: "We take NET classes with the faculties with JRF and SRF qualification" },
    { service: "Flexible, on-demand access to care services" },
    {
      service:
        "Supports referrals to provider networks and care management programs",
    },
  ];


  return (
    <div className=" ">
      <div
        className={` text-center flex flex-col items-center justify-center dark-bg`}
        style={{ opacity: 0.85 }}
      >
        <div className="text-[26px] xl:text-[42px] 2xl:text-[45px] p-8 text-white lora-bold">
          Learn better health outcomes, improve costs and increase productivity
          for your business
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 container mx-auto px-4 sm:px-8 md:px-18 lg:px-20 py-20 pt-32 2xl:px-30 ">
        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="text-[#2290BA] text-md md:text-xl lg:text-2xl">How Can We Help</div>
          <div className="text-2xl md:text-3xl lg:text-4xl text-[#2290BA] pt-2">
            Flexible & Responsive to Changing Need
          </div>
          <div className="text-[#2290BA] pt-2">
          We provide Certification course through various experts of the field
          </div>
          {helpserv.map((prop) => {
            return (
              <div className="flex flex-col   w-5/8 " key={prop.service}>
                <div className="flex items-center ">
                  <div className="rounded-full  text-[#499AFA] ">
                    <CheckCircleRoundedIcon color="inherit" />
                  </div>
                  <div className="text-[#2290BA] pl-2 mt-1">{prop.service}</div>
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
