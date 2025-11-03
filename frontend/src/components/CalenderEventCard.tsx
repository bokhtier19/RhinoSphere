"use client";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
import { Ellipsis } from "lucide-react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const schoolEvents = [
    {
        id: 1,
        title: "Science Fair",
        time: "2025-11-05T09:00:00",
        description: "Annual school science exhibition where students showcase innovative projects and experiments.",
    },
    {
        id: 2,
        title: "Parent-Teacher Meeting",
        time: "2025-11-07T15:00:00",
        description: "Parents meet with teachers to discuss students' academic progress and behavior.",
    },
    {
        id: 3,
        title: "Sports Day",
        time: "2025-11-10T08:30:00",
        description: "Inter-house athletic events, games, and competitions throughout the day.",
    },
    {
        id: 4,
        title: "Art Workshop",
        time: "2025-11-12T11:00:00",
        description: "A creative art session focusing on painting and craft techniques for students of all grades.",
    },
    {
        id: 5,
        title: "Midterm Exam Results",
        time: "2025-11-15T10:00:00",
        description: "Announcement of midterm results in respective classrooms followed by review sessions.",
    },
];

const CalenderEventCard = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
            <div className="bg-card shadow-card p-4 rounded-2xl flex justify-center w-full">
                <Calendar onChange={onChange} value={value} />
            </div>

            <div className="text-sm w-full">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold mt-4 mb-2 text-primary">Upcoming Events</h3>
                    <Ellipsis className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                </div>
                <div className="flex flex-col gap-4 max-h-80 overflow-y-scroll  ">
                    {schoolEvents.slice(0, 2).map((event) => (
                        <div key={event.id} className="p-2 bg-card rounded-lg shadow-card border-t-2 odd:border-t-primary even:border-t-secondary  flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <h4 className="text-md font-semibold text-secondary">{event.title}</h4>
                                <p className="text-xs text-muted-foreground">{new Date(event.time).toLocaleDateString()}</p>
                            </div>
                            <p className="text-xs text-foreground">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalenderEventCard;
