import Logo from "@/components/Logo";
import Link from "next/link";

const MainNavigation = ({
  className = "",
  absolute = true,
  logoColour = "white",
  fullLogo = true,
}) => {
  return (
    <nav
      className={`${
        className + absolute ? "absolute" : "relative"
      } py-4 px-8 top-0 flex flex-col items-center justify-between w-full`}
    >
      <Link href="/">
        <Logo className={`w-24`} logoColour={logoColour} />
      </Link>
    </nav>
  );
};

export default MainNavigation;
