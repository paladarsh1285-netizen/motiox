const AwardWinnings = () => {
  return (
    <section className="bg-[#101010] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white">
              Award-winning <span className="block text-transparent bg-linear-to-r from-orange-400 via-pink-500 to-fuchsia-500 bg-clip-text">video agency</span>
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl">
              We’re the crafters of fascinating videos that associate with your viewers personally.
            </p>
            <p className="mt-4 text-base md:text-lg text-gray-400 max-w-2xl">
              From startups to well-known brands worldwide, we’ve completed plenty of corporate video production projects for both. We ensure each design not only captivates but also drives growth and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-sm text-gray-300 uppercase tracking-wide">Trusted by</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold text-white">4,000+</p>
              <p className="text-gray-400">Happy clients</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-sm text-gray-300 uppercase tracking-wide">Awards</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold text-white">15</p>
              <p className="text-gray-400">Industry honors</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-sm text-gray-300 uppercase tracking-wide">Conversion</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold text-white">+42%</p>
              <p className="text-gray-400">Average uplift</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl border border-white/10">
              <p className="text-sm text-gray-300 uppercase tracking-wide">Projects</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold text-white">220+</p>
              <p className="text-gray-400">Complete launches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardWinnings;
