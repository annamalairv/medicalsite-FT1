import AboutMainScreen from "@/components/about/about_main_screen";
import Appointment from "@/components/home/appointment";
import MakeAnAppointment from "@/components/home/make_an_appointment";
import Testimonial from "@/components/home/testimonial";
import WhyChooseUs from "@/components/contact/why_choose_us";
import Card from "@/components/common/card";
import MedicalService from "@/components/home/medicalService";
import HelpCardSection from "@/components/home/helpCardSection";

export default function HomePage() {
  return (
    <div className="">
      <Appointment />
      <WhyChooseUs />
      <AboutMainScreen />
      <MakeAnAppointment/>
      <Testimonial/>
      <MedicalService/>
<HelpCardSection/>
    </div>
  );
}
