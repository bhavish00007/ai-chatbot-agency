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
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                {success && <p className="text-green-600 mb-4">Message sent successfully!</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            suppressHydrationWarning
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            suppressHydrationWarning
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
                        suppressHydrationWarning
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;