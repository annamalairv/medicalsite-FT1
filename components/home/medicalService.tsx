import React from "react";
import Card from "../common/card";

const MedicalService = () => {
  const techs = [
    {
      id: 1,
      src: "assets/images/heart.png",
      title: "Dolor sit amet consectetur ascing elitsed eiusmod tempo",
    },
    {
      id: 2,
      src: "assets/images/brain.png",
      title: "Dolor sit amet consectetur ascing elitsed eiusmod tempo",
    },
    {
      id: 3,
      src: "assets/images/bronchus.png",
      title: "Dolor sit amet consectetur ascing elitsed eiusmod tempo",
    },
    {
      id: 4,
      src: "assets/images/lungs.png",
      title: "Dolor sit amet consectetur ascing elitsed eiusmod tempo",
    },
    {
      id: 5,
      src: "assets/images/stomach.png",
      title: "Dolor sit amet consectetur ascing elitsed eiusmod tempo",
    },
    {
      id: 6,
      src: "assets/images/virus.png",
      title: "Dolor sit amet consectetur ascing elitsed eiusmod tempo",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-blue-50 p-6 px-30">
      <div className="grid place-content-center h-full  text-center container mx-auto">
        <div className="text-lg pb-2  text-[#499AFA]">
          Popular Medical Services
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl text-[#0E204D]  md:px-40 lg:px-60 xl:px-80">
          {`Benefit For Physical, Mental and
          Virtual Care`}
        </div>
        {/* <div className="h-[20vh]"></div> */}
      </div>
      {/* <h1 className="font-bold text-xl text-center md:text-xl md:mt-12  text-blue-600">Popular Medical Services</h1>
        <h6 className='font-bold text-4xl text-center md:text-4xl  mb-4 text-[#0E204D]'>Benefit For Physical Mental and Virtual Care</h6> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center px-10 lg:px-20 py-8 ">
        {techs.map((prop) => {
          return <Card key={prop.id} {...{ prop }} />;
        })}
      </div>
    </div>
  );
};

export default MedicalService;
