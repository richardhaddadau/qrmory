import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

import { useUser } from "@clerk/clerk-react";

import {
  HiOutlineTemplate,
  HiOutlinePlusCircle,
  HiOutlineBriefcase,
  HiOutlineChartSquareBar,
  HiOutlineChartPie,
} from "react-icons/hi";

import DashNavBar from "../Components/DashNavBar";
import DashboardMain from "../Components/Dashboard/DashboardMain";
import CreateACode from "../Components/Dashboard/CreateACode";
import MyCodes from "../Components/Dashboard/MyCodes";
import Analytics from "../Components/Dashboard/Analytics";
import Quota from "../Components/Dashboard/Quota";

export default function Dashboard(props) {
  // States
  const [myCodes, setMyCodes] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(<DashboardMain />);

  const { isLoaded, isSignedIn, user } = useUser();

  // In case the user signs out while on the page
  if (!isLoaded || !isSignedIn) return null;

  const handleMyCodes = (codesData) => {
    setMyCodes(codesData);
  };

  useEffect(() => {
    // console.log(JSON.stringify(user, null, 2));
  }, []);

  const sideNav = {
    dashboard: {
      title: "Dashboard",
      icon: <HiOutlineTemplate size={30} />,
      component: <DashboardMain />,
    },
    newCode: {
      title: "Create a Code",
      icon: <HiOutlinePlusCircle size={30} />,
      component: <CreateACode />,
    },
    myCodes: {
      title: "My Codes",
      icon: <HiOutlineBriefcase size={30} />,
      component: <MyCodes setData={handleMyCodes} data={myCodes} />,
    },
    analytics: {
      title: "Analytics",
      icon: <HiOutlineChartSquareBar size={30} />,
      component: <Analytics />,
    },
  };

  return (
    <>
      <>
        <Helmet>
          <title>Dashboard - QRmory</title>
          {/*TODO: Fill out description*/}
          <meta name="description" content="" />
        </Helmet>

        <div className="flex flex-col h-screen overflow-hidden">
          <DashNavBar props={props} />

          <main className="flex flex-col sm:flex-row h-full w-full overflow-hidden">
            <nav className="flex flex-row sm:flex-col h-16 sm:h-full w-full sm:w-12 md:w-40 bg-white transition-all duration-300">
              <div className="flex flex-row sm:flex-col w-4/5">
                {Object.keys(sideNav).map((item) => {
                  return (
                    <div
                      className="cursor-pointer flex grow sm:w-44 items-center xs:justify-center hover:bg-qrmory-purple-800 text-qrmory-purple-800 hover:text-white transition-all duration-300"
                      onClick={() => {
                        setSelectedComponent(
                          sideNav[item]["component"]
                            ? sideNav[item]["component"]
                            : null
                        );
                      }}
                      key={item}
                    >
                      <div className="flex items-center justify-center w-7 sm:w-12 h-20">
                        {sideNav[item]["icon"]}
                      </div>
                      <span className="hidden sm:block text-sm font-bold">
                        {sideNav[item]["title"]}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-row sm:flex-col w-1/5">
                <div
                  className="cursor-pointer flex grow sm:w-44 items-center xs:justify-center hover:bg-qrmory-purple-800 text-qrmory-purple-800 hover:text-white transition-all duration-300"
                  onClick={() => setSelectedComponent(<Quota />)}
                >
                  <div className="flex items-center justify-center w-7 sm:w-12 h-20">
                    <HiOutlineChartPie size={30} />
                  </div>
                  <span className="hidden sm:block text-sm font-bold">
                    Quota
                  </span>
                </div>
              </div>
            </nav>

            <section className="mx-auto p-4 lg:p-8 grow w-full overflow-y-auto text-center text-qrmory-purple-500 bg-stone-100">
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
