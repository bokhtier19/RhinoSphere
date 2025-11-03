import { Event } from "react-big-calendar";

export const calenderevents = [
    {
        id: 1,
        title: "Science Fair",
        start: new Date(2025, 10, 5, 9, 0), // (year, monthIndex, day, hour, minute)
        end: new Date(2025, 10, 5, 15, 0),
        allDay: false,
    },
    {
        id: 2,
        title: "Parent-Teacher Meeting",
        start: new Date(2025, 10, 7, 14, 0),
        end: new Date(2025, 10, 7, 17, 0),
        allDay: false,
    },
    {
        id: 3,
        title: "Sports Day",
        start: new Date(2025, 10, 10, 8, 30),
        end: new Date(2025, 10, 10, 16, 0),
        allDay: true,
    },
    {
        id: 4,
        title: "Art Workshop",
        start: new Date(2025, 10, 12, 10, 0),
        end: new Date(2025, 10, 12, 12, 30),
        allDay: false,
    },
    {
        id: 5,
        title: "Midterm Exam Results",
        start: new Date(2025, 10, 15, 9, 0),
        end: new Date(2025, 10, 15, 11, 0),
        allDay: false,
    },
];
