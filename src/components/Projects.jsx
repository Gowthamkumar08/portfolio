import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';
import project1Img from '../assets/project/1.png';
import project2Img from '../assets/project/2.png';
import project3Img from '../assets/project/3.png';
import project4Img from '../assets/project/4.png';
import project5Img from '../assets/project/5.png';
import project6Img from '../assets/project/6.jpg';

const Projects = () => {
    const { projects } = portfolioData;

    const getProjectImage = (title) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('predictive modeling')) return project1Img;
        if (lowerTitle.includes('digital strategies')) return project2Img;
        if (lowerTitle.includes('employee management')) return project3Img;
        if (lowerTitle.includes('sales performance')) return project4Img;
        if (lowerTitle.includes('customer transactions')) return project5Img;
        if (lowerTitle.includes('hr analytics')) return project6Img;
        return null;
    };

    return (
        <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="mb-12 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-base font-semibold uppercase tracking-wider text-purple-900 dark:text-purple-100 mb-4">
                    Projects
                </div>
                <p className="text-xl text-gray-800 dark:text-gray-200">
                    Some of the noteworthy projects I have built:
                </p>
            </div>

            <div className="space-y-12 md:space-y-24">
                {projects.map((project, index) => (
                    <div key={index} className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
                            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg shadow-sm flex items-center justify-center text-gray-400 overflow-hidden px-2">
                                {getProjectImage(project.title) ? (
                                    <img src={getProjectImage(project.title)} alt={project.title} className="w-max h-max max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <span className="font-mono text-sm">Project Screenshot</span>
                                )}
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <h3 className="text-2xl font-bold text-brand-purple">
                                {project.title}
                            </h3>

                            <p className="text-gray-900 dark:text-gray-200 leading-relaxed">
                                {project.description.join(' ')}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.title.includes('Power BI') && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">Power BI</span>}
                                {project.title.includes('Excel') && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">Excel</span>}
                                {project.title.includes('MySQL') && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">MySQL</span>}
                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">Analytics</span>
                            </div>

                            <div className="pt-2 flex items-center gap-4">
                                {project.livePreview && (
                                    <a href={project.livePreview} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
