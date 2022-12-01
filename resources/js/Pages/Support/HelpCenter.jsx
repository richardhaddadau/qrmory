import Standard from "../../Layouts/Standard.jsx";
import { Helmet } from "react-helmet-async";
import NavBar from "../../Components/NavBar.jsx";

const HelpCenter = () => {
  return (
    <>
      <Helmet>
        <title>Help Center - QRmory</title>
      </Helmet>
      <Standard>
        <NavBar className="bg-qrmory-purple-800 text-white" absolute={false} />

        <header className="main-hero flex flex-col justify-center items-center h-44 bg-qrmory-purple-800 text-white">
          <div className="px-6 w-full max-w-7xl text-center">
            <h1 className="font-header text-5xl hero-heading">Help Center</h1>
          </div>
        </header>

        <main className="mx-auto py-8 px-4 w-full max-w-7xl policy-document"></main>
      </Standard>
    </>
  );
};

export default HelpCenter;
