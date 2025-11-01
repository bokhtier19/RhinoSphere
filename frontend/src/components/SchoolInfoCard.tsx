import React from "react";
import { Card, CardContent } from "./ui/card";

const SchoolInfoCard = () => {
    return (
        <div>
            <Card className="bg-card border-border">
                <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-2xl font-bold text-primary">Starlight International School</p>
                        <p className="text-muted-foreground text-sm mt-1">21 Garden View Road, Greenfield City, Mumbai, India</p>
                        <p className="text-muted-foreground text-sm">Contact: +91 98765 43210</p>
                    </div>
                    <img src="/school.svg" alt="Admin Illustration" width={200} className="drop-shadow-md" />
                </CardContent>
            </Card>
        </div>
    );
};

export default SchoolInfoCard;
