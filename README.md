# jmbravo.com

Sitio estático de José María Bravo Lineros (escritor de fantasía histórica, terror y novela negra), construido con [Hugo](https://gohugo.io/) y desplegado en GitHub Pages. El sistema visual del sitio se llama internamente «Codex Ferox».

## estructura

- `content/` — contenido del sitio, organizado por secciones:
  - `blog/` — artículos del blog.
  - `libros/` — una página por libro publicado.
  - `obra/` — relatos y piezas breves, repartidos en `breve/`, `larga/` y `esquirlas/` según extensión.
  - `descargas/` — PDFs descargables (fanzines, material adicional de proyectos).
  - `proyectos/` — hubs de proyectos en curso (ficha, progreso, actualizaciones, descargas asociadas); sección todavía en desarrollo, por eso está fuera del menú y de `.gitignore`.
  - `galerias/` — galerías de imágenes.
  - páginas fijas: `sobre-mi/`, `contacto/`, `aviso-legal/`, `privacidad/`, `sobre-esta-pagina/`.
- `layouts/` — plantillas de Hugo: una `single`/`list` por tipo de contenido, partials compartidos en `layouts/partials/`, shortcodes propios en `layouts/shortcodes/`, y los render hooks de Markdown en `layouts/_default/_markup/`.
- `assets/css/style.css` — la hoja de estilos del sitio, organizada en capas nativas de CSS (`@layer reset, base, layout, components, pages`; las capas posteriores ganan siempre, más allá de la especificidad del selector).
- `static/` — ficheros que Hugo copia tal cual a `public/`: fuentes autoalojadas, PDFs descargables, favicon, y `CNAME` (dominio personalizado; es el único `CNAME` del repositorio que cuenta, ya que es el que termina en `public/`).
- `_meta/` — vault de Obsidian del autor (agenda, borradores, plantillas de frontmatter) y la guía de convenciones técnicas del proyecto (`_meta/Guías y contexto/CLAUDE.md`); no es contenido publicado del sitio.
- `.github/workflows/hugo.yml` — construye el sitio (`hugo --gc --minify`), indexa la búsqueda con Pagefind y lo despliega en GitHub Pages en cada push a `main`.
- `.github/workflows/newsletter.yml` — genera un borrador en Buttondown por cada entrada de `content/blog/` con `newsletter: true` en el frontmatter que aún no tenga envío asociado.

## desarrollo local

```
hugo server
```

(o el lanzador `hugo-server` de `.claude/launch.json`, que sirve el sitio con borradores incluidos en `http://localhost:1317`).

## convenciones y contexto del proyecto

Las lecciones aprendidas de plantillas, la convención de descargas, el flujo de publicación y el estado de trabajo en curso están documentados en `_meta/Guías y contexto/CLAUDE.md`.
