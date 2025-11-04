import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/calender.css";

import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
    title: "RhinoShpere",
    description: "A School Management System",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
