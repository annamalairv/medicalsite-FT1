import React, { useState } from "react";
// import heart from '../../images/heart.png'
// import gitdp from';
// medi-app\assets\

const card = (prop:any) => {
  const [card1, setCard1] = useState(false);


  return (
    <div className="p-4">
      <div className="lg:pl-20">
        <div
          className={`flex w-full h-[65vh] flex-col rounded-xl bg-white bg-clip-border p-8 text-white shadow-md shadow-white-500/40 `}
          onMouseEnter={() => setCard1(true)}
          onMouseLeave={() => setCard1(false)}
        >
          {/* <img src={prop.src} alt="" className="h-20 mx-auto w-20 pt-4 "/> */}
          {/* <div className="w-30 h-30 overflow-hidden bg-slate-300 drop-shadow-md rounded-full m-auto">
            <img src={prop.src} alt="" className="h-10 mx-auto w-10 pt-4 object-cover text-sm" />
          </div>
             */}
          <div className=" text-white bg-gradient-to-b from-slate-100 to-white border-slate-200 p-0  mx-auto flex justify-center items-center  rounded-full h-20 text-center text-sm w-20 m-0">
            <img
              src={prop.src}
              alt=""
              className="h-12 mx-auto w-12 flex  object-fit justify-center items-center text-center "
            />
          </div>
          <h2 className="text-center px-2 py-4 pb-5 text-2xl md:text-3xl lg:text-4xl text-black">
            Chat Support
          </h2>
          <h2 className="text-center px-2 pb-10 text-black ">{prop.title}</h2>

          {card1 ? (
            <div className="rounded-full px-6 py-2 lg:mt-10 bg-tertiary text-white">
              Read more +
            </div>
          ) : (
            <div className=" flex text-blue-600 lg:mt-10 bg-[#499AFA1A] p-0   rounded-full h-10  items-center justify-center mx-auto text-2xl w-10 ">
              +
            </div>
          )}

          {/* <a href="#" className="bg-blue-500 text-white p-3 mt-10  text-center hover:bg-blue-800 transition-all duration-500">Know More</a>
            
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default card;
