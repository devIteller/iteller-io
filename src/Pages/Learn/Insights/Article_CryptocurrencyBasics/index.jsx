import React, { useEffect } from "react";
import Footer from "../../../../Components/Footer/Footer";
import { RefferalFAQ } from "../../../../Components/LocalFAQ/RefferalFAQ";
import PageTitle from "../../../../Components/PageTitle";
import Header from "../../../../Components/Header/Header";
import { Container } from "../../../../Components/Container";

export const Article_CryptocurrencyBasics = () => {
  useEffect(() => {
    setTimeout(() => {
      //   window.scrollTo(0, 0);
    }, 300);
  }, []);

  return (
    <>
      <PageTitle title="iTeller : Cryptocurrency Basics" />
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
      <Container className="lg:mt-5">
        <div className="rounded-lg bg-[#090E2B] md:px-10 p-5 gap-3">
          <div>
            <h1 className="text-lg lg:text-2xl mb-2 font-bold  w-full">
              Cryptocurrency Basics
            </h1>
            <p className="text-sm lg:text-base">
              Cryptocurrency is reshaping the global financial landscape,
              offering a secure, digital, and decentralized form of currency
              that is gaining traction worldwide. Unlike traditional currencies
              controlled by governments or banks, cryptocurrencies are powered
              by blockchain technology—a revolutionary digital ledger that
              ensures transparency, security, and efficiency in transactions.
            </p>
            <h1 className="text-lg lg:text-2xl mt-6 mb-2 font-bold  w-full">
              What is Cryptocurrency?
            </h1>
            <p className="text-sm lg:text-base">
              Cryptocurrency is a digital or virtual form of currency that uses
              cryptography for security. It operates independently of any
              central authority, making it decentralized. This means that
              cryptocurrencies are not regulated or controlled by governments or
              financial institutions. Instead, they rely on blockchain
              technology, which records every transaction in a secure,
              transparent, and immutable manner.
            </p>
            <h1 className="text-lg lg:text-2xl mt-6 mb-2 font-bold  w-full">
              Blockchain Technology
            </h1>
            <p className="text-sm lg:text-base">
              At the heart of cryptocurrency lies blockchain technology. A
              blockchain is a distributed ledger that records all transactions
              across a network of computers (nodes). Each transaction is grouped
              into a block, which is then added to a chain of previous blocks,
              creating a chronological and tamper-proof record. This
              decentralized system ensures that once a transaction is recorded,
              it cannot be altered or deleted, providing unparalleled security
              and transparency. Blockchain technology is not just about
              cryptocurrencies; its potential applications extend far beyond.
              For instance, it is expected that by 2027, blockchain could
              prevent $31 billion in food fraud annually by enhancing supply
              chain transparency. Additionally, approximately 10% of global GDP
              is expected to be stored on blockchain by the same year,
              highlighting its transformative potential in the global economy.
            </p>
            <h1 className="text-lg lg:text-2xl mt-6 mb-2 font-bold  w-full">
              How to Use Cryptocurrencies
            </h1>
            <h3>
              Using cryptocurrencies is straightforward and can be broken down
              into a few key steps:
            </h3>
            <div className="ml-8">
              <ul className="list-disc mt-3 space-y-4">
                <li>
                  <h1 className="text-lg lg:text-xl mr-1 font-medium ">
                    Acquiring Cryptocurrencies:
                  </h1>
                  <p>
                    Cryptocurrencies can be acquired through exchanges, mining,
                    or as payment for goods and services. These digital assets
                    can be bought with traditional currencies or other
                    cryptocurrencies on various platforms.
                  </p>
                </li>
                <li>
                  <h1 className="text-lg lg:text-xl mr-1 font-medium ">
                    Storing Cryptocurrencies:
                  </h1>
                  <p>
                    Once acquired, cryptocurrencies are stored in digital
                    wallets. These wallets can be hardware-based (physical
                    devices) or software-based (applications), providing users
                    with secure storage for their digital assets.
                  </p>
                </li>
                <li>
                  <h1 className="text-lg lg:text-xl mr-1 font-medium ">
                    Transacting with Cryptocurrencies:
                  </h1>
                  <p>
                    Cryptocurrencies can be used to make purchases, transfer
                    money, or invest in various projects. Blockchain technology
                    ensures that these transactions are fast, secure, and
                    transparent. For example, the average transaction fee on the
                    Bitcoin network is around $3, making it highly
                    cost-effective for large transactions. Moreover, blockchain
                    transactions are four times faster than traditional banking
                    systems, ensuring quick and efficient payments.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
