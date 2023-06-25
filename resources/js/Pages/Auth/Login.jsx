import { Helmet } from "react-helmet-async";
import Guest from "../../Layouts/Guest";
import { Link } from "react-router-dom";
import Label from "../../Components/Label";
import { useEffect, useState } from "react";
import useForm from "../../Helpers/useForm.js";
import { FaEye, FaEyeSlash } from "react-icons/all";
import InputError from "../../Components/InputError";
import NavBar from "../../Components/NavBar.jsx";
import { FaLock, MdEmail } from "react-icons/all";
import Standard from "../../Layouts/Standard.jsx";
import { CheckIfLoggedIn } from "../../Helpers/Firebase/Auth.js";
import { LogMeIn } from "../../Helpers/Firebase.js";

import React from "react";
import Userfront from "@userfront/react";

Userfront.init("zn5rj95b");

const LoginForm = Userfront.build({
  toolId: "dkrlbdo",
});

const Login = () => {
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
          <LoginForm />
        </main>
      </Standard>
    </>
  );
};

export default Login;
