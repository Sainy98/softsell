// components/ChatWidget/ChatWidget.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiX } from 'react-icons/fi';
import { useState } from 'react';

const ChatWidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm SoftSell AI Assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let responseText = "I'm sorry, I didn't understand that. Could you rephrase your question?";

    if (input.includes('sell') || input.includes('license')) {
      responseText = "To sell your software licenses, simply upload the details through our portal. We'll provide an instant valuation and handle the entire process for you.";
    } else if (input.includes('time') || input.includes('long')) {
      responseText = "The entire process typically takes 24-48 hours from submission to payment. Verification is usually completed within one business day.";
    } else if (input.includes('payment') || input.includes('paid')) {
      responseText = "We offer multiple payment options including bank transfer, PayPal, and cryptocurrency. Payments are processed within 24 hours after license verification.";
    } else if (input.includes('security') || input.includes('safe')) {
      responseText = "Your data security is our top priority. We use bank-grade encryption and never store sensitive payment information on our servers.";
    }

    return {
      id: messages.length + 2,
      text: responseText,
      sender: 'bot'
    };
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed bottom-24 right-8 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden z-50 border border-gray-200 dark:border-gray-700"
      >
        <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
          <h3 className="font-semibold">SoftSell Assistant</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <FiX className="w-5 h-5" />
          </button>
        </div>
        
        <div className="h-64 p-4 overflow-y-auto">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs p-3 rounded-lg ${message.sender === 'user' 
                  ? 'bg-purple-600 text-white rounded-br-none' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg rounded-bl-none">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700 flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black dark:text-white"
          />
          <button 
            type="submit" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatWidget;