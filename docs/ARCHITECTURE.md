# Arquitectura del Proyecto - Nativas Web

## 📁 Estructura de Archivos

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx ✓ PropTypes
│   │   │   Props: isScrolled, mobileMenuOpen, setMobileMenuOpen
│   │   │
│   │   └── Footer.jsx
│   │       Props: ninguna
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   │   Props: ninguna
│   │   │
│   │   ├── Manifesto.jsx
│   │   │   Props: ninguna
│   │   │
│   │   ├── Encyclopedia.jsx
│   │   │   Props: ninguna (estado interno)
│   │   │
│   │   └── Shop.jsx
│   │       Props: ninguna
│   │
│   ├── products/
│   │   └── KraftPouch.jsx ✓ PropTypes
│   │       Props: product (ProductPropType)
│   │
│   └── ui/
│       └── PlantSelector.jsx ✓ PropTypes
│           Props: plants, activePlant, setActivePlant
│
├── data/
│   ├── plants.js
│   │   Export: ancestralPlants[]
│   │
│   └── products.js
│       Export: shopProducts[]
│
├── utils/
│   ├── whatsapp.js
│   │   Export: PHONE_NUMBER, createWhatsAppLink()
│   │
│   └── propTypes.js ✓ Tipos Centralizados
│       Export: ProductPropType, PlantPropType
│
├── docs/
│   └── PROPTYPES.md
│       Documentación completa de PropTypes
│
├── App.jsx
│   Componente principal (33 líneas)
│
└── main.jsx
    Punto de entrada
```

## 🔄 Flujo de Datos

```
App.jsx
  │
  ├─→ Navbar (isScrolled, mobileMenuOpen, setMobileMenuOpen)
  │
  ├─→ Hero
  │
  ├─→ Manifesto
  │
  ├─→ Encyclopedia
  │     └─→ PlantSelector (plants, activePlant, setActivePlant)
  │           └── plants.js (ancestralPlants)
  │
  ├─→ Shop
  │     └─→ KraftPouch (product) × 3
  │           └── products.js (shopProducts)
  │
  └─→ Footer
```

## 📊 Métricas del Proyecto

### Antes de la Modularización
- **1 archivo**: App.jsx
- **613 líneas** de código
- **0 PropTypes**
- **Difícil de mantener**

### Después de la Modularización
- **15 archivos** organizados
- **~50 líneas** promedio por archivo
- **3 componentes** con PropTypes
- **2 tipos centralizados**
- **Fácil de mantener y escalar**

## 🎯 Componentes con PropTypes

| Componente | Props | Tipo | Validado |
|------------|-------|------|----------|
| **Navbar** | isScrolled | bool | ✅ |
| | mobileMenuOpen | bool | ✅ |
| | setMobileMenuOpen | func | ✅ |
| **PlantSelector** | plants | array | ✅ |
| | activePlant | number | ✅ |
| | setActivePlant | func | ✅ |
| **KraftPouch** | product | object | ✅ |

## 🛡️ Tipos Centralizados

### ProductPropType
```javascript
{
  id: number ✓
  name: string ✓
  scientific: string ✓
  price: string ✓
  weight: string ✓
  tag: string ✓
  title: string ✓
  subtitle: string ✓
  whatsappMessage: string ✓
}
```

### PlantPropType
```javascript
{
  id: number ✓
  name: string ✓
  scientific: string ✓
  origin: string ✓
  element: string ✓
  description: string ✓
  icon: element ✓
  image: string ✓
}
```

## 🚀 Ventajas de la Arquitectura Actual

### 1. Separación de Responsabilidades
- **Layout**: Navbar, Footer
- **Sections**: Hero, Manifesto, Encyclopedia, Shop
- **Products**: KraftPouch (reutilizable)
- **UI**: PlantSelector (interactivo)
- **Data**: Separado de la lógica
- **Utils**: Funciones compartidas

### 2. Reutilización
- `KraftPouch` se puede usar para cualquier producto
- `PlantSelector` es independiente y reutilizable
- PropTypes centralizados evitan duplicación

### 3. Mantenibilidad
- Archivos pequeños y enfocados
- Fácil de encontrar código específico
- PropTypes documentan las interfaces

### 4. Escalabilidad
- Agregar productos: editar `data/products.js`
- Agregar plantas: editar `data/plants.js`
- Nuevas secciones: crear en `sections/`
- Nuevos componentes: seguir la estructura

### 5. Testing
- Componentes aislados
- PropTypes validan inputs
- Fácil de mockear datos

## 📝 Convenciones de Código

### Nombres de Archivos
- Componentes: `PascalCase.jsx`
- Utilidades: `camelCase.js`
- Datos: `camelCase.js`

### Estructura de Componentes
```jsx
// 1. Imports
import React from 'react';
import PropTypes from 'prop-types';

// 2. Componente
const ComponentName = ({ prop1, prop2 }) => {
  return (
    // JSX
  );
};

// 3. PropTypes
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number,
};

// 4. Default Props (opcional)
ComponentName.defaultProps = {
  prop2: 0,
};

// 5. Export
export default ComponentName;
```

## 🔍 Próximos Pasos Sugeridos

1. ✅ **PropTypes agregados**
2. ⬜ Agregar tests unitarios
3. ⬜ Implementar lazy loading
4. ⬜ Crear custom hooks
5. ⬜ Migrar a TypeScript (opcional)
6. ⬜ Agregar Storybook para documentación visual
7. ⬜ Implementar sistema de temas

## 📚 Documentación

- [PROPTYPES.md](./PROPTYPES.md) - Guía completa de PropTypes
- [README.md](../README.md) - Documentación principal del proyecto
