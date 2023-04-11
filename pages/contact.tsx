import Breadcrumbs, { BreadCrumbsProps } from "@/components/common/breadcrumbs";
import ContactForm from "@/components/contact/contact_form";
import InstituteInfo from "@/components/contact/institute_info";
import WorkingHours from "@/components/contact/working_hours";
import { useState } from "react";

export default function ContactPage() {
    const [breadCrumbsProps, setBreadCrumbsProps] = useState<BreadCrumbsProps>(new BreadCrumbsProps({ backgroundColor: "#2e279d", backgroundImage: "assets/images/breadcrum-background.jpg", title: "Contact Us", textColor: "white", previous: { name: "Home", route: "/home" }, }))
    return (
        <div className="">
            <Breadcrumbs {...breadCrumbsProps} />
            <div className="flex pt-10 flex-col md:flex-row gap-10 items-stretch justify-center">
                <div className="w-full md:w-5/12" >
                    <InstituteInfo />
                </div>
                <div className="w-full md:w-5/12" >
                    <WorkingHours background="bg-tertiary" />
                </div>
            </div>
            <div className="mt-20">
                <ContactForm/>
            </div>
        </div>
    )
}