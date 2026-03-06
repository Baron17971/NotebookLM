import React from 'react';

export const SendIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className || "w-5 h-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export const UserIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-5 h-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

export const AiIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-5 h-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect x="4" y="12" width="16" height="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 12V8h-2v4" />
        <path d="M9 12V8H7v4" />
    </svg>
);

export const BookOpenIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-5 h-5"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

export const TeacherIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-5 h-5"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 22v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4" />
        <path d="M18 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M12 12H2l2-3 2 3 2-3 2 3 2-3" />
        <path d="m22 18-3-1-3 1" />
    </svg>
);

export const StudentIcon: React.FC<{className?: string}> = ({className}) => (
     <svg className={className || "w-5 h-5"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v16H6.5a2.5 2.5 0 0 1 0-5H20"/>
    </svg>
);

export const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
     <svg className={className || "w-5 h-5"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        <path d="M5 3v4"/>
        <path d="M19 17v4"/>
        <path d="M3 5h4"/>
        <path d="M17 19h4"/>
    </svg>
);

export const LogoIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-8 h-8"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4285F4"/>
        <path d="M2 17L12 22L22 17L12 12L2 17Z" fill="#0F9D58"/>
        <path d="M2 7V17L12 12V2L2 7Z" fill="#F4B400"/>
        <path d="M22 7V17L12 12V2L22 7Z" fill="#DB4437"/>
    </svg>
);

export const QuestionIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

export const OrganizeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
    </svg>
);

export const CreateIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 4l-2.5 2.5" />
        <path d="M13 2.05a2.5 2.5 0 0 0-3-3" />
        <path d="M13 21.95a2.5 2.5 0 0 0 3 3" />
        <path d="M8.5 20l2.5-2.5" />
        <path d="M2.05 11a2.5 2.5 0 0 0-3 3" />
        <path d="M21.95 11a2.5 2.5 0 0 0 3 3" />
        <path d="M4 8.5l2.5 2.5" />
        <path d="M20 15.5l-2.5-2.5" />
    </svg>
);


export const CompareIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3L4 7l4 4" />
        <path d="M4 7h16" />
        <path d="M16 21l4-4-4-4" />
        <path d="M20 17H4" />
    </svg>
);

export const CopyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-5 h-5"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
);

export const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className || "w-5 h-5"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
    </svg>
);