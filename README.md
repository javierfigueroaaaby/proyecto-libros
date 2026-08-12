# Estantería Abierta

Proyecto de la **Evaluación 1** del Diplomado Fullstack IPSS (Opción B).

Es un mini-catálogo de libros hecho con HTML, CSS, Bootstrap y JavaScript.  
La idea es que un visitante pueda mirar libros, ver su detalle y pedir una recomendación.

Repositorio: [javierfigueroaaaby/proyecto-libros](https://github.com/javierfigueroaaaby/proyecto-libros)

---

## ¿Para qué sirve este proyecto?

Para practicar lo básico del front-end:

- armar páginas con HTML
- darle estilo con CSS y Bootstrap
- agregar funciones con JavaScript
- trabajar en equipo con GitHub (ramas y Pull Requests)

También pensamos en la **experiencia del cliente**: que sea fácil buscar un libro, ver su información y contactarnos.

---

## Cómo abrirlo

1. Abre la carpeta del proyecto.
2. Haz doble clic en `index.html`.
3. Se abre en el navegador.

No hay que instalar nada raro. Si usas Cursor o VS Code, también puedes abrirla con Live Server.

---

## Páginas del sitio

| Archivo | Qué hace |
|---------|----------|
| `index.html` | Página de inicio (hero, destacados, tips y preguntas frecuentes) |
| `listado.html` | Catálogo con buscador, filtro y vista rápida |
| `detalle.html` | Muestra un libro según el número de la URL |
| `contacto.html` | Formulario para escribirnos |

### Cómo funciona el detalle

Cuando entras a un libro, la URL cambia, por ejemplo:

- `detalle.html?id=1` → La piedra filosofal  
- `detalle.html?id=2` → La cámara secreta  
- `detalle.html?id=3` → El prisionero de Azkaban  

JavaScript lee ese `id` y cambia la imagen, el título, el precio y la sinopsis.

---

## Carpetas del proyecto

```text
proyecto-libros/
├── index.html
├── listado.html
├── detalle.html
├── contacto.html
├── css/
│   └── custom.css     ← nuestros estilos
├── js/
│   └── main.js        ← buscador, modo oscuro y detalle
├── img/               ← portadas de los libros
└── README.md          ← este archivo
```

---

## Qué se puede hacer en el sitio

- Navegar entre Inicio, Catálogo y Contacto
- Activar **modo oscuro** (se recuerda al recargar)
- Buscar libros por nombre o autor
- Filtrar por género
- Ver una vista rápida o el detalle completo
- Leer tips de lectura
- Ver preguntas frecuentes orientadas al cliente
- Enviar un mensaje por el formulario de contacto

### Nota del formulario

El formulario de contacto se mantiene con fondo blanco (`bg-white`)  
para que los labels y lo que se escribe se vean en negro, también en modo oscuro.

---

## Tecnologías que usamos

- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript
- Git y GitHub

---

## Cómo trabajamos en equipo

1. Bajamos lo último de `main`
2. Creamos una rama para nuestros cambios
3. Hacemos commit y push
4. Creamos un Pull Request
5. El compañero revisa y aprueba (Merge)

Ejemplo:

```bash
git checkout main
git pull origin main
git checkout -b revision-y-detalles
```

---

## Integrantes

- Bill Camelo
- Javier Figueroa Aaby
- Sebastián Salazar Díaz

Diplomado Fullstack IPSS · Módulo 1
