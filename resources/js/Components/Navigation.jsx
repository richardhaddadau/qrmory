import { Link } from "react-router-dom";
const Navigation = (props) => {
  // Constants
  const navItems = {
    home: ["Home", "/"],
    // about: ["About", "/about"],
    // features: ["Features", "/features"],
    // pricing: ["Pricing", "/pricing"],
    // blog: ["Blog", "/blog"],
  };

  return (
    <>
      <ul className="mx-auto flex flex-col lg:flex-row lg:items-center justify-evenly w-full">
        {Object.keys(navItems).map((key) => {
          return (
            <Link to={navItems[key][1]} key={key}>
              <li className="px-2 lg:px-4 py-1.5 rounded text-sm hover:bg-qrmory-purple-400 text-white uppercase tracking-wide hover:font-bold hover:transition-all duration-300">
                {navItems[key][0]}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Navigation;
