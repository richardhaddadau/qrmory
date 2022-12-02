import FullLogo from "../Components/FullLogo";
import { Link } from "react-router-dom";

export default function Guest({ children }) {
  return (
    <div className="min-h-hero h-screen flex flex-col lg:flex-row flex-nowrap items-stretch bg-qrmory-purple-800">
      <div className="py-8 flex flex-col justify-center items-center w-full lg:w-1/2 bg-white lg:bg-transparent">
        <Link to="/">
          <FullLogo className="w-20 fill-current text-qrmory-purple-900 lg:text-white" />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center min-h-fit h-screen w-full lg:w-1/2 bg-white shadow-md overflow-hidden rounded-none lg:rounded-lg">
        <div className="p-8 lg:p-16 w-screen max-w-xl">{children}</div>
      </div>
    </div>
  );
}
