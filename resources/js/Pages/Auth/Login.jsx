import { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

import NavBar from "../../Components/NavBar.jsx";
import Standard from "../../Layouts/Standard.jsx";

import {
  HiOutlineLockClosed,
  HiOutlineMailOpen,
  HiOutlineUser,
} from "react-icons/hi";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [alertMessage, setAlertMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data.email);
  };

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
          <div className="mx-auto mt-16 py-16 px-4 w-full md:max-w-xl md:rounded-3xl text-center text-stone-500 bg-white">
            <section className="">
              <article>
                <h1 className="mb-8 text-3xl font-bold text-qrmory-purple-900">
                  Log in
                </h1>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mb-10"
                  autoComplete="off"
                >
                  <div className="admin-wrapper mb-4 relative flex flex-row mx-auto w-full max-w-sm">
                    <input
                      className="relative admin-input"
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                    />
                    <HiOutlineMailOpen
                      className="admin-icon absolute left-3 top-3 opacity-50"
                      size={22}
                    />
                  </div>

                  <div className="admin-wrapper mb-2 relative flex flex-row mx-auto w-full max-w-sm">
                    <input
                      className="relative admin-input"
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                    <HiOutlineLockClosed
                      className="admin-icon absolute left-3 top-3 opacity-50"
                      size={22}
                    />
                  </div>

                  <a href="/login">
                    <button
                      className="mt-4 py-2.5 px-8 w-full max-w-sm border border-qrmory-purple-800 hover:border-qrmory-purple-400 bg-white
                    hover:bg-qrmory-purple-400 text-sm font-medium text-qrmory-purple-800 hover:text-white rounded uppercase font-semibold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                    >
                      Log in
                    </button>
                  </a>
                </form>
                <p>
                  Don't have an account yet?{" "}
                  <a
                    href="/signup"
                    className="py-0.5 px-0 hover:px-1 text-base text-qrmory-purple-500 hover:text-white hover:bg-qrmory-purple-400 transition-all duration-500"
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
