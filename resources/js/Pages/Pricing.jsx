import { Helmet } from "react-helmet-async";
import NavBar from "../Components/NavBar.jsx";
import QRCodeSVG from "qrcode.react";
import { DownloadSVG } from "../Helpers/DownloadQR.js";
import d3ToPng from "d3-svg-to-png";
import Standard from "../Layouts/Standard.jsx";

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Starter",
      cost: "Free",
      mainFeatures: [],
      generalFeatures: [],
      coa: "Create Free Account",
    },
    {
      title: "Plus",
      cost: "Free",
      mainFeatures: [],
      generalFeatures: [],
      coa: "Create Free Account",
    },
    {
      title: "Pro",
      cost: "Free",
      mainFeatures: [],
      generalFeatures: [],
      coa: "Create Free Account",
    },
    {
      title: "Enterprise",
      cost: "Free",
      mainFeatures: [],
      generalFeatures: [],
      coa: "Create Free Account",
    },
  ];
  return (
    <>
      <Helmet>
        <title>QRmory - Pricing</title>
      </Helmet>

      <Standard>
        <NavBar className={"text-qrmory-purple-500"} logoColour="white" />

        <main className="bg-qrmory-purple-800">
          <div className="mx-auto mt-16 mb-16 w-full max-w-7xl text-center text-stone-200">
            <section className="py-12 lg:px-12 rounded">
              <h3 className="text-xl uppercase font-bold">Account</h3>
              <h2 className="-mt-2 font-header text-4.5xl">Pricing</h2>
              <article className="mx-auto mt-12 flex flex-row gap-4 w-full justify-center italic">
                  Coming soon
                {/*{pricingTiers.map(x => {*/}
                {/*  return (*/}
                {/*  <div className='p-4 border-1 border-qrmory-purple-400 rounded-sm lg:w-3/12' key={x['title']}>*/}
                {/*    <p className='font-bold'>{x['title']}</p>*/}
                {/*    <div className=""></div>*/}
                {/*  </div>*/}
                {/*)})}*/}
              </article>
            </section>
          </div>
        </main>
      </Standard>
    </>
  );
};

export default Pricing;
