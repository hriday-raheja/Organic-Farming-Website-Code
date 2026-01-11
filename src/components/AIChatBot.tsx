import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Maximize2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm your organic farming assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  useEffect(() => {
    const openChat = () => setIsOpen(true);

    window.addEventListener('open-ai-chat', openChat);

    return () => {
      window.removeEventListener('open-ai-chat', openChat);
    };
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { id: Date.now(), text: input, isBot: false }]);
    setInput('');
    
    // Simulated response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "Thank you for your question! Our team is working on connecting me to provide real-time answers. Please explore our courses and community for detailed information.",
        isBot: true
      }]);
    }, 1000);
  };

  return (
    <>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className={`fixed z-50 bg-card shadow-organic-lg overflow-hidden border border-border
              ${isExpanded 
                ? 'inset-0 rounded-none'
                : 'bottom-6 right-6 w-[380px] max-w-[calc(100vw-48px)] rounded-2xl'
              }
            `}

          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground text-sm">AI Farming Assistant</h3>
                  <p className="text-xs text-primary-foreground/70">Always here to help</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsExpanded(true)}
                  className="text-primary-foreground hover:bg-primary-foreground/20 w-8 h-8"
                >
                  <Maximize2 className="w-4 h-4" />
                </Button>

                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => {
                    setIsExpanded(false);
                    setIsOpen(false);
                  }}
                  className="text-primary-foreground hover:bg-primary-foreground/20 w-8 h-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

          <div className="flex flex-col h-full">
            {/* Messages */}
            <div className={`${isExpanded ? 'flex-1' : 'h-80'} overflow-y-auto p-4 space-y-4 bg-background`}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      message.isBot
                        ? 'bg-muted text-foreground rounded-bl-none'
                        : 'bg-leaf text-primary-foreground rounded-br-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-card">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about organic farming..."
                  className="flex-1 px-4 py-2.5 rounded-xl bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-leaf text-foreground placeholder:text-muted-foreground"
                />
                <Button 
                  variant="hero" 
                  size="icon" 
                  onClick={handleSend}
                  className="rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBot;
