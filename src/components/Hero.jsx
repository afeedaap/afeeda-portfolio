import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-dark to-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-primary font-semibold text-xl mb-2">Hello, I'm</h2>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Afeeda
                        </h1>
                        <h3 className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
                            Software Engineer & <span className="text-primary">MERN Stack Expert</span>
                        </h3>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            Passionate self-taught developer and tech enthusiast. I build accessible,
                            pixel-perfect, and performant web experiences using modern technologies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="px-8 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-teal-400 transition-colors cursor-pointer"
                            >
                                Hire Me
                            </Link>
                            <a
                                href="#"
                                className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors cursor-pointer"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
