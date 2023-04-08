export class ImageCardWithTextProps {
imageUrl:string | null = null;
text:string | null = null;
textColor?:string = "black";
textBackground?:string = "white";
}
const ImageCardWithText: React.FC<ImageCardWithTextProps> = (props) => {
    return (
        <div className="relative ">
                {
            <div className="h-[280px] w-full overflow-hidden zoom-in">
            <img src={props.imageUrl!} alt="" width="100%" height="280px" className="object-cover h-[280px]" />
            </div>
                }
                <div className="absolute -top-[40px] inset-x-[20px] bg-white md:text-lg lg:text-xl py-6 flex items-center justify-center text-center lora-bold ">
                    {props.text}
                </div>
        </div>
    )
}
export default ImageCardWithText;