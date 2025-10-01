import { BookOpen, FileText, Link2, Video } from "lucide-react";
export const resources = [
    {
        id: 1,
        title: "Maths E-Book",
        description: "Download the complete mathematics e-book for Class 9–12.",
        icon: BookOpen,
        link: "/files/maths-ebook.pdf",
        type: "Download",
    },
    {
        id: 2,
        title: "Science Video Tutorials",
        description: "Watch chapter-wise recorded video tutorials.",
        icon: Video,
        link: "https://youtube.com/playlist?list=XYZ",
        type: "External Link",
    },
    {
        id: 3,
        title: "Exam Guidelines",
        description: "Important guidelines for the upcoming semester exams.",
        icon: FileText,
        link: "/files/exam-guidelines.pdf",
        type: "Download",
    },
    {
        id: 4,
        title: "Reference Links",
        description: "Curated list of external resources and study materials.",
        icon: Link2,
        link: "https://www.khanacademy.org",
        type: "External Link",
    },
];
