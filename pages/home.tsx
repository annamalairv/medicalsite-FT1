import AboutMainScreen from "@/components/about/about_main_screen";
import Appointment from "@/components/home/appointment";
import WhyChooseUs from "@/components/home/why_choose_us";

export default function HomePage() {
  return (
    <div className="">
      <Appointment />
      <WhyChooseUs />
      <AboutMainScreen />
    </div>
  );
}
