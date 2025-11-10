import React from "react";

const Pagination = () => {
    return (
        <div>
            <div className="flex items-center justify-between text-xs">
                <button disabled className="bg-secondary disabled:bg-gray-500 py-1 px-2 rounded disabled:opacity-50 p-2 text-white disabled:cursor-not-allowed">
                    Prev
                </button>
                <div className="flex items-center justify-between gap-4">
                    <button className="p-2 bg-secondary text-white">1</button>
                    <button className="p-2 bg-secondary text-white">2</button>
                    <button className="p-2 bg-secondary text-white">3</button>
                    <p>...........</p>
                    <button className="p-2 bg-secondary text-white">10</button>
                </div>
                <button className="bg-secondary disabled:bg-gray-500 py-1 px-2 rounded disabled:opacity-50 p-2 text-white disabled:cursor-not-allowed">Next</button>
            </div>
        </div>
    );
};

export default Pagination;
