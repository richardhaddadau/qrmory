import { Helmet } from "react-helmet-async";
import Guest from "../../Layouts/Guest";
import { Link } from "react-router-dom";
import Label from "../../Components/Label";
import { useState } from "react";
import useForm from "../../Helpers/useForm.js";
import { FaEye, FaEyeSlash } from "react-icons/all";
import InputError from "../../Components/InputError";

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

  return (
    <Guest>
      <Helmet>
        <title>QRmory - Login</title>
      </Helmet>

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
    </Guest>
  );
};

export default Login;
