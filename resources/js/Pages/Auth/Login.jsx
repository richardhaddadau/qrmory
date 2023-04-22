import { Helmet } from "react-helmet-async";
import Guest from "../../Layouts/Guest";
import { Link } from "react-router-dom";
import Label from "../../Components/Label";
import { useState } from "react";
import useForm from "../../Helpers/useForm.js";
import { FaEye, FaEyeSlash } from "react-icons/all";
import InputError from "../../Components/InputError";
import NavBar from "../../Components/NavBar.jsx";
import { FaLock, MdEmail } from "react-icons/all";
import Standard from "../../Layouts/Standard.jsx";

const Login = () => {
  // States
  const [processing, setProcessing] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [isError, setIsError] = useState([]);

  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const [data, setData] = useForm({
    email: "",
    password: "",
  });
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <>
      <Helmet>
        <title>QRmory - Login</title>
      </Helmet>

      <Standard admin={true}>
        <NavBar
          className={"bg-qrmory-purple-800 text-qrmory-purple-500"}
          logoColour="white"
          admin={true}
        />
        <main className="relative pt-10 lg:px-7 flex justify-center items-center h-screen bg-qrmory-purple-800">
          <div className="mx-auto mt-16 w-full max-w-7xl text-center text-stone-200">
            <section className="">
              <article>
                <h1 className="mb-8 text-3xl font-bold">Log in to QRmory</h1>
                <form className="mb-10">
                  <div className="admin-wrapper mb-4 relative flex flex-row mx-auto w-full max-w-sm">
                    <input
                      className="relative admin-input p-4 pl-12 border-2 rounded-lg bg-qrmory-purple-700 border-qrmory-purple-500 hover:border-qrmory-purple-400 focus:border-qrmory-purple-400 w-full transition-all outline-0"
                      type="email"
                      onChange={(el) => setEmailValue(el.target.value)}
                      value={emailValue}
                      placeholder="Email"
                    />
                    <MdEmail
                      className="admin-icon absolute left-3 top-4 opacity-70"
                      size={25}
                    />
                  </div>

                  <div className="admin-wrapper mb-2 relative flex flex-row mx-auto w-full max-w-sm">
                    <input
                      className="relative admin-input p-4 pl-12 border-2 rounded-lg bg-qrmory-purple-700 border-qrmory-purple-500 hover:border-qrmory-purple-400 focus:border-qrmory-purple-400 w-full transition-all outline-0"
                      type="password"
                      onChange={(el) => setPasswordValue(el.target.value)}
                      value={passwordValue}
                      placeholder="Password"
                    />
                    <FaLock
                      className="admin-icon absolute left-4 top-4 opacity-70"
                      size={21}
                    />
                  </div>
                  <p className="mb-6 text-sm text-qrmory-purple-300 hover:text-qrmory-purple-200 hover:underline transition-all">
                    Forgot your password?
                  </p>
                  <a href="/login">
                    <button className="p-4 w-full max-w-sm bg-qrmory-purple-300 hover:bg-qrmory-purple-200 rounded-md text-qrmory-purple-900 transition-all">
                      Log in
                    </button>
                  </a>
                </form>
                <p>
                  Don't have an account yet?{" "}
                  <a
                    href="/signup"
                    className="text-qrmory-purple-300 hover:text-qrmory-purple-200 hover:underline transition-all"
                  >
                    Sign up
                  </a>
                </p>
              </article>
            </section>
          </div>
        </main>
      </Standard>
    </>
  );
};

export default Login;
