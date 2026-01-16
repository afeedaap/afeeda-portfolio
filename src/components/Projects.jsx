import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured online store with cart functionality, payment integration, and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
        image: 'bg-gradient-to-br from-purple-600 to-blue-500', // Placeholder style
        demoLink: '#',
        codeLink: '#'
    },
    {
        title: 'Task Management App',
        description: 'Collaborative task manager with real-time updates, drag-and-drop interface, and team features.',
        tags: ['MERN Stack', 'Socket.io', 'Tailwind'],
        image: 'bg-gradient-to-br from-emerald-500 to-teal-400',
        demoLink: '#',
        codeLink: '#'
    },
    {
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard helping users track engagement across multiple social platforms.',
        tags: ['React', 'Chart.js', 'API Integration'],
        image: 'bg-gradient-to-br from-orange-500 to-pink-500',
        demoLink: '#',
        codeLink: '#'
    },
    {
        title: 'Geniut',
        description: 'An innovative technology project focused on advanced solutions.',
        tags: ['React', 'Node.js', 'AI', 'GitHub'],
        image: 'bg-gradient-to-br from-indigo-600 to-blue-500',
        demoLink: '#',
        codeLink: 'https://github.com/afeedaap/geniut'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Highlights of my recent development work and technical experiments.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className={`h-48 w-full ${project.image} relative group`}>
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.demoLink} className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                                        <ExternalLink className="text-dark" size={20} />
                                    </a>
                                    <a href={project.codeLink} className="p-2 bg-white rounded-full hover:bg-gray-200 transition-colors">
                                        <Github className="text-dark" size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-gray-700 text-primary text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
