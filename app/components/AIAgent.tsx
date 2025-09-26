'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Coffee, MapPin, Clock } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIAgentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIAgent({ isOpen, onClose }: AIAgentProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm your AI barista at WOOF COFFEE. I can help you find the perfect coffee, answer questions about our menu, suggest pairings, and even help with delivery options in Seattle. What can I help you with today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "What's your most popular drink?",
    "I like chocolate flavors, what do you recommend?",
    "Do you have any seasonal specials?",
    "What's the difference between cold brew and iced coffee?",
    "Do you deliver to Capitol Hill?",
    "What's your strongest coffee?",
    "Do you have dairy-free options?",
    "What time do you open?"
  ];

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Popular drinks
    if (message.includes('popular') || message.includes('best seller')) {
      return "Our most popular drinks are the Seattle Fog ($4.50) and Pike Place Pour Over ($5.25). The Seattle Fog is our signature blend with notes of chocolate and caramel, while the Pike Place Pour Over features single-origin Ethiopian beans hand-poured to perfection. Both are customer favorites!";
    }
    
    // Chocolate recommendations
    if (message.includes('chocolate') || message.includes('mocha')) {
      return "Perfect! For chocolate lovers, I recommend our Emerald City Mocha ($6.00) - it's a rich chocolate mocha with a touch of mint. We also have the Rain City Latte ($5.50) with hints of vanilla and cinnamon that pairs beautifully with chocolate notes.";
    }
    
    // Seasonal specials
    if (message.includes('seasonal') || message.includes('special')) {
      return "Right now we have our Mount Rainier Macchiato ($5.75) as a seasonal favorite - it's a layered espresso with foamed milk and caramel drizzle, perfect for the Seattle weather. We also rotate our single-origin beans seasonally to bring you the freshest flavors.";
    }
    
    // Cold brew vs iced coffee
    if (message.includes('cold brew') || message.includes('iced')) {
      return "Great question! Our Space Needle Cold Brew ($4.00) is steeped for 12 hours for a smooth, rich flavor with lower acidity. Iced coffee is brewed hot then chilled, which can be more acidic. Cold brew is perfect if you prefer a smoother, less bitter taste.";
    }
    
    // Delivery areas
    if (message.includes('deliver') || message.includes('capitol hill') || message.includes('seattle')) {
      return "Yes! We deliver to all Seattle neighborhoods including Capitol Hill, Downtown, Queen Anne, Fremont, Ballard, and more. Our delivery time is typically 20-30 minutes. Just enter your address when you place your order and we'll confirm delivery availability.";
    }
    
    // Strong coffee
    if (message.includes('strong') || message.includes('caffeine')) {
      return "For the strongest coffee, I recommend our Pike Place Pour Over ($5.25) - it's made with premium single-origin beans and has a bold, full-bodied flavor. Our Seattle Fog ($4.50) also has a robust espresso base. Both will give you that strong coffee kick you're looking for!";
    }
    
    // Dairy-free options
    if (message.includes('dairy') || message.includes('lactose') || message.includes('vegan')) {
      return "Absolutely! We offer oat milk, almond milk, coconut milk, and soy milk as dairy-free alternatives. All our drinks can be made with any of these options at no extra charge. Our Space Needle Cold Brew is naturally dairy-free and pairs great with oat milk!";
    }
    
    // Hours
    if (message.includes('open') || message.includes('hours') || message.includes('time')) {
      return "We're open 24/7! As a virtual coffee shop, we never close. You can order anytime, day or night. Our AI barista (that's me!) is always here to help, and we deliver to Seattle within 20-30 minutes of your order.";
    }
    
    // Weather-based recommendations
    if (message.includes('weather') || message.includes('rain') || message.includes('cold')) {
      return "For Seattle's rainy weather, I recommend our Rain City Latte ($5.50) - it's warm, creamy, and perfect for cozy days. If you prefer something cold, our Space Needle Cold Brew ($4.00) is smooth and refreshing even on cooler days.";
    }
    
    // Default response
    return "That's a great question! I'd be happy to help you find the perfect coffee. We have a wide variety of options from our signature Seattle Fog to our single-origin pour overs. Is there a particular flavor profile you're interested in, or would you like to know about our delivery options in Seattle?";
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = generateAIResponse(text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-amber-600 text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Coffee className="h-6 w-6" />
            <h3 className="text-xl font-semibold">AI Barista Assistant</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <div className="p-4 bg-gray-50 border-t">
          <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
          <div className="grid grid-cols-2 gap-2">
            {quickQuestions.slice(0, 4).map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(question)}
                className="text-left p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 text-xs transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              placeholder="Ask me anything about our coffee..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={() => handleSendMessage(inputText)}
              disabled={!inputText.trim()}
              className="bg-amber-600 text-white p-3 rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
