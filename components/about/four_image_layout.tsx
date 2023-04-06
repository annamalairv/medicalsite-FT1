export interface FourImageLayoutProps{

}
const FourImageLayout:React.FC<FourImageLayoutProps>=()=>{
    return (
        <div className="h-full w-full grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 four-image-layout ">
            <div className="img-1 h-full w-full -mt-16">
                <img src="/assets/images/masked_model.jpg" alt="" className="h-full w-full object-cover"/>
            </div>
            <div className="img-2 h-full w-full">
                <img src="/assets/images/comforting_grandma.jpg" alt="" className="h-full w-full object-cover"/>
            </div>
            <div className="img-3 h-full w-full -mt-16">
                <img src="/assets/images/high_five_kid.jpg" alt="" className="h-full w-full object-cover"/>
            </div>
            <div className="img-4 h-full w-full">
                <img src="/assets/images/hot_nurse.jpg" alt="" className="h-full w-full object-cover"/>
            </div>
        </div>
    )

}
export default FourImageLayout;