import React from 'react';

const Manifesto = () => {
    return (
        <section id="origen" className="py-24 px-6 bg-stone-100">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1 relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-stone-300"></div>
                    <img
                        src="/manos-en-la-tierra.jpg"
                        alt="Manos recolectando hierbas"
                        className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-stone-300"></div>
                </div>
                <div className="order-1 md:order-2 space-y-8">
                    <h2 className="text-4xl font-serif text-stone-900">No solo vendemos.<br />Honramos.</h2>
                    <div className="w-16 h-0.5 bg-stone-400"></div>
                    <p className="text-stone-600 leading-relaxed font-light">
                        En NATIVAS creemos que una planta no es un ingrediente, es un ser vivo con memoria.
                        Nuestra recolección es silvestre y limitada: solo tomamos lo que el monte nos permite,
                        pidiendo permiso, asegurando que el ciclo de vida continúe.
                    </p>
                    <p className="text-stone-600 leading-relaxed font-light">
                        Trabajamos con familias recolectoras del Litoral y la Puna que han custodiado
                        este saber por generaciones. Cada envase contiene historia, paisaje y medicina.
                    </p>
                    <div className="flex space-x-8 pt-4">
                        <div className="text-center">
                            <span className="block font-serif text-3xl mb-1">100%</span>
                            <span className="text-xs tracking-widest text-stone-500 uppercase">Silvestre</span>
                        </div>
                        <div className="text-center">
                            <span className="block font-serif text-3xl mb-1">0%</span>
                            <span className="text-xs tracking-widest text-stone-500 uppercase">Aditivos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Manifesto;
