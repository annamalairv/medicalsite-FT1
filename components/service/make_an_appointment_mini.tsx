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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          perspiciatis minima nulla accusamus nostrum totam similique
          distinctio, unde ad quaerat itaque esse nisi nam ipsa delectus
          obcaecati neque debitis at!
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
          Neurology Care
        </div>
        <div className="lora-regular leading-8 lg:leading-10 md:text-lg lg:text-xl ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sequi
          rem sint rerum deserunt dicta voluptas aut magnam. Velit debitis
          numquam vel reprehenderit. Ipsum, debitis praesentium cumque pariatur
          error deleniti, quia eligendi perferendis ad voluptatem, officiis
          corporis magnam. Nesciunt ullam consequuntur placeat modi, numquam
          voluptate veniam natus in eum eaque animi eligendi praesentium
          deserunt magnam maiores fuga alias earum facere sed, suscipit totam
          labore est quae quo! Similique cum suscipit est, et ex facere
          consequatur expedita iure sapiente hic, quos aut a laborum, tempora ab
          sequi? Reiciendis assumenda, quod repellendus ducimus esse vitae
          officia sint facilis odit soluta placeat voluptatum.
        </div>
        <div className="text-secondary text-lg md:text-xl lg:text-2xl pt-10 lora-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi doloremque dignissimos ullam amet magnam consectetur expedita accusamus veritatis. </div>
      </div>
    </div>
  );
};
export default MakeAnAppointmentMini;
