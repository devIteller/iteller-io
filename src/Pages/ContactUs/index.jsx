import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail() {
    var templateParams = {
      from_name: `${fullName}`,
      message: `name : ${fullName}
      email : ${emailAddress}
      message : 
      ${message}`,
    };

    emailjs
      .send(
        "service_w6vzglh",
        "template_j3434zi",
        templateParams,
        "2VGjtHH_RGI1bz-z7"
      )
      .then(
        (e) =>
          e.status === 200 &&
          Swal.fire({
            icon: "success",
            text: "Your message has been successfully sent!",
            confirmButtonText: "ok",
            backdrop: `
      rgb(0 0 0 / 50%)
    `,
          })
      )
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Fields cannot be empty",
        });
      });
  }

  const submit = () => {
    if ((fullName != "") & (emailAddress != "") & (message != "")) {
      sendEmail();

      setFullName("");
      setEmailAddress("");
      setMessage("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Fields cannot be empty",
      });
    }
  };

  return (
    <>
      <Header />
      <span className="md:w-1/3 w-full blur-[170px] z-10 absolute md:left-[-110px] top-[-20px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="501"
          viewBox="0 0 738 511"
          fill="none"
          className="bg-[#010D50] w-full"
        ></svg>
      </span>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-y-6 lg:max-w-[1440px] w-[90%] md:px-10 py-10 items-center relative mt-28 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 z-50">
            <div className="p-10 bg-[#141F5C]">
              <h1 className="md:text-3xl font-bold mb-7">
                Let&apos;s Talk With Us
              </h1>
              <h3>
                If you have any questions, don&apos;t hesitate to contact us
                using the form below.
              </h3>
              <h4 className="md:text-xl font-bold mt-10 mb-4 ml-2">
                Contact Info :
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-x-5">
                  <span className="bg-[#B3D5FF] p-1 rounded-full" />
                  <div>
                    <h3 className="font-bold">Australia</h3>
                    <h5>ACN 650 348 842</h5>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-x-5">
                    <span className="bg-[#B3D5FF] p-1 rounded-full" />
                    <div>
                      <h3>UK</h3>
                      <h3>Lisence No : 13756061</h3>
                      <h5>London, England, NW1 1EN</h5>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-x-5">
                    <span className="bg-[#B3D5FF] p-1 rounded-full" />
                    <div>
                      <h3>UAE</h3>
                      <h3>Lisence No :1130113</h3>
                      <h5>Al owais Business Tower</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10 bg-[#0C1237] space-y-6">
              <div>
                <label className="font-bold">Full Name</label>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.currentTarget.value)}
                  placeholder="Input your full name in here"
                  className="bg-[#1A297A] mt-4 text-white"
                />
              </div>
              <div>
                <label className="font-bold">Email Address</label>
                <Input
                  type="text"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.currentTarget.value)}
                  placeholder="Input your email address in here"
                  className="bg-[#1A297A] mt-4 text-white"
                />
              </div>
              <div>
                <label className="font-bold">Messages</label>
                <textarea
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                  placeholder="Write your messages in here"
                  className="bg-[#1A297A] mt-4 w-full  placeholder:text-gray-400 rounded-lg duration-300 focus:shadow-md focus:shadow-i_blue text-base outline-none text-white py-2 md:py-4 px-3 resize-none"
                  rows={9}
                />
              </div>
              <button
                onClick={submit}
                className="text-white bg-[#CD7B00] hover:bg-[#CD7B00]/80 border-0 py-3 px-8  duration-300 rounded-lg md:w-fit text-sm md:text-lg w-full text-center float-right"
              >
                Send Messages
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
