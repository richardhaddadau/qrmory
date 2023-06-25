import { Link } from "react-router-dom";
const Navigation = (props) => {
  // Constants
  const navItems = {
    home: ["Home", "/"],
    // about: ["About", "/about"],
    // features: ["Features", "/features"],
    pricing: ["Pricing", "/pricing"],
    // blog: ["Blog", "/blog"],
  };

  return (
    <>
      <ul className="mx-auto flex flex-col lg:flex-row lg:items-center justify-center gap-3 w-full text-center text-white tracking-wide">
        {Object.keys(navItems).map((key) => {
          return (
            <li className="mb-3" key={key}>
              <a
                className="lg:my-0 lg:mr-4 hover:px-3 py-1 rounded text-sm text-white uppercase hover:font-bold hover:bg-qrmory-purple-400 hover:font-bold hover:transition-all duration-300"
                href={navItems[key][1]}
              >
                {navItems[key][0]}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navigation;
