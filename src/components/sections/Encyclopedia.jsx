import React, { useState } from 'react';
import PlantSelector from '../ui/PlantSelector';
import { ancestralPlants } from '../../data/plants';

const Encyclopedia = () => {
    const [activePlant, setActivePlant] = useState(0);

    return (
        <section id="sabiduria" className="py-24 px-6 bg-[#1c1917] text-stone-100 transition-colors duration-500">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-stone-400 text-xs tracking-[0.3em] uppercase block mb-4">Farmacopea Viva</span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">Maestras Curanderas</h2>
                    <p className="text-stone-400 font-light max-w-xl mx-auto">
                        Antes de consumir, conoce. Estas plantas han sanado cuerpos y espíritus en Sudamérica durante milenios.
                    </p>
                </div>

                <PlantSelector
                    plants={ancestralPlants}
                    activePlant={activePlant}
                    setActivePlant={setActivePlant}
                />
            </div>
        </section>
    );
};

export default Encyclopedia;
