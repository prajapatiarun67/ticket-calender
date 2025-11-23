"use client";

import { useState } from "react";

export default function PnrStatus() {
  const [pnr, setPnr] = useState("");

  const [data, setData] = useState(null);
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
            <h2>Train Ticket Details</h2>
            <div style={{ width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0', fontWeight: 'bold' }}>
                <div style={{ flex: 1 }}>PNR Number</div>
                <div style={{ flex: 2 }}>{data.data.pnrNumber}</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
                <div style={{ flex: 1 }}>Train Number</div>
                <div style={{ flex: 2 }}>{data.data.trainNumber}</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
                <div style={{ flex: 1 }}>Train Name</div>
                <div style={{ flex: 2 }}>{data.data.trainName}</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
                <div style={{ flex: 1 }}>Date of Journey</div>
                <div style={{ flex: 2 }}>{data.data.dateOfJourney}</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
                <div style={{ flex: 1 }}>Source Station</div>
                <div style={{ flex: 2 }}>{data.data.sourceStation}</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
                <div style={{ flex: 1 }}>Destination Station</div>
                <div style={{ flex: 2 }}>{data.data.destinationStation}</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
                <div style={{ flex: 1 }}>Journey Class</div>
                <div style={{ flex: 2 }}>{data.data.journeyClass}</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
                <div style={{ flex: 1 }}>Chart Status</div>
                <div style={{ flex: 2 }}>{data.data.chartStatus}</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
                <div style={{ flex: 1 }}>Booking Fare</div>
                <div style={{ flex: 2 }}>{data.data.bookingFare}</div>
              </div>
              <div style={{ display: 'flex', borderBottom: '1px solid #ccc', padding: '8px 0' }}>
                <div style={{ flex: 1 }}>Arrival Date</div>
                <div style={{ flex: 2 }}>{data.data.arrivalDate}</div>
              </div>
            </div>


            <h2 style={{ marginTop: '24px' }}>Passenger Details</h2>
            <table border="1" style={{ margin: '0 auto', width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Current Status</th>
                  <th>Booking Status</th>
                  <th>Current Berth No.</th>
                  <th>Booking Berth No.</th>
                  <th>Quota</th>
                </tr>
              </thead>
              <tbody>
                {data.data.passengerList.map((p) => (
                  <tr key={p.passengerSerialNumber}>
                    <td>{p.passengerSerialNumber}</td>
                    <td>{p.currentStatusDetails}</td>
                    <td>{p.bookingStatusDetails}</td>
                    <td>{p.currentBerthNo}</td>
                    <td>{p.bookingBerthNo}</td>
                    <td>{p.passengerQuota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
