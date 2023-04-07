import AboutMainScreen from "@/components/about/about_main_screen";
import Appointment from "@/components/home/appointment";
import WhyChooseUs from "@/components/home/why_choose_us";
import Card from "@/components/common/card";
import MedicalService from "@/components/home/medicalService";

export default function HomePage() {
  return (
    <div className="">
      <Appointment />
      <WhyChooseUs />
      <AboutMainScreen />
      {/* <Card/> */}
<MedicalService/>
    </div>
  );
}
