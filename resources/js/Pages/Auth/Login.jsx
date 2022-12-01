import { useState } from "react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/all";

import Guest from "../../Layouts/Guest";
import useForm from "../../Helpers/useForm.js";
import Label from "../../Components/Label";
import InputError from "../../Components/InputError";
// import { faunaDriver } from "../../../../routes/faunadb_manager.cjs";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.email && data.password) {
      setProcessing(true);

      const user = await faunaDriver.Login(data);
    }
  };

  return (
    <Guest>
      <Helmet>
        <title>QRmory - Login</title>
      </Helmet>

      <form onSubmit={handleSubmit}>
        <div>
          <Label forInput="email" value="Email" />

          <input
            type="email"
            name="email"
            value={data.email || ""}
            className="mt-1 block w-full control-input"
            autoComplete="username"
            onChange={setData}
            title="Remember to fill out your email address"
            required
          />

          {isError[0] === "email" ? (
            <InputError message={isError[1]} className="mt-2" />
          ) : null}
        </div>

        <div className="mt-6">
          <Label forInput="password" value="Password" />

          <div className="flex flex-row items-center">
            <input
              type={passwordType}
              name="password"
              value={data.password || ""}
              className="mt-1 block w-full control-input"
              autoComplete="current-password"
              onChange={setData}
              title="Please enter your password"
              required
            />

            <button
              className="ml-2 p-3 rounded border border-qrmory-purple-800 hover:border-qrmory-purple-400 bg-white hover:bg-qrmory-purple-400 text-qrmory-purple-800 hover:text-white hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
              onClick={togglePassword}
              type="button"
            >
              {passwordType === "password" ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          {isError[0] === "password" ? (
            <InputError message={isError[1]} className="mt-2" />
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Link
            to="/register"
            className="px-1.5 py-1 text-sm text-stone-400 hover:text-white hover:bg-qrmory-purple-400 rounded hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
          >
            Not a member yet?
          </Link>
        </div>

        <div className="flex items-center justify-end mt-4">
          <button
            className={
              "ml-4 px-4 py-2 rounded border border-qrmory-purple-800 hover:border-qrmory-purple-400" +
              " text-qrmory-purple-800 text-sm uppercase font-bold transition-all duration-300 " +
              (processing
                ? "cursor-not-allowed"
                : "hover:bg-qrmory-purple-400 hover:text-white hover:translate-x-1" +
                  " hover:-translate-y-1")
            }
            disabled={processing}
            type="submit"
          >
            {processing ? (
              <p className="flex flex-row">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-qrmory-purple-800"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Please Wait...
              </p>
            ) : (
              "Sign in"
            )}
          </button>
        </div>
      </form>
    </Guest>
  );
};

export default Login;
