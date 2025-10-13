import React from "react";
import { Loader as LucideLoader } from "lucide-react";

const Loader = () => {
    return (
        <div className="flex w-screen items-center justify-center h-screen">
            <LucideLoader className="h-7 w-7 animate-spin" />
        </div>
    );
};

export default Loader;
