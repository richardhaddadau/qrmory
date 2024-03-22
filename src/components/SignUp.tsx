import AuthText from "@/components/AuthText";
import Link from "next/link";

const SignUp = () => {
  return (
    <section className={`grid gap-10 w-full max-w-xs`}>
      <article>
        <h1 className={`md:text-xl font-bold`}>Welcome to QRmory!</h1>
        <h2 className={`text-sm md:text-base text-neutral-600 font-light`}>
          Let's create a new account
        </h2>
      </article>
      <AuthText
        type={"email"}
        name={"email"}
        label={"Email Address"}
        placeholder={"eg. Bruce Wayne"}
      />
      <AuthText
        type={"password"}
        name={"password"}
        label={"Password"}
        placeholder={"eg. Wayne123"}
      />
      <AuthText
        type={"password"}
        name={"password"}
        label={"Confirm Password"}
        placeholder={"eg. Wayne123"}
      />
      <article className={`grid gap-3`}>
        <button
          className={`py-2 w-full bg-qrmory-purple-500 rounded-md text-white text-sm md:text-base font-bold`}
        >
          Create!
        </button>
        <h4 className={`text-xs md:text-sm font-light text-center`}>
          Already have an account?{" "}
          <Link href={"/login"} className={`group relative font-bold`}>
            Login here
            <div
              className={`absolute left-0 -bottom-0.5 w-0 group-hover:w-full h-[1px] bg-qrmory-purple-500 transition-all duration-300`}
            ></div>
          </Link>
          .
        </h4>
      </article>
    </section>
  );
};

export default SignUp;
