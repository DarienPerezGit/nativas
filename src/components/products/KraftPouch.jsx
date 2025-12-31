import React from 'react';
import { createWhatsAppLink } from '../../utils/whatsapp';
import { ProductPropType } from '../../utils/propTypes';

const KraftPouch = ({ product }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative group mb-6 hover-lift cursor-pointer">
                {/* Sombra proyectada en el suelo */}
                <div className="absolute -bottom-4 left-4 right-4 h-6 bg-black opacity-20 blur-xl rounded-[50%] transition-all duration-300 group-hover:opacity-30 group-hover:blur-2xl"></div>

                <div className="kraft-pouch w-[340px] h-[520px] rounded-lg flex flex-col relative transition-transform duration-300">
                    {/* Capas de Realismo */}
                    <div className="volume-overlay"></div>
                    <div className="wrinkles"></div>

                    {/* Área Superior: Sellado y Zipper */}
                    <div className="seal-area h-16 w-full flex flex-col justify-end pb-3 px-4">
                        <div className="zipper-line w-full mb-2"></div>
                        <div className="tear-notch left-[-4px]"></div>
                        <div className="tear-notch right-[-4px]"></div>
                        <div className="text-[8px] text-gray-500 font-sans tracking-widest text-center opacity-60 uppercase">
                            Tear Here • Resealable
                        </div>
                    </div>

                    {/* CONTENIDO DEL DISEÑO */}
                    <div className="flex-1 flex flex-col items-center px-8 pt-8 pb-16 relative z-30">
                        {/* Encabezado / Logo */}
                        <div className="text-center mb-8 relative">
                            <div className="text-[10px] tracking-[0.4em] text-gray-800 opacity-70 mb-2 uppercase font-medium">Colección Botánica</div>
                            <h1 className="text-6xl font-serif font-bold tracking-tight gold-foil-text leading-none">NATIVA</h1>
                            <div className="mt-2 w-full flex items-center justify-center gap-2 opacity-80">
                                <span className="h-px w-8 bg-[#8a6e2f]"></span>
                                <span className="text-[9px] font-serif italic text-[#5a461b]">Est. 2024</span>
                                <span className="h-px w-8 bg-[#8a6e2f]"></span>
                            </div>
                        </div>

                        {/* Cuerpo Principal */}
                        <div className="flex-1 flex flex-col items-center justify-center w-full mb-4">
                            <h2 className="text-3xl font-serif text-gray-900 tracking-wider mb-1">{product.name}</h2>
                            <p className="font-serif italic text-gray-600 text-sm mb-6">{product.scientific}</p>

                            {/* La Ventana Realista */}
                            <div className="relative mb-6">
                                <div className="absolute inset-[-4px] rounded-full gold-border opacity-80"></div>
                                <div className="window-realistic w-28 h-28 rounded-full">
                                    <div className="herb-texture"></div>
                                    <div className="window-glare"></div>
                                </div>
                                <div className="absolute -bottom-3 -right-6 bg-white px-3 py-1 shadow-md transform rotate-[-5deg] border border-gray-200">
                                    <span className="block text-[8px] font-bold tracking-widest text-gray-800 uppercase">{product.tag}</span>
                                </div>
                            </div>

                            <p className="text-center text-xs leading-relaxed text-gray-800 font-medium tracking-wide max-w-[200px]">
                                {product.title}<br />
                                <span className="font-light text-gray-600">{product.subtitle}</span>
                            </p>
                        </div>

                        {/* Pie del empaque */}
                        <div className="w-full flex items-end justify-between border-t border-dashed border-[#8a6e2f] border-opacity-30 pt-4">
                            <div className="text-left">
                                <span className="block text-[8px] font-bold text-gray-500 uppercase">Cont. Neto</span>
                                <span className="text-lg font-serif font-bold text-gray-800">{product.weight}</span>
                            </div>
                            <a
                                href={createWhatsAppLink(product.whatsappMessage)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-stone-900 text-white px-4 py-2 text-[10px] tracking-widest uppercase hover:bg-stone-800 transition-colors rounded-sm"
                            >
                                Consultar
                            </a>
                        </div>
                    </div>

                    {/* Fuelle Inferior */}
                    <div className="bottom-gusset"></div>
                </div>
            </div>
            <p className="text-center text-stone-900 font-serif text-xl mb-1">{product.price}</p>
        </div>
    );
};


KraftPouch.propTypes = {
    product: ProductPropType.isRequired,
};

export default KraftPouch;
