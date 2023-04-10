import { MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import * as React from 'react';


export interface MakeAnAppointmentProps {}
const MakeAnAppointment: React.FC<MakeAnAppointmentProps> = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    cat: "Service category",
    doc: "Choose Doctor",
    date: new Date(),
  });

  return (
    <div className="flex flex-col-reverse md:flex-row container mx-auto  lg:px-10 xl:px-20 py-10 md:h-[700px]">
      <div className="flex-1 bg-gradient-to-r from-[#3CC5C4] to-[#14C3D9]  px-4 lg:px-8 xl:px-10  text-center md:text-start">
        <div className="text-white text-[24px] md:text-[30px] lg:text-[38px] py-2 pt-8 lora-regular">Make an appointment</div>
        <div className=" text-[28px] md:text-[38px] lg:text-[45px] text-[#0e204d] py-2 lora-bold">
          Make an Appointment to Doctor Visit
        </div>
        <div className="flex flex-col gap-4 leading-1">
          <div className="flex flex-col gap-2">
            <div className="rounded-full overflow-hidden  xl:w-3/4">
              <input
                className="h-12 md:h-16 w-full px-4 md:px-6 lg:px-8 xl:px-10 md:text-lg xl:text-xl"
                placeholder="Your full name "
                onChange={(evt)=>{setUserInfo({...userInfo,name:evt.target.value})}}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full overflow-hidden xl:w-3/4 ">
            <input
                className="h-12 md:h-16 w-full px-4 md:px-6 lg:px-8 xl:px-10 md:text-lg xl:text-xl"
                placeholder="Choose service"
                onChange={(evt)=>{setUserInfo({...userInfo,cat:evt.target.value})}}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            
            <div className="rounded-full overflow-hidden xl:w-3/4 ">
            <input
                className="h-12 md:h-16 w-full px-4 md:px-6 lg:px-8 xl:px-10 md:text-lg xl:text-xl"
                placeholder="Choose Doctor"
                onChange={(evt)=>{setUserInfo({...userInfo,doc:evt.target.value})}}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-4 ">
           
            <div className="rounded-full overflow-hidden  xl:w-3/4">
                <input type="date"
                className="h-12 md:h-16 w-full px-4 md:px-6 lg:px-8 xl:px-10 md:text-lg xl:text-xl"
                placeholder="Choose date "
                onChange={(evt)=>{setUserInfo({...userInfo,name:evt.target.value})}}
                />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full h-72 md:h-full bg-green-200 ">
        <img src="/assets/images/make_appointment.jpg" alt="" className="h-72 object-top md:object-center md:h-full w-full object-cover" />
      </div>
    </div>
  );
};
export default MakeAnAppointment;
