"use client";
import HomeComponent from "@/app/components/home/Home";
import PnrStatus from "@/app/components/pnr-status/PnrStatus";
import DarkVeil from "./DarkVeil/DarkVeil";
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-black to-black opacity-90" style={{ width: '100%', height: '1000px' }}>
          <DarkVeil speed={0.5} warpAmount={3} />
        </div>
        <Navbar />

        <HomeComponent />
        <PnrStatus />
      </div>
    </>
  );
}
