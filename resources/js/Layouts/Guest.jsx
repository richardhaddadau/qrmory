import FullLogo from "../Components/FullLogo";
import { Link } from "react-router-dom";

export default function Guest({ children }) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-qrmory-purple-800">
      <div>
        <Link to="/">
          <FullLogo className="w-20 h-32 fill-current text-white" />
        </Link>
      </div>

      <div className="w-full sm:max-w-md px-8 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {children}
      </div>
    </div>
  );
}
