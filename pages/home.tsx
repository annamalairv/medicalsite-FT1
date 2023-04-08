import AboutMainScreen from "@/components/about/about_main_screen";
import Appointment from "@/components/home/appointment";
import MakeAnAppointment from "@/components/home/make_an_appointment";
import Testimonial from "@/components/home/testimonial";
import WhyChooseUs from "@/components/home/why_choose_us";

export default function HomePage() {
  return (
    <div className="">
      <Appointment />
      <WhyChooseUs />
      <AboutMainScreen />
      <MakeAnAppointment/>
      <Testimonial/>
    </div>
  );
}
