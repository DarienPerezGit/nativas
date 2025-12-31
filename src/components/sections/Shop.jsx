import React from 'react';
import KraftPouch from '../products/KraftPouch';
import { shopProducts } from '../../data/products';
import { useScrollAnimation } from '../../utils/hooks';

const Shop = () => {
    const [titleRef, titleVisible] = useScrollAnimation();
    const [productsRef, productsVisible] = useScrollAnimation();
    const [infoRef, infoVisible] = useScrollAnimation();

    return (
        <section id="coleccion" className="py-24 px-6 bg-[#f0f0f0]" style={{ backgroundImage: 'radial-gradient(#e0e0e0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            <div className="container mx-auto">
                <div
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h2 className="text-5xl font-serif text-stone-900 mb-4">Botica Premium</h2>
                    <p className="text-stone-600 font-light max-w-2xl mx-auto">
                        Ediciones limitadas en envases Doypack Kraft con Hot Stamping dorado.
                        Cada empaque es una obra de arte funcional que honra la pureza de su contenido.
                    </p>
                </div>

                {/* Grid de 3 Productos con Diseño Alquimia */}
                <div
                    ref={productsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-16"
                >
                    {shopProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className={`transition-all duration-1000 ${productsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <KraftPouch product={product} />
                        </div>
                    ))}
                </div>

                {/* Panel Informativo sobre el Diseño Alquimia */}
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Detalle de Selección</h3>
                        <h2 className="text-4xl font-serif text-gray-800 mb-4">La Opción "Alquimia"</h2>
                        <p className="text-gray-600 leading-relaxed text-sm font-light max-w-2xl mx-auto">
                            Este diseño combina la honestidad cruda del <strong>papel Kraft virgen</strong> con la sofisticación técnica del <strong>Hot Stamping dorado</strong>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-[#bf953f] flex items-center justify-center text-white font-serif text-2xl shadow-lg mb-3">1</div>
                            <h4 className="font-bold text-gray-800 text-sm mb-2">Foil Dorado (Hot Stamping)</h4>
                            <p className="text-xs text-gray-500">El logo no es tinta, es una lámina metálica aplicada por calor. Refleja la luz y eleva instantáneamente el valor percibido.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-[#dcbfa6] border border-gray-400 flex items-center justify-center text-gray-800 font-serif text-2xl shadow-sm mb-3">2</div>
                            <h4 className="font-bold text-gray-800 text-sm mb-2">Ventana " Ojo de Buey"</h4>
                            <p className="text-xs text-gray-500">Un corte circular limpio con borde reforzado. Permite ver la calidad premium de la flor sin exponer todo el contenido a la luz.</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-serif text-2xl shadow-lg mb-3">3</div>
                            <h4 className="font-bold text-gray-800 text-sm mb-2">Impresión Directa</h4>
                            <p className="text-xs text-gray-500">Los textos negros se imprimen directamente sobre la fibra (serigrafía), eliminando la sensación plástica de las etiquetas adhesivas.</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center">Vista Previa de Producción v1.0</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;
