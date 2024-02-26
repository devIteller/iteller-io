import Input from "../Input/Input";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Swal from "sweetalert2";

const ReceiveInsights = () => {
  const [FullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  function sendEmail() {
    var templateParams = {
      from_name: `${FullName}`,
      name: `name : ${FullName}`,
      email: emailAddress,
    };

    emailjs
      .send(
        "service_w6vzglh",
        "template_j3434zi",
        templateParams,
        "2VGjtHH_RGI1bz-z7"
      )
      .then((e) => {
        e.status === 200 &&
          Swal.fire({
            icon: "success",
            text: "Your information has been successfully sent!",
            confirmButtonText: "ok",
            backdrop: `
      rgb(0 0 0 / 50%)
    `,
          });
        setFullName("");
        setEmailAddress("");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Fields cannot be empty",
        });
      });
  }

  const submit = () => {
    if (FullName != "" && emailAddress != "") {
      sendEmail();
    } else {
      Swal.fire({
        icon: "error",
        title: "Fields cannot be empty",
      });
    }
  };

  return (
    <section className="text-white bg-[#001272] py-10 flex items-center text-center lg:text-start justify-center flex-wrap">
      <div className="flex max-lg:flex-col items-center justify-between z-50 relative px-3 md:px-10 lg:max-w-[1440px] w-[90%] ">
        <div
          data-aos="fade-right"
          className=" flex max-lg:flex-col z-50 gap-4 items-center"
        >
          <img
            src="/Insights/email.svg"
            className="bg-white rounded-2xl h-fit p-3"
            alt="email"
            loading="lazy"
          />
          <div>
            <h1 className="title-font font-medium w-full text-3xl">
              Receive Our Insights
            </h1>
            <p className="leading-relaxed md:mt-2 lg:w-3/4">
              Subscribe to the mailing list to receive our industry reports,
              news and commentary.
            </p>
          </div>
        </div>
        <div
          data-aos="flip-up"
          className="md:w-[500px] w-full md:py-8 mt-6 flex flex-col gap-3 "
        >
          <Input
            value={FullName}
            onChange={(e) => setFullName(e.currentTarget.value)}
            className="bg-[rgba(255,255,255,0.25)]"
            placeholder="First Name *"
            type="text"
          />
          <Input
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.currentTarget.value)}
            className="bg-[rgba(255,255,255,0.25)]"
            placeholder="Enter email address *"
            type="email"
          />
          <button
            onClick={submit}
            className="text-white uppercase bg-[#0328EE] border-0 py-4 px-8 focus:outline-none hover:bg-[#0328EE]/80 duration-300
           rounded-md text-"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReceiveInsights;
