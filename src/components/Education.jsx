import React from 'react';
import Section from './Section';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const { education, certifications, publications } = portfolioData;

    return (
        <div className="space-y-12"> {/* Wrapper for spacing */}

            {/* Education */}
            <Section id="education" title="Education">
                <div className="grid gap-6">
                    {education.map((edu, index) => (
                        <div key={index} className="glass p-6 rounded-xl flex items-start gap-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                                <GraduationCap size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{edu.institution}</h3>
                                <p className="text-accent font-medium">{edu.degree}</p>
                                <div className="flex gap-4 text-sm text-gray-500 mt-1">
                                    <span>{edu.duration}</span>
                                    <span>•</span>
                                    <span>GPA: {edu.gpa}</span>
                                    <span>•</span>
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Certifications & Publications */}
            <Section id="certifications" title="Certifications & Publications" className="pt-0"> {/* Remove top padding to sit closer if needed, but Section has default padding */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="glass p-8 rounded-xl">
                        <h3 className="flex items-center gap-2 text-xl font-bold mb-6">
                            <Award className="text-accent" /> Certifications
                        </h3>
                        <ul className="space-y-4">
                            {certifications.map((cert, index) => (
                                <li key={index} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="text-accent mt-1">▹</span>
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass p-8 rounded-xl">
                        <h3 className="flex items-center gap-2 text-xl font-bold mb-6">
                            <Award className="text-purple-500" /> Publications
                        </h3>
                        <ul className="space-y-4">
                            {publications.map((pub, index) => (
                                <li key={index} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="text-purple-500 mt-1">▹</span>
                                    {pub}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Education;
