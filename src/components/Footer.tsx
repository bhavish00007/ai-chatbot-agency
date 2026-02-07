import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-10 border-t border-white/10">
            <div className="container mx-auto px-6 text-center space-y-3">
                <h2 className="text-lg font-semibold">SamvadX Systems</h2>
                <p className="text-sm text-slate-300">Contact us: samvadxsystems@gmail.com</p>
                <p className="text-xs text-slate-400">
                    &copy; {new Date().getFullYear()} SamvadX Systems. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
