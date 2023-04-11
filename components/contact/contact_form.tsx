import TextField from "@mui/material/TextField";


export class ContactFormProps {

}
const ContactForm: React.FC<ContactFormProps> = (props) => {
    return (
        <div className="container mx-auto text-center px-4 xl:px-20">
            <div className="text-tertiary text-sm md:text-lg lora-semibold">
                We're Ready To Help You
            </div>
            <div className="text-center text-gray-600 text-lg md:text-xl lg:text-2xl lora-bold">
                Leave a Message
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 pt-10">
                <div className="flex flex-col gap-2">
                    <div className="text-xl text-start lora-semibold">
                        Name
                    </div>
                    <TextField placeholder={"Annamalai"} variant="outlined" className="bg-gray-200 text-lg" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-xl text-start lora-semibold">
                        Email
                    </div>
                    <TextField placeholder={"annamalai@gmail.com"} variant="outlined" className="bg-gray-200 text-lg" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-xl text-start lora-semibold">
                        Phone No
                    </div>
                    <TextField placeholder={"+91 188928821"} variant="outlined" className="bg-gray-200 text-lg" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-xl text-start lora-semibold">
                        Website
                    </div>
                    <TextField placeholder={"sporfy.com"} variant="outlined" className="bg-gray-200 text-lg" />
                </div>
            </div>
            <div className="flex flex-col gap-2 pt-4 pb-10">
                    <div className="text-xl text-start lora-semibold">
                        Write a message
                    </div>
                    <TextField placeholder={"Enter your message..."} rows={4} variant="outlined" className="bg-gray-200 text-lg" multiline />
                </div>
                <div className="flex items-center justify-center pb-10">
                <div className="rounded-full text-center text-white bg-tertiary px-8 py-2 lora-semibold">
                    Send us message +
                </div>
                </div>
        </div>
    )
}
export default ContactForm;