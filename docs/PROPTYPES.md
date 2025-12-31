# PropTypes - Validación de Tipos

Este proyecto utiliza **PropTypes** para validación de tipos en tiempo de ejecución. Esto ayuda a detectar errores tempranamente durante el desarrollo.

## 📦 Instalación

```bash
pnpm add prop-types
```

## 🎯 Tipos Centralizados

Hemos creado tipos reutilizables en `src/utils/propTypes.js`:

### ProductPropType
Define la estructura de un producto de la tienda:

```javascript
{
  id: number,              // ID único del producto
  name: string,            // Nombre del producto (ej: "LAVANDA")
  scientific: string,      // Nombre científico (ej: "Lavandula angustifolia")
  price: string,           // Precio formateado (ej: "$14.200")
  weight: string,          // Peso del producto (ej: "50g")
  tag: string,             // Etiqueta del producto (ej: "100% Orgánico")
  title: string,           // Título descriptivo (ej: "RELAJACIÓN PROFUNDA")
  subtitle: string,        // Subtítulo (ej: "Flores enteras seleccionadas a mano.")
  whatsappMessage: string  // Mensaje pre-configurado para WhatsApp
}
```

### PlantPropType
Define la estructura de una planta ancestral:

```javascript
{
  id: number,              // ID único de la planta
  name: string,            // Nombre común (ej: "Jarilla")
  scientific: string,      // Nombre científico (ej: "Larrea divaricata")
  origin: string,          // Origen geográfico (ej: "Precordillera Andina")
  element: string,         // Elemento asociado (ej: "Fuego")
  description: string,     // Descripción detallada
  icon: element,           // Componente React (icono de Lucide)
  image: string            // URL de la imagen
}
```

## 📝 Uso en Componentes

### Ejemplo 1: Componente Simple

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const SimpleComponent = ({ title, count, isActive }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      {isActive && <span>Active!</span>}
    </div>
  );
};

SimpleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  isActive: PropTypes.bool,
};

SimpleComponent.defaultProps = {
  isActive: false,
};

export default SimpleComponent;
```

### Ejemplo 2: Usando Tipos Centralizados

```jsx
import React from 'react';
import { ProductPropType } from '../../utils/propTypes';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: ProductPropType.isRequired,
};

export default ProductCard;
```

## 🔍 Tipos de PropTypes Disponibles

### Tipos Primitivos
```javascript
PropTypes.string      // Cadena de texto
PropTypes.number      // Número
PropTypes.bool        // Booleano
PropTypes.func        // Función
PropTypes.object      // Objeto
PropTypes.array       // Array
PropTypes.symbol      // Symbol
```

### Tipos Específicos
```javascript
PropTypes.element              // Elemento React
PropTypes.node                 // Cualquier cosa renderizable
PropTypes.instanceOf(Class)    // Instancia de una clase
PropTypes.oneOf(['A', 'B'])    // Uno de los valores especificados
PropTypes.oneOfType([          // Uno de los tipos especificados
  PropTypes.string,
  PropTypes.number
])
```

### Tipos de Colección
```javascript
PropTypes.arrayOf(PropTypes.number)        // Array de números
PropTypes.objectOf(PropTypes.string)       // Objeto con valores string
PropTypes.shape({                          // Objeto con forma específica
  name: PropTypes.string,
  age: PropTypes.number
})
```

### Requerido vs Opcional
```javascript
PropTypes.string              // Opcional
PropTypes.string.isRequired   // Requerido
```

## ⚠️ Advertencias en Desarrollo

PropTypes solo muestra advertencias en **modo desarrollo**. En producción, las validaciones se omiten para mejor rendimiento.

Ejemplo de advertencia en consola:
```
Warning: Failed prop type: Invalid prop `price` of type `number` supplied to `ProductCard`, expected `string`.
```

## ✅ Beneficios

1. **Detección temprana de errores**: Encuentra bugs antes de que lleguen a producción
2. **Documentación viva**: Los PropTypes sirven como documentación del componente
3. **Mejor IntelliSense**: Algunos editores usan PropTypes para autocompletado
4. **Refactoring seguro**: Cambios en la estructura de datos generan advertencias
5. **Onboarding más fácil**: Nuevos desarrolladores entienden las props rápidamente

## 🚀 Mejores Prácticas

1. **Siempre define PropTypes** para componentes que reciben props
2. **Usa `.isRequired`** para props obligatorias
3. **Centraliza tipos complejos** en `utils/propTypes.js`
4. **Define defaultProps** para props opcionales con valores por defecto
5. **Sé específico**: Usa `shape` en lugar de `object` cuando sea posible

## 📚 Componentes con PropTypes

### Layout
- ✅ `Navbar.jsx` - isScrolled, mobileMenuOpen, setMobileMenuOpen
- ✅ `Footer.jsx` - Sin props

### Sections
- ✅ `Hero.jsx` - Sin props
- ✅ `Manifesto.jsx` - Sin props
- ✅ `Encyclopedia.jsx` - Sin props (maneja estado interno)
- ✅ `Shop.jsx` - Sin props

### UI
- ✅ `PlantSelector.jsx` - plants, activePlant, setActivePlant

### Products
- ✅ `KraftPouch.jsx` - product

## 🔄 Migración a TypeScript (Futuro)

Si en el futuro decides migrar a TypeScript, los PropTypes facilitarán la transición:

```typescript
// PropTypes
SimpleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

// TypeScript equivalente
interface SimpleComponentProps {
  title: string;
  count: number;
}

const SimpleComponent: React.FC<SimpleComponentProps> = ({ title, count }) => {
  // ...
};
```

## 📖 Recursos

- [Documentación oficial de PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- [npm: prop-types](https://www.npmjs.com/package/prop-types)
