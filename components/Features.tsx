import React from 'react';
import { Feature } from '../types';

interface FeaturesProps {
    title: string;
    features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ title, features }) => {
    return (
        <div>
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">{title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center">
                        <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full mb-4">
                            <feature.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{feature.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Features;