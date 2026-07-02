# jmbravo.com — contexto del proyecto

sitio estático de José María Bravo (autor de fantasía/terror), migrado de wordpress a hugo + github pages. este archivo resume el estado y las convenciones para que claude code no tenga que redescubrirlas.

## estructura

- `content/posts/` — artículos (sección técnica `posts`, título visible «Artículos» vía `content/posts/_index.md`). nombre de carpeta en minúsculas, sin tildes — define la url, no cambiar sin razón de peso.
- `content/novedades/` — notas breves de actualización del sitio.
- `content/libros/` — sección con una subpágina por libro (`sombras-y-ceniza`, `runas-de-sangre`, `ratas-en-el-callejon`, `homini-lupus`, `dead-wrong`), cada una con frontmatter `cover: "images/archivo.jpg"` apuntando a una imagen dentro de su propia carpeta (page bundle).
- `content/sobre-mi/`, `content/contacto/` — páginas fijas.
- `content/proyectos/<slug>/` — hub de un proyecto en curso (novela, worldbuilding...): ficha + progreso (`fases`, configurables por proyecto) + últimas actualizaciones + descargas asociadas, agregado vía `layouts/proyectos/list.html` sin duplicar contenido. Subcarpeta `actualizaciones/` con `type: actualizaciones` + `cascade` (ver convención 6 más abajo) para la bitácora del proyecto, plantillas en `layouts/actualizaciones/`. Las descargas de un proyecto no viven ahí: son entradas normales de `content/descargas/` con `proyecto: <slug>` en el frontmatter, filtradas por `where` en el hub.
- archivos `*.antiguo` dentro de `content/` — versiones previas neutralizadas (no se borraron por no tener herramienta de borrado en el momento; se pueden eliminar sin problema).
- el vault de Obsidian vive en la raíz del proyecto (no solo en `content/`), por decisión del usuario — ver más abajo la consecuencia en `.gitignore`.

## convenciones de plantilla (lecciones ya aprendidas, no repetir los mismos fallos)

1. **cubiertas y cualquier imagen dentro de un page bundle**: usar `.Resources.GetMatch ($page.Params.cover | default "")` + `.RelPermalink`. **nunca** `.Params.cover | relURL` — relURL no sabe en qué carpeta vive la página, generaría una ruta desde la raíz del sitio.
2. **enlaces a la home**: usar `.Site.Home.RelPermalink`. **nunca** `{{ "/" | relURL }}` — con baseURL con subcarpeta (como `josemariabravo.github.io/JMBravo/` antes de conectar el dominio), Hugo ignora la subcarpeta y genera un 404. confirmado en la documentación oficial de Hugo (urls.AbsURL).
3. **dentro de un `{{ range }}`**, capturar la página en una variable antes de cualquier `{{ with }}` anidado: `{{ $book := . }}` y usar `$book.Title`, no `$.Title` (que apunta a la página raíz desde la que se llamó al rango/partial, no al elemento actual) ni `.Title` dentro de un `with` (que cambia el contexto al valor del with).
4. fechas en español: usar el partial `layouts/partials/fecha.html`, no `.Date.Format` con nombres de mes en inglés (hugo no traduce los nombres de mes por defecto pese a `defaultContentLanguage = "es"`).
5. sin Google Fonts ni ningún embed que dependa de un tercero salvo que José lo apruebe explícitamente — el sitio es deliberadamente cero-cookies, cero-tracking; ya se sustituyó un widget de Goodreads por un enlace plano por esta misma razón.
6. **una subsección con plantilla propia dentro de otra sección** (p.ej. `actualizaciones/` dentro de `proyectos/<slug>/`) necesita `type: <lo-que-sea>` explícito en su `_index.md` — Hugo NO usa el nombre de la subcarpeta para elegir plantilla, solo `.Type` (que por defecto hereda el de la sección raíz, aquí "proyectos"). Para que las páginas hijas también usen `layouts/<type>/single.html` sin tener que poner `type:` a mano en cada una, añadir `cascade: { type: <lo-que-sea> }` en el `_index.md` de la subcarpeta. Confirmado con debug directo (`{{ .Type }}` impreso en plantilla): sin cascade, las hijas se quedan con el type de la sección raíz y caen en la plantilla equivocada silenciosamente (sin error de build).
7. **Fast Render Mode** del servidor de desarrollo (`hugo server`) no siempre recalcula listados agregados (`where .Site.RegularPages ...`, `.GetPage`) tras crear un archivo nuevo en otra sección — para verificar cambios que crucen secciones (p.ej. el hub de un proyecto listando descargas de `content/descargas/`), reiniciar el servidor o usar `--disableFastRender`.

## descargas

los PDFs descargables siguen esta convención:

- el fichero va en `static/files/nombre-del-archivo.pdf` — aquí vivirán **todos** los PDFs del sitio.
- cada descarga tiene su propia carpeta en `content/descargas/nombre-descarga/` con un único `index.md` (leaf bundle, **sin** `_index.md` — tenerlos dos en la misma carpeta rompe Hugo).
- el frontmatter del `index.md` usa el campo `archivo: files/nombre-del-archivo.pdf`; el template aplica `| relURL` para construir la ruta final.
- campo opcional `tipo` para la etiqueta visible (p.ej. «Relato gratuito», «Publicación»).

ejemplo mínimo:
```yaml
---
title: "Sangre y acero, n.º 1"
date: 2026-06-30
tipo: Publicación
archivo: files/Sangre y Acero_1.pdf
description: "..."
---
Texto descriptivo de la descarga.
```

## flujo de publicación

publicación manual vía GitHub Desktop (commit + push) — se descartó el plugin Git de Obsidian por preferencia explícita del usuario (quiere revisar el diff antes de confirmar). github actions (`.github/workflows/hugo.yml`) construye y despliega solo.

## pendientes conocidos

- revisión a fondo de la plantilla visual: algo más vistosa que la actual (inspiración zen habits, con algún detalle gráfico, sin pasarse de sobria).
- sugerencias de artículos nuevos a partir de los 32 ya publicados.
- remozar el contenido/promoción de las páginas de libros.
- conectar buttondown (boletín por rss) — pendiente desde el principio del proyecto.
- recibido un boceto de chatgpt para modularizar `layouts/index.html` en partials (`hero`, `books`, `projects`, `news`, `articles`, `downloads`). tiene un bug real (usa `{{ $.Title }}` en vez de capturar la página del `range` — el mismo fallo del punto 3 de arriba); no aplicar tal cual, evaluar y corregir antes de usar como base. la sección «proyectos» ya existe (ver arriba), así que solo queda aprovechable la idea de partials para la home.
- `content/obra/` en plena reorganización por el usuario (carpetas `breve`, `larga`, `esquirlas`... sustituyendo a `cuentos`/`novelas`/`pecios`), con restos sueltos a medio mover (`breve - copia`, `esquirlasa`) — no tocar layouts/obra ni asumir nombres de sección hasta que confirme que ha terminado.
- pendiente crear plantilla en `_meta/plantillas/obra.md` cuando esa sección se estabilice (frontmatter ya conocido: `palabras`, `sinopsis`, `nota`, ver `layouts/obra/single.html`).
