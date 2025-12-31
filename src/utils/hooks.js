import { useEffect, useState, useRef } from 'react';

/**
 * Hook personalizado para detectar cuando un elemento es visible en el viewport
 * Útil para activar animaciones al hacer scroll
 * 
 * @param {Object} options - Opciones del IntersectionObserver
 * @returns {Array} [ref, isVisible] - Referencia al elemento y estado de visibilidad
 */
export const useScrollAnimation = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // Solo activar una vez cuando el elemento entra
            if (entry.isIntersecting && !isVisible) {
                setIsVisible(true);
            }
        }, {
            threshold: 0.1, // Activar cuando el 10% del elemento es visible
            ...options
        });

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [isVisible, options]);

    return [elementRef, isVisible];
};

/**
 * Hook para manejar el estado de carga de imágenes
 * 
 * @returns {Object} { imageLoaded, handleImageLoad }
 */
export const useImageLoad = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return { imageLoaded, handleImageLoad };
};
