import HomeHero from "@/sections/HomeHero";
import MainNavigation from "@/sections/MainNavigation";
import HomeInfo from "@/sections/HomeInfo";
import QRCreator from "@/components/QRCreator";

import { PagesType } from "@/types/generalTypes";

const PAGES: PagesType[] = [
  {
    title: "Login",
    path: "/login",
    specialClasses: `text-neutral-300`,
  },
  {
    title: "Register",
    path: "/sign-up",
    specialClasses: `bg-neutral-200`,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainNavigation
        className={`text-qrmory-purple-500`}
        logoColour="white"
        pages={PAGES}
      />
      <HomeHero />
      <QRCreator />
      <HomeInfo />
    </main>
  );
}
