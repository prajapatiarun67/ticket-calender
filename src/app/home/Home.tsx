"use client";

import DatePickerComponent from '@/components/datepicker/DatePickerComponent';

export default function Home() {
    const getFutureTicketDate = () => {
        const today = new Date();
        today.setDate(today.getDate() + 60);

        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        return today.toLocaleDateString('en-US', options);
    };

    return (
        <>
            <div className='text-2xl md:text-3xl font-extrabold leading-snug'>
                <span style={{ color: "#7FFFD4" }}>Ticket bookings are now open for travel dates up to</span>
                <span style={{ color: "#39FF14" }}> {getFutureTicketDate()}.</span>
            </div>

            <div className="flex space-x-4">
                <DatePickerComponent />
            </div>
        </>
    );
}
