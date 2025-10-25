import React from "react";
import { Loader as LucideLoader } from "lucide-react";

const Loader = () => {
    return (
        <div className="flex w-full items-center justify-center h-full">
            <LucideLoader className="h-5 w-5 animate-spin" />
        </div>
    );
};

export default Loader;
