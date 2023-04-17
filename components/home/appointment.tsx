import Image from "next/image";
import myLoader from "@/utils/common_utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { Card } from "@mui/material"
interface AppointmentProps {}
const Appointment: React.FC<AppointmentProps> = () => {
  const [windowStatus, setwindow] = useState(false);
  const [patternwidth, setPatternWidth] = useState(0);
  const [patternHeight, setPatternHeight] = useState(0);
  useEffect(() => {
    setwindow(true);
    setPatternWidth(window.innerWidth / 2.5);
    setPatternHeight(window.innerHeight - 84);
    window.addEventListener("resize", () => {
      setPatternWidth(window.innerWidth / 2.5);
      setPatternHeight(window.innerHeight - 84);
    });
    return window.removeEventListener("resize", () => {});
  }, []);
  return (
    <div className="">
      <div
        className={`hidden xl:px-20 xl:pt-14 md:flex items-center justify-center relative`}
        style={{ height: `${patternHeight}px` }}
      >
        <div className=" h-full w-full md:w-5/12 2xl:w-[40%] flex flex-col items-center justify-center">
          <div className="ml-20 flex flex-col items-start justify-center appointment-hero-text">
            <div className="lora-semibold leading-tight text-[#2290BA] text-[60px] lg:text-[72px] xl:text-[85px] slideRight">
              <div className="hidden md:block">
              Open Up<br/> To New Possibilities
              </div>
             
            </div>
            <div className="lora-regular md:text-lg lg:text-xl 2xl:text-2xl pt-4 md:pt-8 text-[#2290BA] text-justify">
              Dolor sit amet consectetur adipiscing elitsedes eiusmod tempor
              incididunt utlabore Lorem
            </div>
            <div className="lora-semibold mt-10">
              <div className="p-2 px-8 xl:p-4 xl:px-12 rounded-full bg-gradient-to-r from-[#14C3D9] to-[#3CC5C4] cursor-pointer text-center  lg:text-xl xl:text-2xl 2xl:text-3xl text-white">
                Make an Appointment +
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center mx-auto h-full ">
          <div
            className="md:flex items-center hidden fadeIn"
            style={{
              height: `${patternHeight / 1.8}px`,
              width: `${patternwidth * 1.1}px`,
            }}
          >
            <img
              src="assets/images/appointment.jpg"
              alt=""
              className="object-cover 2xl:object-fill"
              style={{ width: `${patternwidth * 1.1}px` }}
            />
          </div>
          <div
            className="absolute inset-y-0 right-0 hidden md:block"
            style={{
              zIndex: -1,
              height: `${patternHeight}px`,
              width: `${patternwidth}px`,
            }}
          >
            {windowStatus && (
              <Image
                loader={myLoader}
                fill={true}
                alt={"logo"}
                src={"assets/images/home-page-pattern.jpg"}
              />
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className=" xxs:w-full xs:w-3/4 flex flex-col items-center justify-center pt-20">
          <div className="xxs:mx-8 xxs:ml-12 xs:ml-20 flex flex-col items-start justify-center appointment-hero-text">
            <div className="lora-bold leading-tight text-secondary text-[60px] lg:text-[72px] xl:text-[85px] ">
            Open Up<br/> To New Possibilities
            </div>
            <div className="lora-regular md:text-lg lg:text-xl 2xl:text-2xl pt-4 md:pt-8 text-primary text-justify">
              Dolor sit amet consectetur adipiscing elitsedes eiusmod tempor
              incididunt utlabore Lorem
            </div>
            <div className="lora-semibold my-10">
              <div className="p-2 px-8 xl:p-4 xl:px-12 rounded-full bg-[#14C3D9] text-center  lg:text-xl xl:text-2xl 2xl:text-3xl text-white">
                Make an Appointment +
              </div>
            </div>
          </div>
        </div>
        <div className=" relative">
          <img
            src="assets/images/home-page-pattern.jpg"
            alt=""
            className="w-full"
          />
          <img
            src="assets/images/appointment.jpg"
            alt=""
            className="absolute inset-y-10 inset-x-6 w-3/4 h-3/4 absolute-center"
          />
        </div>
      </div>
    </div>
  );
};
export default Appointment;
