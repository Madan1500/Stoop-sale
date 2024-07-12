import React, { useEffect, useState } from 'react';

const DateTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const saleEndTime = new Date('2024-12-31T23:59:59'); 

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const calculateTimeRemaining = () => {
        const total = saleEndTime - currentTime;
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return { total, days, hours, minutes, seconds };
    };

    const { total, days, hours, minutes, seconds } = calculateTimeRemaining();

    if (total <= 0) {
        return <div className="text-center text-xl text-red-600">The sale has ended!</div>;
    }

    return (
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg mt-16">
            <div className="text-3xl font-semibold text-gray-800 mb-4">Hurry Up! Sale Ends In:</div>
            <div className="flex space-x-4">
                <div className="p-4 bg-blue-500 text-white rounded-lg">
                    <div className="text-2xl text-center">{days}</div>
                    <div className="text-sm">Days</div>
                </div>
                <div className="p-4 bg-blue-500 text-white rounded-lg">
                    <div className="text-2xl text-center">{hours}</div>
                    <div className="text-sm">Hours</div>
                </div>
                <div className="p-4 bg-blue-500 text-white rounded-lg">
                    <div className="text-2xl text-center">{minutes}</div>
                    <div className="text-sm">Minutes</div>
                </div>
                <div className="p-4 bg-blue-500 text-white rounded-lg">
                    <div className="text-2xl text-center">{seconds}</div>
                    <div className="text-sm">Seconds</div>
                </div>
            </div>
        </div>
    );
};

export default DateTime;
