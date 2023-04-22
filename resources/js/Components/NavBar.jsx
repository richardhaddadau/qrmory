import Navigation from "./Navigation";
import Logo from "./Logo";
import NavBarAction from "./NavBarAction";
import ShortLogo from "./ShortLogo";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const NavBar = ({
  className = "",
  absolute = true,
  logoColour = "white",
  fullLogo = true,
  admin = false,
}) => {
  // States
  const [menuOpen, setMenuOpen] = useState(false);

  const navClasses =
    className +
    " " +
    (absolute ? "absolute" : "relative") +
    " py-4 px-8 top-0 flex flex-col items-center min-h-16 w-full z-50";

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Helmet>
        <body className={menuOpen ? "overflow-hidden" : null} />
      </Helmet>

      <nav className={navClasses}>
        <div className="grid grid-cols-12 col-span-12 w-full max-w-7xl">
          {/* Logo */}
          <section className="flex flex-row items-center col-span-2">
            <a href="/">
              {fullLogo ? (
                <Logo className="w-28" logoColour={logoColour} />
              ) : (
                <ShortLogo className="w-12" logoColour={logoColour} />
              )}
            </a>
          </section>

          {admin ? null : (
            <>
              <section className="lg:hidden flex justify-end col-span-10 z-50">
                <div
                  className="cursor-pointer relative py-3 px-2 flex flex-col justify-between w-10 h-10 bg-white rounded"
                  onClick={handleMenu}
                >
                  <span
                    className={
                      (menuOpen ? "rotate-45 translate-y-1.75" : null) +
                      " block h-0.5 bg-qrmory-purple-900 transform transition-all duration-500"
                    }
                  ></span>
                  <span
                    className={
                      (menuOpen ? "opacity-0" : null) +
                      " block h-0.5 bg-qrmory-purple-900 transition-all duration-500"
                    }
                  ></span>
                  <span
                    className={
                      (menuOpen ? "-rotate-45 -translate-y-1.5" : null) +
                      " block h-0.5 bg-qrmory-purple-900 transition-all duration-500"
                    }
                  ></span>
                </div>
              </section>

              {/* Menu Underlay */}
              <div
                className={
                  "absolute block top-0 h-screen w-full bg-black opacity-50 transition-all duration-300 " +
                  (menuOpen ? "left-0" : "-left-full")
                }
                onClick={handleMenu}
              ></div>

              {/* Main Menu */}
              <section
                className={
                  "absolute p-4 pt-16 sm:p-6 lg:p-0 lg:relative flex flex-col lg:flex-row top-0" +
                  " h-screen lg:h-auto w-full lg:w-auto max-w-xs lg:max-w-none lg:col-span-10 bg-qrmory-purple-900" +
                  " lg:bg-transparent rounded-tr-xl lg:rounded-none transition-all duration-500 " +
                  (menuOpen ? "left-0" : "-left-full lg:left-0")
                }
              >
                <section className="pb-2 lg:pb-0 pl-2 lg:pl-0 mb-4 lg:mb-0 lg:grow flex flex-row items-center lg:col-span-6 border-b-1 lg:border-0">
                  <Navigation />
                </section>

                <section className="flex flex-row items-center justify-end col-span-12 lg:col-span-3">
                  <section className="flex flex-col lg:flex-row lg:items-center justify-end gap-2 w-full lg:w-fit">
                    <p className="text-qrmory-purple-300 italic">
                      Free accounts coming soon
                    </p>
                    {/*<NavBarAction*/}
                    {/*  value="Create a Free Account"*/}
                    {/*  destination="./register"*/}
                    {/*  className="bg-white lg:bg-qrmory-purple-300 hover:bg-white lg:hover:bg-qrmory-purple-400 text-qrmory-purple-900 lg:text-white font-medium border-qrmory-purple-300 shadow-lg shadow-qrmory-purple-900 lg:hover:translate-x-1 lg:hover:-translate-y-1"*/}
                    {/*/>*/}
                    {/*<NavBarAction value="Sign In" destination="/login" />*/}
                  </section>
                </section>

                {/*<button*/}
                {/*  className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white"*/}
                {/*  onClick={handleMenu}*/}
                {/*>*/}
                {/*  <span className="sr-only">Open main menu</span>*/}
                {/*  <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">*/}
                {/*    <span*/}
                {/*      aria-hidden="true"*/}
                {/*      className={*/}
                {/*        "block absolute h-0.5 w-5 bg-current transform transition" +*/}
                {/*        " duration-500 ease-in-out " +*/}
                {/*        menuOpen*/}
                {/*          ? "rotate-45"*/}
                {/*          : "-translate-y-1.5"*/}
                {/*      }*/}
                {/*    ></span>*/}
                {/*    <span*/}
                {/*      aria-hidden="true"*/}
                {/*      className={*/}
                {/*        "block absolute  h-0.5 w-5 bg-current transform transition" +*/}
                {/*        " duration-500 ease-in-out " +*/}
                {/*        menuOpen*/}
                {/*          ? "opacity-0"*/}
                {/*          : null*/}
                {/*      }*/}
                {/*    ></span>*/}
                {/*    <span*/}
                {/*      aria-hidden="true"*/}
                {/*      className={*/}
                {/*        "block absolute  h-0.5 w-5 bg-current transform  transition" +*/}
                {/*        " duration-500 ease-in-out " +*/}
                {/*        menuOpen*/}
                {/*          ? "-rotate-45"*/}
                {/*          : "translate-y-1.5"*/}
                {/*      }*/}
                {/*    ></span>*/}
                {/*  </div>*/}
                {/*</button>*/}

                {/*{props.auth.user ? (*/}
                {/*  <section className="flex flex-row items-center justify-end gap-2">*/}
                {/*    {props.auth.user ? "" : ""}*/}
                {/*    <NavBarAction value="Dashboard" destination="/dashboard" />*/}

                {/*    <NavBarAction value="Sign Out" destination="/logout" />*/}
                {/*  </section>*/}
                {/*) : (*/}
                {/*)}*/}
              </section>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
