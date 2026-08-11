# Estantería Abierta · Proyecto Libros

Mini-catálogo de libros (Opción B) para la **Evaluación 1** del Diplomado Fullstack IPSS.

Sitio web estático con HTML, CSS, Bootstrap y JavaScript. Permite explorar libros, ver su detalle, buscar en el catálogo y contactar por recomendaciones.

**Repositorio:** [javierfigueroaaaby/proyecto-libros](https://github.com/javierfigueroaaaby/proyecto-libros)

---

## Objetivo

Practicar front-end básico:

- Estructura HTML semántica
- Estilos propios + Bootstrap 5
- Interactividad con JavaScript
- Trabajo colaborativo con Git y Pull Requests

---

## Cómo abrir el proyecto

1. Clona o descarga el repositorio.
2. Abre la carpeta del proyecto.
3. Abre el archivo `index.html` en el navegador  
   (doble clic, o clic derecho → Open with Live Server si usas la extensión en VS Code / Cursor).

No necesita instalación de dependencias ni servidor obligatorio.

---

## Páginas

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Inicio: hero, libros destacados, tips de lectura y FAQ |
| `listado.html` | Catálogo completo con búsqueda, filtro y vista rápida |
| `detalle.html` | Ficha de un libro (cambia según `?id=` en la URL) |
| `contacto.html` | Formulario de contacto |

### Ejemplo de detalle dinámico

- `detalle.html?id=1` → Harry Potter y la piedra filosofal  
- `detalle.html?id=2` → Harry Potter y la cámara secreta  
- … hasta `id=6`

---

## Estructura de carpetas

```text
proyecto-libros/
├── index.html
├── listado.html
├── detalle.html
├── contacto.html
├── css/
│   └── custom.css      # Estilos propios (después de Bootstrap)
├── js/
│   └── main.js         # Buscador, modo oscuro, detalle dinámico, tips
├── img/                # Portadas e imagen del hero
└── README.md
```

---

## Funcionalidades

- Navegación común (header / footer) en todas las páginas
- **Modo oscuro / claro** (se guarda en `localStorage`)
- Buscador de libros en el catálogo
- Modales de “Vista rápida”
- Detalle dinámico: imagen, título, precio y sinopsis según el `id`
- Tips de lectura (mostrar / ocultar)
- Acordeón de preguntas frecuentes
- Formulario de contacto con labels asociados a los inputs

---

## Tecnologías

- HTML5
- CSS3 (`custom.css` + variables CSS)
- Bootstrap 5.3
- JavaScript (vanilla)
- Google Fonts (Syne e IBM Plex Sans)
- Git / GitHub (ramas y Pull Requests)

---

## Flujo de trabajo en equipo

1. Actualizar `main`:
   ```bash
   git checkout main
   git pull origin main
   ```
2. Crear una rama para tu avance:
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
3. Hacer cambios, commit y push.
4. Crear un **Pull Request** para que el equipo revise y apruebe.
5. Tras el merge, volver a actualizar `main`.

---

## Autores

Proyecto colaborativo — Diplomado Fullstack IPSS.
- Bill Camelo
- Javier Figueroa Aaby
- Sebastián Salazar Díaz
