export class BreadCrumbsProps {
backgroundColor:string;
backgroundImage:string;
textColor:string;
title:string;
// TODO convert to array of objects with thier route and id  
previous:string;
constructor(data:BreadCrumbsProps){
    this.backgroundColor = data.backgroundColor ?? "primary";
    this.backgroundImage = data.backgroundImage ?? null;
    this.textColor = data.textColor ??"white";
    this.title = data.title ?? "current page";
    this.previous = data.previous ?? "Home"
}
}

const Breadcrumbs:React.FC<BreadCrumbsProps>=(props)=>{
const {backgroundColor,backgroundImage,title,previous,textColor}=props
    return (
        <div className="relative ">
            <img src={backgroundImage} alt="" width="100%" height="280px" className="object-cover h-[280px]" />
            <div className={`absolute z-1 inset-0 text-center flex flex-col items-center justify-center`} style={{background:backgroundColor,color:textColor,opacity:0.85}}>
                <div className="text-[56px] xl:text-[72px] 2xl:text-[85px] p-4">
                    {title}
                </div>
                <div className="flex justify-center gap-4 text-[36px] xl:text-[42px] 2xl:text-[55px]">
                    <div className="">{previous}</div>
                    <div className=""> {">"} </div>
                    <div className="">{title}</div>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumbs;