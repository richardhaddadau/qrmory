import { Helmet } from "react-helmet-async";
import NavBar from "../Components/NavBar.jsx";
import Standard from "../Layouts/Standard.jsx";
import { useState } from "react";

const Pricing = () => {
  const [monthlyPricing, setMonthlyPricing] = useState(true);
  const pricingTiers = [
    {
      title: "Free",
      costPayMonthly: "Free",
      costPayAnnually: "Free",
      mainFeatures: ["2 Dynamic QR Codes", "50,000 Scans"],
      generalFeatures: [
        "Colour your QR",
        "Download in PNG, SVG and JPG Formats",
      ],
      coa: "Create Free Account",
    },
    {
      title: "Starter",
      costPayMonthly: 5.99,
      costPayAnnually: 4.99,
      mainFeatures: ["50 Dynamic QR Codes", "Unlimited Scans"],
      generalFeatures: [
        "Colour your QR",
        "Download in PNG, SVG and JPG Formats",
      ],
      coa: "Create Free Account",
    },
    {
      title: "Plus",
      costPayMonthly: 12.99,
      costPayAnnually: 8.99,
      mainFeatures: ["250 Dynamic QR Codes", "Unlimited Scans"],
      generalFeatures: [
        "Colour your QR",
        "Download in PNG, SVG and JPG Formats",
        "Teams coming soon",
      ],
      coa: "Create Free Account",
    },
    {
      title: "Pro",
      costPayMonthly: 34.99,
      costPayAnnually: 29.99,
      mainFeatures: [
        "500 Dynamic QR Codes",
        "Unlimited Scans",
        "Bulk QR Creation",
      ],
      generalFeatures: [
        "Colour your QR",
        "Download in PNG, SVG and JPG Formats",
        "Teams coming soon",
      ],
      coa: "Create Free Account",
    },
    {
      title: "Enterprise",
      costPayMonthly: "Custom",
      costPayAnnually: "Custom",
      mainFeatures: [
        "Unlimited Dynamic QR Codes",
        "Unlimited Scans",
        "Bulk QR Creation",
      ],
      generalFeatures: [
        "Colour your QR",
        "Download in PNG, SVG and JPG Formats",
        "Teams coming soon",
      ],
      coa: "Create Free Account",
    },
  ];
  return (
    <>
      <Helmet>
        <title>QRmory - Pricing</title>
      </Helmet>

      <Standard>
        <NavBar
          className={"bg-qrmory-purple-800 text-qrmory-purple-500"}
          logoColour="white"
        />

        <main className="pt-10 px-8">
          <div className="mx-auto mt-16 w-full max-w-7xl text-center text-stone-200">
            <section className="py-12 lg:px-12 rounded-xl bg-qrmory-purple-900">
              <h3 className="text-xl uppercase font-bold">Account</h3>
              <h2 className="-mt-2 font-header text-4.5xl">Pricing</h2>
              <article className="mx-auto mt-12 flex flex-row gap-2 w-full">
                {pricingTiers.map((x) => {
                  return (
                    <div
                      className="p-4 border-2 border-qrmory-purple-700 rounded-lg lg:w-3/12 shadow-lg"
                      key={x["title"]}
                    >
                      {monthlyPricing ? (
                        <div>
                          <p className="font-bold text-base">{x["title"]}</p>
                          <p className="mt-8 font-bold text-3xl text-slate-300">
                            {x["costPayMonthly"]}
                          </p>
                          <p className="mb-8 font-light text-base text-slate-500">
                            {x["costPayMonthly"] === "Free"
                              ? "Forever"
                              : "Billed Monthly"}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="mt-8 font-bold text-3xl text-slate-300">
                            {x["costPayAnnually"]}
                          </p>
                          <p className="mb-8 font-light text-base text-slate-500">
                            {x["costPayAnnually"] === "Free"
                              ? "Forever"
                              : "Billed Annually"}
                          </p>
                        </div>
                      )}
                      <button className="mb-8 p-2 w-full bg-qrmory-purple-300 hover:bg-qrmory-purple-200 rounded-lg text-qrmory-purple-900 transition-all">
                        Sign Up
                      </button>

                      {x["mainFeatures"].map((feature) => {
                        return (
                          <p
                            className="font-light text-slate-400 text-left text-sm leading-loose"
                            key={feature}
                          >
                            {feature}
                          </p>
                        );
                      })}

                      {x["generalFeatures"].map((feature) => {
                        return (
                          <p
                            className="font-light text-slate-400 text-left text-sm leading-loose"
                            key={feature}
                          >
                            {feature}
                          </p>
                        );
                      })}
                      <div className=""></div>
                    </div>
                  );
                })}
              </article>
            </section>
          </div>
        </main>
      </Standard>
    </>
  );
};

export default Pricing;
