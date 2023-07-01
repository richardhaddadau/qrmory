import ShortLogo from "./ShortLogo";
import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { UserButton } from "@clerk/clerk-react";

const DashNavBar = ({ props }) => {
  return (
    <>
      <nav className="relative py-4 px-4 md:px-8 top-0 flex flex-row items-center justify-between min-h-16 w-full z-50 bg-qrmory-purple-800">
        <section className="flex flex-row items-center col-span-3">
          <a href="/">
            <ShortLogo className="w-10" />
          </a>
        </section>

        <section className="flex flex-row items-center justify-end col-span-3">
          {/* TODO: Action Logout */}
          <UserButton />
        </section>
      </nav>
    </>
  );
};

export default DashNavBar;
