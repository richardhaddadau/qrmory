import { useState } from "react";
import ReactLogo from "../Components/ReactLogo";

const Welcome = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="md:p-6 relative flex items-center justify-center min-h-screen bg-stone-50 dark:bg-zinc-800">
      <section className="mx-auto flex flex-col items-center max-w-5xl">
        <img src="/ex-logo.svg" className="h-20" alt="EXPO Logo" />
        <h1 className="mb-4 text-4xl font-black uppercase text-rose-600 tracking-wide text-center">
          Expact
        </h1>

        <button
          className="mb-10 py-2 px-5 border border-rose-500 hover:border-rose-600 hover:bg-rose-600 rounded-sm shadow-lg dark:shadow-xl shadow-zinc-300 dark:shadow-zinc-900 text-rose-600 hover:text-rose-100 font-medium transition-all duration-300"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 bg-zinc-100 dark:bg-zinc-300 rounded-sm shadow-xl dark:shadow-zinc-900">
          <article className="p-4">
            <div className="mb-4 flex items-center">
              <img src="/ex-logo.svg" className="h-6" alt="EXPACT Logo" />
              <h1 className="text-zinc-800 text-lg font-bold">About</h1>
            </div>

            <p className="md:md:ml-8 text-sm dark:text-zinc-600">
              What started off as just a quick boilerplate with a good folder
              structure is slowly growing into a starter kit that sets your
              React app off to a powerful start.
            </p>
          </article>

          <article className="p-5 border-l border-zinc-200">
            <div className="mb-4 flex gap-0.5 items-center">
              <img src="/vite.svg" className="h-6" alt="Vite logo" />
              <h1 className="text-zinc-800 text-lg font-bold">
                <a
                  href="https://vitejs.dev/"
                  title="Vite - Next Generation Frontend Tooling"
                >
                  Vite
                </a>
              </h1>
            </div>

            <p className="md:ml-8 text-sm dark:text-zinc-600">
              Vite is a fast and powerful development environment that makes app
              building with any frontend framework an absolute breeze.
            </p>
          </article>

          <article className="p-5 border-t border-zinc-200">
            <div className="mb-4 flex gap-1 items-center">
              <img
                src="/tailwindcss-mark.svg"
                className="h-6"
                alt="Tailwind logo"
              />
              <h1 className="text-zinc-800 text-lg font-bold">
                <a
                  href="https://tailwindcss.com/"
                  title="TailwindCSS - Rapidly build modern websites without ever leaving your HTML."
                >
                  TailwindCSS
                </a>
              </h1>
            </div>

            <p className="md:ml-8 text-sm dark:text-zinc-600">
              A lightweight but very versatile, and really popular, CSS
              framework that makes styling quicker and more consistent whether
              working individually or in a team.
            </p>
          </article>

          <article className="p-5 border-l border-t border-zinc-200">
            <div className="mb-4 flex gap-1 items-center">
              <h1 className="text-zinc-800 text-lg font-bold">
                <a
                  href="https://github.com/higherordermalfunction/expact#roadmap"
                  title="EXPACT Roadmap on Github"
                >
                  Roadmap
                </a>
              </h1>
            </div>

            <p className="md:ml-8 text-sm dark:text-zinc-600">
              See the progress as EXPACT grows and becomes more complete and a
              more useful starter kit for all types of React projects.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
