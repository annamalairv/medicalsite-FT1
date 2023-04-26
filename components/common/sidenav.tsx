import myLoader from "@/utils/common_utils"
import Image from "next/image"
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
interface SideNavProps {
    closeSideNav: Function;
}
const SideNav: React.FC<SideNavProps> = (props) => {
    const { closeSideNav } = props
    const [selectedRoute, setRoute] = useState<string>();
    const router = useRouter();

    useEffect(() => {
        if (router != null) {
            if (router.pathname == "/home") {
                setRoute("Home")
            }
            else if (router.pathname == "/contact") {
                setRoute("Contact")
            }
            else if (router.pathname == "/about") {
                setRoute("About us")
            }
            else if (router.pathname == "/courses") {
                setRoute("Courses")
            }
            else if (router.pathname == "/Services") {
                setRoute("Services")
            }
        }


    }, [router])
    return (
        <div className="bg-white h-full flex flex-col px-4 md:px-10 pt-6 pb-2 w-[80vw] md:w-[350px] lg:w-[400px]">
            <div className="flex justify-between gap-2 items-center">
                <Image loader={myLoader} width={150} height={65} alt={"logo"} src={"assets/images/otLogo.png"} />
                <CloseIcon fontSize="large" onClick={() => { closeSideNav() }} />
            </div>
            <div className={`flex flex-col gap-2 md:hidden text-primary pt-4`}>
                <Link className={`text-xl py-3 md:p-4 ${selectedRoute == "Home" ? "font-bold underline underline-offset-4" : "hover:font-semibold "}`} href="/home">Home</Link>
                <Link className={`text-xl py-3 md:p-4 ${selectedRoute == "About us" ? "font-bold underline underline-offset-4" : "hover:font-semibold "}`} href="/about">About us</Link>
                <Link className={`text-xl py-3 md:p-4 ${selectedRoute == "Courses" ? "font-bold underline underline-offset-4" : "hover:font-semibold "}`} href="/courses">Courses</Link>

                <Link className={`text-xl py-3 md:p-4 ${selectedRoute == "Contact" ? "font-bold underline underline-offset-4" : "hover:font-semibold "}`} href="/contact">Contact</Link>
                <Link className={`text-xl py-3 md:p-4 ${selectedRoute == "Services" ? "font-bold underline underline-offset-4" : "hover:font-semibold "}`} href="/Services">Services</Link>
            </div>
            <div className="hidden md:block">

                <div className="text-2xl text-primary pb-3 pt-8 border-b">
                    About us
                </div>
                <div className="text-xl text-primary pt-2 leading-10">
                Open talk is a one solution for all your psychological intern, courses and entrance exam etc. We are an organisation started in year of 2020 to provide internships for psychology students and we have widened our services in various fields.
                </div>
                <div className="text-2xl text-primary pb-3 pt-8 border-b">
                    Contact
                </div>
                <div className="flex flex-col gap-4 py-2">
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary text-white p-2">
                            <LocationOnIcon color="inherit" />
                        </div>
                        <div className="text-primary">
                            55, Ganesh Nagar, Singanallur, Coimbatore 641-002
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary text-white p-2">
                            <MailOutlineIcon color="inherit" />
                        </div>
                        <div className="text-primary">
                            <a href="mailto:support@seeva.com">
                                support@seeva.com
                            </a>
                            <div className="text-primary">
                            <a href="mailto:info@seeva.com">
                            info@seeva.com
                            </a>
                            </div>
                        </div>

                    </div>
                    <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary text-white p-2">
                            <PhoneEnabledIcon color="inherit" />
                        </div>
                        <div className="text-primary">
                        <a href="tel:+918610186163">+91 86101 86163</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideNav;