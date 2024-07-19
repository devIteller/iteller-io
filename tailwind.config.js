/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#1A297A",
        i_blue: "#000520",
        i_orange: "#CD7B00",
      },
      backgroundImage: {
        contentSec: "url('/ContentSec/vector.png')",
        referral: "url('/Referral/Benefits.png')",
        referral_sm: "url('/Referral/Benefits_sm.png')",
        CryptoG: "linear-gradient(180deg, rgba(0, 0, 47, 0) 0%, #00002F 100%);",
        referralG: "linear-gradient(180deg, rgba(44, 44, 44, 0%) 0%, #18181B 100%);",
        referralLightG: "linear-gradient(180deg, rgba(241, 215, 137, 20%) 0%, rgba(241, 215, 137, 90%) 100%);"


      },
      boxShadow: {
        whyShadow: "0px 0px 10px 0px #00000066;",
      },
      animation: {
        scroll: "scroll 50s linear infinite;",
      },
      keyframes: {
        scroll: {
          "0%": { left: "0" },
          "100%": { left: "-100%" },
        },
      },
    },
  },
  plugins: [],
};
