import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';

// Lazy import to prevent module load errors
let getTennisAdvice: ((query: string) => Promise<string>) | null = null;

const loadGeminiService = async () => {
  if (!getTennisAdvice) {
    try {
      const service = await import('../services/geminiService');
      getTennisAdvice = service.getTennisAdvice;
    } catch (error) {
      console.warn('Failed to load Gemini service:', error);
      getTennisAdvice = async () => "AI Coach service is not available. Please contact Coach Abiodun directly for tennis advice.";
    }
  }
  return getTennisAdvice;
};

const AICoach: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi! I'm Coach Abiodun's AI Assistant. Ask me anything about tennis technique, rules, or strategy!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const getAdvice = await loadGeminiService();
      const responseText = await getAdvice(input);

      const botMessage: ChatMessage = {
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting advice:', error);
      const errorMessage: ChatMessage = {
        role: 'model',
        text: "Sorry, I encountered an error. Please try again or contact Coach Abiodun directly.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-coach" className="scroll-mt-24 py-20 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-zinc-800 px-4 py-1 rounded-full border border-zinc-700 mb-4">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ask Coach AI</h2>
          <p className="text-zinc-400">Get instant tips on your serve, forehand, or match mentality.</p>
        </div>

        <div className="bg-zinc-950/50 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-zinc-700">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700'
                  }`}
                >
                  {msg.role === 'model' && (
                    <div className="flex items-center gap-2 mb-1 opacity-50 text-xs font-bold uppercase">
                      <Bot size={12} /> Coach AI
                    </div>
                  )}
                  <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 rounded-2xl rounded-bl-none px-5 py-4 border border-zinc-700">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-900 border-t border-zinc-800">
            <div className="flex items-center gap-2 bg-zinc-800 rounded-xl px-4 py-2 ring-1 ring-zinc-700 focus-within:ring-blue-500 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about improving your backhand..."
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-500 py-2"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 rounded-lg text-white transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-center text-zinc-600 mt-2">AI can make mistakes. Always consult Coach Abiodun for personalized training.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICoach;