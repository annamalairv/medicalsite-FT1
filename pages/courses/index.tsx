import Breadcrumbs, { BreadCrumbsProps } from "@/components/common/breadcrumbs";
import { useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SendIcon from '@mui/icons-material/Send';
import SchoolIcon from '@mui/icons-material/School';

export default function DoctorsPage() {
  const [breadCrumbsProps, setBreadCrumbsProps] = useState<BreadCrumbsProps>(
    new BreadCrumbsProps({
      backgroundColor: "#2e279d",
      backgroundImage: "assets/images/breadcrum-background.jpg",
      title: "Courses we offer",
      textColor: "white",
      previous: { name: "Home", route: "/home" },
    })
  );

  function Course({ course, index }: { course: any; index: number }) {
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
      <div className={`min-h-screen overflow-x-hidden  ${
        index % 2 == 0 ? "bg-gradient-to-r from-[#14C3D9] to-[#3CC5C4] ":"bg-white"
      }`}>
        <div
          className={`flex  gap-4 md:gap-10 lg:gap-16 md:py-20 px-10   md:px-6 lg:px-10 xl:px-32 py-4   ${
            index % 2 == 0 ? " text-white flex-col md:flex-row" : " text-[#2290BA] flex-col md:flex-row-reverse "
          }`}
        >
          
          <div className={`flex-1 flex flex-col gap-4 ${index % 2 == 0 ?"slideRight":"slideLeft"}`}>
            <div className="text-[46px] xl:text-[62px] 2xl:text-[75px] py-4 lora-bold">
              {course.name}
            </div>

            <div className="text-lg md:text-xl lg:text-2xl lora-regular mt-4">
             {course.classes.map((prop:Array<string>)=>{
              return (
                <div className="flex flex-row">
                    <div className="rounded-full  text-[#499AFA] ">
                    <SchoolIcon color="inherit" />
                  </div>
                <div className={`pl-4 zoomOut`}>{prop}</div>
                </div>
              )
             })}
            </div>
            <div className="pt-4">
            <div className="rounded-full px-6 py-2 w-40 text-center bg-[#2290BA] text-white lora-semibold">
              Learn more+
            </div>
          </div>
          
          </div>
          <div className="flex-1 flex items-center md:w-fit pt-6 zoomOut">
                        <img src={course.url} alt="" className={`object-cover 2xl:object- ${index % 2 == 0 ?"slideLeft":"slideRight"}  `}  />
                    </div>
          {/* <img src={course.url} alt="" className={`w-[50%] ${index % 2 == 0 ?"slideLeft":"slideRight"}`} /> */}
        </div>
      </div>
    );
  }

  return (
    
    <div className="">
      <Breadcrumbs {...breadCrumbsProps} />
      {[
        {
          name: "Coaching Classes",
          background: "primary",
          classes: [
            "	NTA-UGCNET/JRF- SET",
            "MA/MSC Psychology Entrance Exam",
            "	M.Phil Clinical Psychology Entrance",
          ],
          url: "/assets/images/course_1.jpg",
        },
        {
          name: "Diploma Courses",
          background: "white",
          classes: [
            "School Psychology",
            "   Learning Disability",
            "NLP",
            "Counselling",
            "Artistic Therapies- Drama & Psychodrama",
            "Applied Behaviour Analysis",
          ],
          url: "/assets/images/c1.jpg",
        },
        {
          name: "Certificate Courses",
          background: "primary",
          classes: [
            "Psychological Assessments",
            "  CBT",
            " Mandala Art",
            "  Psychological First Aid",
            "Humanistic Therapies",
            "   Inner Child Healing",
          ],
          url: "/assets/images/c2.jpg",
        },{
          name: "Interships",
          background: "white",
          classes: [
            "In Clinical Settings",
            "In Counselling Settings",
          "  In Schools",
        "    In Rehabilation Centres",
            "In Industry",
         "   In HR",
          ],
          url: "/assets/images/c3.jpg",
        },
        {
          name: "Training Programs & Research Works",
          background: "primary",
          classes: [
          "  Article Publication",
          "  Journal Publication",
           " Scopus and Web Of Science Indexed Journals",
            "Book Publication",
          "  Patent",
          ],
          url: "/assets/images/c4.jpg",
        },
      ].map((course, index) => {
        return <Course course={course} index={index} />;
      })}
    </div>
  );
}
