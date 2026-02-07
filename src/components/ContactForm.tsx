"use client";

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-950">
            <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[1.1fr_1fr]">
                <div className="space-y-6 text-left">
                    <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">
                        Contact
                    </p>
                    <h2 className="text-3xl font-semibold text-white md:text-4xl">
                        Let&apos;s design your support experience.
                    </h2>
                    <p className="text-slate-200">
                        Tell us about your customer journey and we&apos;ll craft a chatbot that feels
                        human, helpful, and on-brand.
                    </p>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                        <p className="font-semibold text-white">Quick response</p>
                        <p className="mt-2">We typically reply within one business day.</p>
                    </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-900/60">
                    <h3 className="text-2xl font-semibold text-white mb-6">Contact Us</h3>
                    {success && <p className="text-emerald-300 mb-4">Message sent successfully!</p>}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-200 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300/30"
                                suppressHydrationWarning
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-200 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300/30"
                                suppressHydrationWarning
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-200 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="mt-1 block w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-300/30"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-70"
                            suppressHydrationWarning
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
