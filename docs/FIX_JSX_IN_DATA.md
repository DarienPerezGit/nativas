# 🔧 Fix: JSX en Archivos de Datos

## Problema Encontrado

```
[ERROR] The JSX syntax extension is not currently enabled
src/data/plants.js:11:14:
  11 │         icon: <Sun className="w-6 h-6" />,
     ╵               ^
```

**Causa:** El archivo `plants.js` contenía JSX (elementos React) pero tenía extensión `.js`. Vite/esbuild no procesa JSX en archivos `.js` por defecto.

## Solución Implementada

### ✅ Mejor Práctica: Separar Datos de UI

En lugar de incluir JSX en los datos, ahora usamos **nombres de iconos** que se resuelven dinámicamente en el componente.

### Cambios Realizados

#### 1. **`src/data/plants.js`** - Datos Puros

**Antes:**
```javascript
import { Sun, Wind, Leaf } from 'lucide-react';

export const ancestralPlants = [
  {
    id: 1,
    name: "Jarilla",
    icon: <Sun className="w-6 h-6" />, // ❌ JSX en datos
    // ...
  }
];
```

**Después:**
```javascript
// Sin imports de React - datos puros
export const ancestralPlants = [
  {
    id: 1,
    name: "Jarilla",
    iconName: "Sun", // ✅ String simple
    // ...
  }
];
```

#### 2. **`src/components/ui/PlantSelector.jsx`** - Renderizado Dinámico

**Agregado:**
```javascript
import { ArrowRight, Sun, Wind, Leaf } from 'lucide-react';

// Mapeo de nombres a componentes
const iconMap = {
  Sun,
  Wind,
  Leaf
};

const PlantSelector = ({ plants, activePlant, setActivePlant }) => {
  const currentPlant = plants[activePlant];
  
  // Obtener el componente dinámicamente
  const IconComponent = iconMap[currentPlant.iconName];
  
  return (
    // ...
    <div>
      {IconComponent && <IconComponent className="w-6 h-6" />}
    </div>
  );
};
```

#### 3. **`src/utils/propTypes.js`** - PropType Actualizado

**Antes:**
```javascript
icon: PropTypes.element.isRequired, // ❌ Esperaba JSX
```

**Después:**
```javascript
iconName: PropTypes.string.isRequired, // ✅ Espera string
```

## Ventajas de Esta Solución

### 1. **Separación de Responsabilidades** ✅
- **Datos**: Solo información pura (JSON-like)
- **UI**: Componentes manejan el renderizado

### 2. **Mejor Rendimiento** ✅
- Los datos pueden ser importados sin procesar JSX
- Más rápido para esbuild/Vite

### 3. **Más Flexible** ✅
- Fácil agregar nuevos iconos al `iconMap`
- Los datos pueden venir de una API
- Fácil de serializar/deserializar

### 4. **Mejor Testing** ✅
- Los datos puros son más fáciles de testear
- No necesitas mock de React para los datos

### 5. **TypeScript-Friendly** ✅
- Más fácil tipar strings que elementos React
- Mejor autocompletado

## Cómo Agregar un Nuevo Icono

### Paso 1: Agregar al `iconMap`

```javascript
// src/components/ui/PlantSelector.jsx
import { ArrowRight, Sun, Wind, Leaf, Flower } from 'lucide-react';

const iconMap = {
  Sun,
  Wind,
  Leaf,
  Flower // ✅ Nuevo icono
};
```

### Paso 2: Usar en los datos

```javascript
// src/data/plants.js
export const ancestralPlants = [
  // ...
  {
    id: 4,
    name: "Nueva Planta",
    iconName: "Flower", // ✅ Referencia por nombre
    // ...
  }
];
```

## Alternativas Consideradas

### ❌ Opción 1: Renombrar a `.jsx`
```javascript
// plants.jsx
import { Sun } from 'lucide-react';
export const plants = [{ icon: <Sun /> }];
```
**Problema:** Los datos no deberían contener JSX. Mezcla responsabilidades.

### ❌ Opción 2: Configurar esbuild
```javascript
// vite.config.js
esbuild: {
  loader: { '.js': 'jsx' }
}
```
**Problema:** Procesa TODOS los `.js` como JSX, más lento.

### ✅ Opción 3: Nombres de iconos (Implementada)
```javascript
// plants.js - datos puros
export const plants = [{ iconName: "Sun" }];

// PlantSelector.jsx - renderizado
const Icon = iconMap[plant.iconName];
```
**Ventajas:** Separación clara, mejor rendimiento, más flexible.

## Patrón de Diseño

Este cambio implementa el patrón **Strategy Pattern**:

```
Datos (Strategy) → Nombre del icono
                    ↓
Componente (Context) → Mapeo dinámico
                    ↓
Renderizado → Componente de icono correcto
```

## Impacto en el Proyecto

- ✅ **0 breaking changes** en la UI
- ✅ **Mejor arquitectura** de datos
- ✅ **Más mantenible** a largo plazo
- ✅ **Preparado para APIs** externas

## Lecciones Aprendidas

1. **Los datos deben ser serializables** - Evita JSX en datos
2. **Separar datos de UI** - Mejor arquitectura
3. **Usar mapeos dinámicos** - Más flexible
4. **PropTypes ayudan** - Detectan estos problemas temprano

## Referencias

- [Vite - JSX in .js files](https://vitejs.dev/guide/features.html#jsx)
- [React - Separating Data and UI](https://react.dev/learn/passing-data-deeply-with-context)
- [Strategy Pattern](https://refactoring.guru/design-patterns/strategy)

---

**Fecha:** 2024-12-31  
**Autor:** Equipo Nativas  
**Estado:** ✅ Resuelto
