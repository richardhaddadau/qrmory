import Navigation from "./Navigation";
import Logo from "./Logo";
import NavBarAction from "./NavBarAction";
import ShortLogo from "./ShortLogo";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Helpers/firebase/Auth.js";
const NavBar = ({
  className = "",
  absolute = true,
  logoColour = "white",
  fullLogo = true,
  admin = false,
}) => {
  // States
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const navClasses =
    className +
    " " +
    (absolute ? "absolute" : "relative") +
    " py-4 px-8 top-0 flex flex-col items-center min-h-16 w-full z-50";

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // useEffect to monitor screen resize and if screen is large, setmenuOpen to false
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <body className={menuOpen ? "overflow-hidden" : null} />
      </Helmet>

      <nav className={navClasses}>
        <div className="grid grid-cols-12 col-span-12 w-full max-w-7xl">
          {/* Logo */}
          <section className="flex flex-row items-center col-span-10 lg:col-span-2">
            <a href="/">
              {fullLogo ? (
                <Logo className="w-28" logoColour={logoColour} />
              ) : (
                <ShortLogo className="w-12" logoColour={logoColour} />
              )}
            </a>
          </section>

          <>
            <section className="lg:hidden flex justify-end col-span-2 lg:col-span-10 z-50">
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
                "absolute block lg:hidden top-0 h-screen w-full bg-black opacity-50 transition-all duration-300 " +
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
              <section className="pb-2 lg:pb-0 pl-0 mb-4 lg:mb-0 lg:grow flex flex-col lg:flex-row items-center lg:col-span-6 border-b-1 lg:border-0">
                <Navigation />
              </section>

              <section className="flex flex-row items-center lg:justify-end col-span-12 lg:col-span-3">
                {/*<section className="flex flex-col lg:flex-row lg:items-center justify-end gap-2 w-full lg:w-fit">*/}
                {user ? (
                  user.displayName
                ) : (
                  <div className="pl-2 col-span-12 lg:pl-0 flex flex-col lg:flex-row gap-2 text-sm text-center text-white uppercase tracking-wide w-full">
                    <a
                      href="/login"
                      className="lg:mr-4 lg:px-3 py-1 hover:bg-qrmory-purple-400 hover:font-bold hover:transition-all duration-300"
                    >
                      Login
                    </a>
                    <a
                      href="/signup"
                      className="px-3 py-1 border-1 border-qrmory-purple-400 rounded-lg text-center hover:bg-qrmory-purple-400 hover:transition-all duration-300"
                    >
                      Create a free account
                    </a>
                  </div>
                )}
              </section>
            </section>
          </>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
