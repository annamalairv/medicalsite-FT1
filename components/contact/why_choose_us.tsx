import ImageCardWithText from "../common/image_card_with_text";

export interface WhyChooseUsProps{

}
const WhyChooseUs:React.FC<WhyChooseUsProps>=(props)=>{
    return (
        <>
        <div className="overflow-hidden pt-4">
        <div className="bg-secondary relative h-screen " >
            <div className="grid place-content-center h-full text-white text-center container mx-auto">
                <div className="text-lg pb-2 lora-semibold">
                    Why choose our medical
                </div>
                <div className="text-[45px] lora-bold">
                Breakthrough in Comprehensive, Flexible Care<br/> Delivery Models
                </div>
                <div className="h-[20vh]"></div>
            </div>
            <div className="absolute inset-x-0 -bottom-[80px] z-1 2xl:container 2xl:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 px-10">
                    <div className="slideLeft">
                <ImageCardWithText imageUrl={"/assets/images/wheelchair_grandma.jpg"} text={"Optimize Your Health Care Services"} />
                    </div>
                <div className="lg:-mt-10 hidden md:block ">
                <ImageCardWithText imageUrl={"/assets/images/nurse_injection.jpg"} text={"Optimize Your Health Care Services"} />
                </div>
                <div className="hidden lg:block slideRight">
                <ImageCardWithText imageUrl={"/assets/images/child_heart_beat.jpg"} text={"Optimize Your Health Care Services"} />
                </div>
                </div>
            </div>
        </div>
        <div className="h-40"></div>
        </div>
        </>
    )
}
export default WhyChooseUs;