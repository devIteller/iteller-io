import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const RISK_ASSESSMENT_AND_MANAGEMENT = () => {
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
          <object
            data="http://africau.edu/images/default/sample.pdf"
            type="application/pdf"
            width="100px"
            height="100px"
          >
            <p>
              Alternative text - include a link{" "}
              <a href="http://africau.edu/images/default/sample.pdf">
                to the PDF!
              </a>
            </p>
          </object>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RISK_ASSESSMENT_AND_MANAGEMENT;
