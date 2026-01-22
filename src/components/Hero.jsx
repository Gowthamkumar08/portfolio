import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, Github, Linkedin } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    const { name, role, summary, location, linkedin } = portfolioData.personalInfo;

    // Use first name for the greeting
    const firstName = name.split(' ')[0];

    return (
        <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-12 md:py-16 pt-6 md:pt-12 pb-12 md:pb-16">
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">

                {/* Left Content */}
                <div className="flex-1 space-y-6 md:pr-12">
                    <div className="inline-block">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white animate-typing pr-2">
                            Hi, I'm <span className="text-brand-purple">{firstName}</span> <span className="inline-block animate-wave origin-bottom-right">👋</span>
                        </h1>
                    </div>

                    <p className="text-lg text-gray-900 dark:text-gray-100 leading-relaxed max-w-2xl">
                        {summary.split('.')[0] + '.'}
                        <br />
                        I'm a <span className="font-semibold text-brand-purple italic">{role}</span> with a focus on data-driven marketing analyst.
                    </p>

                    <div className="flex items-center gap-3 pt-4 pb-2">
                        <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-purple hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all">
                            <Linkedin size={20} />
                        </a>
                        <span className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-purple hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all cursor-pointer">
                            <Github size={20} />
                        </span>
                        <span className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-purple hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            {location}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            Available for new projects
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative shrink-0">
                    <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl relative z-10">
                        <img src={profileImg} className="w-full h-full object-cover" alt={name} />
                    </div>

                    {/* Decorative background element behind image */}
                    <div className="absolute -top-4 -right-4 w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg -z-0"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
