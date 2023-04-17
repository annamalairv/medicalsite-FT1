import { useState } from "react";

export interface AppointmentProps {}

const MakeAnAppointmentMini: React.FC<AppointmentProps> = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    cat: "Service category",
    doc: "Choose Doctor",
    date: new Date(),
  });

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-10 lg:gap-16 md:py-20 px-4  md:px-6 lg:px-10 xl:px-32 py-4 px-10 ">
      <div className="w-full md:w-1/2 lg:w-[40%]">
        <div className="w-full bg-primary rounded-lg px-4 lg:px-8 xl:px-10  text-center md:text-start slideRight">
          <div className=" text-[28px] md:text-[38px] pt-8 lg:text-[45px] py-2 lora-bold text-white">
            Appointment
          </div>
          <div className="text-white  py-2 pb-4 lora-regular ">
            People considering telepsychiatry may find it useful to discuss the
            matter with their primary healthcare professional. They may be able
            to suggest suitable online services.
          </div>
          <div className="flex flex-col gap-4 leading-1">
            <div className="flex flex-col gap-2 ">
              <div className="rounded-full overflow-hidden  ">
                <input
                  className="h-12 md:h-14 lg:h-16 w-full px-4 md:px-6 lg:px-8 xl:px-10 md:text-lg xl:text-xl"
                  placeholder="Your full name "
                  onChange={(evt) => {
                    setUserInfo({ ...userInfo, name: evt.target.value });
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="rounded-full overflow-hidden  ">
                <input
                  className="h-12 md:h-14 lg:h-16 w-full px-4 md:px-6 lg:px-8 xl:px-10 md:text-lg xl:text-xl"
                  placeholder="Choose service"
                  onChange={(evt) => {
                    setUserInfo({ ...userInfo, cat: evt.target.value });
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <div className="rounded-full overflow-hidden  ">
                <input
                  className="h-12 md:h-14 lg:h-16 w-full px-4 md:px-6 lg:px-8 xl:px-10 md:text-lg xl:text-xl"
                  placeholder="Choose Doctor"
                  onChange={(evt) => {
                    setUserInfo({ ...userInfo, doc: evt.target.value });
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2   ">
              <div className="rounded-full overflow-hidden  ">
                <input
                  type="date"
                  className="h-12 md:h-14 lg:h-16 w-full px-4 md:px-6 lg:px-8 xl:px-10 md:text-lg xl:text-xl"
                  placeholder="Choose date "
                  onChange={(evt) => {
                    setUserInfo({ ...userInfo, name: evt.target.value });
                  }}
                />
              </div>
            </div>
            <div className="pb-8">
              <div className="rounded-full lora-semibold text-center text-white text-lg md:text-xl bg-tertiary px-6 py-4">
                Make an appointment +
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full  md:h-full slideLeft">
        <div className="lora-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl pb-2 lg:pb-4">
          Psychological care
        </div>
        <div className="lora-regular leading-8 lg:leading-10 md:text-lg lg:text-xl ">
          Psychological care can refer to different types of services or
          activities that aim to improve the mental health of individuals or
          groups.It can be provided by licensed psychologists or psychological
          assistants. It can involve psychological assessment, measures,
          consultation, diagnosis, treatment, problem-solving, and personal and
          professional development.It can help people cope with stressful
          events, behaviors, and mental illnesses Psychological care is
          increasingly a right for people living in developed countries. These
          provide their citizens with a welfare system that offers security and
          support when individuals and groups have to cope with stressful
          events, which frequently include psychological connotations
        </div>
        <div className="text-secondary text-lg md:text-xl lg:text-2xl pt-10 lora-medium">
        It can also involve self-care activities that foster learning, thinking, and growing{" "}
        </div>
      </div>
    </div>
  );
};
export default MakeAnAppointmentMini;
