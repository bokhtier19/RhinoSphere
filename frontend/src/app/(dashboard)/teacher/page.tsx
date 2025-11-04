import AnnouncementCard from "@/components/AnnouncementCard";
import BigCalenderCard from "@/components/BigCalenderCard";
import CalenderEventCard from "@/components/CalenderEventCard";
import React from "react";

const TeacherPage = () => {
    return (
        <div className="flex w-full h-screen flex-col gap-6 p-6">
            <div className="flex flex-col lg:flex-row w-full h-full">
                {/* Left side */}
                <div className="lg:w-3/4 w-full p-4 flex flex-col gap-6">
                    <div>
                        <p className="font-semibold text-primary">Schedule (12A) </p>
                    </div>
                    <BigCalenderCard />
                </div>
                {/* Right side */}
                <div className="lg:w-1/4 w-full p-4 gap-8 flex flex-col">
                    <CalenderEventCard />
                    <AnnouncementCard />
                </div>
            </div>
        </div>
    );
};

export default TeacherPage;
