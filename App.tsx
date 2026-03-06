import React, { useState, useCallback } from 'react';
import { SOURCE_TEXT, FEATURES_TITLE, FEATURES, USE_CASES_TITLE, USE_CASES_SUBTITLE, USE_CASES_TEACHERS, USE_CASES_STUDENTS } from './constants';
import { ChatMessage } from './types';
import { getGroundedAnswer } from './services/geminiService';
import SourceViewer from './components/SourceViewer';
import ChatInterface from './components/ChatInterface';
import UseCases from './components/UseCases';
import Features from './components/Features';
import { LogoIcon } from './components/Icons';

const App: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: 'שלום! אני כאן כדי לעזור לכם להבין את כוחו של NotebookLM. קראו את המקור בצד ימין ושאלו אותי שאלות עליו.'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const handleSendMessage = useCallback(async (question: string) => {
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    const newMessages: ChatMessage[] = [...chatMessages, { sender: 'user', text: question }];
    setChatMessages(newMessages);
    setCurrentQuestion('');

    try {
      const answer = await getGroundedAnswer(SOURCE_TEXT, question);
      setChatMessages([...newMessages, { sender: 'ai', text: answer }]);
    } catch (error) {
      console.error("Error fetching answer from Gemini:", error);
      setChatMessages([...newMessages, { sender: 'ai', text: 'מצטער, התרחשה שגיאה. אנא נסה שוב מאוחר יותר.' }]);
    } finally {
      setIsLoading(false);
    }
  }, [chatMessages, isLoading]);

  const handleUseCaseClick = (question: string) => {
    setCurrentQuestion(question);
    // Optional: focus the textarea
    document.querySelector('textarea')?.focus();
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 min-h-screen text-slate-800 dark:text-slate-200">
      <header className="bg-white dark:bg-slate-800/50 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <LogoIcon />
                <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">לומדים NotebookLM</h1>
            </div>
             <a 
                href="https://notebooklm.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
                לאתר הרשמי
            </a>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Main Interaction Area */}
          <div className="lg:col-span-3 flex flex-col gap-8">
             <div className="h-[60vh] md:h-[70vh] flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden">
                <ChatInterface 
                    messages={chatMessages}
                    onSendMessage={handleSendMessage}
                    isLoading={isLoading}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                />
            </div>
          </div>
          
          {/* Source Document */}
          <div className="lg:col-span-2">
             <div className="sticky top-24">
                <SourceViewer text={SOURCE_TEXT} />
             </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-12 md:mt-16">
            <Features title={FEATURES_TITLE} features={FEATURES} />
        </div>

        {/* Use Cases Section */}
        <div className="mt-12 md:mt-16">
          <UseCases 
            infoTitle={USE_CASES_TITLE}
            infoSubtitle={USE_CASES_SUBTITLE}
            teacherUseCases={USE_CASES_TEACHERS}
            studentUseCases={USE_CASES_STUDENTS}
            onUseCaseClick={handleUseCaseClick}
          />
        </div>
      </main>
    </div>
  );
};

export default App;