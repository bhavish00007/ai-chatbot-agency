import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">SamvadX Systems</div>
                <div className="space-x-4">
                    <a href="#features" className="text-gray-600 hover:text-blue-500">Features</a>
                    <a href="#pricing" className="text-gray-600 hover:text-blue-500">Pricing</a>
                    <a href="#testimonials" className="text-gray-600 hover:text-blue-500">Testimonials</a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;