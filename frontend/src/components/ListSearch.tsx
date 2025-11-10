import { Search } from "lucide-react";
import React from "react";

const ListSearch = () => {
    return (
        <div>
            <div className="flex items-center  gap-2 bg-card border border-border rounded-xl px-3 py-2 shadow-sm">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Search anything..." className="bg-transparent w-full outline-none text-sm text-foreground placeholder:text-muted-foreground" />
            </div>
        </div>
    );
};

export default ListSearch;
