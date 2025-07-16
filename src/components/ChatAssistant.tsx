import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import OpenAI from 'openai';
import { X, MessageCircle, Send } from 'lucide-react';

const openai = import.meta.env.VITE_OPENAI_API_KEY ? new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
}) : null;

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isStreaming?: boolean;
}

const SYSTEM_PROMPT = `You are a helpful customer service assistant for LineTab, a company that manufactures advanced waterline maintenance tablets for dental offices. Here's everything you need to know about LineTab:

**Company Overview:**
- LineTab creates EPA-approved waterline maintenance tablets specifically designed for dental offices
- The company focuses on maintaining clean, safe waterlines to prevent biofilm buildup
- EPA Registration Number: 93108-2
- Products are manufactured in the USA with highest quality standards

**Product Details:**
- Product: LineTab Waterline Maintenance Tablets
- Price: $35 per bottle (100 tablets)
- Duration: Each bottle lasts 3-4 months for average dental office
- Usage: 1 tablet per day dissolved in dental unit water reservoir
- EPA approved and clinically tested for safety and efficacy

**Key Benefits:**
- Prevents biofilm formation in dental waterlines
- Maintains water quality standards required by CDC and ADA
- Easy daily use - just drop one tablet in water reservoir
- Cost-effective solution compared to other waterline maintenance systems
- No complex equipment or installation required

**Target Customers:**
- Dental offices of all sizes
- Dental hygienists and dentists
- Practice managers responsible for compliance
- Dental equipment technicians

**Compliance & Safety:**
- Meets CDC guidelines for dental water quality
- ADA recommended approach to waterline maintenance
- EPA registered and approved for dental use
- Safe for patients and staff when used as directed
- Helps practices maintain regulatory compliance

**Common Questions:**
- How to use: Add 1 tablet daily to dental unit water reservoir
- Compatibility: Works with all major dental unit brands
- Storage: Store in cool, dry place away from direct sunlight
- Safety: Non-toxic when used as directed, EPA approved

**Company Values:**
- Patient safety first
- Quality manufacturing standards
- Supporting dental professionals
- Affordable, effective solutions
- Environmental responsibility

Always be helpful, knowledgeable, and professional. Focus on how LineTab helps dental offices maintain safe, clean waterlines efficiently and cost-effectively. If asked about technical details, reference the EPA approval and clinical testing. For pricing questions, mention the $35 cost for 100 tablets lasting 3-4 months.`;

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Add placeholder message for streaming
    const streamingMessage: Message = { 
      role: 'assistant', 
      content: '', 
      isStreaming: true 
    };
    setMessages(prev => [...prev, streamingMessage]);

    try {
      if (!openai) {
        // Fallback message when API key is not available
        setMessages(prev => prev.slice(0, -1).concat([{
          role: 'assistant',
          content: 'I apologize, but the chat service is currently unavailable. Please contact us directly at info@linetab.com or call us for assistance with your LineTab products.',
          isStreaming: false
        }]));
        return;
      }

      const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.map(msg => ({ role: msg.role, content: msg.content })),
          { role: 'user', content: input }
        ],
        max_tokens: 500,
        temperature: 0.7,
        stream: true,
      });

      let fullContent = '';
      
      for await (const chunk of response) {
        const content = chunk.choices[0]?.delta?.content || '';
        if (content) {
          fullContent += content;
          
          // Update the streaming message
          setMessages(prev => {
            const newMessages = [...prev];
            const lastMessage = newMessages[newMessages.length - 1];
            if (lastMessage && lastMessage.isStreaming) {
              lastMessage.content = fullContent;
            }
            return newMessages;
          });
        }
      }

      // Mark streaming as complete
      setMessages(prev => {
        const newMessages = [...prev];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage && lastMessage.isStreaming) {
          lastMessage.isStreaming = false;
        }
        return newMessages;
      });

    } catch (error) {
      console.error('Error calling OpenAI:', error);
      
      // Replace the streaming message with error message
      setMessages(prev => {
        const newMessages = [...prev];
        const lastMessage = newMessages[newMessages.length - 1];
        if (lastMessage && lastMessage.isStreaming) {
          lastMessage.content = 'Sorry, I\'m having trouble connecting right now. Please try again later.';
          lastMessage.isStreaming = false;
        }
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors duration-200"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={24} />
        </motion.button>
      </motion.div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-96 h-[32rem] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col"
            initial={{ scale: 0, opacity: 0, originX: 1, originY: 1 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 pt-12 space-y-3">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    {message.role === 'assistant' ? (
                      <div className="text-sm">
                        <ReactMarkdown
                          components={{
                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                            ul: ({ children }) => <ul className="list-disc list-inside mb-2">{children}</ul>,
                            li: ({ children }) => <li className="mb-1">{children}</li>,
                            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                        {message.isStreaming && (
                          <span className="inline-block w-1 h-4 bg-gray-400 animate-pulse ml-1" />
                        )}
                      </div>
                    ) : (
                      <div className="text-sm">{message.content}</div>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center space-x-3 bg-gray-50 rounded-2xl px-4 py-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about LineTab..."
                  className="flex-1 bg-transparent text-sm focus:outline-none placeholder-gray-500"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="text-blue-600 hover:text-blue-700 disabled:text-gray-400 transition-colors p-1"
                >
                  <Send size={18} className="text-blue-600" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 