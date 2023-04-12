import TextField from "@mui/material/TextField";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
export class ContactFormProps {}
const ContactForm: React.FC<ContactFormProps> = (props) => {
    const form = useRef<any>();
  function submitForm(event:any) {
    event.preventDefault()
console.log("event",event);
emailjs.sendForm('service_yl7yc2j', 'template_vcd0851', form.current, '3zUH_ilEHrni8Wuar')
      .then((result:any) => {
          console.log(result.text,"result");
      }, (error:any) => {
          console.log(error.text);
      });
    //   event.
  }
  return (
    <div className="container mx-auto text-center px-4 xl:px-20">
      <div className="text-tertiary text-sm md:text-lg lora-semibold">
        We're Ready To Help You
      </div>
      <div className="text-center text-gray-600 text-lg md:text-xl lg:text-2xl lora-bold">
        Leave a Message
      </div>
      <form ref={form} onSubmit={submitForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 pt-10">
          <div className="flex flex-col gap-2">
            <label className="text-xl text-start lora-semibold">Name</label>
            <TextField
              placeholder={"Annamalai"}
              variant="outlined"
              className="bg-gray-200 text-lg"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl text-start lora-semibold">Email</label>
            <TextField
              placeholder={"annamalai@gmail.com"}
              variant="outlined"
              className="bg-gray-200 text-lg"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl text-start lora-semibold">Phone No</label>
            <TextField
              placeholder={"+91 188928821"}
              variant="outlined"
              className="bg-gray-200 text-lg"
              inputMode="numeric"
              type="number"
              name="phone"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xl text-start lora-semibold">Website</label>
            <TextField
              placeholder={"sporfy.com"}
              variant="outlined"
              className="bg-gray-200 text-lg"
              name="website"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-4 pb-10">
          <div className="text-xl text-start lora-semibold">
            Write a message
          </div>
          <TextField
            placeholder={"Enter your message..."}
            rows={4}
            variant="outlined"
            className="bg-gray-200 text-lg"
            multiline
            name="message"
          />
        </div>
        <div className="flex items-center justify-center pb-10">
          <button type="submit" className="rounded-full text-center text-white bg-tertiary px-8 py-2 lora-semibold">
            Send us message +
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
