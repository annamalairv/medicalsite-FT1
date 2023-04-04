import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
export class WorkingHoursProps{

}

const WorkingHours:React.FC<WorkingHoursProps>=(props)=>{
    function Title({name}:{name:string}){
        return (
            <div className="flex items-center border-dashed border-b border-white gap-4 text-[20px] md:text-[27px] text-white pt-4 pb-2">
                <div className="flex-1">{name}</div>
                <div className="">9.00 - 17.00</div>
            </div>
        )
    }
return (
    <div className="bg-secondary p-12 md:p-16 xl:p-18 rounded-lg shadow h-full">
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