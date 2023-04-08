import Breadcrumbs, { BreadCrumbsProps } from '@/components/common/breadcrumbs';
import InstituteInfo from '@/components/contact/institute_info';
import WorkingHours from '@/components/contact/working_hours';
import React, { useState } from 'react'

const Services = () => {
    const [breadCrumbsProps, setBreadCrumbsProps] = useState<BreadCrumbsProps>(
        new BreadCrumbsProps({
          backgroundColor: "#2e279d",
          backgroundImage: "assets/images/breadcrum-background.jpg",
          title: "Services",
          textColor: "white",
          previous: { name: "Home", route: "/home" },
        })
      );
  return (
    <div className="">
    <Breadcrumbs {...breadCrumbsProps} />
    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 container mx-auto px-20 md:px-18 lg:px-20 py-20 pt-32 2xl:px-30 ">

        <div className="flex pt-10 flex-col md:flex-row gap-10 items-stretch justify-start ">
         
        <div className="w-full md:w-9/12" >
                    <WorkingHours />
                </div>
          
        </div>
        
        <div className=" flex items-center justify-center mx-auto h-full">
                    <div className="flex items-center md:w-/12">
                        <img src="assets/images/help-section-img.jpg" alt="" className="object-cover 2xl:object-fill  "  />
                    </div>
                 
                </div>
      </div> */}
      <div className="grid grid-cols-1  md:grid-cols-2 md:py-20 md:px-40 py-4 px-10 ">
      <div className="w-full md:w-10/12" >
                    <WorkingHours />
                </div>
                {/* <div className="hidden md:block  ">
               <img src="/assets/images/testimonial_cover.jpg" alt="" />
                </div> */}
                 <div className="flex items-center md:w-fit pt-6">
                        <img src="assets/images/testimonial_cover.jpg" alt="" className="object-cover 2xl:object-fill  "  />
                    </div>
               
                
                {/* <div className="px-4 md:px-6 lg:px-10 pt-4 md:pt-6 lg:pt-10">
                    <div className="text-tertiary pb-4">
                        Our Testimonials
                    </div>
                    <div className="text-4xl pb-4">
                        What Our Patients Say
                    </div>
              
                </div> */}
            </div>
   
  </div>
  )
}

export default Services