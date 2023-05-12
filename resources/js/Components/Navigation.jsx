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
      <div className="mt-3 flex flex-col lg:flex-row justify-center gap-5 w-full">
        {Object.keys(navItems).map((key) => {
          return (
            <Link
              to={navItems[key][1]}
              className="py-1 text-sm hover:bg-qrmory-purple-400 text-white text-center uppercase tracking-wide hover:transition-all duration-300"
              key={key}
            >
              <p>{navItems[key][0]}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navigation;
