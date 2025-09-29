"use client";

import React, { useState } from "react";

const ContactPage = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log("Form Submitted:", form);
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-2 shadow-md p-6 rounded-lg">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded p-2" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded p-2" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full border border-gray-300 rounded p-2"
                                placeholder="Write your message..."
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                            Send Message
                        </button>
                    </form>
                ) : (
                    <div className="text-center p-6 rounded-lg">
                        <h2 className="text-xl font-semibold text-green-700">Message Sent Successfully!</h2>
                        <p className="mt-2">We will get back to you soon.</p>
                    </div>
                )}
            </div>

            {/* School Contact Details */}
            <div className=" shadow-md p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">School Information</h2>
                <p className="mb-2">
                    <span className="font-semibold">Head Principal:</span> Dr. Anjali Sharma
                </p>
                <p className="mb-2">
                    <span className="font-semibold">Phone:</span> +91 98765 43210
                </p>
                <p className="mb-2">
                    <span className="font-semibold">Office:</span> +91 12345 67890
                </p>
                <p className="mb-2">
                    <span className="font-semibold">Email:</span> contact@rhinoschool.edu.in
                </p>
                <p className="mb-4">
                    <span className="font-semibold">Address:</span> Rhino School Campus, MG Road, Bangalore, India
                </p>

                {/* Optional Map Placeholder */}
                <div className="w-full h-48  rounded-lg flex items-center justify-center text-gray-600">Map Placeholder</div>
            </div>
        </div>
    );
};

export default ContactPage;
