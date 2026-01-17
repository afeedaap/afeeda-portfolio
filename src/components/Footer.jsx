import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-white mb-2">Afeeda.</h2>
                        <p className="text-gray-400 text-sm">
                            FULL STACK DEVELOPER WITH MODERN TECHNILOGIES.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6 mb-6 md:mb-0">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Afeeda. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
