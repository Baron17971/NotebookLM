import React from 'react';
import { UseCase } from '../types';
import { TeacherIcon, StudentIcon, SparklesIcon } from './Icons';

interface UseCasesProps {
  infoTitle: string;
  infoSubtitle: string;
  teacherUseCases: UseCase[];
  studentUseCases: UseCase[];
  onUseCaseClick: (prompt: string) => void;
}

const UseCaseCard: React.FC<{ useCase: UseCase; onClick: () => void }> = ({ useCase, onClick }) => (
    <button 
        onClick={onClick}
        className="text-right p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors w-full flex flex-col items-start"
    >
        <p className="font-semibold text-slate-800 dark:text-slate-100">{useCase.title}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{useCase.description}</p>
    </button>
);

const UseCases: React.FC<UseCasesProps> = ({ infoTitle, infoSubtitle, teacherUseCases, studentUseCases, onUseCaseClick }) => {
  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
         <div className="inline-flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full mb-4">
             <SparklesIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400"/>
         </div>
        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">{infoTitle}</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">{infoSubtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* For Teachers */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-amber-100 dark:bg-amber-900/50 p-2 rounded-full">
                <TeacherIcon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">למורים ומורות</h3>
          </div>
          <div className="space-y-3">
            {teacherUseCases.map((uc, index) => (
              <UseCaseCard key={index} useCase={uc} onClick={() => onUseCaseClick(uc.prompt)} />
            ))}
          </div>
        </div>

        {/* For Students */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
             <div className="bg-teal-100 dark:bg-teal-900/50 p-2 rounded-full">
                <StudentIcon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">לתלמידים ותלמידות</h3>
          </div>
          <div className="space-y-3">
            {studentUseCases.map((uc, index) => (
              <UseCaseCard key={index} useCase={uc} onClick={() => onUseCaseClick(uc.prompt)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;