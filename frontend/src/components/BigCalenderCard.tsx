"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);
import { calenderevents } from "@/lib/calenderevents";
import { useState } from "react";

const BigCalenderCard = () => {
    const [view, setView] = useState<View>(Views.MONTH);

    const handleViewChange = (newView: View) => {
        setView(newView);
    };

    return (
        <div className="h-[600px] p-4 bg-white rounded-xl shadow">
            <Calendar
                localizer={localizer}
                events={calenderevents}
                views={["work_week", "day"]}
                onView={handleViewChange}
                startAccessor="start"
                endAccessor="end"
                view={view}
                style={{ height: 500 }}
            />
        </div>
    );
};

export default BigCalenderCard;
