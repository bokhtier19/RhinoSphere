// sidebarConfig.ts
import { Home, Users, BookOpen, DollarSign, Bell, LucideGraduationCap, PenBoxIcon, Calendar, MessageCircle, TimerReset, CalendarDays, FileIcon } from "lucide-react";

export const sidebarConfig: Record<string, { label: string; path: string; icon: any }[]> = {
    admin: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "All users", path: "/users", icon: Users },
        { label: "Teachers", path: "/dashboard/teachers", icon: LucideGraduationCap },
        { label: "Students", path: "/dashboard/teachers", icon: PenBoxIcon },
        { label: "Time Table", path: "/dashboard/teachers", icon: CalendarDays },
        { label: "Message", path: "/dashboard/teachers", icon: MessageCircle },
        { label: "Calender", path: "/dashboard/teachers", icon: Calendar },
        { label: "Fees", path: "/fees", icon: DollarSign },
        { label: "Notifications", path: "/notifications", icon: Bell },
    ],
    teacher: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "My Classes", path: "/classes", icon: BookOpen },
        { label: "Students", path: "/students", icon: Users },
    ],
    student: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "My Assignments", path: "/fees", icon: FileIcon },
        { label: "My TimeTable", path: "/fees", icon: Calendar },
        { label: "Message", path: "/dashboard/teachers", icon: MessageCircle },

        { label: "Notifications", path: "/notifications", icon: Bell },
    ],
    guardian: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "Child’s Fees", path: "/fees", icon: DollarSign },
        { label: "Notifications", path: "/notifications", icon: Bell },
    ],
};
