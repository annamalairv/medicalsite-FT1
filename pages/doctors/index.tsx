import Breadcrumbs, { BreadCrumbsProps } from "@/components/common/breadcrumbs"
import { useState } from "react"

export default function DoctorsPage() {
    const [breadCrumbsProps, setBreadCrumbsProps] = useState<BreadCrumbsProps>(new BreadCrumbsProps({ backgroundColor: "#2e279d", backgroundImage: "assets/images/breadcrum-background.jpg", title: "Meet the Doctors", textColor: "white", previous: { name: "Home", route: "/home" }, }))
    return (
    <div className="">
            <Breadcrumbs {...breadCrumbsProps} />
    </div>
    )
  }