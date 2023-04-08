import FourImageLayout from "./four_image_layout";

const AboutMainScreen:React.FC<any>=(props)=>{
return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 container mx-auto px-4 md:px-8 lg:px-10 py-10 pt-32 2xl:px-20 ">
        <FourImageLayout />
        <div className="flex flex-col gap-4 justify-start items-start">
          <div className="text-tertiary lora-semibold">About seeva</div>
          <div className="text-2xl md:text-3xl lg:text-4xl text-black pt-2 lora-bold">
            All in one Worksite health solution
          </div>
          <div className="text-secondary pt-2 lora-medium">
            25 Years Of Experience in Medical Services
          </div>
          <div className="text-lg leading-8 pt-2 lora-regular">
            Sed ut perspiciatis unde omnis iste natus error voluptatem
            accusantium doloremque laudantium totam rem aperieaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatemsy quia voluptas sit aspernatur
            aut odit aut fugit quia conquntur magni dolores eos qui ratione
            voluptatem
          </div>
          <div className="pt-4">
            <div className="rounded-full px-6 py-2 bg-tertiary text-white lora-semibold">
              Learn more+
            </div>
          </div>
        </div>
      </div>
)
}
export default AboutMainScreen;