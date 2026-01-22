import React from 'react';

const Skills = () => {
    // Custom Skill Icons Map
    const skillIcons = {
        'Google Ads': 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg',
        'Meta Ads': 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
        'Semrush': 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Semrush_logo.svg',
        'Canva': 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Canva_logo.svg',
        'Power BI': 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        'Advance Excel': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg',
        'Word': 'https://upload.wikimedia.org/wikipedia/commons/1/19/Microsoft_Office_Word_%282019%E2%80%932025%29.svg',
        'PPT': 'https://upload.wikimedia.org/wikipedia/commons/2/25/Microsoft_Office_PowerPoint_%282019%E2%80%932025%29.svg',
        'Gamma': 'https://cdn.jsdelivr.net/gh/callback-io/allogo@main/public/logos/gamma-app/icon.svg',
        'Google Analytics': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Logo_Google_Analytics.svg',
        'MySQL': 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg',
        'Python (Basics)': 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        'Tableau': 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ionicons_logo-tableau.svg'
    };

    // Custom list of skills to display ensuring we have icons for them if possible
    const displaySkills = [
        "Google Ads", "Meta Ads", "Semrush", "Google Analytics",
        "Power BI", "Tableau", "MySQL", "Excel", "Python",
        "Canva", "Word", "PPT"
    ];

    // Helper to get icon source or return null if not found (fallback to text)
    const getIconSrc = (skillName) => {
        // Direct match
        if (skillIcons[skillName]) return skillIcons[skillName];

        // fuzzy match
        const lower = skillName.toLowerCase();
        if (lower.includes('excel')) return skillIcons['Advance Excel'];
        if (lower.includes('power bi')) return skillIcons['Power BI'];
        if (lower.includes('word')) return skillIcons['Word'];
        if (lower.includes('ppt') || lower.includes('powerpoint')) return skillIcons['PPT'];
        if (lower.includes('python')) return skillIcons['Python (Basics)'];
        if (lower.includes('analytics')) return skillIcons['Google Analytics'];
        if (lower.includes('tableau')) return skillIcons['Tableau'];

        return null; // No icon
    };

    return (
        <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="mb-12 text-center">
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-base font-semibold uppercase tracking-wider text-purple-900 dark:text-purple-100 mb-4">
                    Skills
                </div>
                <p className="text-xl text-gray-800 dark:text-gray-100">
                    The tools and technologies I use to drive results:
                </p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
                {displaySkills.map((skill, index) => {
                    const iconSrc = getIconSrc(skill);
                    return (
                        <div key={index} className="flex flex-col items-center gap-3 group">
                            {/* Removed box styling by removing bg/border/shadow classes */}
                            <div className="w-20 h-20 flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300">
                                {iconSrc ? (
                                    <img src={iconSrc} alt={skill} className="w-full h-full object-contain drop-shadow-sm" />
                                ) : (
                                    <span className="text-xl font-bold text-gray-400">{skill[0]}</span>
                                )}
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-200 text-center group-hover:text-purple-600 transition-colors">
                                {skill === 'Excel' ? 'Advanced Excel' : skill}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
