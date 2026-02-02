import { useState, useEffect } from 'react';

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessage = { text: input, sender: 'user' };
        setMessages((prev) => [...prev, newMessage]);
        setInput('');
        setLoading(true);

        // Simulate API call to send message
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });
            const data = await response.json();
            setMessages((prev) => [...prev, { text: data.reply, sender: 'bot' }]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the chat when a new message is added
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    return {
        messages,
        input,
        setInput,
        sendMessage,
        loading,
    };
};

export default useChat;