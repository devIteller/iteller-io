import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const SecurityCenter = () => {
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
        <div className="flex flex-col gap-y-6 lg:max-w-[1440px] z-50 w-[90%] px-3 md:px-10 py-10 items-center relative mt-28 lg:mt-24 text-[#EEEEEE]">
          <h1 className="text-3xl mb-2 font-bold float-left w-full">
            Security
          </h1>
          <div className="p-5 bg-[#101949] flex flex-col lg:flex-row items-center justify-between gap-4 ">
            <div className="flex h-fit gap-4 flex-col justify-between ">
              <h3 className="self-start text-2xl font-bold">
                Navigating the New Era of Finance
              </h3>
              <h5 className="text-sm">
                iTeller, safeguarding your digital and financial security is our
                top priority. Here, you will find comprehensive information
                about the security measures and protocols we use to ensure a
                safe trading environment for our users.
              </h5>
            </div>
            <img
              src="/SecurityCenter/revenue-operations.png"
              loading="lazy"
              alt="revenue operations collage"
              className="w-full"
            />
          </div>

          <div className="float-left w-full max-lg:mt-8 mt-5 ">
            <h1 className="text-3xl">
              <strong>Our Security Measures</strong>
            </h1>
          </div>
          <div className="space-y-7 ml-10 w-full">
            <ul className="list-disc">
              <li className="font-bold text-lg ml-5">Risk Disclosure</li>
              <p className="text-[#E8EAF2]">
                iTeller uses state-of-the-art encryption technologies to protect
                user data during transmission and storage.
              </p>
            </ul>
            <ul className="list-disc">
              <li className="font-bold text-lg ml-5">
                Two-Factor Authentication (2FA):
              </li>
              <p className="text-[#E8EAF2]">
                We mandate 2FA for all accounts, adding an extra layer of
                security at login and withdrawal stages.
              </p>
            </ul>
            <ul className="list-disc">
              <li className="font-bold text-lg ml-5">Continuous Monitoring:</li>
              <p className="text-[#E8EAF2]">
                Our security team continuously monitors for suspicious activity
                to provide proactive threat prevention.
              </p>
            </ul>
          </div>
          <div className="p-5 bg-[#101949] flex flex-col gap-y-4 mt-5">
            <h3 className="text-2xl font-bold">Compliance and Regulations</h3>
            <h5 className="text-sm">
              iTeller operates in strict compliance with regulatory authorities
              in Australia, the UK, and the UAE, ensuring adherence to the
              highest financial service standards. Our operations are regularly
              audited and certified by external and independent security experts
              to maintain these standards.
            </h5>
          </div>
          <div className="p-5 bg-[#101949] flex flex-col gap-y-4 w-full">
            <h3 className="text-2xl font-bold">User Security Tips</h3>
            <div className="text-sm">
              <p>
                • Learn how to secure your account more effectively with our
                detailed guide on best practices for digital security.
              </p>

              <p>
                • Stay informed about common threats and how to avoid them
                through our ongoing security updates and alerts.
              </p>
            </div>
          </div>
          <div className="p-5 bg-[#101949] flex flex-col w-full gap-y-4">
            <h3 className="text-2xl font-bold">
              If You Suspect a Security Breach
            </h3>
            <h5 className="text-sm">
              Immediate steps to take if you believe your account has been
              compromised, including how to contact our dedicated security
              response team.
            </h5>
          </div>
          <div className="p-5 bg-[#101949] flex flex-col w-full gap-y-4">
            <h3 className="text-2xl font-bold">Continual Improvement</h3>
            <h5 className="text-sm">
              Our commitment to continually enhancing our security measures to
              stay ahead of threats and ensure the highest level of protection
              for our users. For more detailed information and to stay updated
              on the latest security developments, visit our our educational hub
              and subscribe to our newsletter.
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SecurityCenter;
