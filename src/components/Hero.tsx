export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%23047857' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-6">
          <div className="inline-block">
            <div className="text-5xl sm:text-6xl mb-4 text-emerald-700">☪</div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-emerald-900 mb-4 leading-tight">
              Learn Quran Online
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-amber-600 bg-clip-text text-transparent mb-6">
              with Expert Teachers
            </h2>
          </div>
        </div>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold text-emerald-800">Nazera</span> • <span className="font-semibold text-emerald-800">Kalma</span> • <span className="font-semibold text-emerald-800">Qaida</span> • <span className="font-semibold text-emerald-800">Tajweed</span> • <span className="font-semibold text-emerald-800">Duas</span> • <span className="font-semibold text-emerald-800">Islamic Studies</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={() => scrollToSection('enroll')}
            className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105"
          >
            Start Learning
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => scrollToSection('enroll')}
            className="px-8 py-4 bg-white text-emerald-700 border-2 border-emerald-600 rounded-full font-semibold text-lg shadow-md hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
