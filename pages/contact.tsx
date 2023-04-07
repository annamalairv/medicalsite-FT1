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
                    <WorkingHours />
                </div>
            </div>
            <div className=" mt-8">
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" width="100%" height="600" frameBorder="0" ></iframe>
            </div>
            <div className="mt-20">
                <ContactForm/>
            </div>
        </div>
    )
}