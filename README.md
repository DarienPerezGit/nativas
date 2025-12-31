# 🌿 Nativas - Landing Page

Landing page premium para **Nativas**, marca de botánica curativa ancestral sudamericana. Diseño modular, componentes reutilizables y validación de tipos con PropTypes.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev

# Build para producción
pnpm run build

# Preview de producción
pnpm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── layout/         # Navbar, Footer
│   ├── sections/       # Hero, Manifesto, Encyclopedia, Shop
│   ├── products/       # KraftPouch (tarjeta de producto)
│   └── ui/             # PlantSelector (componentes UI reutilizables)
├── data/               # Datos estáticos
│   ├── plants.js       # Información de plantas ancestrales
│   └── products.js     # Catálogo de productos
├── utils/              # Utilidades
│   ├── whatsapp.js     # Integración WhatsApp
│   └── propTypes.js    # Tipos PropTypes centralizados
├── App.jsx             # Componente principal
└── main.jsx            # Punto de entrada
```

## 🛡️ Validación de Tipos

Este proyecto usa **PropTypes** para validación de tipos en tiempo de ejecución:

- ✅ **3 componentes** con PropTypes
- ✅ **2 tipos centralizados** reutilizables
- ✅ **Documentación completa** en `/docs`

### Tipos Centralizados

```javascript
// ProductPropType - Productos de la tienda
import { ProductPropType } from './utils/propTypes';

// PlantPropType - Plantas ancestrales
import { PlantPropType } from './utils/propTypes';
```

Ver [docs/PROPTYPES.md](./docs/PROPTYPES.md) para más información.

## 📚 Documentación

- **[PROPTYPES.md](./docs/PROPTYPES.md)** - Guía completa de PropTypes
- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Arquitectura del proyecto
- **[COMPONENT_TEMPLATE.jsx](./docs/COMPONENT_TEMPLATE.jsx)** - Plantilla para nuevos componentes
- **[PROPTYPES_SUMMARY.md](./docs/PROPTYPES_SUMMARY.md)** - Resumen de implementación

## 🎨 Componentes Principales

### Layout
- **Navbar** - Navegación responsive con menú móvil
- **Footer** - Pie de página con newsletter y enlaces

### Secciones
- **Hero** - Sección principal con imagen de fondo
- **Manifesto** - Filosofía de la marca
- **Encyclopedia** - Plantas ancestrales con selector interactivo
- **Shop** - Tienda con diseño premium "Alquimia"

### Productos
- **KraftPouch** - Tarjeta de producto reutilizable con diseño kraft

### UI
- **PlantSelector** - Selector interactivo de plantas

## 🔧 Tecnologías

- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **Lucide React** - Iconos
- **PropTypes** - Validación de tipos
- **CSS Vanilla** - Estilos personalizados

## 📱 Integración WhatsApp

Configurar número de WhatsApp en `src/utils/whatsapp.js`:

```javascript
export const PHONE_NUMBER = "5491112345678"; // Tu número en formato internacional
```

## 🎯 Características

- ✅ **Diseño responsive** - Mobile-first
- ✅ **Componentes modulares** - Fácil de mantener
- ✅ **PropTypes** - Validación de tipos
- ✅ **Datos separados** - Fácil de actualizar
- ✅ **Integración WhatsApp** - Contacto directo
- ✅ **Animaciones suaves** - UX premium
- ✅ **SEO optimizado** - Meta tags y estructura semántica

## 🌟 Agregar Nuevo Producto

1. Editar `src/data/products.js`:

```javascript
export const shopProducts = [
  // ... productos existentes
  {
    id: 4,
    name: "NUEVO PRODUCTO",
    scientific: "Nombre científico",
    price: "$15.000",
    weight: "50g",
    tag: "100% Orgánico",
    title: "TÍTULO DESCRIPTIVO",
    subtitle: "Descripción breve.",
    whatsappMessage: "Hola Nativas, me interesa adquirir NUEVO PRODUCTO..."
  }
];
```

2. El componente `Shop` automáticamente renderizará el nuevo producto.

## 🌿 Agregar Nueva Planta

1. Editar `src/data/plants.js`:

```javascript
import { Icon } from 'lucide-react';

export const ancestralPlants = [
  // ... plantas existentes
  {
    id: 4,
    name: "Nueva Planta",
    scientific: "Nombre científico",
    origin: "Región de origen",
    element: "Elemento",
    description: "Descripción completa...",
    icon: <Icon className="w-6 h-6" />,
    image: "/ruta/imagen.jpg"
  }
];
```

2. El componente `Encyclopedia` automáticamente incluirá la nueva planta.

## 🎨 Personalización

### Colores
Los colores principales están definidos en las clases de Tailwind:
- **Fondo**: `bg-[#FDFBF7]`
- **Texto**: `text-stone-800`
- **Acento**: `bg-stone-900`

### Fuentes
- **Serif**: Para títulos y elementos destacados
- **Sans**: Para texto general

### Imágenes
Reemplazar las imágenes en la carpeta `/public`:
- `/manos-en-la-tierra.jpg`
- `/jarilla-larrea-divaricata.jpg`
- `/Achyrocline satureioides.jpg`
- `/Baccharis trimera.jpg`

## 📊 Métricas del Proyecto

| Métrica | Valor |
|---------|-------|
| Componentes | 11 |
| Líneas de código | ~600 |
| Archivos | 15 |
| PropTypes | 3 componentes |
| Tipos centralizados | 2 |
| Documentación | 4 archivos |

## 🤝 Contribuir

1. Usar la plantilla en `docs/COMPONENT_TEMPLATE.jsx` para nuevos componentes
2. Agregar PropTypes a componentes que reciben props
3. Mantener componentes pequeños y enfocados
4. Documentar cambios importantes

## 📝 Convenciones

### Nombres de Archivos
- Componentes: `PascalCase.jsx`
- Utilidades: `camelCase.js`
- Datos: `camelCase.js`

### Estructura de Componentes
```jsx
import React from 'react';
import PropTypes from 'prop-types';

const ComponentName = ({ props }) => {
  return (/* JSX */);
};

ComponentName.propTypes = {
  // PropTypes aquí
};

export default ComponentName;
```

## 🔜 Roadmap

- [ ] Tests unitarios con Jest
- [ ] Lazy loading de secciones
- [ ] Custom hooks (useWhatsApp, useScroll)
- [ ] Storybook para documentación visual
- [ ] Migración a TypeScript (opcional)
- [ ] Modo oscuro
- [ ] Internacionalización (i18n)

## 📄 Licencia

Proyecto privado - Todos los derechos reservados © 2024 Nativas

## 📧 Contacto

Para consultas sobre el proyecto, contactar a través de WhatsApp configurado en la aplicación.

---

**Hecho con 🌿 por el equipo de Nativas**
