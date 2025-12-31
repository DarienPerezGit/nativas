import React from 'react';
import PropTypes from 'prop-types';
import { Menu, X, MessageCircle } from 'lucide-react';
import { createWhatsAppLink } from '../../utils/whatsapp';

const Navbar = ({ isScrolled, mobileMenuOpen, setMobileMenuOpen }) => {
    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#FDFBF7]/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="hidden md:flex space-x-8 text-sm tracking-widest font-medium text-stone-600">
                    <a href="#origen" className="hover:text-stone-900 transition-colors">ORIGEN</a>
                    <a href="#sabiduria" className="hover:text-stone-900 transition-colors">SABIDURÍA</a>
                </div>

                <div className={`text-2xl font-serif tracking-widest font-bold ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
                    NATIVAS
                </div>

                <div className="hidden md:flex space-x-8 items-center text-sm tracking-widest font-medium text-stone-600">
                    <a href="#coleccion" className="hover:text-stone-900 transition-colors">COLECCIÓN</a>
                    <a
                        href={createWhatsAppLink("Hola Nativas, tengo una consulta general sobre sus rituales.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:text-stone-900 transition-colors cursor-pointer"
                    >
                        <MessageCircle size={18} />
                        <span className="text-xs uppercase">Concierge</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-stone-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#FDFBF7] border-t border-stone-200 p-6 flex flex-col space-y-4 md:hidden shadow-lg animate-fade-in">
                    <a href="#origen" className="text-lg font-serif" onClick={() => setMobileMenuOpen(false)}>Origen</a>
                    <a href="#sabiduria" className="text-lg font-serif" onClick={() => setMobileMenuOpen(false)}>Sabiduría</a>
                    <a href="#coleccion" className="text-lg font-serif" onClick={() => setMobileMenuOpen(false)}>Colección</a>
                    <a href={createWhatsAppLink("Hola, quiero hacer una consulta.")} target="_blank" rel="noopener noreferrer" className="text-lg font-serif text-stone-500">Contacto</a>
                </div>
            )}
        </nav>
    );
};

Navbar.propTypes = {
    isScrolled: PropTypes.bool.isRequired,
    mobileMenuOpen: PropTypes.bool.isRequired,
    setMobileMenuOpen: PropTypes.func.isRequired,
};

export default Navbar;
