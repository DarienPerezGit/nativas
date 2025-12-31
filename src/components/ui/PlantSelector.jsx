import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, Sun, Wind, Leaf } from 'lucide-react';
import { PlantPropType } from '../../utils/propTypes';

// Mapeo de nombres de iconos a componentes
const iconMap = {
    Sun,
    Wind,
    Leaf
};

const PlantSelector = ({ plants, activePlant, setActivePlant }) => {
    const currentPlant = plants[activePlant];

    // Obtener el componente de icono dinámicamente
    const IconComponent = iconMap[currentPlant.iconName];

    return (
        <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* List Selection */}
            <div className="w-full md:w-1/3 flex flex-col space-y-2">
                {plants.map((plant, index) => (
                    <button
                        key={plant.id}
                        onClick={() => setActivePlant(index)}
                        onMouseEnter={() => setActivePlant(index)}
                        className={`text-left py-6 px-8 border-l border-stone-800 transition-all duration-300 flex items-center justify-between group
              ${activePlant === index ? 'bg-stone-800 border-l-stone-100' : 'hover:bg-stone-900 hover:border-l-stone-600'}`}
                    >
                        <div>
                            <span className={`block font-serif text-2xl mb-1 ${activePlant === index ? 'text-stone-100' : 'text-stone-500 group-hover:text-stone-300'}`}>
                                {plant.name}
                            </span>
                            <span className="text-xs text-stone-500 italic font-light">{plant.scientific}</span>
                        </div>
                        {activePlant === index && <ArrowRight size={20} className="text-stone-100" />}
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <div className="w-full md:w-2/3 bg-stone-900/50 p-8 md:p-12 relative overflow-hidden rounded-sm min-h-[400px] flex flex-col justify-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 transition-opacity duration-500">
                    <img
                        src={currentPlant.image}
                        alt={currentPlant.name}
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/50 to-stone-900/40"></div>
                </div>

                <div className="absolute top-0 right-0 p-8 opacity-10 z-10">
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                </div>

                <div className="relative z-10 animate-fade-in transition-opacity duration-500">
                    <div className="flex items-center space-x-4 mb-6">
                        <span className="px-3 py-1 border border-stone-600 rounded-full text-xs tracking-widest uppercase text-stone-400">
                            {currentPlant.element}
                        </span>
                        <span className="text-stone-500 text-xs tracking-widest uppercase">
                            Origen: {currentPlant.origin}
                        </span>
                    </div>

                    <h3 className="text-4xl font-serif mb-6 leading-tight">
                        {currentPlant.description.split('.')[0]}.
                    </h3>

                    <p className="text-stone-400 font-light leading-relaxed text-lg mb-8">
                        {currentPlant.description}
                    </p>

                    <button
                        onClick={() => document.getElementById('coleccion').scrollIntoView({ behavior: 'smooth' })}
                        className="text-sm border-b border-stone-600 pb-1 hover:text-stone-300 hover:border-stone-300 transition-colors uppercase tracking-widest"
                    >
                        Ver productos
                    </button>
                </div>
            </div>
        </div>
    );
};


PlantSelector.propTypes = {
    plants: PropTypes.arrayOf(PlantPropType).isRequired,
    activePlant: PropTypes.number.isRequired,
    setActivePlant: PropTypes.func.isRequired,
};

export default PlantSelector;
