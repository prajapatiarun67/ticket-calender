"use client";

import DatePickerComponent from "@/components/datepicker/DatePickerComponent";

export default function Home() {
    const getFutureTicketDate = () => {
        const today = new Date();
        today.setDate(today.getDate() + 60);

        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        return today.toLocaleDateString("en-US", options);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-0">
            {/* Heading section */}
            <div className="text-2xl md:text-3xl font-extrabold leading-snug mb-8">
                <span style={{ color: "#7FFFD4" }}>
                    Ticket bookings are now open for travel dates up to
                </span>
                <span style={{ color: "#39FF14" }}> {getFutureTicketDate()}.</span>
            </div>

            {/* Date Picker Box */}
            <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/10 flex flex-col items-center space-y-4 w-full max-w-md">
                {/*  <h2 className="text-xl font-bold text-white mb-2">
                    Enter the Date of Journey
                </h2> */}
                <DatePickerComponent />
            </div>

            {/* Footer Info */}
            <p className="mt-6 text-sm text-gray-400">
                Plan your trip with confidence — book 60 days in advance.
            </p>
        </div>
    );
}
