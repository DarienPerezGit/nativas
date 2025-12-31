/**
 * PLANTILLA DE COMPONENTE CON PROPTYPES
 * 
 * Usa esta plantilla cuando crees nuevos componentes.
 * Reemplaza ComponentName, prop1, prop2, etc. con tus valores reales.
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * ComponentName - Descripción breve del componente
 * 
 * @param {Object} props - Props del componente
 * @param {string} props.prop1 - Descripción de prop1
 * @param {number} props.prop2 - Descripción de prop2
 * @param {boolean} props.prop3 - Descripción de prop3
 */
const ComponentName = ({ prop1, prop2, prop3 }) => {
    return (
        <div>
            <h1>{prop1}</h1>
            <p>Count: {prop2}</p>
            {prop3 && <span>Active!</span>}
        </div>
    );
};

// Validación de tipos
ComponentName.propTypes = {
    prop1: PropTypes.string.isRequired,
    prop2: PropTypes.number.isRequired,
    prop3: PropTypes.bool,
};

// Valores por defecto para props opcionales
ComponentName.defaultProps = {
    prop3: false,
};

export default ComponentName;

// ============================================================================
// EJEMPLOS DE PROPTYPES COMUNES
// ============================================================================

/**
 * Ejemplo 1: Componente con tipos primitivos
 */
const SimpleComponent = ({ title, count, isActive, onClick }) => {
    return <div onClick={onClick}>{title}</div>;
};

SimpleComponent.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

// ============================================================================

/**
 * Ejemplo 2: Componente con array de objetos
 */
const ListComponent = ({ items, onItemClick }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id} onClick={() => onItemClick(item.id)}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

ListComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onItemClick: PropTypes.func.isRequired,
};

// ============================================================================

/**
 * Ejemplo 3: Componente con tipos centralizados
 */
import { ProductPropType } from '../utils/propTypes';

const ProductDisplay = ({ product, showDetails }) => {
    return (
        <div>
            <h2>{product.name}</h2>
            {showDetails && <p>{product.description}</p>}
        </div>
    );
};

ProductDisplay.propTypes = {
    product: ProductPropType.isRequired,
    showDetails: PropTypes.bool,
};

ProductDisplay.defaultProps = {
    showDetails: false,
};

// ============================================================================

/**
 * Ejemplo 4: Componente con children
 */
const Card = ({ title, children, variant }) => {
    return (
        <div className={`card card-${variant}`}>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

Card.defaultProps = {
    variant: 'primary',
};

// ============================================================================

/**
 * Ejemplo 5: Componente con tipos complejos
 */
const ComplexComponent = ({
    user,
    settings,
    onUpdate,
    renderHeader
}) => {
    return (
        <div>
            {renderHeader && renderHeader(user)}
            {/* ... */}
        </div>
    );
};

ComplexComponent.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        roles: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,

    settings: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ])
    ),

    onUpdate: PropTypes.func.isRequired,

    renderHeader: PropTypes.func,
};

// ============================================================================

/**
 * Ejemplo 6: Componente con PropTypes exactos (strict)
 */
const StrictComponent = ({ config }) => {
    return <div>{config.apiKey}</div>;
};

StrictComponent.propTypes = {
    // exact() no permite propiedades adicionales
    config: PropTypes.exact({
        apiKey: PropTypes.string.isRequired,
        timeout: PropTypes.number,
    }).isRequired,
};

// ============================================================================

/**
 * Ejemplo 7: Componente con validación personalizada
 */
const CustomValidationComponent = ({ email, age }) => {
    return <div>{email}</div>;
};

CustomValidationComponent.propTypes = {
    // Validador personalizado
    email: (props, propName, componentName) => {
        const email = props[propName];
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a valid email.`
            );
        }
    },

    // Validador con condición
    age: (props, propName, componentName) => {
        const age = props[propName];
        if (age !== undefined && (typeof age !== 'number' || age < 0 || age > 120)) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Expected a number between 0 and 120.`
            );
        }
    },
};

// ============================================================================
// GUÍA RÁPIDA DE PROPTYPES
// ============================================================================

/*
TIPOS PRIMITIVOS:
- PropTypes.string
- PropTypes.number
- PropTypes.bool
- PropTypes.func
- PropTypes.object
- PropTypes.array
- PropTypes.symbol

TIPOS ESPECÍFICOS:
- PropTypes.element        // Elemento React
- PropTypes.node           // Cualquier cosa renderizable
- PropTypes.instanceOf(Class)

TIPOS DE COLECCIÓN:
- PropTypes.arrayOf(PropTypes.number)
- PropTypes.objectOf(PropTypes.string)
- PropTypes.shape({ name: PropTypes.string })
- PropTypes.exact({ name: PropTypes.string })

OPCIONES:
- PropTypes.oneOf(['A', 'B', 'C'])
- PropTypes.oneOfType([PropTypes.string, PropTypes.number])

REQUERIDO:
- PropTypes.string.isRequired

PERSONALIZADO:
- PropTypes.custom((props, propName, componentName) => { ... })
*/
