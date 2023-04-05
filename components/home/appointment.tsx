import Image from "next/image"
import myLoader from "@/utils/common_utils"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
interface AppointmentProps {

}
const Appointment: React.FC<AppointmentProps> = () => {
    const [windowStatus, setwindow] = useState(false);
    const [patternwidth, setPatternWidth] = useState(0);
    const [patternHeight, setPatternHeight] = useState(0);
    useEffect(() => {
        setwindow(true)
        setPatternWidth(window.innerWidth / 2.5)
        setPatternHeight(window.innerHeight - 84)
    }, [])
    return (
        <div className="">
            <div className={`hidden xl:px-20 xl:pt-14 md:flex items-center justify-center relative`} style={{ height: `${patternHeight}px` }}>
                <div className=" h-full w-full md:w-5/12 2xl:w-1/2 flex flex-col items-center justify-center">
                    <div className="ml-20 flex flex-col items-start justify-center appointment-hero-text">

                        <div className="lora-bold leading-tight text-secondary text-[60px] lg:text-[72px] xl:text-[85px] ">
                            We Care
                            Medical &
                            Health
                        </div>
                        <div className="  pt-4 md:pt-8 text-primary text-justify">
                            Dolor sit amet consectetur adipiscing elitsedes eiusmod tempor incididunt utlabore Lorem
                        </div>
                        <div className=" mt-10">
                            <div className="p-2 px-8 xl:p-4 xl:px-12 rounded-full bg-tertiary text-center  lg:text-xl xl:text-2xl 2xl:text-3xl text-white">
                                Make an Appointment +
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center justify-center mx-auto h-full">
                    <div className="flex items-center" style={{ height: `${patternHeight / 1.8}px`, width: `${patternwidth * 1.2}px` }}>
                        <img src="assets/images/appointment.png" alt="" className="object-cover 2xl:object-fill" style={{ width: `${patternwidth * 1.2}px` }} />
                    </div>
                    <div className="absolute inset-y-0 right-0 " style={{ zIndex: -1, height: `${patternHeight}px`, width: `${patternwidth}px` }}>
                        {
                            windowStatus &&
                            <Image loader={myLoader} fill={true} alt={"logo"} src={"assets/images/home-page-pattern.jpg"} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Appointment;