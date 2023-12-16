import Image from "next/image";
import HomeHero from "@/sections/HomeHero";
import MainNavigation from "@/sections/MainNavigation";
import HomeInfo from "@/sections/HomeInfo";
import QRCreator from "@/components/QRCreator";
import MainFooter from "@/sections/MainFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <MainNavigation className={`text-qrmory-purple-500`} logoColour="white" />
      <HomeHero />
      <QRCreator />
      <HomeInfo />
    </main>
  );
}
