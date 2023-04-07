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
            <div className={`hidden md:grid grid-cols-3 place-content-center relative`} style={{ height: `${patternHeight}px` }}>
                <div className="">

                </div>
                <div className=" col-span-2 mx-auto h-full">
                    <div className="" style={{ height: `${patternHeight / 1.8}px`, width: `${patternwidth * 1.2}px` }}>
                        <img src="assets/appointment.png" alt="" className="object-cover" />
                    </div>
                    <div className="absolute inset-y-0 right-0 " style={{ zIndex: -1, height: `${patternHeight}px`, width: `${patternwidth}px` }}>
                        {
                            windowStatus &&
                            <Image loader={myLoader} fill={true} alt={"logo"} src={"assets/home-page-pattern.jpg"} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Appointment;