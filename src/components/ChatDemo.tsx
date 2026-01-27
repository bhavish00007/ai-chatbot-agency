import React from 'react';

const ChatDemo: React.FC = () => {
    return (
        <section id="chatdemo" className="py-12 md:py-20 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Chatbot Demo</h2>
                <p className="text-base md:text-lg mb-12">Experience our AI chatbot in action. Try out the demos below!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Demo 1</h3>
                        <video width="100%" height="256" controls className="border rounded mb-4" suppressHydrationWarning>
                            <source src="/videos/demo1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-full" suppressHydrationWarning>Try Demo</button>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-4">Demo 2</h3>
                        <video width="100%" height="256" controls className="border rounded mb-4" suppressHydrationWarning>
                            <source src="/videos/demo1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-full" suppressHydrationWarning>Try Demo</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatDemo;