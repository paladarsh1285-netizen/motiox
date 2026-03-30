import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
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
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Navbar Overlay */}
            <Navbar />

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight">
                    <p className="uppercase tracking-widest text-sm md:text-base text-white/70 mb-4">
                        A video production company
                    </p>
                    <span className="block text-6xl md:text-8xl lg:text-9xl bg-linear-to-r from-orange-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
                        Captivate
                    </span>
                    <span className="block text-white text-6xl md:text-8xl lg:text-9xl">
                        your audience
                    </span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mt-6 mb-8">
                    We amplify your brand with cinematic storytelling, powerful visuals, and unforgettable motion.
                </p>
                <a
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-fuchsia-500 px-10 py-4 text-white font-bold shadow-xl transition transform hover:-translate-y-0.5 hover:scale-105 mt-6"
                >
                    Start Your Project →
                </a>

                {/* Scroll indicator */}
                <div className="fixed bottom-8 right-8 animate-bounce rounded-full p-3 z-50" style={{background: "linear-gradient(135deg, #f97316, #ec4899)"}}>
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Home;
