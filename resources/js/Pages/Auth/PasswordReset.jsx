import Userfront from "@userfront/react";
import { Helmet } from "react-helmet-async";
import NavBar from "../../Components/NavBar.jsx";
import Standard from "../../Layouts/Standard.jsx";

Userfront.init("zn5rj95b");

const PasswordResetForm = Userfront.build({
  toolId: "orakndd",
});

const PasswordReset = () => {
  return (
    <>
      <Helmet>
        <title>QRmory - Already a member?</title>
      </Helmet>

      <Standard admin={true}>
        <NavBar
          className={"bg-qrmory-purple-800 text-qrmory-purple-500 shadow-xl"}
          logoColour="white"
          admin={true}
        />
        <main className="relative py-20 lg:px-7 flex justify-center items-center min-h-screen h-fit bg-qrmory-purple-900">
          <PasswordResetForm />
        </main>
      </Standard>
    </>
  );
};

export default PasswordReset;
