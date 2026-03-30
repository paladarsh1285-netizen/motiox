import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);

    // GSAP animations on mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Create a timeline for staggered animations
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            // Animate the subtitle
            tl.fromTo(
                '.subtitle',
                { opacity: 0, y: 30, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 0.8 }
            );

            // Animate the main title "Captivate" with a dramatic reveal
            tl.fromTo(
                '.title-captivate',
                { opacity: 0, y: 50, scale: 0.8, rotationX: -90 },
                { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1, ease: 'back.out(1.7)' },
                '-=0.4'
            );

            // Animate "your audience" with a slide-in effect
            tl.fromTo(
                '.title-audience',
                { opacity: 0, x: -100, skewX: 10 },
                { opacity: 1, x: 0, skewX: 0, duration: 0.9, ease: 'power4.out' },
                '-=0.6'
            );

            // Animate the paragraph with a typewriter-like effect
            tl.fromTo(
                paragraphRef.current,
                { opacity: 0, y: 30, clipPath: 'inset(0 100% 0 0)' },
                { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power2.out' },
                '-=0.5'
            );

            // Animate the button with a bounce effect
            tl.fromTo(
                buttonRef.current,
                { opacity: 0, scale: 0.5, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' },
                '-=0.4'
            );

            // Add a subtle floating animation to the button
            gsap.to(buttonRef.current, {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 2
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Framer Motion scroll-based animations
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    // Text animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        }
    };

    // Split text for letter animation
    const titleText = "Captivate";
    const subtitleText = "your audience";

    return (
        <motion.div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden"
            style={{ opacity, scale }}
        >
            {/* YouTube Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <iframe
                    className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
                    src="https://www.youtube.com/embed/LvunwbC1gn0?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=LvunwbC1gn0"
                    title="Motiox Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                {/* Dark overlay for better text readability */}
                <motion.div
                    className="absolute inset-0 bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />
            </div>

            {/* Navbar Overlay */}
            <Navbar />

            {/* Content Overlay */}
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
                style={{ y }}
            >
                {/* Animated subtitle */}
                <motion.p
                    className="subtitle uppercase tracking-widest text-sm md:text-base text-white/70 mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    A video production company
                </motion.p>

                {/* Main heading with letter animation */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight">
                    {/* Captivate title with gradient */}
                    <motion.span
                        className="title-captivate block text-6xl md:text-8xl lg:text-9xl bg-linear-to-r from-orange-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {titleText.split('').map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className="inline-block"
                                style={{ display: 'inline-block' }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.span>

                    {/* "your audience" with slide animation */}
                    <motion.span
                        className="title-audience block text-white text-6xl md:text-8xl lg:text-9xl"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
                    >
                        {subtitleText.split('').map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                                className="inline-block"
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                    </motion.span>
                </h1>

                {/* Animated paragraph */}
                <motion.p
                    ref={paragraphRef}
                    className="text-lg md:text-2xl text-gray-200 max-w-3xl mt-6 mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    We amplify your brand with cinematic storytelling, powerful visuals, and unforgettable motion.
                </motion.p>

                {/* Animated button with hover effects */}
                <motion.a
                    ref={buttonRef}
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-fuchsia-500 px-10 py-4 text-white font-bold shadow-xl transition transform hover:-translate-y-0.5 hover:scale-105 mt-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 1.5, ease: 'easeOut' }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)',
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                    >
                        Start Your Project →
                    </motion.span>
                </motion.a>

                {/* Animated scroll indicator */}
                <motion.div
                    className="fixed bottom-8 right-8 rounded-full p-3 z-50 cursor-pointer"
                    style={{ background: "linear-gradient(135deg, #f97316, #ec4899)" }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </motion.svg>
                </motion.div>

                {/* Decorative animated particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 20}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            y: [0, -100, -200],
                        }}
                        transition={{
                            duration: 3,
                            delay: 2 + i * 0.3,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Home;
