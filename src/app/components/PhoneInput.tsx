'use client';

import { useState } from 'react';
import * as Flags from 'country-flag-icons/react/3x2';


export default function PhoneInput() {
    const [selectedCode, setSelectedCode] = useState('+91');

    const countries = [
        { code: '+91', label: 'India' },
        { code: '+1', label: '🇺🇸 USA' },
        { code: '+44', label: '🇬🇧 UK' },
    ];

    return (
        <>
            <div className="flex items-center border border-gray-300 rounded px-2 py-2 bg-white">

                {selectedCode === '+91' ? (<> <Flags.IN title="India" className="w-6 h-auto" /></>) : (<></>)}
                {selectedCode === '+1' ? (<> <Flags.US title="India" className="w-6 h-auto" /></>) : (<></>)}
                {selectedCode === '+44' ? (<> <Flags.GB title="India" className="w-6 h-auto" /></>) : (<></>)}

                <select
                    value={selectedCode}
                    onChange={(e) => setSelectedCode(e.target.value)}
                    className=" pr-2 focus:outline-none text-sm text-gray-700 border-gray-300 b bg-white"
                >
                    {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                            {country.code}
                        </option>
                    ))}
                </select>

                {/* Phone number input */}
                <input
                    type="tel"
                    id="phone"
                    placeholder="Enter number"
                    className="ml-3 w-full border-none focus:outline-none text-sm text-gray-800"
                />
            </div>
        </>
    );
}