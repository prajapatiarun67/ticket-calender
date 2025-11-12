"use client";

import { useState } from "react";

export default function PnrStatus() {
  const [pnr, setPnr] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pnr.trim().length !== 10) {
      alert("Please enter a valid 10-digit PNR number.");
      return;
    }
    console.log("PNR Submitted:", pnr);
    // You can navigate or call your API here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-0">
      {/* Heading section */}
      <div className="text-2xl md:text-3xl font-extrabold leading-snug mb-8">
        <span style={{ color: "#7FFFD4" }}>
          Check your Indian Railway&nbsp;
        </span>
        <span style={{ color: "#39FF14" }}>PNR Status</span>
      </div>

      {/* PNR Input Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-black/50 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10 flex flex-col items-center space-y-4 w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Enter 10-digit PNR Number"
          value={pnr}
          onChange={(e) => setPnr(e.target.value)}
          className="w-full px-4 py-3 rounded-full text-black text-lg focus:outline-none focus:ring-4 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all"
        >
          Check Status
        </button>
      </form>

      {/* Footer Info */}
      <p className="mt-6 text-sm text-gray-400">
        Get live train PNR updates instantly.
      </p>
    </div>
  );
}
