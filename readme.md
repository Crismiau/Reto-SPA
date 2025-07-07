# 🚀 Panel de Administración de Usuarios (SPA)

Este proyecto es una **Single Page Application (SPA)** para la gestión de usuarios, desarrollada en JavaScript puro, HTML y CSS. Permite crear, editar, eliminar y visualizar usuarios de manera dinámica, sin recargar la página. Utiliza un backend simulado con `json-server` para persistencia de datos.

---

## 📑 Tabla de Contenidos

- [✨ Características](#-características)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🛠️ Instalación](#️-instalación)
- [🧑‍💻 Uso](#-uso)
- [⚙️ Detalles Técnicos](#️-detalles-técnicos)
- [📦 Dependencias](#-dependencias)
- [💡 Notas y Recomendaciones](#-notas-y-recomendaciones)
- [🌍 Despliegue en Producción](#-despliegue-en-producción)

---

## ✨ Características

- 🖥️ SPA: Navegación y gestión de usuarios sin recargar la página.
- 📝 CRUD completo de usuarios (Crear, Leer, Actualizar, Eliminar).
- ✅ Validación de formularios en frontend (campos obligatorios, solo letras en nombre, etc).
- 🪟 Modal para crear y editar usuarios.
- 🔄 Renderizado dinámico de la tabla de usuarios.
- 🧩 Estructura lista para expandirse a otras secciones (cursos, pagos, reportes, etc), (SOLO SE IMPLEMENTO USUARIOS)

---

## 📁 Estructura del Proyecto

```
reto-SPA/
  ├── assets/           # 🖼️ Imágenes y recursos estáticos
  ├── css/              # 🎨 Hojas de estilo CSS
  ├── js/               # 📜 Lógica JavaScript modular
  ├── db.json           # 🗄️ Base de datos simulada para json-server
  ├── index.html        # 🏠 Página principal
  └── readme.md         # 📖 Este archivo
```

### Archivos principales:

- `index.html`: Estructura principal y modal de usuario.
- `css/styles.css`: Estilos de la aplicación.
- `js/main.js`: Punto de entrada, inicializa eventos y renderizado.
- `js/dom.js`: Renderizado dinámico de la tabla y manejo del DOM.
- `js/form.js`: Lógica del formulario, validaciones y eventos.
- `js/api.js`: Funciones para interactuar con la API REST (json-server).
- `db.json`: Base de datos local de usuarios.

---

## 🛠️ Instalación

1. **Clona el repositorio:**

   ```bash
   git clone <URL-del-repo>
   cd reto-SPA
   ```

2. **Instala json-server (si no lo tienes):**

   ```bash
   npm install -g json-server
   ```

3. **Inicia el backend simulado:**

   ```bash
   json-server --watch db.json --port 3001
   ```

4. **Abre el proyecto en tu navegador:**
   - Puedes usar la extensión Live Server de VSCode, o cualquier servidor local.
   - Asegúrate de abrir `index.html` desde un servidor, no directamente con `file://`.

---

## 🧑‍💻 Uso

- Haz clic en **+ Nuevo Usuario** para abrir el modal y crear un usuario.
- Completa todos los campos. El campo "Nombre" solo acepta letras y espacios.
- Haz clic en **Editar** o **Eliminar** en la tabla para modificar o borrar usuarios.
- La tabla se actualiza automáticamente sin recargar la página.

---

## ⚙️ Detalles Técnicos

- **SPA:** Todo el manejo de usuarios se realiza dinámicamente con JavaScript, sin recargar la página.
- **Validaciones:**
  - Todos los campos son obligatorios.
  - El campo nombre solo acepta letras y espacios (validación con RegExp).
- **API:**
  - Se usa `fetch` para interactuar con el backend simulado (`json-server`).
  - Endpoints principales: `/users` (GET, POST, PATCH, DELETE).
- **Modularidad:**
  - El código JS está dividido en módulos para facilitar el mantenimiento y la escalabilidad.

---

## 📦 Dependencias

- [json-server](https://github.com/typicode/json-server) (para simular el backend REST)
- Navegador moderno compatible con ES6 Modules

---

## 💡 Notas y Recomendaciones

- Si agregas nuevas secciones (cursos, pagos, etc.), sigue la misma estructura modular.
- Si cambias el puerto de `json-server`, actualiza la URL en `js/api.js`.
- Para producción, deberías conectar con un backend real y mejorar la seguridad y validaciones.
- El diseño es responsive y puede personalizarse fácilmente desde `css/styles.css`.

---

## 🌍 Despliegue en Producción

¿Quieres que tu SPA esté disponible en internet? Aquí tienes el paso a paso:

1. **Prepara tu proyecto:**

   - Elimina archivos y datos de prueba que no quieras en producción.
   - Asegúrate de que todas las rutas de tus scripts y estilos sean relativas (`js/main.js`, `css/styles.css`, etc).

2. **Genera una versión optimizada (opcional):**

   - Puedes minificar tus archivos JS y CSS para mejorar el rendimiento.

3. **Sube tu proyecto a un hosting estático:**

   - Plataformas recomendadas:
     - [Vercel](https://vercel.com/) 🚀
     - [Netlify](https://www.netlify.com/) 🌱
     - [GitHub Pages](https://pages.github.com/) 🐙
     - [Firebase Hosting](https://firebase.google.com/products/hosting) 🔥
   - Solo necesitas subir la carpeta del proyecto (sin `db.json` si no usas json-server en producción).

4. **Configura el backend (opcional):**

   - Si quieres persistencia real, conecta tu frontend a una API real (Node.js, Express, etc).
   - Si solo quieres mostrar la app, puedes dejarla como estática.

5. **Prueba tu app en producción:**

   - Abre la URL que te da la plataforma de hosting y verifica que todo funcione correctamente.

6. **Comparte tu SPA con el mundo! 🌎✨**

---

**Autor:** Cristian Camilo Agudelo

¡Disfruta programando y mejorando tu SPA! 🚀🦄🎉
