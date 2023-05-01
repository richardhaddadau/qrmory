import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Standard from "../../Layouts/Standard.jsx";
import NavBar from "../../Components/NavBar.jsx";
import { FaLock, MdEmail } from "react-icons/all";

// Firebase
import { SignMeUp } from "../../Helpers/Firebase/Auth.js";

const Register = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const CompleteSignUp = () => {
    try {
      SignMeUp(emailValue, passwordValue);
    } catch (e) {
      console.log(e);
    }
  };

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
          <div className="mx-auto mt-16 py-16 px-4 w-full md:max-w-xl md:rounded-3xl text-center text-stone-500 bg-white">
            <section className="">
              <article>
                <h1 className="mb-8 text-3xl font-bold text-qrmory-purple-900">
                  Sign up with email
                </h1>
                <form className="mb-10">
                  <div className="admin-wrapper relative flex flex-row mx-auto w-full max-w-sm">
                    <input
                      className="relative admin-input mb-4"
                      type="email"
                      onChange={(el) => setEmailValue(el.target.value)}
                      value={emailValue}
                      placeholder="Email"
                    />
                    <MdEmail
                      className="admin-icon absolute left-3 top-3 opacity-50 fill-qrmory-purple-800"
                      size={25}
                    />
                  </div>

                  <div className="admin-wrapper relative flex flex-row mx-auto w-full max-w-sm">
                    <input
                      className="relative admin-input mb-4"
                      type="password"
                      onChange={(el) => setPasswordValue(el.target.value)}
                      value={passwordValue}
                      placeholder="Password"
                    />
                    <FaLock
                      className="admin-icon absolute left-3 top-3 opacity-50 fill-qrmory-purple-800"
                      size={21}
                    />
                  </div>
                  {/*<a href="/signup">*/}
                  <button
                    className="mt-4 py-2.5 px-8 w-full max-w-sm border border-qrmory-purple-800 hover:border-qrmory-purple-400 bg-white
                    hover:bg-qrmory-purple-400 text-sm font-medium text-qrmory-purple-800 hover:text-white rounded uppercase font-semibold hover:translate-x-1 hover:-translate-y-1 transition-all duration-300"
                    onClick={() => {
                      if (emailValue.length > 0 && passwordValue.length > 0) {
                        SignMeUp(emailValue, passwordValue);
                      }
                    }}
                  >
                    Sign up
                  </button>
                  {/*</a>*/}
                </form>
                <p>
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="py-0.5 px-0 hover:px-1 text-base text-qrmory-purple-500 hover:text-white hover:bg-qrmory-purple-400 transition-all duration-500"
                  >
                    Log in
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

export default Register;
