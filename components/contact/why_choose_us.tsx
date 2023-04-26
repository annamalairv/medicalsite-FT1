import ImageCardWithText from "../common/image_card_with_text";

export interface WhyChooseUsProps{

}
const WhyChooseUs:React.FC<WhyChooseUsProps>=(props)=>{
    return (
        <>
        <div className="overflow-hidden md:pt-4">
        <div className="bg-gradient-to-r from-[#14C3D9] to-[#DCD96C] relative h-[70vh] md:h-[80vh] lg:h-[90vh] " >
            <div className="grid place-content-center h-full  text-center container mx-auto">
                <div className="text-lg md:text-2xl lg:text-4xl pb-2 lora-semibold text-primary">
                    Why choose our medical
                </div>
                <div className="text-[24px] md:text-[32px] lg:text-[45px] lora-bold text-white">
                Breakthrough in Comprehensive, Flexible Care<br/> Delivery Models
                </div>
                <div className="h-[30vh] md:h-[20vh]"></div>
            </div>
            <div className="absolute inset-x-0 -bottom-[80px] z-1 2xl:container 2xl:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 px-4 md:px-10">
                    <div className="slideLeft">
                <ImageCardWithText imageUrl={"/assets/images/img1.jpg"} text={"Develop subject-specific knowledge."} />
                    </div>
                <div className="lg:-mt-10 hidden md:block ">
                <ImageCardWithText imageUrl={"/assets/images/img2.jpg"} text={"To know yourself"} />
                </div>
                <div className="hidden lg:block slideRight">
                <ImageCardWithText imageUrl={"/assets/images/img3.jpg"} text={"To better understand others"} />
                </div>
                </div>
            </div>
        </div>
        <div className="h-20 md:h-40"></div>
        </div>
        </>
    )
}
export default WhyChooseUs;