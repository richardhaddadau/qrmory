import { Helmet } from "react-helmet-async";
import NavBar from "../Components/NavBar.jsx";
import Standard from "../Layouts/Standard.jsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ReactSwitch from "react-switch";

const Pricing = () => {
  const [monthlyPricing, setMonthlyPricing] = useState(true);
  const pricingTiers = [
    {
      title: "Starter",
      costPayMonthly: 5.99,
      costPayAnnually: 4.99,
      mainFeatures: ["50 Dynamic QR Codes", "Unlimited Scans"],
      generalFeatures: [
        "Colour your QR",
        "Download in PNG, SVG and JPG Formats",
      ],
      coa: "Try the Starter",
    },
    {
      title: "Plus",
      costPayMonthly: 12.99,
      costPayAnnually: 8.99,
      mainFeatures: ["250 Dynamic QR Codes", "Unlimited Scans"],
      generalFeatures: [
        "Colour your QR",
        "Download in PNG, SVG and JPG Formats",
      ],
      coa: "Get the Plus",
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
      coa: "Buy the Pro",
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
      coa: "Contact Sales",
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

        <main className="pt-10 lg:px-7">
          <div className="mx-auto mt-16 w-full max-w-7xl text-center text-stone-200">
            <section className="py-12 px-5 md:px-10 rounded-none lg:rounded-xl bg-qrmory-purple-900">
              <h3 className="text-xl uppercase font-bold">Account</h3>
              <h2 className="-mt-2 font-header text-4.5xl">Pricing</h2>

              <div className="mt-12 flex flex-row justify-center items-center">
                <p className="mr-4">Monthly Billing</p>
                <ReactSwitch
                  checked={!monthlyPricing}
                  onChange={() => setMonthlyPricing(!monthlyPricing)}
                  onColor="#B66FD2"
                  uncheckedIcon={null}
                  checkedIcon={null}
                />
                <p className="ml-3">Yearly Billing</p>
              </div>

              {/* Free */}
              <div className="mt-5 p-4 border-2 border-qrmory-purple-600 bg-qrmory-purple-900 rounded-lg w-full shadow-2xl">
                <div className="mx-auto max-w-xs">
                  <div>
                    <p className="font-bold text-base">On the house</p>
                    <p className="mt-8 font-bold text-3xl text-slate-300">
                      Free
                    </p>
                    <p className="mb-8 font-light text-base text-slate-500">
                      Forever
                    </p>
                  </div>

                  <a href="/signup">
                    <button className="mb-8 p-2 w-full bg-qrmory-purple-300 hover:bg-qrmory-purple-200 rounded-lg text-qrmory-purple-900 transition-all">
                      Start Now for Free!
                    </button>
                  </a>

                  <p className="mb-2 font-light text-slate-400 text-left text-sm">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-1 mt-1 absolute text-qrmory-purple-300"
                    />
                    <p className="ml-5">2 Dynamic QR Codes</p>
                  </p>

                  <p className="mb-2 font-light text-slate-400 text-left text-sm">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-1 mt-1 absolute text-qrmory-purple-300"
                    />
                    <p className="ml-5">Colour your QR</p>
                  </p>

                  <p className="mb-2 font-light text-slate-400 text-left text-sm">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-1 mt-1 absolute text-qrmory-purple-300"
                    />
                    <p className="ml-5">Download in PNG, SVG and JPG Formats</p>
                  </p>
                </div>
              </div>

              {/* Other Tiers */}
              <article className="mx-auto lg:px-0 mt-4 flex flex-col lg:flex-row gap-4 w-full">
                {pricingTiers.map((x) => {
                  return (
                    <div
                      className="p-4 border-2 border-qrmory-purple-600 bg-qrmory-purple-900 rounded-lg lg:w-3/12 shadow-2xl"
                      key={x["title"]}
                    >
                      <div className="mx-auto max-w-sm">
                        <p className="font-bold text-base">{x["title"]}</p>
                        {monthlyPricing ? (
                          <div>
                            <p className="mt-8 font-bold text-3xl text-slate-300">
                              {x["costPayMonthly"] === "Custom"
                                ? x["costPayMonthly"]
                                : "$" + x["costPayMonthly"]}
                            </p>
                            <p className="mb-8 font-light text-base text-slate-500">
                              {x["costPayMonthly"] === "Free"
                                ? "Forever"
                                : x["costPayMonthly"] === "Custom"
                                ? "Get in touch for a quote"
                                : "Billed Monthly"}
                            </p>
                          </div>
                        ) : (
                          <div>
                            <p className="mt-8 font-bold text-3xl text-slate-300">
                              <span className="line-through text-rose-500">
                                {x["costPayMonthly"] === "Custom"
                                  ? null
                                  : "$" + x["costPayMonthly"]}
                              </span>{" "}
                              {x["costPayAnnually"] === "Custom"
                                ? x["costPayAnnually"]
                                : "$" + x["costPayAnnually"]}
                            </p>
                            <p className="mb-8 font-light text-base text-slate-500">
                              {x["costPayAnnually"] === "Free"
                                ? "Forever"
                                : x["costPayMonthly"] === "Custom"
                                ? "Get in touch for a quote"
                                : "Billed Annually"}
                            </p>
                          </div>
                        )}
                        <a href="/signup">
                          <button className="mb-8 p-2 w-full bg-qrmory-purple-300 hover:bg-qrmory-purple-200 rounded-lg text-qrmory-purple-900 transition-all">
                            {x["costPayMonthly"] === "Custom"
                              ? x["coa"]
                              : "Create a Free Account"}
                          </button>
                        </a>

                        {x["mainFeatures"].map((feature) => {
                          return (
                            <p
                              className="mb-2 font-light text-slate-400 text-left text-sm"
                              key={feature}
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-1 mt-1 absolute text-qrmory-purple-300"
                              />
                              <p className="ml-5">{feature}</p>
                            </p>
                          );
                        })}

                        {x["generalFeatures"].map((feature) => {
                          return (
                            <p
                              className="mb-2 font-light text-slate-400 text-left text-sm"
                              key={feature}
                            >
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-1 mt-1 absolute text-qrmory-purple-300"
                              />
                              <p className="ml-5">{feature}</p>
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </article>
              <p className="mt-8 text-lg">See Full Feature List</p>
            </section>
          </div>

          <section className="mx-auto mt-24 mb-16 px-2 lg:px-6 text-center text-qrmory-purple-800">
            <h2 className="-mt-2 font-header text-4.5xl">Full Feature List</h2>
          </section>
        </main>
      </Standard>
    </>
  );
};

export default Pricing;
