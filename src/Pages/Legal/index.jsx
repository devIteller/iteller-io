import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";

const Legal = () => {
  return (
    <>
      <PageTitle title="Legal" />
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
          <div className="p-7 bg-[#0C1237] flex flex-col lg:flex-row justify-between gap-4  ">
            <div className="flex h-fit gap-4 flex-col justify-between ">
              <h3 className="self-start text-2xl font-bold">Legal</h3>
              <div className="text-sm space-y-4">
                <p className="text-[#E8EAF2]">
                  Welcome to iTeller's Legal page. Here, you will find essential
                  information regarding the regulatory framework governing our
                  operations, our commitments to compliance, and legal
                  responsibilities both to our customers and regulatory
                  authorities.
                </p>

                <ul className="list-disc">
                  <li className="font-medium text-base ml-7">Licenses</li>
                  <p className="text-[#E8EAF2]">
                    Detailed information on iTeller’s licensing across multiple
                    jurisdictions, including Australia, the UK, and the UAE.
                    Each section would outline the specific regulatory body,
                    license numbers, and the scope of permitted activities.
                  </p>
                </ul>
                <ul className="list-disc">
                  <li className="font-medium text-base ml-7">
                    Terms of Service
                  </li>
                  <p className="text-[#E8EAF2]">
                    A comprehensive overview of the terms under which iTeller
                    provides services to its users. This section would include
                    user obligations, account management policies, and the
                    rights of both parties.
                  </p>
                </ul>
                <ul className="list-disc">
                  <li className="font-medium text-base ml-7">Privacy Policy</li>
                  <p className="text-[#E8EAF2]">
                    Our commitment to safeguarding user data, details on the
                    data we collect, how it's used, and the measures in place to
                    protect it. Also, information on user rights regarding their
                    personal information.
                  </p>
                </ul>
                <ul className="list-disc">
                  <li className="font-medium text-base ml-7">
                    Risk Disclosure
                  </li>
                  <p className="text-[#E8EAF2]">
                    An explanation of the inherent risks associated with
                    cryptocurrency trading and investment, urging users to
                    consider their financial situations and risk tolerance
                    before engaging in trading activities.
                  </p>
                </ul>
                <ul className="list-disc">
                  <li className="font-medium text-base ml-7">
                    AML and KYC Policies
                  </li>
                  <p className="text-[#E8EAF2]">
                    Description of iTeller’s Anti-Money Laundering and Know Your
                    Customer compliance processes designed to prevent financial
                    crime and ensure a secure trading environment.
                  </p>
                </ul>
                <ul className="list-disc">
                  <li className="font-medium text-base ml-7">
                    Intellectual Property
                  </li>
                  <p className="text-[#E8EAF2]">
                    Information regarding the ownership of content on iTeller's
                    platform, including trademarks, copyrights, and other
                    intellectual property rights.
                  </p>
                </ul>
                <ul className="list-disc">
                  <li className="font-medium text-base ml-7">
                    Dispute Resolution
                  </li>
                  <p className="text-[#E8EAF2]">
                    Procedures for addressing any disputes that arise between
                    iTeller and its users, detailing the process for complaints
                    and the available avenues for resolution.
                  </p>
                </ul>
                <ul className="list-disc">
                  <li className="font-medium text-base ml-7">
                    Contact Information
                  </li>
                  <p className="text-[#E8EAF2]">
                    How to contact iTeller for legal inquiries or issues,
                    including email addresses and ticket submission platform for
                    communications.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Legal;
