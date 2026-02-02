import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <h2 className="text-lg font-semibold">SamvadX Systems</h2>
                <p className="mt-2">Contact us: samvadxsystems@gmail.com</p>
                <p className="mt-2">&copy; {new Date().getFullYear()} SamvadX Systems. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
