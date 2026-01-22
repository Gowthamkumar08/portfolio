import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Copy, ExternalLink, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const { email, mobile, linkedin } = portfolioData.personalInfo;

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    return (
        <footer id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50 dark:bg-gray-900 pb-8">
            <div className="max-w-2xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-gray-200 dark:bg-gray-800 text-base font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                        Get in touch
                    </div>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                        What’s next? Feel free to reach out to me if you're looking for a digital marketing analyst, have a query, or simply want to connect.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8">
                        <div className="flex items-center gap-4 text-lg md:text-xl font-bold text-brand-purple">
                            <Mail className="hidden sm:block" size={20} />
                            {email}
                            <button
                                onClick={() => copyToClipboard(email)}
                                className="p-2 text-gray-400 hover:text-brand-purple transition-colors"
                                title="Copy Email"
                            >
                                <Copy size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8">
                        <div className="flex items-center gap-4 text-lg md:text-xl font-bold text-brand-purple">
                            <Phone className="hidden sm:block" size={20} />
                            {mobile}
                            <button
                                onClick={() => copyToClipboard(mobile)}
                                className="p-2 text-gray-400 hover:text-brand-purple transition-colors"
                                title="Copy Phone"
                            >
                                <Copy size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-400">You may also find me on these platforms!</p>
                    <div className="flex justify-center gap-4">
                        <a href={`https://linkedin.com/in/${linkedin}`} className="p-2 text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-brand-purple transition-colors">
                            <Linkedin size={24} />
                        </a>
                        {/* Placeholders for others */}
                        <span className="p-2 text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-brand-purple transition-colors">
                            <Github size={24} />
                        </span>
                        <span className="p-2 text-gray-800 hover:text-gray-900 dark:text-white dark:hover:text-brand-purple transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="pt-8 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} | Designed and coded with ❤️️ by Gowtham Kumar</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
