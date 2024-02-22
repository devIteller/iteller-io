import COTP from "../../Components/COTP/COTP";
import Header from "../../Components/Header/Header";

const CryptoOTCTradingPlatform = () => {
  return (
    <>
      <Header />
      <span className="md:w-1/3 w-full blur-[170px] z-10 absolute md:left-[-110px]  top-[-20px]">
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
        <div className="flex flex-col gap-6 lg:gap-12 z-50 lg:max-w-[1440px] w-[90%] md:px-10 py-10 items-center relative mt-28 text-white">
          <COTP
            title="Dashboard Overview"
            desc={`"Welcome to your personalized dashboard. Here, you can view your Total Balance at a glance, reflected in the central circular progress bar. Quick Links for Balances, Deposits, Withdrawals, and the IB Room enhance your trading efficiency. The Last Transactions list offers a quick glance at your recent activity."`}
            src="slide-one"
          />
          <COTP
            title="Balances"
            desc={`"Navigate through your diverse portfolio on the Balances page. It displays an array of assets including USDT, AED, and AUD, with clear conversion rates to USD. The Add Wallet and search functionalities are designed for your convenience, tailored to streamline your investment experience."`}
            src="slide-four"
          />
          <COTP
            title="Transactions"
            desc={`"The Transactions History panel logs all your financial movements with detailed information. Filter by Deposits, Withdrawals, and Exchanges to review your actions. Each entry is timestamped and marked by status, ensuring complete transparency in your trading journey."`}
            src="slide-five"
          />
          <COTP
            title="Deposit"
            desc={`"Our Deposit interface simplifies funding your account. Select your currency, choose the deposit type, and transfer with ease. The clear display of your balance and streamlined process ensures a secure and efficient transaction."`}
            src="slide-two"
          />
          <COTP
            title="Exchange"
            desc={`"Exchange currencies effortlessly in our dedicated Exchange section. Convert USDT to other currencies like AUD at competitive rates. The intuitive design provides a seamless trading experience, allowing you to capitalize on market opportunities rapidly."`}
            src="slide-three"
          />
          <COTP
            title="Referral Program"
            desc={`"Join our Referral Program and earn rewards by introducing new traders to our platform. Track your referrals, and view detailed reports to see how your efforts translate into rewards."`}
            src="slide-six"
          />
          <COTP
            title="Helpdesk Ticket Submission"
            desc={`"Our Helpdesk is ready to assist you with any inquiries. Submit a ticket with ease and choose from multiple language options for personalized support. Attach documents and describe your issue for a swift resolution."`}
            src="slide-seven"
          />
        </div>
      </div>

      <div className="text-white p-5 flex flex-col gap-5"></div>
    </>
  );
};

export default CryptoOTCTradingPlatform;
