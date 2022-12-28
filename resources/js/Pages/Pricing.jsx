import { Helmet } from "react-helmet-async";
import NavBar from "../Components/NavBar.jsx";
import QRCodeSVG from "qrcode.react";
import { DownloadSVG } from "../Helpers/DownloadQR.js";
import d3ToPng from "d3-svg-to-png";
import Standard from "../Layouts/Standard.jsx";

const Pricing = () => {
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
              <article className="mx-auto mt-12 w-full max-w-lg.5">
                <p className="py-4 font-light text-xl leading-9">
                  If we were to sum up what QR codes are in one sentence, it'd
                  be this:{" "}
                  <span className="font-normal">
                    QR Codes are barcodes on steroids, in every way.
                  </span>
                </p>
                <p className="py-4 font-light text-xl leading-9">
                  Where barcodes are one-dimensional and capable of generating
                  around 10 trillion unique codes, QR Codes are two-dimensional
                  with near an infinite number of unique codes. Where barcodes
                  are used predominantly for products and retail,{" "}
                  <strong className="font-normal">
                    QR Codes can be used for anything!
                  </strong>
                </p>
                <p className="py-4 font-light text-xl leading-9">
                  Sharing a website with many people? Offering WIFI access
                  safely and seamlessly? Setting up an easier way for diners to
                  order from the menu? Collecting feedback for a product?
                </p>
                <p className="py-4 font-light text-xl font-normal leading-9">
                  QR Codes are perfect for all of that and more.
                </p>
              </article>
            </section>
          </div>
        </main>
      </Standard>
    </>
  );
};

export default Pricing;
