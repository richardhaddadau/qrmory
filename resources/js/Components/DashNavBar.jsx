import ShortLogo from "./ShortLogo";
import { FaPowerOff } from "react-icons/all";
import { Link } from "react-router-dom";

const DashNavBar = ({ props }) => {
  return (
    <>
      <nav className="relative py-4 px-4 md:px-8 top-0 flex flex-row items-center justify-between min-h-16 w-full z-50 bg-qrmory-purple-500">
        <section className="flex flex-row items-center col-span-3">
          <a href="/">
            <ShortLogo className="w-10" />
          </a>
        </section>

        <section className="flex flex-row items-center justify-end col-span-3">
          {/* TODO: Action Logout */}
          <Link to="/logout" method={"post"} as={"button"}>
            <FaPowerOff
              color={"white"}
              size={20}
              className="cursor-pointer hidden xs:flex"
              title={"Sign out"}
            />
            <article
              className={
                "py-1 px-4 flex xs:hidden border-1 border-white hover:bg-white" +
                " rounded tracking-widest uppercase text-sm text-white hover:text-qrmory-purple-500" +
                " font-medium hover:translate-x-1 hover:-translate-y-1 transition-all duration-300 "
              }
              onClick={async () => {
                // console.log(await faunaDriver.LogOut());
                localStorage.removeItem("qrui");
                localStorage.removeItem("qrus");
                localStorage.removeItem("qrud");
              }}
            >
              Sign Out
            </article>
          </Link>
        </section>
      </nav>
    </>
  );
};

export default DashNavBar;
