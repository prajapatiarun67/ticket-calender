"use client"; // must be first line
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";

export default function DatePickerComponent() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [getJourneyDate, setJourneyDate] = useState<String | null>(null);

  const formatLongDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() - 60); // add 60 days
      setJourneyDate(
        `Reservations will be accepted starting : ${formatLongDate(newDate)} 08:00 AM onwards`
      );
    }
  };
  return (
    <div>
      <h2 className="mb-3 mt-8 text-2xl md:text-1xl font-extrabold text-white leading-snug max-w-1xl">Enter the Date of Journey</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd / MM / yyyy"
        placeholderText="Pick a date"
        calendarClassName="dark-calendar"
        dayClassName={() => "custom-day"}
        className="w-100 bg-black text-white px-5 py-3 rounded-full border border-gray-700 hover:border-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer text-center font-extrabold"
      />
      <h1 className="mt-4 text-2xl md:text-1xl font-extrabold text-white leading-snug max-w-6xl" style={{ color: "#39FF14" }}>
        {getJourneyDate}
      </h1>
    </div>
  );
}
