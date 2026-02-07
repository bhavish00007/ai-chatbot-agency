import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="py-20 bg-indigo-600 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold mb-4 md:text-4xl">
                    Ready to transform your business?
                </h2>
                <p className="mb-8 text-white/90">
                    Book a demo with our AI chatbot experts and see how we can help you enhance customer engagement.
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5"
                >
                    Schedule a call
                </a>
            </div>
        </section>
    );
};

export default CTA;
