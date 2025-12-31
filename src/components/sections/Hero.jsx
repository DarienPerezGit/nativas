import React from 'react';

const Hero = () => {
    return (
        <header className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=2000"
                    alt="Bosque nativo con neblina"
                    className="w-full h-full object-cover opacity-90 animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-900/10 via-stone-900/20 to-[#FDFBF7]"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <p className="text-stone-800 tracking-[0.3em] text-xs md:text-sm mb-6 uppercase animate-fade-in-up">
                    Farmacopea Ancestral Sudamericana
                </p>
                <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-tight animate-fade-in-up delay-100">
                    El lujo de volver <br /> <span className="italic font-light">al origen.</span>
                </h1>
                <p className="text-stone-700 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
                    Rescatamos el poder curativo de las plantas nativas olvidadas.
                    Sin intermediarios, sin químicos, con el respeto que la tierra merece.
                </p>
                <a href="#coleccion" className="inline-flex items-center space-x-3 bg-stone-900 text-[#FDFBF7] px-8 py-4 text-sm tracking-widest hover:bg-stone-800 transition-all transform hover:scale-105 animate-fade-in-up delay-300">
                    <span>DESCUBRIR EL RITUAL</span>
                </a>
            </div>
        </header>
    );
};

export default Hero;
