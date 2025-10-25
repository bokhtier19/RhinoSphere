"use client";

import React from "react";

interface TimetableSlot {
    day: string;
    time: string;
    subject: string;
    teacher: string;
}

const timetable: TimetableSlot[] = [
    { day: "Monday", time: "09:00 - 10:00", subject: "Math", teacher: "Mr. Sharma" },
    { day: "Monday", time: "10:00 - 11:00", subject: "Science", teacher: "Ms. Patel" },
    { day: "Tuesday", time: "09:00 - 10:00", subject: "English", teacher: "Mr. Khan" },
    { day: "Wednesday", time: "11:00 - 12:00", subject: "History", teacher: "Ms. Roy" },
    { day: "Friday", time: "01:00 - 02:00", subject: "Computer", teacher: "Mr. Das" },
];

const TimeTablePage = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div className="p-6 w-full">
            <h2 className="text-2xl font-bold mb-6">Class Timetable</h2>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="">
                            <th className="p-3 border">Time</th>
                            {days.map((day) => (
                                <th key={day} className="p-3 border">
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Generate rows by time slots */}
                        {["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "01:00 - 02:00"].map((slot) => (
                            <tr key={slot}>
                                <td className="p-3 border font-semibold">{slot}</td>
                                {days.map((day) => {
                                    const entry = timetable.find((t) => t.day === day && t.time === slot);
                                    return (
                                        <td key={day + slot} className="p-3 border text-center">
                                            {entry ? (
                                                <div>
                                                    <p className="font-medium">{entry.subject}</p>
                                                    <p className="text-sm text-gray-500">{entry.teacher}</p>
                                                </div>
                                            ) : (
                                                "-"
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TimeTablePage;
