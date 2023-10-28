import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsGeoAltFill,
} from "react-icons/bs";
import Button from "../components/Button";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Contact = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "40px",
      duration: 2000,
      delay: 200,
    });

    sr.reveal(".contactme, .condesc", { origin: "top" });
    sr.reveal(".conform", { origin: "left" });
    sr.reveal(".coninfo", { origin: "right" });
    sr.reveal(".conbtn", { origin: "bottom" });
  }, []);
  return (
    <section
      id="contact"
      className="overflow-hidden px-12 lg:px-28 py-5 relative"
    >
      <div className="container mx-auto py-20 md:flex items-center">
        <div className="md:w-1/2">
          <h2 className="contactme font-bold text-4xl">
            CONTACT <span className=" custom-text-gradient">ME</span>
          </h2>
          <p className="condesc max-w-lg mt-4 leading-7">
            You can contact or email to get in touch with me. I value every
            messsage like suggestion, collaboration, hiring, and other reason.
            Put your message here or directly email me through{" "}
            <span className="text-primary">daffaaalthaf25@gmail.com</span>
          </p>
          <form className="mt-4 conform">
            <div className="flex flex-wrap mt-6 flex-grow w-full justify-between">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="border-dark2 border rounded-lg bg-transparent py-2 px-4 md:w-[49%] w-full"
              />
              <input
                type="email"
                placeholder="Your Name"
                name="email"
                className="border-dark2 border rounded-lg bg-transparent py-2 px-4 md:w-[49%] w-full
                "
              />
            </div>
            <textarea
              name="message"
              cols="45"
              rows="7"
              className="w-full my-6 border-dark2 border rounded-lg bg-transparent py-2 px-4"
              placeholder="Your Message"
            ></textarea>
            <div className="conbtn max-md:flex justify-center">
              <Button text={"Send Request"} />
            </div>
          </form>
        </div>
        <div className="md:ml-20 max-md:mt-12 coninfo">
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-full bg-gradient p-3">
              <BsFillTelephoneFill className="text-xl md:text-3xl text-slate-200" />
            </div>
            <div className="">
              <p className="font-semibold text-lg md:text-2xl">Call Me</p>
              <p className="md:text-lg mt-1">+6289523927152</p>
            </div>
          </div>
          <div className="max-md:justify-end flex items-center gap-4 mb-6">
            <div className="max-md:order-2 rounded-full bg-gradient p-3">
              <BsFillEnvelopeFill className="text-xl md:text-3xl text-slate-200" />
            </div>
            <div className="max-md:order-1">
              <p className="font-semibold text-lg md:text-2xl max-md:flex justify-end">
                Email Me
              </p>
              <p className="md:text-lg mt-1 max-md:flex justify-end">
                daffaalthaf25@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-full bg-gradient p-3">
              <BsGeoAltFill className="text-xl md:text-3xl text-slate-200" />
            </div>
            <div className="">
              <p className="font-semibold text-lg md:text-2xl">My Adress</p>
              <p className="md:text-lg mt-1">Palembang, Sumatera Selatan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
