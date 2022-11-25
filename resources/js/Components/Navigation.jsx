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
            <li
              className="lg:px-3 py-1 rounded text-sm hover:bg-qrmory-purple-400 text-white uppercase tracking-wide hover:font-bold hover:transition-all duration-300"
              key={key}
            >
              <Link to={navItems[key][1]}>{navItems[key][0]}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navigation;
