import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";

const CustomerAgreement = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);
  const CAC = [
    {
      title: (
        <span>
          Customer Agreement of
          <a href="https://iTeller.io" className="text-[#CD7B00] mx-1">
            iTeller.io
          </a>
          website
        </span>
      ),
      desc: "By using this website, you agree with the Terms of Use. Group of Companies (hereinafter - iTeller) reserves the right at any time in its sole discretion to modify any provisions of these Terms of Use without notice. You are responsible for periodically checking these Terms of Use for changes. Continued use of the website after the posting of changes constitutes your acceptance of these changes. If you disagree with these terms - do not use the site.",
    },
    {
      title: "Website ownership",
      desc: `This website is the property of iTeller Ltd (the Company registered in UK under reg. No 13756061), iTeller Pty Ltd (the Company registered in Australia under reg. Νο 650348842) and iTeller Commercial Brokers LLC (the Company under reg. No 1866391). Any download or any other kind of copying of software or materials on the website shall not be construed as granting you either expressed or implied rights or licenses. Any materials downloaded by you from this website becomes the property of iTeller, and can be used by iTeller for all purposes not prohibited by law and may also be published by iTeller including the transfer of their existing legislative or supervisory authority under whose jurisdiction the iTeller is.
    Teller reserves all rights relating to copyright and the use of trademarks, and exercising those rights in full and within the limits of applicable law. The Company monitors compliance with copyright and other rights, the violation of which is punishable bylaw.`,
    },
    {
      title: "Services & Products",
      desc: `The exact List of our products and services is specified on this Website. All information provided on this Website in any case should not be understood as a public offer or any kind of agreement between you and the Company working under trademarkiTeller. If you want to buy any product or receive any service from us, we should conclude a separate agreement.`,
    },
    {
      title: "Access to the website",
      desc: `This website or any information or materials contained herein are not directed or intended for distribution to or use by, any person or entity who is a citizen, resident or located in any Jurisdiction in which such distribution, use, publication, or the ability to access contrary to the law or regulations, or which prescribes iTeller or any of its affiliates or otherwise related entities meet the requirements for registration or licensing within such jurisdiction.`,
    },
    {
      title: "The copyright",
      desc: `Unless otherwise specified, the materials in this website, including (but not limited to) any graphic design, text, audio-visual and audio content, images and graphics are the exclusive property iTeller. Unless otherwise stated, these materials may not be copied, transmitted, distributed, reproduced, sold, modifed, displayed, saved for later use, or use any other means, in whole or in part in any form or by any means, without the prior written consent of iTeller.`,
    },
  ];
  const CAC2 = [
    {
      title: "Links to websites of third parties",
      desc: `Links to websites of third parties are provided for your convenience only. iTeller has no control over the content of these websites owned or operated by third parties. Using these links, you will leave this website. iTeller disclaims all warranties, either expressed or implied, concerning the content of such websites, including the adequacy, accuracy, timeliness or completeness of the materials therein, for any particular purpose. The company is not responsible if these websites violate the rights of any third party, including copyright and trademark contain viruses or other harmful elements. iTeller cannot guarantee the authenticity of the documents posted on the Internet. Links to websites of third party do not constitute endorsement of opinions, ideas, products, information, or services offered on such sites, and therefore iTeller is not liable for any third-party websites.`,
    },
    {
      title: "Security",
      desc: `Please note that the information transmitted by email is never completely confidential and secure. Sending important and confidential unencrypted e-mail messages, you assume the risks associated with the fact that any message or information posted on the website may be read or intercepted by others.`,
    },
    {
      title: "Privacy",
      desc: `iTeller pledges to keep your personal information. iTeller and its affiliates may share this personal information with each other and will not disclose it to third parties, except if it is required by applicable law or court order. Tracking system for visitors of the website may also collect information about the pages you visit, how you heard about our website, about the frequency of visits, etc. Collected information is used to improve our website, and to contact you in any suitable way to keep you informed about what, in our opinion, may be of interest for you.`,
    },
  ];
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
          <h1 className="text-2xl text-start w-full z-50 font-bold">
            Customer Agreement
          </h1>
          <img
            src="/CustomerAgreement/CustomerAgreement.png"
            className="z-50 w-full"
            loading="lazy"
            alt="Customer Agreement"
          />
          {CAC.map((pp, index) => {
            return (
              <div
                key={index}
                className=" w-full z-50 odd:bg-[#0C1237] even:bg-[#101949] p-5 space-y-4"
              >
                <h1 className="text-xl font-bold">{pp.title}</h1>
                <h3 className="text-[#E8EAF2] text-sm">{pp.desc}</h3>
              </div>
            );
          })}
          <div className=" w-full z-50 bg-[#1A297A] p-5 space-y-4">
            <h1 className="text-xl font-bold text-[#CD7B00]">
              Warranty and limitation of liability
            </h1>
            <h3 className="text-[#E8EAF2] text-sm">
              <p>
                Materials of web pages available to the user &quot;as is&quot;.
                iTeller does not guarantee the accuracy of the materials
                provided herein, directly or indirectly, for any particular
                purpose and expressly disclaims any warranty of fitness for a
                particular purpose. iTeller is not liable for any loss or damage
                resulting from the use of information released on this website
                by third party. Despite the fact that every effort is made to
                ensure the accuracy of information posted on the website,
                iTeller can not and will not guarantee the accuracy,
                reliability, timeliness or completeness of any information or
                data made available to you for any purpose. Neither iTeller, nor
                any of its affiliates, directors, officers or employees, nor any
                independent agents or distributors are not liable for any loss
                or damage resulting from errors or failure in the operation of
                this website, or as a result of acts or omissions of any other
                person involved in the creation, production and implementation
                of the website, or if the contained data are not available for
                you, or for any other reason related to access, inability to
                access or use website and of any material regard less of whether
                the iTelleror software providers or service providerscontrol
                circumstances, this impacting or not. It is the client&apos;s
                responsibility to input the correct address, recipient and
                banking information when using our services. Any mistake will
                result in lost funds and iTeller and its partners are not
                responsible in any way. iTeller takes all of the precautions to
                work with the best in the industry so our security is of the
                utmost quality for our users. Ultimately iTeller is not
                responsible breaches of its obligations that arise from causes
                outside the sphere of its foreseeable control or events of force
                majeure.&#8232;Under no circumstances or on any grounds at law
                or equity, whether the violation of the provisions of the
                contract, negligence or other wrongful conduct, direct
                obligation or any other basis, iTeller shall not be liable for
                any indirect, consequential, incidental or punitive damages in
                connection with the use or inability to use this website or any
                part of it, even if the company iTeller has been advised of the
                possibility of such damages.&#8232;All data presented on the
                website are for informational purposes only and, therefore,
                cannot be taken as an offer or invitation for proposals
                addressed to anyone was out of the jurisdiction in which such
                offer or invitation is prohibited, as well as to whom direction
                of such offer or invitation would be unlawful, as well as should
                not be construed as a recommendation to buy, sell or otherwise
                any action with whatsoever specific investments. For the
                decision to invest is advised to obtain specific advice from
                appropriate experts on investment, financial, legal and tax
                matters.&#8232;No material from this website should not be
                construed and interpreted as investment advice by the Company,
                as well as any of its affiliates, directors, officers and
                employees. The nature of investing in financial instruments is
                that they are only suitable for those customers who:&#8232;Are
                well versed in matters ofinvestment;&#8232;are willing to take
                economic risks of aninvestment;&#8232;understand what risks are
                associated with a particularinstrument;&#8232;believe that a
                particular type of investment is suitable for their specific
                objectives and financial needs. It is recommended to
                nonprofessional investors who decided to invest in financial
                instruments, to invest only a part of the funds intended for
                long-term investments. In addition, before making any investment
                in financial instruments all investors are urged to consult with
                a professional investment adviser.
              </p>
            </h3>
          </div>
          {CAC2.map((pp, index) => {
            return (
              <div
                key={index}
                className=" w-full z-50 odd:bg-[#0C1237] even:bg-[#101949] p-5 space-y-4"
              >
                <h1 className="text-xl font-bold">{pp.title}</h1>
                <h3 className="text-[#E8EAF2] text-sm">{pp.desc}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerAgreement;
