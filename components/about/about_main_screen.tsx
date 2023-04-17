import FourImageLayout from "./four_image_layout";

const AboutMainScreen:React.FC<any>=(props)=>{
return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 container mx-auto px-4 md:px-8 lg:px-10 py-10 pt-32 2xl:px-20 ">
        <FourImageLayout />
        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="text-[#2290BA] lora-semibold">About OpenTalk</div>
          <div className="text-2xl md:text-3xl lg:text-4xl text-[#2290BA] pt-2 lora-bold">
            All in one Worksite health solution
          </div>
          <div className="text-[#2290BA] pt-2 lora-medium">
            we provide best Experience in Medical Services
          </div>
          <div className="text-lg leading-8 pt-2 lora-regular text-[#2290BA]">
          Open talk is a one solution for all your psychological intern, courses and entrance exam etc. We are an organisation started in year of 2020 to provide internships for psychology students and Howe have widened our services in various fields. We provide all kinds of internships like Clinical, Counselling, HR, Deaddiction etc and we also take coaching classes for NET and PG entrance classes.
          </div>
          <div className="pt-4">
            <div className="rounded-full px-6 py-2 bg-gradient-to-r from-[#14C3D9] to-[#3CC5C4] cursor-pointer text-white lora-semibold">
              Learn more+
            </div>
          </div>
        </div>
      </div>
)
}
export default AboutMainScreen;