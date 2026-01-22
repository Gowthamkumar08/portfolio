import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-purple-50 dark:bg-gray-900/30">
            <div className="mb-12 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-base font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                    Experience
                </div>
                <p className="text-xl text-gray-800 dark:text-gray-200">
                    Here is a quick summary of my most recent experiences:
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {experience.map((exp, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 md:p-10 transition-shadow hover:shadow-md">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                    {exp.role}
                                </h3>
                                <ul className="list-disc list-inside text-xs text-gray-700 dark:text-white space-y-1 md:hidden">
                                    <li>{exp.duration}</li>
                                </ul>
                            </div>
                            <div className="md:text-right">
                                <span className="text-lg font-bold text-brand-purple block">
                                    {exp.company}
                                </span>
                                <span className="hidden md:block text-sm text-gray-700 dark:text-white mt-1">
                                    {exp.duration}
                                </span>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {exp.description.map((desc, i) => (
                                <li key={i} className="flex gap-3 text-gray-800 dark:text-white leading-relaxed text-sm md:text-base">
                                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
