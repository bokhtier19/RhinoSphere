// sidebarConfig.ts
import {
    Home,
    Users,
    BookOpen,
    DollarSign,
    Bell,
    LucideGraduationCap,
    PenBoxIcon,
    Calendar,
    MessageCircle,
    TimerReset,
    CalendarDays,
    FileIcon,
    UserStar,
    Megaphone,
    PhoneCallIcon,
} from "lucide-react";

export const sidebarConfig: Record<string, { label: string; path: string; icon: any }[]> = {
    admin: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "All users", path: "/dashboard/admin/users", icon: Users },
        { label: "Teachers", path: "/dashboard/admin/teachers", icon: LucideGraduationCap },
        { label: "Guardians", path: "/dashboard/admin/guardians", icon: UserStar },
        { label: "Students", path: "/dashboard/admin/students", icon: PenBoxIcon },
        { label: "Time Table", path: "/dashboard/timetable", icon: CalendarDays },
        { label: "Message", path: "/dashboard/messages", icon: MessageCircle },
        { label: "Calender", path: "/dashboard/admin/calender", icon: Calendar },
        { label: "Fees", path: "/dashboard/admin/fees", icon: DollarSign },
        { label: "Noticeboard", path: "/dashboard/noticeboard", icon: Megaphone },
    ],
    teacher: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "My Classes", path: "/dashboard/teacher/classes", icon: BookOpen },
        { label: "Students", path: "/dashboard/teacher/students", icon: Users },
        { label: "Contact", path: "/dashboard/contact", icon: PhoneCallIcon },
    ],
    student: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "My Assignments", path: "/dashboard/student/assignments", icon: FileIcon },
        { label: "My TimeTable", path: "/dashboard/student/timetable", icon: Calendar },
        { label: "Message", path: "/dashboard/student/messages", icon: MessageCircle },
        { label: "Noticeboard", path: "/dashboard/student/noticeboard", icon: Megaphone },
        { label: "Contact", path: "/dashboard/contact", icon: PhoneCallIcon },
    ],
    guardian: [
        { label: "Dashboard", path: "/dashboard", icon: Home },
        { label: "Child’s Fees", path: "/dashboard/guardian/fees", icon: DollarSign },
        { label: "Notifications", path: "/dashboard/guardian/notifications", icon: Bell },
        { label: "Noticeboard", path: "/dashboard/student/noticeboard", icon: Megaphone },
        { label: "Contact", path: "/dashboard/contact", icon: PhoneCallIcon },
    ],
};
