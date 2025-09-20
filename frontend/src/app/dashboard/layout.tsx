import React from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
    return <ProtectedRoute>{children}</ProtectedRoute>;
};

export default DashboardPageLayout;
