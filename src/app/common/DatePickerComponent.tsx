"use client"; // must be first line

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export default function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div>
      <h2 className="mt-6 text-2xl md:text-1xl font-extrabold text-white leading-snug max-w-1xl">Enter the Date of Journey</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Pick a date" 
        calendarClassName="dark-calendar"
        dayClassName={() => "custom-day"}
         className="w-115 bg-black text-white px-5 py-3 rounded-full border border-gray-700 hover:border-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer text-center font-extrabold"
      />
    </div>
  );
}
