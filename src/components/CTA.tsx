import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="mb-8">Book a demo with our AI chatbot experts and see how we can help you enhance customer engagement.</p>
                <a href="#contact" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
                    Book a Demo
                </a>
            </div>
        </section>
    );
};

export default CTA;