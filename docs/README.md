# 📚 Documentación - Nativas Web

Bienvenido a la documentación del proyecto Nativas. Aquí encontrarás toda la información necesaria para trabajar con el código.

## 📖 Guías Disponibles

### 1. [PROPTYPES.md](./PROPTYPES.md) 🛡️
**Validación de Tipos con PropTypes**

Aprende todo sobre PropTypes en este proyecto:
- ✅ Qué son y por qué los usamos
- ✅ Tipos centralizados (ProductPropType, PlantPropType)
- ✅ Ejemplos de uso
- ✅ Tipos disponibles
- ✅ Mejores prácticas
- ✅ Beneficios y advertencias

**Ideal para:** Entender cómo validar props en componentes

---

### 2. [ARCHITECTURE.md](./ARCHITECTURE.md) 🏗️
**Arquitectura del Proyecto**

Documentación completa de la estructura:
- ✅ Estructura de archivos
- ✅ Flujo de datos
- ✅ Métricas antes/después de modularización
- ✅ Componentes con PropTypes
- ✅ Convenciones de código
- ✅ Próximos pasos

**Ideal para:** Entender la organización del proyecto

---

### 3. [COMPONENT_TEMPLATE.jsx](./COMPONENT_TEMPLATE.jsx) 📝
**Plantilla de Componentes**

Plantilla y ejemplos para crear nuevos componentes:
- ✅ Plantilla base con PropTypes
- ✅ 7 ejemplos prácticos
- ✅ Guía rápida de PropTypes
- ✅ Validaciones personalizadas

**Ideal para:** Crear nuevos componentes siguiendo las convenciones

---

### 4. [PROPTYPES_SUMMARY.md](./PROPTYPES_SUMMARY.md) ✅
**Resumen de Implementación**

Checklist completo de la implementación:
- ✅ Componentes actualizados
- ✅ Tipos centralizados creados
- ✅ Documentación generada
- ✅ Comparación antes/después
- ✅ Cómo usar PropTypes
- ✅ Próximos pasos

**Ideal para:** Ver el estado actual de PropTypes en el proyecto

---

## 🚀 Inicio Rápido

### Para Nuevos Desarrolladores

1. **Lee primero:** [../README.md](../README.md) - Información general del proyecto
2. **Entiende la estructura:** [ARCHITECTURE.md](./ARCHITECTURE.md)
3. **Aprende PropTypes:** [PROPTYPES.md](./PROPTYPES.md)
4. **Usa la plantilla:** [COMPONENT_TEMPLATE.jsx](./COMPONENT_TEMPLATE.jsx)

### Para Crear un Nuevo Componente

1. Copia la plantilla de [COMPONENT_TEMPLATE.jsx](./COMPONENT_TEMPLATE.jsx)
2. Coloca el archivo en la carpeta apropiada:
   - `src/components/layout/` - Para layout (Navbar, Footer)
   - `src/components/sections/` - Para secciones de página
   - `src/components/products/` - Para componentes de productos
   - `src/components/ui/` - Para componentes UI reutilizables
3. Agrega PropTypes si el componente recibe props
4. Usa tipos centralizados de `src/utils/propTypes.js` cuando sea posible

### Para Agregar Datos

- **Productos:** Edita `src/data/products.js`
- **Plantas:** Edita `src/data/plants.js`

## 🎯 Flujo de Trabajo Recomendado

```
1. Planificar
   └─→ Definir qué componente necesitas
   
2. Crear
   └─→ Usar COMPONENT_TEMPLATE.jsx como base
   
3. Validar
   └─→ Agregar PropTypes apropiados
   
4. Documentar
   └─→ Comentar código complejo
   
5. Probar
   └─→ Verificar en dev server
```

## 📊 Estructura de Documentación

```
docs/
├── README.md                    # Este archivo (índice)
├── PROPTYPES.md                # Guía completa de PropTypes
├── ARCHITECTURE.md             # Arquitectura del proyecto
├── COMPONENT_TEMPLATE.jsx      # Plantilla para componentes
└── PROPTYPES_SUMMARY.md        # Resumen de implementación
```

## 🔍 Búsqueda Rápida

### ¿Cómo hago...?

| Pregunta | Documento |
|----------|-----------|
| ¿Cómo crear un componente? | [COMPONENT_TEMPLATE.jsx](./COMPONENT_TEMPLATE.jsx) |
| ¿Cómo agregar PropTypes? | [PROPTYPES.md](./PROPTYPES.md) |
| ¿Dónde va cada archivo? | [ARCHITECTURE.md](./ARCHITECTURE.md) |
| ¿Qué tipos existen? | [PROPTYPES.md](./PROPTYPES.md) |
| ¿Cómo agregar un producto? | [../README.md](../README.md) |
| ¿Cómo funciona WhatsApp? | `src/utils/whatsapp.js` |

## 🎓 Conceptos Clave

### PropTypes
Sistema de validación de tipos en tiempo de ejecución para React. Ayuda a detectar errores durante el desarrollo.

### Tipos Centralizados
Definiciones de PropTypes reutilizables en `src/utils/propTypes.js`:
- `ProductPropType` - Para productos de la tienda
- `PlantPropType` - Para plantas ancestrales

### Componentes Modulares
Cada componente tiene una responsabilidad única y está en su propia carpeta según su función.

### Separación de Datos
Los datos están separados de la lógica en `src/data/`, facilitando actualizaciones.

## 🛠️ Herramientas de Desarrollo

- **Vite** - Dev server y build tool
- **React DevTools** - Inspeccionar componentes
- **PropTypes** - Validación de tipos
- **ESLint** - Linting (si está configurado)

## 📝 Convenciones

### Nombres
- **Componentes:** PascalCase (ej: `ProductCard.jsx`)
- **Utilidades:** camelCase (ej: `whatsapp.js`)
- **Constantes:** UPPER_CASE (ej: `PHONE_NUMBER`)

### Imports
```javascript
// 1. React y librerías externas
import React from 'react';
import PropTypes from 'prop-types';

// 2. Componentes
import ComponentName from './ComponentName';

// 3. Utilidades y datos
import { createWhatsAppLink } from '../utils/whatsapp';
import { products } from '../data/products';
```

### Estructura de Componente
```javascript
// Imports
import React from 'react';
import PropTypes from 'prop-types';

// Componente
const ComponentName = ({ props }) => {
  return (/* JSX */);
};

// PropTypes
ComponentName.propTypes = {
  // ...
};

// Default Props (opcional)
ComponentName.defaultProps = {
  // ...
};

// Export
export default ComponentName;
```

## 🤝 Contribuir

1. Lee la documentación relevante
2. Sigue las convenciones establecidas
3. Agrega PropTypes a nuevos componentes
4. Documenta cambios importantes
5. Mantén componentes pequeños y enfocados

## 🔜 Próximos Pasos

- [ ] Agregar tests unitarios
- [ ] Documentar custom hooks
- [ ] Crear guía de estilos CSS
- [ ] Agregar ejemplos de testing
- [ ] Documentar proceso de deploy

## 📞 Soporte

Si tienes preguntas sobre la documentación o el proyecto:
1. Revisa primero esta documentación
2. Consulta el código de componentes similares
3. Contacta al equipo de desarrollo

---

**Última actualización:** 2024-12-31

**Mantenido por:** Equipo Nativas
