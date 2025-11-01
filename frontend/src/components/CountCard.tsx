import React from "react";
import { Ellipsis } from "lucide-react";

const CountCard = ({ type }: { type: string }) => {
    return (
        <div className="flex-1  even:bg-secondary odd:bg-primary rounded-2xl min-w-[130px]">
            {/* Small Summary Cards */}
            <div className="">
                <div className="p-4 text-center flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <p className="text-xs bg-accent">2025-26</p>
                        <Ellipsis className="inline-block mb-1 odd:text-secondary even:text-white" />
                    </div>
                    <p className="text-2xl font-bold">628</p>
                    <h2 className="text-sm text-muted-foreground font-semibold">{type}</h2>
                </div>
            </div>
        </div>
    );
};

export default CountCard;
