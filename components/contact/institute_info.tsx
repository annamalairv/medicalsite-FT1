import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
export class InstituteInfoProps{

}

const InstituteInfo:React.FC<InstituteInfoProps>=(props)=>{
    function Title({icon,name}:{icon:React.ReactNode,name:string}){
        return (
            <div className="flex items-center lora-bold gap-4 text-[22px] md:text-[27px] lg:text-[32px] text-white pt-4 pb-2">
                {icon}
                <div className="">{name}</div>
            </div>
        )
    }
return (
    <div className="bg-[#499afa] p-8 md:p-12 xl:p-18 rounded-lg shadow h-full">
        <Title icon={<LocationOnOutlinedIcon fontSize='inherit' color="inherit" />} name={"Address"}/>
        <div className="text-white text-lg py-1 lora-regular">7895 Piermont Dr NE Albuquerque,<br />NM 198866, See Our Stores</div>
        <Title icon={<LocalCafeOutlinedIcon fontSize='inherit' color="inherit" />} name={"Get In Touch"}/>
        <div className="text-white text-lg py-1 lora-regular">Phone-No :  +91 494192383</div>
        <div className="text-white text-lg py-1 lora-regular">E-mail :  ravan@gmail.com</div>
        <div className="text-white text-lg py-1 lora-regular">Mobile :  +91 9393823834</div>
        <Title icon={<QuestionAnswerIcon fontSize='inherit' color="inherit" />} name={"Follow Us"}/>
        <div className="text-white text-lg">
        Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
        </div>
    </div>
)
}
export default InstituteInfo;