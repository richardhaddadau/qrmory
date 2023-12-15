"use client";

import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import d3ToPng from "d3-svg-to-png";

import { DownloadSVG } from "../../../resources/js/Helpers/DownloadQR";
import WebsiteQR from "../../../resources/js/Components/Controls/WebsiteQR";
import FacebookQR from "../../../resources/js/Components/Controls/FacebookQR";
import InstagramQR from "../../../resources/js/Components/Controls/InstagramQR";
import TwitterQR from "../../../resources/js/Components/Controls/TwitterQR";
import YoutubeQR from "../../../resources/js/Components/Controls/YoutubeQR";
import TextQR from "../../../resources/js/Components/Controls/TextQR";

const QRCreator = () => {
  const [qrValue, setQRValue] = useState("Welcome to QRmory!");
  const [newQR, setNewQR] = useState(true);

  const [textValue, setTextValue] = useState("");
  const [qrControl, setQRControl] = useState(null);

  const [qrTitle, setQRTitle] = useState("Made with QRmory!");
  const [qrChanged, setQRChanged] = useState(true);

  // Data
  const suggestedTitles = [
    "New QRmory Code",
    "Made with QRmory",
    "QRmory is Awesome",
    "QRmory Code",
    "My New QR Code",
    "QR Codes are fun",
    "I Love QRmory",
  ];

  const qrTypes = {
    website: [
      "Website",
      "Link to a page or site",
      <WebsiteQR
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    facebook: [
      "Facebook",
      "Facebook page/group",
      <FacebookQR
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    instagram: [
      "Instagram",
      "Instagram account",
      <InstagramQR
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    twitter: [
      "Twitter",
      "Twitter account",
      <TwitterQR
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    youTube: [
      "YouTube",
      "YouTube video",
      <YoutubeQR
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    // email: [
    //     "Email",
    //     "Preset an email",
    //     <EmailQR setText={setTextValue}  setChanged={setQRChanged} setNewQR={setNewQR} />,
    // ],
    // socialMedia: [
    //     "Social Media",
    //     "Share your profiles",
    //     <SocialMediaQR setText={setTextValue}  setChanged={setQRChanged} setNewQR={setNewQR} />,
    // ],
    // eBusinessCard: ["E-Biz Card", "The modern business card"],
    // poll: ["Poll", "Run a quick poll"],
    // reviews: ["Reviews", "Collect customer reviews"],
    // event: ["Event", "Promote an event"],
    // document: ["Document", "Share a PDF document"],
    // audio: ["Audio", "Share an sound file"],
    // video: ["Video", "Share a quick video"],
    // phone: [
    //     "Phone",
    //     "Set up an easy call",
    //     <PhoneQR setText={setTextValue}  setChanged={setQRChanged} setNewQR={setNewQR} />,
    // ],
    // sms: [
    //     "SMS",
    //     "Preset an SMS",
    //     <SmsQR setText={setTextValue}  setChanged={setQRChanged} setNewQR={setNewQR} />,
    // ],
    text: [
      "Text",
      "Display a text message",
      <TextQR
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    // wifi: ["WiFi", "Share WiFi details"],
    // location: ["Location", "Share a map address"],
    // bitcoin: ["Bitcoin", "Quick Bitcoin payments"],
    // ethereum: ["Ethereum", "Quick Ethereum payments"],
  };

  useEffect(() => {
    const qrSelectors = document.querySelectorAll(".qr-selector");

    for (const item of qrSelectors) {
      item.classList.remove("active");
    }

    qrSelectors[0].classList.add("active");

    setQRControl(qrTypes["website"][2]);

    if (qrSelectors.length > 0) {
      for (const selector of qrSelectors) {
        selector.addEventListener("click", () => {
          const selectorIndex = selector.getAttribute("qr-types-selector");

          setTextValue("");

          for (const item of qrSelectors) {
            item.classList.remove("active");
          }

          selector.classList.add("active");

          setQRControl(qrTypes[selectorIndex][2]);
          setTextValue("");
          setQRChanged(true);
        });
      }
    }
  }, []);

  return (
    <section className="mx-auto mt-24 mb-16 px-2 lg:px-6 text-center text-qrmory-purple-800">
      <h2 className="font-header text-4.5xl">Start Creating</h2>
      <h3 className="text-xl uppercase">Go on! Give it a go</h3>

      <div className="py-16 flex lg:flex-row flex-col lg:items-stretch items-center gap-6 min-h-qr-card w-full">
        <div className="p-8 flex flex-col grow bg-white rounded-3xl shadow-xl shadow-stone-300">
          <div className="mb-4 pb-4 flex flex-row flex-wrap justify-start items-center content-end self-start border-b-2 border-b-stone-100 transition-all">
            {Object.keys(qrTypes).map((key, index) => {
              return (
                <div
                  className="py-2 px-5 cursor-pointer flex justify-center items-center m-1 rounded border bg-white border-qrmory-purple-500 hover:border-qrmory-purple-400 text-sm hover:bg-qrmory-purple-400 hover:text-white qr-selector transition-all duration-300"
                  key={qrTypes[key]}
                  data-selector={key}
                >
                  {qrTypes[key][0]}
                </div>
              );
            })}

            <p className="ml-2 inline text-black italic">more coming soon</p>

            {/*<div*/}
            {/*    className="self-start cursor-pointer py-2 m-1"*/}
            {/*    onClick={() =>*/}
            {/*        setQrOptionsOpen(!qrOptionsOpen)*/}
            {/*    }*/}
            {/*>*/}
            {/*    <FaGripVertical*/}
            {/*        color="black"*/}
            {/*        size={24}*/}
            {/*        className="inline"*/}
            {/*    />*/}
            {/*    <p className="ml-2 inline text-black">*/}
            {/*        {qrOptionsOpen ? "less" : "more"}{" "}*/}
            {/*        options*/}
            {/*    </p>*/}
            {/*</div>*/}
          </div>
          <div className="mx-auto flex flex-col grow justify-center w-full text-left">
            <label className="control-label">
              Enter QR Name (optional):
              <input
                type="text"
                className="block control-input"
                onChange={(el) => {
                  setQRTitle(el.target.value);
                  setNewQR(false);
                }}
                value={qrTitle}
              />
            </label>

            <div className="w-full flex justify-center">
              <div className="relative w-full">{qrControl}</div>
            </div>

            <button
              className="mt-8 py-2.5 px-8 border border-qrmory-purple-800 hover:border-qrmory-purple-400 bg-white hover:bg-qrmory-purple-400 w-full md:w-44 text-sm font-medium text-qrmory-purple-800 hover:text-white rounded uppercase font-semibold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
              onClick={() => {
                if (textValue.length > 0) {
                  setQRValue(textValue);
                  setQRChanged(false);
                }
              }}
            >
              Generate QR
            </button>

            {qrChanged && !newQR ? (
              <p className="mt-4 text-rose-500 italic">
                Click the button above to sync the new changes
              </p>
            ) : null}
          </div>
        </div>

        {/* QR Block */}
        <div className="pt-8 pb-10 px-10 flex flex-col justify-between w-qr-preview max-w-full bg-white rounded-3xl shadow-xl shadow-stone-300 text-center">
          <div className="">
            <h4 className="text-sm uppercase text-stone-500">Title</h4>

            <h5 className="text-base text-qrmory-purple-800 font-bold">
              {qrTitle || null}
            </h5>
          </div>

          <div className="my-16 mx-auto text-gray-600 dark:text-gray-600 text-sm">
            <QRCodeSVG
              id="final-qr"
              renderAs="svg"
              value={qrValue}
              fgColor={qrChanged ? "#78716c" : "#000000"}
              size={180}
              level="M"
            />
          </div>
          <button
            className={
              "mx-auto py-2.5 px-4 grow w-full rounded uppercase font-bold transition-all" +
              " duration-300" +
              (qrChanged
                ? " bg-stone-300 text-white"
                : " cursor-pointer bg-white hover:bg-qrmory-purple-400 border" +
                  " border-qrmory-purple-800 text-qrmory-purple-800 hover:text-white" +
                  " hover:-translate-y-1 hover:translate-x-1")
            }
            id="download-button"
            onClick={() => {
              const svgData = document.querySelector("#final-qr").outerHTML;
              DownloadSVG(svgData, qrTitle);
            }}
            disabled={qrChanged}
          >
            Download SVG
          </button>
          <div className="my-2 flex flex-row flex-nowrap gap-2 items-center w-full">
            <button
              className={
                "py-2.5 px-4 grow rounded uppercase font-bold transition-all" +
                " duration-300" +
                (qrChanged
                  ? " bg-stone-300 text-white"
                  : " cursor-pointer bg-white hover:bg-qrmory-purple-400 border" +
                    " border-qrmory-purple-500 text-qrmory-purple-800 hover:text-white" +
                    " hover:-translate-y-1 hover:translate-x-1")
              }
              id="download-button"
              onClick={() => {
                d3ToPng("#final-qr", qrTitle, {
                  format: "png",
                }).then((r) => console.log(r));
              }}
              disabled={qrChanged}
            >
              png
            </button>

            <button
              className={
                "py-2.5 px-4 grow rounded uppercase font-bold transition-all" +
                " duration-300" +
                (qrChanged
                  ? " bg-stone-300 text-white"
                  : " cursor-pointer bg-white hover:bg-qrmory-purple-400 border" +
                    " border-qrmory-purple-500 text-qrmory-purple-800 hover:text-white" +
                    " hover:-translate-y-1 hover:translate-x-1")
              }
              id="download-button"
              onClick={() => {
                d3ToPng("#final-qr", qrTitle, {
                  format: "jpg",
                }).then((r) => console.log(r));
              }}
              disabled={qrChanged}
            >
              jpg
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCreator;
