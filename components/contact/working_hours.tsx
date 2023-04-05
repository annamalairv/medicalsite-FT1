import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
export class WorkingHoursProps{

}

const WorkingHours:React.FC<WorkingHoursProps>=(props)=>{
    function Title({name}:{name:string}){
        return (
            <div className="flex items-center border-dashed border-b border-white gap-4 text-white pt-4 pb-2 whitespce-nowrap">
                <div className="flex-1 text-sm md:text-lg lg:text-xl">{name}</div>
                <div className=" text-[16px] md:text-[20px] lg:text-[27px]">9.00 - 17.00</div>
            </div>
        )
    }
return (
    <div className="bg-secondary p-8 md:p-12 xl:p-18 rounded-lg shadow h-full">
      <div className="text-[27px] md:text-[32px] text-white pt-4 pb-2">
            Working Hours
        </div>
        {
            ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((ele)=>{
                return <Title name={ele} />
            })
        }
    </div>
)
}
export default WorkingHours;