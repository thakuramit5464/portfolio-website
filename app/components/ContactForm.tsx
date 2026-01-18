"use client";

import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Simple client-side action: open mail client with prefilled body
        const subject = encodeURIComponent(`Contact from ${name || "Website"}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        globalThis.location.href = `mailto:thakuramit5464@gmail.com?subject=${subject}&body=${body}`;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <div>
                <label htmlFor="contact-name" className="block text-sm">Name</label>
                <input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded border border-slate-200 px-3 py-2 dark:border-slate-700" />
            </div>
            <div>
                <label htmlFor="contact-email" className="block text-sm">Email</label>
                <input id="contact-email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 w-full rounded border border-slate-200 px-3 py-2 dark:border-slate-700" />
            </div>
            <div>
                <label htmlFor="contact-message" className="block text-sm">Message</label>
                <textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded border border-slate-200 px-3 py-2 dark:border-slate-700" />
            </div>
            <div>
                <button type="submit" className="rounded bg-slate-900 px-4 py-2 text-white hover:bg-slate-700">Send</button>
            </div>
        </form>
    );
}
