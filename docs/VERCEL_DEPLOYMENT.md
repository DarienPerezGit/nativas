# 🚀 Guía de Deployment en Vercel

## ✅ Preparación Completada

Tu proyecto ya está configurado y listo para Vercel. Los archivos necesarios ya están creados:
- ✅ `vercel.json` - Configuración de Vercel
- ✅ `vite.config.js` - Configuración de Vite
- ✅ Código subido a GitHub

---

## 📋 Pasos para Deployar (2 minutos)

### Paso 1: Crear Cuenta en Vercel (30 segundos)

1. Ve a: **https://vercel.com**
2. Click en **"Sign Up"** (Registrarse)
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tus repositorios

**¿Por qué con GitHub?**
- ✅ No necesitas crear otra contraseña
- ✅ Vercel detecta automáticamente tus repos
- ✅ Deploy automático al hacer `git push`

---

### Paso 2: Importar tu Proyecto (1 minuto)

1. En el dashboard de Vercel, click **"Add New..."** → **"Project"**

2. Verás una lista de tus repositorios de GitHub
   - Busca: **"nativas"**
   - Click en **"Import"**

3. Vercel detectará automáticamente:
   ```
   ✅ Framework Preset: Vite
   ✅ Build Command: pnpm run build
   ✅ Output Directory: dist
   ✅ Install Command: pnpm install
   ```

4. **NO CAMBIES NADA** - La configuración es perfecta

5. Click en **"Deploy"**

---

### Paso 3: Esperar el Deploy (30 segundos)

Verás una pantalla con:
```
🔨 Building...
📦 Deploying...
✅ Ready!
```

**¡Listo!** Tu sitio está en vivo 🎉

---

## 🌐 Tu Sitio Estará Disponible En:

```
https://nativas.vercel.app
```

O algo similar como:
```
https://nativas-git-main-darienperez.vercel.app
```

---

## 🎯 Después del Primer Deploy

### Configurar Dominio Personalizado (Opcional)

1. En el dashboard del proyecto, ve a **"Settings"** → **"Domains"**

2. Opciones:
   - **Gratis:** Cambiar de `nativas-abc123.vercel.app` a `nativas.vercel.app`
   - **Pagado:** Conectar tu dominio `nativas.com` (si lo compras)

### Ver Analytics

1. Ve a **"Analytics"** en el dashboard
2. Verás:
   - 📊 Número de visitas
   - 🌍 De qué países vienen
   - 📱 Dispositivos (móvil/desktop)
   - ⚡ Velocidad de carga

---

## 🔄 Deploy Automático

Desde ahora, cada vez que hagas:

```bash
git add .
git commit -m "Actualicé el diseño"
git push
```

**Automáticamente:**
1. ✅ Vercel detecta el cambio
2. ✅ Construye tu proyecto
3. ✅ Deploya la nueva versión
4. ✅ Tu sitio se actualiza en ~30 segundos

**¡No necesitas hacer nada más!** 🎉

---

## 📱 Preview Deployments

Cuando crees una nueva branch:

```bash
git checkout -b nueva-funcionalidad
# Haces cambios
git push origin nueva-funcionalidad
```

Vercel creará automáticamente:
```
Producción: https://nativas.vercel.app
Preview: https://nativas-git-nueva-funcionalidad.vercel.app
```

**Perfecto para:**
- Mostrar cambios a clientes antes de publicar
- Testing de nuevas features
- Comparar versiones

---

## 🛠️ Comandos Útiles

### Ver el sitio localmente antes de deployar:
```bash
pnpm run build
pnpm run preview
```

### Forzar un nuevo deploy:
```bash
git commit --allow-empty -m "Trigger deploy"
git push
```

---

## 🔧 Configuración Avanzada (Opcional)

### Variables de Entorno

Si necesitas agregar variables de entorno (API keys, etc.):

1. Ve a **"Settings"** → **"Environment Variables"**
2. Agrega tus variables:
   ```
   VITE_PHONE_NUMBER=5491112345678
   VITE_API_KEY=tu-api-key
   ```
3. Usa en tu código:
   ```javascript
   const phone = import.meta.env.VITE_PHONE_NUMBER;
   ```

### Custom Build Command

Si necesitas cambiar el comando de build:

1. Ve a **"Settings"** → **"General"**
2. Cambia **"Build Command"**
3. Ejemplo: `pnpm run build && pnpm run postbuild`

---

## 📊 Monitoreo

### Speed Insights (Gratis)

1. Ve a **"Speed Insights"** en el dashboard
2. Activa la feature
3. Verás:
   - ⚡ Tiempo de carga
   - 📈 Core Web Vitals
   - 🎯 Sugerencias de optimización

### Web Analytics (Gratis)

1. Ve a **"Analytics"** → **"Enable"**
2. Verás estadísticas en tiempo real
3. Sin cookies, respeta privacidad (GDPR compliant)

---

## 🚨 Troubleshooting

### Si el deploy falla:

1. **Revisa los logs:**
   - Click en el deploy fallido
   - Ve a **"Build Logs"**
   - Busca el error en rojo

2. **Errores comunes:**
   ```
   ❌ "Module not found"
   ✅ Solución: Asegúrate que el import esté correcto
   
   ❌ "Build failed"
   ✅ Solución: Corre `pnpm run build` localmente primero
   
   ❌ "Out of memory"
   ✅ Solución: Contacta soporte (raro en plan gratis)
   ```

3. **Redeploy:**
   - Click en **"Redeploy"** en el dashboard
   - O haz un nuevo `git push`

---

## 🎓 Tips Pro

### 1. Branch Protection
```bash
# Crea una rama de desarrollo
git checkout -b develop

# Trabaja en develop
# Solo mergea a main cuando esté listo para producción
```

### 2. Rollback Rápido
Si algo sale mal:
1. Ve a **"Deployments"**
2. Encuentra el deploy anterior que funcionaba
3. Click **"..."** → **"Promote to Production"**

### 3. Colaboración
Invita a otros al proyecto:
1. **"Settings"** → **"Members"**
2. Agrega emails
3. Ellos pueden ver deployments y analytics

---

## 📚 Recursos

- **Documentación Vercel:** https://vercel.com/docs
- **Vite + Vercel:** https://vercel.com/docs/frameworks/vite
- **Soporte:** https://vercel.com/support

---

## ✅ Checklist Post-Deploy

Después de tu primer deploy exitoso:

- [ ] Visita tu sitio en la URL de Vercel
- [ ] Prueba en móvil (abre desde tu celular)
- [ ] Revisa que todas las imágenes carguen
- [ ] Prueba los links de WhatsApp
- [ ] Comparte el link con alguien para feedback
- [ ] Activa Analytics en Vercel
- [ ] (Opcional) Configura un dominio personalizado
- [ ] (Opcional) Conecta con Google Analytics

---

## 🎉 ¡Felicitaciones!

Tu sitio **Nativas** ahora está:
- 🌐 **En vivo** en internet
- ⚡ **Súper rápido** con CDN global
- 🔄 **Auto-deploy** al hacer git push
- 📊 **Con analytics** para ver visitas
- 🔒 **Seguro** con HTTPS
- 💰 **Gratis** para siempre (plan hobby)

---

**¿Necesitas ayuda?** Consulta esta guía o la documentación de Vercel.

**Última actualización:** 2024-12-31
