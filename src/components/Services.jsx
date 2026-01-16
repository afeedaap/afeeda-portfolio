import { motion } from 'framer-motion';
import { Smartphone, Globe, Layers, Code2 } from 'lucide-react';

const services = [
    {
        title: 'Full Stack Development',
        description: 'Building complete web solutions from scratch using the MERN stack (MongoDB, Express, React, Node.js).',
        icon: Layers,
    },
    {
        title: 'Frontend Development',
        description: 'Creating responsive, interactive, and pixel-perfect user interfaces with React, TailwindCSS, and modern JavaScript.',
        icon: Code2,
    },
    {
        title: 'Backend API Design',
        description: 'Designing and building scalable RESTful APIs and securing backend architecture with Node.js and Express.',
        icon: Globe,
    },
    {
        title: 'Mobile-First Design',
        description: 'Ensuring your application looks and functions perfectly on all devices, from smartphones to large desktops.',
        icon: Smartphone,
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        My Services
                    </motion.h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Providing high-quality solutions tailored to your business needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-primary transition-all hover:-translate-y-2 group"
                        >
                            <div className="w-14 h-14 bg-gray-700/50 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-dark transition-colors duration-300">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
