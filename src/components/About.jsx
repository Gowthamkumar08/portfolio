import React from 'react';
import { portfolioData } from '../data/portfolioData';
import aboutImg from '../assets/about.jpg';

const About = () => {
    const { summary } = portfolioData.personalInfo;

    return (
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-0">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Image/Card */}
                    <div className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                        <img src={aboutImg} className="w-full h-full object-cover" alt="About me" />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-base font-semibold uppercase tracking-wider text-gray-900 dark:text-white">
                            About me
                        </div>

                        <h2 className="text-3xl font-bold text-brand-purple">
                            Curious about me? Here you have it:
                        </h2>

                        <div className="space-y-4 text-gray-900 dark:text-gray-100 leading-relaxed">
                            <p>{summary}</p>
                            <p>
                                I started my journey as a student fascinated by data, and now I'm analyzing complex datasets to drive business growth.
                                I'm passionate about visualization, storytelling with data, and continuous learning.
                            </p>
                            <p>
                                When I'm not crunching numbers, you can find me exploring new places, reading about market trends, or refining my design skills.
                            </p>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                                Detailed Analysis
                            </li>
                            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                                Strategic Planning
                            </li>
                            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                                Data Visualization
                            </li>
                            <li className="flex items-center gap-2 text-gray-700 dark:text-gray-200 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-400">
                                Problem Solving
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
