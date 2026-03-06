
import React from 'react';
import { BookOpenIcon } from './Icons';

interface SourceViewerProps {
  text: string;
}

const SourceViewer: React.FC<SourceViewerProps> = ({ text }) => {
  // Simple markdown-to-HTML conversion
  const formatText = (inputText: string) => {
    return inputText
      .split('\n')
      .map((line, index) => {
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-lg font-semibold mt-4 mb-2 text-sky-600 dark:text-sky-400">{line.substring(4)}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-xl font-bold mt-6 mb-3 border-b border-slate-300 dark:border-slate-600 pb-2 text-slate-800 dark:text-slate-200">{line.substring(3)}</h2>;
        }
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">{line.substring(2)}</h1>;
        }
        if (line.trim().match(/^\d+\.\s/)) {
            return <li key={index} className="ms-6 mb-2">{line.trim().substring(2)}</li>
        }
        if (line.trim() === '') {
            return <br key={index} />;
        }
        return <p key={index} className="mb-4 leading-relaxed">{line}</p>;
      })
      .reduce((acc: React.ReactElement[], el, index) => {
        // Fix: Use React.ReactElement and robustly group list items
        if (React.isValidElement(el) && el.type === 'li') {
          const lastElement = acc.length > 0 ? acc[acc.length - 1] : null;
          if (lastElement && React.isValidElement(lastElement) && lastElement.type === 'ol') {
            // FIX: Cast `lastElement.props` to access `children` in a type-safe way.
            const newChildren = [...React.Children.toArray((lastElement.props as { children: React.ReactNode }).children), el];
            acc[acc.length - 1] = React.cloneElement(lastElement, {}, newChildren);
          } else {
            acc.push(<ol key={`ol-${index}`} className="list-decimal list-inside space-y-2 mb-4">{el}</ol>);
          }
        } else if (React.isValidElement(el)) {
          acc.push(el);
        }
        return acc;
      }, []);
  };
    
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 max-h-[70vh] overflow-y-auto">
        <div className="flex items-center gap-3 mb-4">
            <div className="bg-sky-100 dark:bg-sky-900/50 p-2 rounded-full">
                 <BookOpenIcon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">מקור המידע</h2>
        </div>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {formatText(text)}
      </div>
    </div>
  );
};

export default SourceViewer;
