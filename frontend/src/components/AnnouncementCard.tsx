import React from "react";
const announcements = [
    {
        id: 1,
        title: "Holiday Notice – Diwali Break",
        time: "2025-11-06T08:00:00",
        description: "School will remain closed from November 6th to November 10th for Diwali celebrations. Classes will resume on November 11th.",
    },
    {
        id: 2,
        title: "New Library Books Arrived",
        time: "2025-11-04T10:30:00",
        description: "The library has received a new collection of science fiction and reference books. Students are encouraged to visit and explore.",
    },
    {
        id: 3,
        title: "Uniform Policy Update",
        time: "2025-11-02T09:00:00",
        description: "Students must adhere to the updated winter uniform policy starting next week. Details are available on the notice board.",
    },
    {
        id: 4,
        title: "Annual Day Rehearsals",
        time: "2025-11-08T14:00:00",
        description: "Rehearsals for Annual Day will begin after school hours. All participating students must attend daily practice sessions.",
    },
];

const AnnouncementCard = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold mb-2 text-primary">Announcements</h3>
                <span className="text-xs text-secondary">view all</span>
            </div>
            <div className="flex flex-col gap-2 overflow-y-scroll">
                {announcements.slice(0, 3).map((a) => (
                    <div key={a.id} className="p-2 bg-card rounded-lg shadow-card border-t-2 odd:border-t-primary even:border-t-secondary  flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-xs text-secondary">{a.title}</h3>
                            <p className="text-xs">{new Date(a.time).toLocaleDateString()}</p>
                        </div>
                        <p className="text-xs">{a.description.split(" ").slice(0, 12).join(" ")}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnnouncementCard;
