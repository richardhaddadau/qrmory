import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import DashNavBar from "../Components/DashNavBar";
import {
  FaChartPie,
  FaClipboardList,
  FaPlusCircle,
  FaThLarge,
  FaToolbox,
} from "react-icons/all";
import CreateACode from "../Components/Dashboard/CreateACode";
import DashboardMain from "../Components/Dashboard/DashboardMain";
import MyCodes from "../Components/Dashboard/MyCodes";
import Analytics from "../Components/Dashboard/Analytics";
import * as jose from "jose";

export default function Dashboard(props) {
  // States
  const [myCodes, setMyCodes] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(
    localStorage.getItem("qrus")
  );
  const [selectedComponent, setSelectedComponent] = useState(<DashboardMain />);

  const handleMyCodes = (codesData) => {
    setMyCodes(codesData);
  };

  const getCookie = (name) => {
    const completeCookie = document.cookie;
    const cookieArr = completeCookie.split(";");
    const cookieObj = {};

    cookieArr.map(
      (cookie) =>
        (cookieObj[cookie.split("=")[0].trim()] = cookie.split("=")[1].trim())
    );
    // console.log(cookieObj);
    return cookieObj[name];
  };

  useEffect(() => {
    console.log(getCookie("access.zn5rj95b"));
  });

  const sideNav = {
    dashboard: {
      title: "Dashboard",
      icon: <FaThLarge size={30} />,
      component: <DashboardMain />,
    },
    newCode: {
      title: "Create a Code",
      icon: <FaPlusCircle size={30} />,
      component: <CreateACode />,
    },
    myCodes: {
      title: "My Codes",
      icon: <FaToolbox size={30} />,
      component: <MyCodes setData={handleMyCodes} data={myCodes} />,
    },
    analytics: {
      title: "Analytics",
      icon: <FaChartPie size={30} />,
      component: <Analytics />,
    },
  };

  return (
    <>
      {/*{loggedInUser ? (*/}
      <>
        <Helmet>
          <title>Dashboard - QRmory</title>
          {/*TODO: Fill out description*/}
          <meta name="description" content="" />
        </Helmet>

        <div className="flex flex-col h-screen overflow-hidden">
          <DashNavBar props={props} />

          <main className="flex flex-col sm:flex-row h-full w-full overflow-hidden">
            <nav className="flex flex-row sm:flex-col justify-between h-16 sm:h-full w:full sm:w-12 md:w-40 bg-white transition-all duration-300">
              <div className="flex flex-row sm:flex-col xs:justify-evenly w-full">
                {Object.keys(sideNav).map((item) => {
                  return (
                    <div
                      className="cursor-pointer flex sm:grow sm:w-44 items-center xs:justify-center bg-white hover:bg-qrmory-purple-500 text-qrmory-purple-500 hover:text-white transition-all duration-300"
                      onClick={() => {
                        setSelectedComponent(
                          sideNav[item]["component"]
                            ? sideNav[item]["component"]
                            : null
                        );
                      }}
                      key={item}
                    >
                      <div className="flex items-center justify-center w-6 sm:w-12 h-20">
                        {sideNav[item]["icon"]}
                      </div>
                      <span className="hidden sm:block text-sm font-bold">
                        {sideNav[item]["title"]}
                      </span>
                    </div>
                  );
                })}
                <div className="hidden xs:flex cursor-pointer flex sm:grow sm:w-44 items-center xs:justify-center bg-white hover:bg-qrmory-purple-500 text-qrmory-purple-500 hover:text-white transition-all duration-300">
                  <div className="flex items-center justify-center w-6 sm:w-12 h-20">
                    <FaClipboardList size={30} />
                  </div>
                </div>
              </div>
              <div className="cursor-pointer px-3 hidden sm:flex flex-col justify-center h-20 bg-white hover:bg-qrmory-purple-500 text-qrmory-purple-500 hover:text-white transition-all duration-300">
                <div className="hidden md:flex flex-row gap-1 items-center justify-between w-full text-sm">
                  <span>Codes:</span>
                  <div className="flex flex-col md:flex-row items-center text-sm font-bold">
                    <span>2500</span>
                    <span>/</span>
                    <span>2500</span>
                  </div>
                </div>
                <div className="flex md:hidden flex-col items-center justify-center w-full text-sm">
                  <span>Quota</span>
                </div>
                <span className="text-sm text-right italic">Get More</span>
              </div>
            </nav>

            <section className="mx-auto p-2 sm:p-4 lg:p-8 grow w-full overflow-y-auto text-center text-qrmory-purple-500 bg-stone-100">
              {selectedComponent ? selectedComponent : <DashboardMain />}
            </section>
          </main>
        </div>
      </>
      {/*) : (*/}
      {/*  window.location.replace("/login")*/}
      {/*)}*/}
    </>
  );
}
