import { motion } from 'framer-motion';
import { Code, Database, Server, Layout, Globe, Smartphone, GitBranch, Terminal } from 'lucide-react';

const skills = [
    { name: 'MongoDB', icon: Database, level: 'Advanced', color: '#47A248' },
    { name: 'Express.js', icon: Server, level: 'Advanced', color: '#000000' },
    { name: 'React.js', icon: Code, level: 'Expert', color: '#61DAFB' },
    { name: 'Node.js', icon: Server, level: 'Advanced', color: '#339933' },
    { name: 'TailwindCSS', icon: Layout, level: 'Expert', color: '#38B2AC' },
    { name: 'JavaScript', icon: Code, level: 'Expert', color: '#F7DF1E' },
    { name: 'Git & GitHub', icon: GitBranch, level: 'Intermediate', color: '#F05032' },
    { name: 'REST APIs', icon: Globe, level: 'Advanced', color: '#009688' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Skills & Expertise
                    </motion.h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolset for building robust and scalable web applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-primary transition-all hover:shadow-lg group"
                        >
                            <div className="flex flex-col items-center">
                                <div
                                    className="p-4 rounded-full bg-gray-700/50 mb-4 group-hover:scale-110 transition-transform duration-300"
                                    style={{ color: skill.color }}
                                >
                                    <skill.icon size={32} />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                                <p className="text-sm text-gray-400">{skill.level}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
