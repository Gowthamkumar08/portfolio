import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import resumePdf from '../assets/resume/Resume.pdf';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleDownload = () => {
        // Create a temporary link to force download
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Gowthamkumar_B_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 font-bold text-2xl tracking-tight text-gray-900 dark:text-white">
                        <span className="text-brand-purple">Portfolio</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-white transition-colors font-medium text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="h-6 w-px bg-gray-500 dark:text-white mx-4"></div>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>

                            <button
                                onClick={handleDownload}
                                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                            >
                                <Download size={16} /> Download CV
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={handleDownload}
                            className="w-full mt-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-3 rounded-xl text-sm font-medium flex justify-center items-center gap-2"
                        >
                            <Download size={18} /> Download CV
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
