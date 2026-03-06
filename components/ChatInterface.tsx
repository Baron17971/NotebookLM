import React, { useRef, useEffect, useState } from 'react';
import { ChatMessage } from '../types';
import { UserIcon, AiIcon, SendIcon, CopyIcon, CheckIcon } from './Icons';

interface ChatInterfaceProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  currentQuestion: string;
  setCurrentQuestion: (question: string) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ messages, onSendMessage, isLoading, currentQuestion, setCurrentQuestion }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [copiedMessageIndex, setCopiedMessageIndex] = useState<number | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedMessageIndex(index);
      setTimeout(() => {
        setCopiedMessageIndex(null);
      }, 2000); // Reset icon after 2 seconds
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(currentQuestion);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            {msg.sender === 'ai' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white">
                <AiIcon />
              </div>
            )}
            <div className={`group relative max-w-md rounded-2xl p-4 ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white rounded-br-lg' 
                : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-lg'
            }`}>
               {msg.sender === 'ai' && (
                <button 
                  onClick={() => handleCopy(msg.text, index)}
                  className="absolute top-2 left-2 p-1.5 rounded-md bg-slate-300/50 dark:bg-slate-600/50 text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                  aria-label="העתק טקסט"
                >
                  {copiedMessageIndex === index ? <CheckIcon className="w-4 h-4 text-green-500" /> : <CopyIcon className="w-4 h-4" />}
                </button>
              )}
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
             {msg.sender === 'user' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-600 flex items-center justify-center">
                <UserIcon />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
           <div className="flex items-start gap-4">
               <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white">
                 <AiIcon />
               </div>
               <div className="max-w-md rounded-2xl p-4 bg-slate-200 dark:bg-slate-700">
                    <div className="flex items-center space-x-2" dir="ltr">
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <form onSubmit={handleFormSubmit} className="relative">
          <textarea
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleFormSubmit(e);
              }
            }}
            placeholder="שאלו משהו על המקור..."
            className="w-full py-3 ps-4 pe-14 bg-slate-100 dark:bg-slate-700 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            rows={1}
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading || !currentQuestion.trim()}
            className="absolute top-1/2 -translate-y-1/2 end-3 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;