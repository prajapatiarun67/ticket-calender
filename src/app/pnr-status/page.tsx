"use client";
import { useState } from "react";
import TrainTicketDetails from "./pnr-status-template";

export default function PnrStatus() {

  interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
  }

  const [pnr, setPnr] = useState("");
  //const [data, setData] = useState(null);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pnr.trim().length !== 10) {
      alert("Please enter a valid 10-digit PNR number.");
      return;
    }
    console.log("PNR Submitted:", pnr);
    // You can navigate or call your API here
  };

  async function fetchPNRStatus() {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const res = await fetch(`/api/pnr-status?pnr=${pnr}`);
      if (!res.ok) {
        throw new Error('Failed to fetch PNR status');
      }
      const result = await res.json();
      setData(result);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-0">
      {/* Heading section */}
      <div className="text-2xl md:text-3xl font-extrabold leading-snug mb-8">
        <span style={{ color: "#7FFFD4" }}>
          Check your Indian Railway&nbsp;
        </span>
        <span style={{ color: "#39FF14" }}>PNR Status</span>
      </div>

      <div className="backdrop-blur-md rounded-2xl p-2 md:p-2 shadow-xl flex flex-col items-center space-y-4 px-6 md:px-0"
      >
        <input
          type="text"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          placeholder="Enter PNR Number"
          className="w-100 bg-black/40 text-white px-5 py-3 rounded-full border border-gray-700 hover:border-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer text-center font-extrabold"
        />
        <button onClick={fetchPNRStatus} disabled={loading || !pnr.trim()}
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all"
        >
          {loading ? 'Loading...' : 'Get Status'}
        </button>

        {data && data.success === false && <p className="text-center font-extrabold" style={{ color: 'red' }}>{data.message}</p>}

        {data && data.success && data.data && (
          <div style={{ marginTop: '20px', width: '100%' }}>
            {/* <div className="max-w-lg mx-auto p-8 rounded-lg bg-gradient-to-b from-[#2a1047] to-[#111111] shadow-xl">
              <h3 className="mb-8 text-2xl font-bold text-white text-center">Train Ticket Details</h3>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <span className="font-semibold text-[#7FFFD4] text-right pr-2">PNR Number :</span>
                <span className="text-[#39FF14] font-medium">{data.data.pnrNumber}</span>

                <span className="font-semibold text-[#7FFFD4] text-right pr-2">Train Number :</span>
                <span className="text-[#39FF14] font-medium">{data.data.trainNumber}</span>

                <span className="font-semibold text-[#7FFFD4] text-right pr-2">Train Name :</span>
                <span className="text-[#39FF14] font-medium">{data.data.trainName}</span>

                <span className="font-semibold text-[#7FFFD4] text-right pr-2">Date of Journey :</span>
                <span className="text-[#39FF14] font-medium">{data.data.dateOfJourney}</span>

                <span className="font-semibold text-[#7FFFD4] text-right pr-2">Source Station :</span>
                <span className="text-[#39FF14] font-medium">{data.data.sourceStation}</span>

                <span className="font-semibold text-[#7FFFD4] text-right pr-2">Destination Station :</span>
                <span className="text-[#39FF14] font-medium">{data.data.destinationStation}</span>

                <span className="font-semibold text-[#7FFFD4] text-right pr-2">Journey Class :</span>
                <span className="text-[#39FF14] font-medium">{data.data.journeyClass}</span>

                <span className="font-semibold text-[#7FFFD4] text-right pr-2">Chart Status :</span>
                <span className="text-[#39FF14] font-medium">{data.data.chartStatus}</span>

                <span className="font-semibold text-[#7FFFD4] text-right pr-2">Booking Fare :</span>
                <span className="text-[#39FF14] font-medium">{data.data.bookingFare}</span>

                <span className="font-semibold text-[#7FFFD4] text-right pr-2">Arrival Date :</span>
                <span className="text-[#39FF14] font-medium">{data.data.arrivalDate}</span>
              </div>
            </div> */}
            <TrainTicketDetails ticketData={data.data} />



          </div>
        )}

      </div>
      {/* Footer Info */}
      {/*  <p className="mt-6 text-sm text-gray-400">
        Get live train PNR updates instantly.
      </p> */}
    </div>
  );
}
