import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-dark to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="max-w-3xl">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className="text-primary font-semibold text-xl mb-2"
                        >
                            
                        </motion.h2>
                        <motion.h1
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}
                            className="text-4xl md:text-6xl font-bold text-white mb-4"
                        >
                            Hello, I'm Afeeda
                        </motion.h1>
                        <motion.h3
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                            }}
                            className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium"
                        >
                            Software Engineer & <span className="text-primary">MERN Stack Expert</span>
                        </motion.h3>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.8 } }
                            }}
                            className="text-gray-400 mb-8 text-lg leading-relaxed"
                        >
                            Motivated self-taught developer eager to build accessible, user-friendly,
                             and responsive web applications using modern web technologies.
                        </motion.p>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="px-8 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-teal-400 transition-colors cursor-pointer"
                            >
                                Hire Me
                            </Link>
                            <a
                                href="https://drive.google.com/file/d/1rR_RSIc8z14C1gi9pvg76vQ-KA9b4OZc/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                            >
                                View Resume
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
