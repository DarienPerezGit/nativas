import PropTypes from 'prop-types';

/**
 * PropType para un producto de la tienda
 */
export const ProductPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    scientific: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    whatsappMessage: PropTypes.string.isRequired,
});

/**
 * PropType para una planta ancestral
 */
export const PlantPropType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    scientific: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired, // Nombre del icono (ej: "Sun", "Wind", "Leaf")
    image: PropTypes.string.isRequired,
});
