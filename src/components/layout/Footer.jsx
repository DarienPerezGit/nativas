import React from 'react';
import { createWhatsAppLink } from '../../utils/whatsapp';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-400 py-20 px-6 border-t border-stone-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="text-3xl font-serif text-stone-100 mb-6 tracking-widest">NATIVAS</div>
                    <p className="font-light mb-8 max-w-sm">
                        Reconectando con la sabiduría de la tierra a través de botánica curativa de alta vibración.
                    </p>
                    <div className="flex space-x-4">
                        {/* Social placeholders */}
                        <div className="w-8 h-8 rounded-full border border-stone-700 hover:bg-stone-800 cursor-pointer flex items-center justify-center">IG</div>
                        <div className="w-8 h-8 rounded-full border border-stone-700 hover:bg-stone-800 cursor-pointer flex items-center justify-center">FB</div>
                    </div>
                </div>

                <div>
                    <h4 className="text-stone-100 uppercase tracking-widest text-xs mb-6">Explorar</h4>
                    <ul className="space-y-4 font-light text-sm">
                        <li><a href="#" className="hover:text-stone-100 transition-colors">Nuestra Historia</a></li>
                        <li><a href="#" className="hover:text-stone-100 transition-colors">La Recolección</a></li>
                        <li><a href="#" className="hover:text-stone-100 transition-colors">Diario Botánico</a></li>
                        <li><a href={createWhatsAppLink("Hola, tengo una pregunta.")} target="_blank" rel="noopener noreferrer" className="hover:text-stone-100 transition-colors">Contacto</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-stone-100 uppercase tracking-widest text-xs mb-6">Únete al Círculo</h4>
                    <p className="text-xs font-light mb-4">Recibe guías de uso, historias de origen y acceso anticipado.</p>
                    <form className="flex border-b border-stone-700 pb-2" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Tu correo"
                            className="bg-transparent w-full outline-none text-stone-100 placeholder-stone-600"
                        />
                        <button className="text-stone-100 hover:text-stone-300 text-xs uppercase tracking-widest">ENVIAR</button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 font-light">
                <p>&copy; 2024 Nativas. Romang, Santa Fe, Argentina.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#">Privacidad</a>
                    <a href="#">Términos</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
