import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                        Get In Touch
                    </motion.h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to discuss a new opportunity? I'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Email</h4>
                                <a href="mailto:contact@afeeda.dev" className="text-gray-400 hover:text-primary transition-colors">
                                    contact@afeeda.dev
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Phone</h4>
                                <p className="text-gray-400">+1 (234) 567-890</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-white">Location</h4>
                                <p className="text-gray-400">Remote / Available Worldwide</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 p-8 rounded-xl border border-gray-700"
                    >
                        <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }} onLoad={() => { if (submitted) setShowPopup(true); }}></iframe>
                        <form
                            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfq18NUm-3EZhhqQbv01fE0gx4glS4HbJjsLtXqRf2nUhZONA/formResponse"
                            method="POST"
                            target="hidden_iframe"
                            className="space-y-6"
                            onSubmit={() => setSubmitted(true)}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="entry.1828095128"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="entry.992076492"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="entry.1470422920"
                                    rows="4"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-dark font-bold py-4 rounded-lg hover:bg-teal-400 transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Message
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Confirmation Popup */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => { setShowPopup(false); setSubmitted(false); }}></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-gray-800 p-8 rounded-xl border border-gray-700 max-w-md w-full relative z-10 text-center"
                    >
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Send size={32} className="text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400 mb-8">
                            Thank you for reaching out. I'll get back to you as soon as possible.
                        </p>
                        <button
                            onClick={() => {
                                setShowPopup(false);
                                setSubmitted(false);
                                document.querySelector('form').reset();
                            }}
                            className="w-full bg-primary text-dark font-bold py-3 rounded-lg hover:bg-teal-400 transition-all"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default Contact;
