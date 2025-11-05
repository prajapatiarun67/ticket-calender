//"use client";
import DarkVeil from "@/app/DarkVeil/DarkVeil";
import Navbar from "../navbar/navbar";

export default function PnrStatus() {
  return (
   <>
               <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
                   <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-black to-black opacity-90" style={{ width: '100%', height: '1000px' }}>
                       <DarkVeil speed={0.5} warpAmount={3} />
                   </div>
                   <Navbar />
   
                   {/* Main heading */}
                   <div className='text-2xl md:text-3xl font-extrabold leading-snug'><span className='' style={{color: "#7FFFD4"}}>Ticket bookings are now open for travel dates up to</span> <span style={{color: "#39FF14"}}></span></div>
                    <div className="flex space-x-4">
                    
                    </div> 
               </div>
           </>
  );
}