"use client";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns";
import { getDay } from "date-fns/getDay";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup date-fns localizer
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
    getDay,
    locales,
});

// Define event type
interface MyEvent extends Event {
    id: number;
    title: string;
    start: Date;
    end: Date;
}

const AdminCalendarPage = () => {
    const [events, setEvents] = useState<MyEvent[]>([
        {
            id: 1,
            title: "Teachers Meeting",
            start: new Date(2025, 8, 28, 10, 0), // Sept 28, 2025 10:00
            end: new Date(2025, 8, 28, 11, 30),
        },
        {
            id: 2,
            title: "Parent-Teacher Conference",
            start: new Date(2025, 8, 30, 14, 0),
            end: new Date(2025, 8, 30, 16, 0),
        },
    ]);

    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [planTitle, setPlanTitle] = useState("");

    const handleSelectSlot = ({ start }: { start: Date }) => {
        setSelectedDate(start);
        setOpen(true);
    };

    const handleAddEvent = () => {
        if (selectedDate && planTitle.trim()) {
            const newEvent: MyEvent = {
                id: events.length + 1,
                title: planTitle,
                start: selectedDate,
                end: new Date(selectedDate.getTime() + 60 * 60 * 1000), // +1 hour
            };
            setEvents([...events, newEvent]);
            setPlanTitle("");
            setOpen(false);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">School Calendar & Plans</h2>
            <div className="h-[500px]">
                <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: "100%" }} selectable onSelectSlot={handleSelectSlot} popup />
            </div>

            {/* Add Plan Modal */}
            <div className="bg-secondary">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add Plan</DialogTitle>
                        </DialogHeader>
                        <p className="text-sm mb-2">Selected Date: {selectedDate?.toLocaleDateString()}</p>
                        <Input placeholder="Enter plan title..." value={planTitle} onChange={(e) => setPlanTitle(e.target.value)} className="mb-4" />
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button onClick={handleAddEvent}>Add</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default AdminCalendarPage;
