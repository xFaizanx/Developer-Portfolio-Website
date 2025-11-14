import { Bot, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </Button>
      </div>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white">AI Assistant</h3>
                <p className="text-white/80">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {/* Welcome Message */}
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Hi! I'm the Codeli AI assistant. How can I help you today?
                  </p>
                  <div className="mt-2 space-y-1">
                    <button className="block w-full text-left text-blue-500 dark:text-cyan-400 hover:underline">
                      Tell me about the skills & expertise
                    </button>
                    <button className="block w-full text-left text-blue-500 dark:text-cyan-400 hover:underline">
                      Show recent projects
                    </button>
                    <button className="block w-full text-left text-blue-500 dark:text-cyan-400 hover:underline">
                      How can I get in touch?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400 text-gray-900 dark:text-white"
              />
              <Button
                size="icon"
                className="bg-blue-500 hover:bg-blue-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
