"use client";

import { useEffect, useState } from "react";
import d3ToPng from "d3-svg-to-png";

import { DownloadSVG } from "@/helpers/DownloadQR";
import { useQRCode } from "next-qrcode";
import QRWebsites from "@/controls/QRWebsites";
import QRFacebook from "@/controls/QRFacebook";
import QRInstagram from "@/controls/QRInstagram";
import QRTwitter from "@/controls/QRTwitter";
import QRYoutube from "@/controls/QRYoutube";
import QRText from "@/controls/QRText";

const QRCreator = () => {
  // Early States
  const [qrValue, setQRValue] = useState("Welcome to QRmory!");
  const [newQR, setNewQR] = useState(true);

  const [textValue, setTextValue] = useState("");

  const [qrTitle, setQRTitle] = useState("Made with QRmory!");
  const [qrChanged, setQRChanged] = useState(true);

  const [activeSelector, setActiveSelector] = useState("website");

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
      <QRWebsites
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    facebook: [
      "Facebook",
      "Facebook page/group",
      <QRFacebook
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    instagram: [
      "Instagram",
      "Instagram account",
      <QRInstagram
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    twitter: [
      "Twitter",
      "Twitter account",
      <QRTwitter
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    youTube: [
      "YouTube",
      "YouTube video",
      <QRYoutube
        setText={setTextValue}
        setChanged={setQRChanged}
        setNewQR={setNewQR}
      />,
    ],
    // email: [
    //     "Email",
    //     "Preset an email",
    //     <QREmail setText={setTextValue}  setChanged={setQRChanged} setNewQR={setNewQR} />,
    // ],
    // socialMedia: [
    //     "Social Media",
    //     "Share your profiles",
    //     <QRSocialMedia setText={setTextValue}  setChanged={setQRChanged} setNewQR={setNewQR} />,
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
    //     <QRPhone setText={setTextValue}  setChanged={setQRChanged} setNewQR={setNewQR} />,
    // ],
    // sms: [
    //     "SMS",
    //     "Preset an SMS",
    //     <QRSms setText={setTextValue}  setChanged={setQRChanged} setNewQR={setNewQR} />,
    // ],
    text: [
      "Text",
      "Display a text message",
      <QRText
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

  // Late States
  const [qrControl, setQRControl] = useState(qrTypes.website[2]);
  const [qrSVG, setQRSVG] = useState(null);

  // QR Element
  const { SVG } = useQRCode();

  useEffect(() => {
    setQRSVG(document.querySelector("#final-qr.div.svg"));
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
                  className={`${
                    activeSelector === key
                      ? "bg-qrmory-purple-800 text-white"
                      : "bg-white hover:bg-qrmory-purple-400 border-qrmory-purple-500 hover:border-qrmory-purple-400 hover:text-white"
                  } qr-selector cursor-pointer m-1 py-2 px-5 flex justify-center items-center rounded border text-sm transition-all duration-300`}
                  key={qrTypes[key]}
                  data-selector={key}
                  onClick={() => {
                    setTextValue("");
                    setActiveSelector(key);
                    setQRControl(qrTypes[key][2]);
                    setQRChanged(true);
                  }}
                >
                  {qrTypes[key][0]}
                </div>
              );
            })}

            <p className="ml-2 inline text-black italic">more coming soon</p>
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

          <div
            id={`final-qr`}
            className="my-16 mx-auto text-gray-600 dark:text-gray-600 text-sm"
          >
            <SVG
              text={qrValue}
              options={{
                errorCorrectionLevel: "M",
                color: { dark: qrChanged ? "#78716c" : "#000000" },
                width: 180,
                margin: 1,
              }}
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
              const svgData = document.querySelector("#final-qr div svg");

              console.log(svgData);
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
