import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { SignUp } from "@clerk/clerk-react";

import Standard from "../../Layouts/Standard.jsx";
import NavBar from "../../Components/NavBar.jsx";

import {
  HiOutlineLockClosed,
  HiOutlineMailOpen,
  HiOutlineUser,
} from "react-icons/hi";

const Register = () => {
  //  States
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {};

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
          <SignUp routing="path" path="/sign-up" />
          {/*<div className="mx-auto mt-16 py-16 px-4 w-full md:max-w-xl md:rounded-3xl text-center text-stone-500 bg-white">*/}
          {/*  <section className="">*/}
          {/*    <article>*/}
          {/*      <h1 className="mb-8 text-3xl font-bold text-qrmory-purple-900">*/}
          {/*        Sign up*/}
          {/*      </h1>*/}
          {/*      <form*/}
          {/*        onSubmit={handleSubmit(onSubmit)}*/}
          {/*        className="mb-10"*/}
          {/*        autoComplete="off"*/}
          {/*      >*/}
          {/*        <div className="admin-wrapper mb-4 relative flex flex-row mx-auto w-full max-w-sm">*/}
          {/*          <input*/}
          {/*            className="relative admin-input"*/}
          {/*            type="text"*/}
          {/*            placeholder="Name"*/}
          {/*            {...register("name")}*/}
          {/*          />*/}
          {/*          <HiOutlineUser*/}
          {/*            className="admin-icon absolute left-3 top-3 opacity-50"*/}
          {/*            size={22}*/}
          {/*          />*/}
          {/*        </div>*/}

          {/*        <div className="admin-wrapper mb-4 relative flex flex-row mx-auto w-full max-w-sm">*/}
          {/*          <input*/}
          {/*            className="relative admin-input"*/}
          {/*            type="email"*/}
          {/*            placeholder="Email"*/}
          {/*            {...register("email")}*/}
          {/*          />*/}
          {/*          <HiOutlineMailOpen*/}
          {/*            className="admin-icon absolute left-3 top-3 opacity-50"*/}
          {/*            size={22}*/}
          {/*          />*/}
          {/*        </div>*/}

          {/*        <div className="admin-wrapper mb-2 relative flex flex-row mx-auto w-full max-w-sm">*/}
          {/*          <input*/}
          {/*            className="relative admin-input"*/}
          {/*            type="password"*/}
          {/*            placeholder="Password"*/}
          {/*            {...register("password")}*/}
          {/*          />*/}
          {/*          <HiOutlineLockClosed*/}
          {/*            className="admin-icon absolute left-3 top-3 opacity-50"*/}
          {/*            size={22}*/}
          {/*          />*/}
          {/*        </div>*/}

          {/*        <a href="/login">*/}
          {/*          <button*/}
          {/*            className="mt-4 py-2.5 px-8 w-full max-w-sm border border-qrmory-purple-800 hover:border-qrmory-purple-400 bg-white*/}
          {/*          hover:bg-qrmory-purple-400 text-sm font-medium text-qrmory-purple-800 hover:text-white rounded uppercase font-semibold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"*/}
          {/*          >*/}
          {/*            Sign up*/}
          {/*          </button>*/}
          {/*        </a>*/}
          {/*      </form>*/}
          {/*      <p>*/}
          {/*        Already have an account?{" "}*/}
          {/*        <a*/}
          {/*          href="/login"*/}
          {/*          className="py-0.5 px-0 hover:px-1 text-base text-qrmory-purple-500 hover:text-white hover:bg-qrmory-purple-400 transition-all duration-500"*/}
          {/*        >*/}
          {/*          Log in*/}
          {/*        </a>*/}
          {/*      </p>*/}
          {/*    </article>*/}
          {/*  </section>*/}
          {/*</div>*/}
        </main>
      </Standard>
    </>
  );
};

export default Register;
