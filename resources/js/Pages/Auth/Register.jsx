import { Helmet } from "react-helmet-async";
import Standard from "../../Layouts/Standard.jsx";
import NavBar from "../../Components/NavBar.jsx";

import Userfront from "@userfront/react";

Userfront.init("zn5rj95b");

const SignupForm = Userfront.build({
  toolId: "nkanmom",
});

const Register = () => {
  return (
    <>
      <Helmet>
        <title>QRmory - Create a New Account</title>
      </Helmet>

      <Standard admin={true}>
        <NavBar
          className={"bg-qrmory-purple-800 text-qrmory-purple-500 shadow-xl"}
          logoColour="white"
          admin={true}
        />
        <main className="relative pt-10 lg:px-7 flex justify-center items-center h-screen bg-qrmory-purple-900">
          <SignupForm />
        </main>
      </Standard>
    </>
  );
};

export default Register;
