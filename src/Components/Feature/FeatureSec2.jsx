import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatureItem from "./FeatureItem/FeatureItem";

const FeatureSec2 = () => {
  useEffect(() => {
    getCryptoPrices();
  }, []);

  const [Data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [BTCData, setBTCData] = useState({});

  const getCryptoPrices = () => {
    isLoading && setIsLoading(true);
    const today = new Date().toISOString().slice(0, 10);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const year = yesterday.getFullYear();
    let month = yesterday.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let day = yesterday.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    const yesterdayDate = `${year}-${month}-${day}`;
    try {
      const url = `https://data.fixer.io/api/timeseries?access_key=c7453b287a3d8a9572dfcb16b0da44c1&symbols=AED,AUD,USD,GBP&start_date=${yesterdayDate}&end_date=${today}&base=USD`;
      const urlBTC = `https://data.fixer.io/api/timeseries?access_key=c7453b287a3d8a9572dfcb16b0da44c1&symbols=USD&start_date=${yesterdayDate}&end_date=${today}&base=BTC`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const rates = data.rates;
          if (data.success) {
            const reformattedRates = {};

            for (const currency in rates[today]) {
              const todayPrice = rates[today][currency];
              const yesterdayPrice = rates[yesterdayDate][currency];
              const changePercent =
                ((todayPrice - yesterdayPrice) / yesterdayPrice) * 100;

              reformattedRates[currency] = {
                today_price: todayPrice,
                yesterday_price: yesterdayPrice,
                changes: changePercent.toFixed(2) + "%",
              };
            }
            setData(reformattedRates);
          } else {
            setIsError(true);
          }
        });

      fetch(urlBTC)
        .then((response) => response.json())
        .then((data) => {
          const rates = data.rates;
          if (data.success) {
            const reformattedRates = {};
            for (const currency in rates[today]) {
              const todayPrice = rates[today][currency];
              const yesterdayPrice = rates[yesterdayDate][currency];
              const changePercent =
              ((todayPrice - yesterdayPrice) / yesterdayPrice) * 100;
              
              reformattedRates[currency] = {
                today_price: todayPrice,
                yesterday_price: yesterdayPrice,
                changes: changePercent.toFixed(2) + "%",
              };
            }
            console.log(reformattedRates);
            setBTCData(reformattedRates);
            setIsLoading(false);
          } else {
            setIsError(true);
          }
        });
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  return (
    <section className="text-gray-600 body-font xl:pb-16 pb-5 flex justify-center">
      <div className="lg:max-w-[1440px] w-[90%] md:px-10 py-16 lg:py-24 flex flex-col justify-center items-center">
        <div className="flex flex-col w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white text-center">
            Markets
          </h1>
          {/* <div class="relative mb-6">
            <div>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33301 14.6025C3.74634 14.6025 0.833008 11.6892 0.833008 8.10254C0.833008 4.51587 3.74634 1.60254 7.33301 1.60254C10.9197 1.60254 13.833 4.51587 13.833 8.10254C13.833 11.6892 10.9197 14.6025 7.33301 14.6025ZM7.33301 2.60254C4.29967 2.60254 1.83301 5.06921 1.83301 8.10254C1.83301 11.1359 4.29967 13.6025 7.33301 13.6025C10.3663 13.6025 12.833 11.1359 12.833 8.10254C12.833 5.06921 10.3663 2.60254 7.33301 2.60254Z"
                    fill="#707070"
                  />
                  <path
                    d="M13.4401 15.9624C13.3867 15.9624 13.3334 15.9557 13.2867 15.949C12.9734 15.909 12.4067 15.6957 12.0867 14.7424C11.9201 14.2424 11.9801 13.7424 12.2534 13.3624C12.5267 12.9824 12.9867 12.769 13.5134 12.769C14.1934 12.769 14.7267 13.029 14.9667 13.489C15.2067 13.949 15.1401 14.5357 14.7601 15.1024C14.2867 15.8157 13.7734 15.9624 13.4401 15.9624ZM13.0401 14.429C13.1534 14.7757 13.3134 14.949 13.4201 14.9624C13.5267 14.9757 13.7267 14.849 13.9334 14.549C14.1267 14.2624 14.1401 14.0557 14.0934 13.9624C14.0467 13.869 13.8601 13.769 13.5134 13.769C13.3067 13.769 13.1534 13.8357 13.0667 13.949C12.9867 14.0624 12.9734 14.2357 13.0401 14.429Z"
                    fill="#707070"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="w-full ps-9 border-[#707070] border bg-[#171C38] rounded-lg py-2"
                placeholder="Search for your coin"
              />
            </div>
          </div> */}
          {!isError ? (
            isLoading ? (
              <h1 className="text-center">loading...</h1>
            ) : (
              <div className="text-white space-y-4">
                <FeatureItem
                  title="AED/USDT"
                  price={Data?.AED?.today_price}
                  changes={Data.AED?.changes}
                  icon="AED.svg"
                />
                <FeatureItem
                  title="AUD/USDT"
                  price={Data?.AUD?.today_price}
                  changes={Data?.AUD?.changes}
                  icon="AUD.svg"
                />
                <FeatureItem
                  title="GBP/USDT"
                  price={Data?.GBP?.today_price}
                  changes={Data?.GBP?.changes}
                  icon="GBP.svg"
                />
                <FeatureItem
                  title="USD/USDT"
                  price={Data?.USD?.today_price}
                  changes={Data?.USD?.changes}
                  icon="USD.svg"
                />
                <FeatureItem
                  title="BTC/USDT"
                  price={BTCData?.USD?.today_price}
                  changes={BTCData?.USD?.changes}
                  icon="BTC.png"
                />
              </div>
            )
          ) : (
            <h1 className="text-center">
              Error in Geting Prices ,Please Check Later...
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSec2;
