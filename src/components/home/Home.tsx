import Link from 'next/link';
import DarkVeil from '@/components/DarkVeil/DarkVeil';
import Navbar from '../navbar/navbar';
import DatePickerComponent from '@/components/datepicker/DatePickerComponent';
import { Color } from 'ogl';

export default function Home() {
    const getFutureTicketDate = () => {
        const today = new Date();
        today.setDate(today.getDate() + 60);

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

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
            {/*  <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900 via-black to-black opacity-90" style={{ width: '100%', height: '1000px' }}>
                    <DarkVeil speed={0.5} warpAmount={3} />
                </div>
                <Navbar />
 */}
            {/* Main heading */}
            <div className='text-2xl md:text-3xl font-extrabold leading-snug'><span className='' style={{ color: "#7FFFD4" }}>Ticket bookings are now open for travel dates up to</span> <span style={{ color: "#39FF14" }}>{getFutureTicketDate()} .</span></div>
            <div className="flex space-x-4">
                <DatePickerComponent />
            </div>


            {/* Buttons */}
            {/* <div className="mt-8 flex space-x-4">
                    <button className="px-6 py-3 rounded-full bg-white text-black font-semibold">
                        Get Started
                    </button>
                    <button className="px-6 py-3 rounded-full bg-black/60 text-white border border-white/30">
                        Learn More
                    </button>
                </div> */}
            {/*  </div> */}
        </>
    );
}