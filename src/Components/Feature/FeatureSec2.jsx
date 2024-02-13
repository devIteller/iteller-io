import FeatureItem from "./FeatureItem/FeatureItem";

const FeatureSec2 = () => {
  return (
    <section className="text-white body-font flex justify-center items-center pt-10">
      <div className="flex max-lg:flex-wrap justify-center items-center md:px-10 lg:max-w-[1440px] w-[90%] flex-wrap flex-row-reverse">
        <div className="flex flex-col flex-wrap h-full gap-6  lg:w-1/2  lg:text-left text-center lg:pl-20">
          <FeatureItem
            icon="Spot"
            aos={"fade-rleft"}
            title={<strong>Spot & Derivatives Trading</strong>}
            desc="Providing a robust platform for direct cryptocurrency transactions with fiat currency, iTeller enables a seamless exchange experience, featuring spot and derivatives trading tailored to individual and institutional clients."
          />
          <FeatureItem
            icon="money"
            aos={"fade-left"}
            title={<strong>Fiat Integration</strong>}
            desc="iTeller bridges the traditional and digital finance worlds, offering a secure and streamlined platform for clients to manage fiat-to-crypto transactions, simplifying the entry into the cryptocurrency market."
          />
          <FeatureItem
            icon="Structured"
            aos={"fade-left"}
            title={<strong>Structured Products</strong>}
            desc="Our platform offers a variety of structured financial products, allowing clients to customize investment solutions that align with their unique risk-return profiles, thereby enhancing their investment potential in the digital asset space."
          />
          <FeatureItem
            icon="Direct"
            aos={"fade-left"}
            title={<strong>Direct Trading Access</strong>}
            desc="iTeller grants clients direct access to the cryptocurrency market with fiat currency, ensuring quick and efficient trades, underpinned by robust security measures and an intuitive user interface for optimal trading execution."
          />
        </div>
        <div className="lg:w-1/2 w-full max-lg:mt-6">
          <img
            alt="vector_2"
            className="h-64 md:h-[500px] lg:h-[620px]  w-full"
            src="/Feature/vector_2.png"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSec2;
