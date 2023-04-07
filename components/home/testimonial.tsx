import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
export interface TestimonialProps{

}
const Testimonial:React.FC<TestimonialProps>=()=>{
        function Slide(){
            return (
                <div className="h-72">
                    <div className="h-10 w-10 rounded-full mb-2 shadow">
                        <img src="/assets/images/testimonial-avatar.png" alt="" />
                    </div>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum dolore a reprehenderit ducimus architecto consequatur debitis quam voluptate dolores molestias at iste, deserunt eius consectetur fugiat pariatur et. Necessitatibus.
                    </div>
                </div>
            )
        }
    return(
        <div className="bg-slate-200 my-10">
            <div className="grid grid-cols-1 md:grid-cols-2  pr-4 lg:pr-10 xl:pr-20 ">
                <div className="hidden md:block">
               <img src="/assets/images/testimonial_cover.jpg" alt="" />
                </div>
                <div className="px-4 md:px-6 lg:px-10 pt-4 md:pt-6 lg:pt-10">
                    <div className="text-tertiary pb-4">
                        Our Testimonials
                    </div>
                    <div className="text-4xl pb-4">
                        What Our Patients Say
                    </div>
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <Slide/>
        </SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
        <SwiperSlide><Slide/></SwiperSlide>
      </Swiper>
                </div>
            </div>
        </div>
    )

}
export default Testimonial;