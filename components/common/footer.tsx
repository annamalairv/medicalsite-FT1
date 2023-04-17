import myLoader from "@/utils/common_utils"
import Image from "next/image"

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
interface FooterProps {
    // closeFooter: Function;
}
const Footer: React.FC<FooterProps> = (props) => {
    // const { closeFooter } = props
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
        }

        // setwindow(true)
    }, [router])
    return (
        <div style={{ width: "100%" }} className="mx-auto bg-gray-200 p-10">
            <div className={`md:flex hidden justify-center`}>
                <div className="flex flex-row gap-4 py-2 w-fit justify-between container">
                    <div className="flex flex-col gap-4 py-2 w-1/3 ">
                        <div className="" style={{scale:1.1}} >
                        <Image width={150} height={45} alt={"logo"} src={"/assets/images/otLogo.png"} />
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-primary text-justify">
                                Psychiatrists are qualified to assess both the mental and physical aspects of psychological problems.
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary text-white p-2">
                                <LocationOnIcon color="inherit" />
                            </div>
                            <div className="text-primary ">
                                55, Ganesh Nagar, Singanallur, Coimbatore 641-002.
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary text-white p-2">
                                <MailOutlineIcon color="inherit" />
                            </div>
                            <div className="text-primary">
                                booking@seeva.com
                            </div>

                        </div>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary text-white p-2">
                                <PhoneEnabledIcon color="inherit" />
                            </div>
                            <div className="text-primary">
                                +91 86101 86163
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-2 ">
                        <div className="flex items-center gap-4">
                            <div className="text-primary font-serif text-xl font-bold ">
                                Popular Services
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Child and adolescent psychiatry
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Forensic psychiatry
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                General psychiatry
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Old age psychiatry
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Medical psychotherapy
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Psychiatry of intellectual disability
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-2 ">
                        <div className="flex items-center gap-4">
                            <div className="text-primary font-serif text-xl font-bold ">
                                About Us
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Success Story
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Need a Career ?
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Privacy Policy
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Need Support
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Latest News
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`sm:flex md:hidden`}>
                <div className="flex flex-col gap-4 py-2">
                    <div className="flex flex-col gap-4 py-2 w-full ">
                        <Image width={150} height={45} alt={"logo"} src={"/assets/images/otLogo.png"} />

                        <div className="flex justify-center gap-4">
                            <div className="text-primary text-justify">
                                Psychiatrists are qualified to assess both the mental and physical aspects of psychological problems.
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary text-white p-2">
                                <LocationOnIcon color="inherit" />
                            </div>
                            <div className="text-primary">
                                55, Ganesh Nagar, Singanallur, Coimbatore 641-002.
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary text-white p-2">
                                <MailOutlineIcon color="inherit" />
                            </div>
                            <div className="text-primary">
                                booking@seeva.com
                            </div>

                        </div>
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary text-white p-2">
                                <PhoneEnabledIcon color="inherit" />
                            </div>
                            <div className="text-primary">
                                +91 86101 86163
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-2 ">
                        <div className="flex items-center gap-4">
                            <div className="text-primary font-serif text-xl font-bold ">
                                Popular Services
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Child and adolescent psychiatry
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Forensic psychiatry
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                General psychiatry
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Old age psychiatry
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Medical psychotherapy
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Psychiatry of intellectual disability
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-2 ">
                        <div className="flex items-center gap-4">
                            <div className="text-primary font-serif text-xl font-bold ">
                                About Us
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Success Story
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Need a Career ?
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Privacy Policy
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Need Support
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-primary">
                                Latest News
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="pt-8 pb-6 flex justify-center">
                © OpenTalk Psychiatrist. All rights reserved.
            </div>

        </div>

    )
}
export default Footer;