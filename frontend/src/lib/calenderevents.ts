// Define a proper type (optional but recommended)
export interface CalendarEvent {
    title: string;
    allDay: boolean;
    start: Date;
    end: Date;
}

const currentYear = 2025;
const currentMonth = 10; //November (0-indexed)

export const calendarEvents: CalendarEvent[] = [
    {
        title: "Math",
        allDay: false,
        start: new Date(currentYear, currentMonth, 3, 8, 0),
        end: new Date(currentYear, currentMonth, 3, 8, 45),
    },
    {
        title: "English",
        allDay: false,
        start: new Date(currentYear, currentMonth, 3, 9, 0),
        end: new Date(currentYear, currentMonth, 3, 9, 45),
    },
    {
        title: "Biology",
        allDay: false,
        start: new Date(currentYear, currentMonth, 3, 10, 0),
        end: new Date(currentYear, currentMonth, 3, 10, 45),
    },
    {
        title: "Physics",
        allDay: false,
        start: new Date(currentYear, currentMonth, 3, 11, 0),
        end: new Date(currentYear, currentMonth, 3, 11, 45),
    },
    {
        title: "Chemistry",
        allDay: false,
        start: new Date(currentYear, currentMonth, 3, 13, 0),
        end: new Date(currentYear, currentMonth, 3, 13, 45),
    },
    {
        title: "History",
        allDay: false,
        start: new Date(currentYear, currentMonth, 3, 14, 0),
        end: new Date(currentYear, currentMonth, 3, 14, 45),
    },
    {
        title: "English",
        allDay: false,
        start: new Date(currentYear, currentMonth, 4, 9, 0),
        end: new Date(currentYear, currentMonth, 4, 9, 45),
    },
    {
        title: "Biology",
        allDay: false,
        start: new Date(currentYear, currentMonth, 4, 10, 0),
        end: new Date(currentYear, currentMonth, 4, 10, 45),
    },
    {
        title: "Physics",
        allDay: false,
        start: new Date(currentYear, currentMonth, 4, 11, 0),
        end: new Date(currentYear, currentMonth, 4, 11, 45),
    },
    {
        title: "History",
        allDay: false,
        start: new Date(currentYear, currentMonth, 4, 14, 0),
        end: new Date(currentYear, currentMonth, 4, 14, 45),
    },
    {
        title: "Math",
        allDay: false,
        start: new Date(currentYear, currentMonth, 5, 8, 0),
        end: new Date(currentYear, currentMonth, 5, 8, 45),
    },
    {
        title: "Biology",
        allDay: false,
        start: new Date(currentYear, currentMonth, 5, 10, 0),
        end: new Date(currentYear, currentMonth, 5, 10, 45),
    },
    {
        title: "Chemistry",
        allDay: false,
        start: new Date(currentYear, currentMonth, 5, 13, 0),
        end: new Date(currentYear, currentMonth, 5, 13, 45),
    },
    {
        title: "History",
        allDay: false,
        start: new Date(currentYear, currentMonth, 5, 14, 0),
        end: new Date(currentYear, currentMonth, 5, 14, 45),
    },
    {
        title: "English",
        allDay: false,
        start: new Date(currentYear, currentMonth, 6, 9, 0),
        end: new Date(currentYear, currentMonth, 6, 9, 45),
    },
    {
        title: "Biology",
        allDay: false,
        start: new Date(currentYear, currentMonth, 6, 10, 0),
        end: new Date(currentYear, currentMonth, 6, 10, 45),
    },
    {
        title: "Physics",
        allDay: false,
        start: new Date(currentYear, currentMonth, 6, 11, 0),
        end: new Date(currentYear, currentMonth, 6, 11, 45),
    },
    {
        title: "History",
        allDay: false,
        start: new Date(currentYear, currentMonth, 6, 14, 0),
        end: new Date(currentYear, currentMonth, 6, 14, 45),
    },
    {
        title: "Math",
        allDay: false,
        start: new Date(currentYear, currentMonth, 7, 8, 0),
        end: new Date(currentYear, currentMonth, 7, 8, 45),
    },
    {
        title: "English",
        allDay: false,
        start: new Date(currentYear, currentMonth, 7, 9, 0),
        end: new Date(currentYear, currentMonth, 7, 9, 45),
    },
    {
        title: "Physics",
        allDay: false,
        start: new Date(currentYear, currentMonth, 7, 11, 0),
        end: new Date(currentYear, currentMonth, 7, 11, 45),
    },
    {
        title: "Chemistry",
        allDay: false,
        start: new Date(currentYear, currentMonth, 7, 13, 0),
        end: new Date(currentYear, currentMonth, 7, 13, 45),
    },
    {
        title: "History",
        allDay: false,
        start: new Date(currentYear, currentMonth, 7, 14, 0),
        end: new Date(currentYear, currentMonth, 7, 14, 45),
    },
];
