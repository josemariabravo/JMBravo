# jmbravo.com — contexto del proyecto

sitio estático de José María Bravo (autor de fantasía/terror), migrado de wordpress a hugo + github pages. este archivo resume el estado y las convenciones para que claude code no tenga que redescubrirlas.

## estructura

- `content/posts/` — artículos (sección técnica `posts`, título visible «Artículos» vía `content/posts/_index.md`). nombre de carpeta en minúsculas, sin tildes — define la url, no cambiar sin razón de peso.
- `content/novedades/` — notas breves de actualización del sitio.
- `content/libros/` — sección con una subpágina por libro (`sombras-y-ceniza`, `runas-de-sangre`, `ratas-en-el-callejon`, `homini-lupus`, `dead-wrong`), cada una con frontmatter `cover: "images/archivo.jpg"` apuntando a una imagen dentro de su propia carpeta (page bundle).
- `content/sobre-mi/`, `content/contacto/` — páginas fijas.
- archivos `*.antiguo` dentro de `content/` — versiones previas neutralizadas (no se borraron por no tener herramienta de borrado en el momento; se pueden eliminar sin problema).
- el vault de Obsidian vive en la raíz del proyecto (no solo en `content/`), por decisión del usuario — ver más abajo la consecuencia en `.gitignore`.

## convenciones de plantilla (lecciones ya aprendidas, no repetir los mismos fallos)

1. **cubiertas y cualquier imagen dentro de un page bundle**: usar `.Resources.GetMatch ($page.Params.cover | default "")` + `.RelPermalink`. **nunca** `.Params.cover | relURL` — relURL no sabe en qué carpeta vive la página, generaría una ruta desde la raíz del sitio.
2. **enlaces a la home**: usar `.Site.Home.RelPermalink`. **nunca** `{{ "/" | relURL }}` — con baseURL con subcarpeta (como `josemariabravo.github.io/JMBravo/` antes de conectar el dominio), Hugo ignora la subcarpeta y genera un 404. confirmado en la documentación oficial de Hugo (urls.AbsURL).
3. **dentro de un `{{ range }}`**, capturar la página en una variable antes de cualquier `{{ with }}` anidado: `{{ $book := . }}` y usar `$book.Title`, no `$.Title` (que apunta a la página raíz desde la que se llamó al rango/partial, no al elemento actual) ni `.Title` dentro de un `with` (que cambia el contexto al valor del with).
4. fechas en español: usar el partial `layouts/partials/fecha.html`, no `.Date.Format` con nombres de mes en inglés (hugo no traduce los nombres de mes por defecto pese a `defaultContentLanguage = "es"`).
5. sin Google Fonts ni ningún embed que dependa de un tercero salvo que José lo apruebe explícitamente — el sitio es deliberadamente cero-cookies, cero-tracking; ya se sustituyó un widget de Goodreads por un enlace plano por esta misma razón.

## flujo de publicación

publicación manual vía GitHub Desktop (commit + push) — se descartó el plugin Git de Obsidian por preferencia explícita del usuario (quiere revisar el diff antes de confirmar). github actions (`.github/workflows/hugo.yml`) construye y despliega solo.

## pendientes conocidos

- revisión a fondo de la plantilla visual: algo más vistosa que la actual (inspiración zen habits, con algún detalle gráfico, sin pasarse de sobria).
- sugerencias de artículos nuevos a partir de los 32 ya publicados.
- remozar el contenido/promoción de las páginas de libros.
- conectar buttondown (boletín por rss) — pendiente desde el principio del proyecto.
- recibido un boceto de chatgpt para modularizar `layouts/index.html` en partials (`hero`, `books`, `projects`, `news`, `articles`, `downloads`). tiene un bug real (usa `{{ $.Title }}` en vez de capturar la página del `range` — el mismo fallo del punto 3 de arriba) y referencia dos secciones que no existen todavía (`proyectos`, `descargas`); no aplicar tal cual, evaluar y corregir antes de usar como base. sí aprovechable como punto de partida: la idea de partials y una posible sección «proyecto actual» para el avance de las novelas.
