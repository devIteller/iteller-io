import { Link } from "react-router-dom";
import DrawerItem from "./DrawerItem";
import PropTypes from "prop-types";

const Drawer = ({ isDrawerOpen, setDrawerOpen }) => {
  Drawer.propTypes = {
    isDrawerOpen: PropTypes.bool,
    setDrawerOpen: PropTypes.func,
  };
  return (
    <div>
      <div
        id="drawer-navigation"
        className={`fixed top-0 right-0 z-40 h-screen text-black p-4 overflow-y-auto transition-transform bg-white  w-64 ${
          !isDrawerOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        {/* <div className="flex gap-2 items-center">
          <img
            src="/Hero/avatar.png"
            className="w-12 rounded-full"
            alt="avatar"
          />
          <div>
            <h1 className="text-sm font-bold w-36 whitespace-nowrap text-ellipsis overflow-hidden">
              MohammadTaher Khayamyar
            </h1>
            <h3 className="text-xs">mtaher67@gmail.com</h3>
          </div>
        </div> */}
        <button
          onClick={setDrawerOpen}
          type="button"
          className="text-gray-400 bg-transparent rounded-lg text-sm w-2 h-2 absolute top-4 end-4 inline-flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <DrawerItem title="Home" active>
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.8464 6.22122L8.08954 14.6032C6.29341 16.0001 4.83655 18.9737 4.83655 21.2289V36.017C4.83655 40.647 8.60842 44.4389 13.2384 44.4389H36.3486C40.9787 44.4389 44.7505 40.647 44.7505 36.037V21.5083C44.7505 19.0935 43.134 16.0001 41.1583 14.6231L28.8248 5.98174C26.0309 4.02595 21.5405 4.12574 18.8464 6.22122Z"
                  stroke="#646464"
                  strokeWidth="2.99355"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.7935 36.4558V30.4688"
                  stroke="#646464"
                  strokeWidth="2.99355"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </DrawerItem>
            <DrawerItem
              title="Services"
              isDropDown
              dropDownItems={
                <div className="pl-10 flex flex-col gap-y-2 text-[10px] text-gray-400">
                  <Link
                    to="/Crypto-OTC-Trading-Platform"
                    rel="noopener noreferrer"
                  >
                    Crypto OTC Trading Platform
                  </Link>
                  <Link to="/Crypto-ATM-Machine" rel="noopener noreferrer">
                    Crypto ATM Machine
                  </Link>
                  <Link
                    // to="/Assured-APY"
                    rel="noopener noreferrer"
                  >
                    Assured APY Returns - Liquidity Investment
                  </Link>
                </div>
              }
            >
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.8452 30.3633C28.1589 30.3633 30.8452 27.677 30.8452 24.3633C30.8452 21.0496 28.1589 18.3633 24.8452 18.3633C21.5314 18.3633 18.8452 21.0496 18.8452 24.3633C18.8452 27.677 21.5314 30.3633 24.8452 30.3633Z"
                  stroke="#646464"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.84515 26.1232V22.6032C4.84515 20.5232 6.54515 18.8032 8.64515 18.8032C12.2652 18.8032 13.7452 16.2432 11.9252 13.1032C10.8852 11.3032 11.5052 8.96315 13.3252 7.92315L16.7852 5.94315C18.3652 5.00315 20.4052 5.56315 21.3452 7.14315L21.5652 7.52315C23.3652 10.6632 26.3252 10.6632 28.1452 7.52315L28.3652 7.14315C29.3052 5.56315 31.3452 5.00315 32.9252 5.94315L36.3852 7.92315C38.2052 8.96315 38.8252 11.3032 37.7852 13.1032C35.9652 16.2432 37.4452 18.8032 41.0652 18.8032C43.1452 18.8032 44.8652 20.5032 44.8652 22.6032V26.1232C44.8652 28.2032 43.1652 29.9232 41.0652 29.9232C37.4452 29.9232 35.9652 32.4832 37.7852 35.6232C38.8252 37.4432 38.2052 39.7632 36.3852 40.8032L32.9252 42.7832C31.3452 43.7232 29.3052 43.1632 28.3652 41.5832L28.1452 41.2032C26.3452 38.0632 23.3852 38.0632 21.5652 41.2032L21.3452 41.5832C20.4052 43.1632 18.3652 43.7232 16.7852 42.7832L13.3252 40.8032C11.5052 39.7632 10.8852 37.4232 11.9252 35.6232C13.7452 32.4832 12.2652 29.9232 8.64515 29.9232C6.54515 29.9232 4.84515 28.2032 4.84515 26.1232Z"
                  stroke="#646464"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </DrawerItem>
            <DrawerItem href={"#insights"} title="Insights">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.8651 19.9128C37.8651 19.9128 33.519 26.8066 28.1578 26.8066C22.7966 26.8066 18.4505 19.9128 18.4505 19.9128C18.4505 19.9128 22.7966 13.019 28.1578 13.019C33.519 13.019 37.8651 19.9128 37.8651 19.9128Z"
                  stroke="#646464"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="28.1578" cy="19.9131" r="1.875" fill="#646464" />
                <path
                  d="M15.3258 32.7451L11.9194 36.1516"
                  stroke="#646464"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.84015 45.2307C1.34739 43.7378 1.34739 41.3175 2.84015 39.8248L6.42313 36.2417C7.91598 34.7489 10.3363 34.7489 11.8291 36.2417C13.3219 37.7346 13.3219 40.1549 11.8291 41.6476L8.24616 45.2307C6.75331 46.7235 4.33291 46.7235 2.84015 45.2307Z"
                  stroke="#646464"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.6541 28.7047C47.5151 21.9082 46.5481 13.113 40.7529 7.31769C33.7969 0.361551 22.5189 0.361551 15.5629 7.31769C8.60681 14.2738 8.60681 25.5521 15.5629 32.5082C21.3855 38.3309 30.2364 39.2797 37.0458 35.3544"
                  stroke="#646464"
                  strokeWidth={3}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </DrawerItem>
            <DrawerItem href="/About-Us" title="About">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8452 42.2547C34.3869 42.2547 43.0119 33.6297 43.0119 23.0881C43.0119 12.5464 34.3869 3.92139 23.8452 3.92139C13.3035 3.92139 4.67853 12.5464 4.67853 23.0881C4.67853 33.6297 13.3035 42.2547 23.8452 42.2547Z"
                  stroke="#646464"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M23.8452 15.4214V25.0047"
                  stroke="#646464"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.8347 30.7544H23.8527"
                  stroke="#646464"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </DrawerItem>
            <DrawerItem href={"/Contact-Us"} title="Contact Us">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.6907 36.5829C44.6907 37.3014 44.531 38.0398 44.1917 38.7582C43.8525 39.4767 43.4134 40.1552 42.8347 40.7939C41.8568 41.8715 40.7791 42.6499 39.5617 43.1488C38.3643 43.6477 37.0671 43.9071 35.6701 43.9071C33.6345 43.9071 31.4592 43.4282 29.1641 42.4503C26.8691 41.4724 24.574 40.1552 22.2989 38.4988C20.0039 36.8224 17.8285 34.9664 15.753 32.9108C13.6975 30.8353 11.8415 28.66 10.185 26.3849C8.54855 24.1098 7.23139 21.8347 6.27345 19.5796C5.31552 17.3045 4.83655 15.1292 4.83655 13.0536C4.83655 11.6966 5.07603 10.3994 5.555 9.20194C6.03397 7.98456 6.79233 6.86697 7.85005 5.86912C9.1273 4.61183 10.5243 3.99316 12.0011 3.99316C12.5599 3.99316 13.1187 4.11291 13.6176 4.35239C14.1365 4.59187 14.5955 4.9511 14.9547 5.46998L19.5848 11.9959C19.944 12.4948 20.2034 12.9539 20.383 13.3929C20.5627 13.812 20.6624 14.2311 20.6624 14.6103C20.6624 15.0893 20.5227 15.5682 20.2433 16.0272C19.9839 16.4862 19.6047 16.9652 19.1258 17.4442L17.609 19.0208C17.3895 19.2403 17.2897 19.4997 17.2897 19.8191C17.2897 19.9787 17.3097 20.1184 17.3496 20.2781C17.4095 20.4377 17.4693 20.5575 17.5092 20.6772C17.8685 21.3358 18.4871 22.1939 19.3652 23.2317C20.2633 24.2695 21.2212 25.3272 22.259 26.3849C23.3367 27.4426 24.3744 28.4205 25.4322 29.3186C26.4699 30.1967 27.3281 30.7954 28.0066 31.1546C28.1064 31.1945 28.2261 31.2544 28.3658 31.3143C28.5255 31.3742 28.6851 31.3941 28.8648 31.3941C29.204 31.3941 29.4635 31.2744 29.683 31.0548L31.1997 29.5581C31.6987 29.0591 32.1776 28.68 32.6366 28.4405C33.0956 28.1611 33.5547 28.0214 34.0536 28.0214C34.4328 28.0214 34.8319 28.1012 35.271 28.2808C35.71 28.4604 36.169 28.7199 36.6679 29.0591L43.2737 33.749C43.7926 34.1083 44.1518 34.5274 44.3713 35.0263C44.5709 35.5252 44.6907 36.0241 44.6907 36.5829Z"
                  stroke="#646464"
                  strokeWidth="2.99355"
                  strokeMiterlimit="10"
                />
              </svg>
            </DrawerItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
