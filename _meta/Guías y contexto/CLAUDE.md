# jmbravo.com — contexto del proyecto

sitio estático de José María Bravo (autor de fantasía/terror), migrado de wordpress a hugo + github pages. este archivo resume el estado y las convenciones para que claude code no tenga que redescubrirlas.

## estructura

- `content/blog/` — artículos (sección técnica `blog`, título visible «Blog» vía `content/blog/_index.md`). nombre de carpeta en minúsculas, sin tildes — define la url, no cambiar sin razón de peso. renombrada desde `content/posts/` (2026-07-09): cada entrada conserva su alias antiguo `/posts/<slug>/` en el frontmatter (redirect vía Hugo), y `content/blog/_index.md` tiene `aliases: ["/posts/"]` para que la sección en sí también redirija. si se vuelve a mover la sección, seguir el mismo patrón.
- `content/libros/` — sección con una subpágina por libro (`sombras-y-ceniza`, `runas-de-sangre`, `ratas-en-el-callejon`, `homini-lupus`, `dead-wrong`), cada una con frontmatter `cover: "images/archivo.jpg"` apuntando a una imagen dentro de su propia carpeta (page bundle).
- `content/obra/` — relatos y piezas breves, en `breve/`, `larga/` y `esquirlas/` según extensión (sustituyó a un esquema anterior con `cuentos`/`novelas`/`pecios`, ya migrado del todo). **Muchas carpetas de `content/obra/*/` están vacías a propósito**: son reservas para relatos ya titulados que el usuario todavía no ha escrito, no restos de la reorganización — no borrarlas sin confirmar con él primero (confirmado explícitamente 2026-07-12, después de encontrar y descartar por error un grupo de ellas).
- `content/sobre-mi/`, `content/contacto/` — páginas fijas.
- `content/proyectos/<slug>/` — hub de un proyecto en curso (novela, worldbuilding...): ficha + progreso (`fases`, configurables por proyecto) + últimas actualizaciones + descargas asociadas, agregado vía `layouts/proyectos/list.html` sin duplicar contenido. Subcarpeta `actualizaciones/` con `type: actualizaciones` + `cascade` (ver convención 6 más abajo) para la bitácora del proyecto, plantillas en `layouts/actualizaciones/`. Las descargas de un proyecto no viven ahí: son entradas normales de `content/descargas/` con `proyecto: <slug>` en el frontmatter, filtradas por `where` en el hub. sección deliberadamente fuera del menú (`hugo.toml`) y de `.gitignore` (`content/proyectos/`) hasta que tenga contenido real — no la actives ni la quites del `.gitignore` sin que él lo pida.
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

## boletín (buttondown)

buttondown movió el RSS-to-email nativo a un plan de pago (abril 2026); la API sigue disponible en el plan gratuito, así que el boletín se genera vía github actions en vez de la automatización nativa.

- entradas de `content/blog/` con `newsletter: true` en el frontmatter generan un borrador en buttondown; las que no lleven ese campo (la mayoría, incluidas todas las migradas de wordpress) no generan nada.
- workflow: `.github/workflows/newsletter.yml`, dispara en cada push a `main` que toque `content/blog/**/index.md`. script: `.github/scripts/newsletter.mjs`.
- el `canonical_url` que genera el script sigue usando `/posts/<slug>/` a propósito, aunque la sección ahora es `/blog/` — cambiarlo duplicaría el borrador de cada entrada ya enviada, porque la idempotencia se comprueba por url exacta. `/posts/<slug>/` sigue funcionando (redirige a `/blog/<slug>/` vía alias).
- el script no envía nada — crea el email con `status: "draft"`. el envío final es manual, desde el panel de buttondown, a propósito (revisión antes de mandar).
- idempotencia: usa el campo `canonical_url` del email (la url de la propia entrada) para no duplicar el borrador si editas el post y vuelves a hacer push. no hace falta marcar nada a mano ni el script escribe de vuelta en el repo.
- cuerpo del correo: `description` del frontmatter si existe, si no un resumen automático del texto, más un enlace «leer el artículo completo» — no el artículo íntegro (evita el problema de rutas de imagen relativas dentro del email).
- pendiente de un paso manual del usuario, no automatizable desde aquí: crear un api key en buttondown y guardarlo como secreto del repo `BUTTONDOWN_API_KEY` (*settings → secrets and variables → actions*).

## pendientes conocidos

- revisión a fondo de la plantilla visual: algo más vistosa que la actual (inspiración zen habits, con algún detalle gráfico, sin pasarse de sobria).
- sugerencias de artículos nuevos a partir de los ya publicados.
- remozar el contenido/promoción de las páginas de libros — el usuario ha dicho explícitamente que esto lo revisa él cuando le toque, incluida la decisión de si/cómo usar el shortcode `elogio` (reseñas/citas de prensa, ya construido y listo en `layouts/shortcodes/elogio.html` + `_meta/plantillas/libro.md`, pero sin usar en ningún libro todavía) y de unificar el mecanismo de "muestra de libro" (hoy conviven dos: el campo `muestra:` y un iframe de Kindle embebido a mano según el libro). no tocar por iniciativa propia.
- recibido un boceto de chatgpt para modularizar `layouts/index.html` en partials (`hero`, `books`, `projects`, `news`, `articles`, `downloads`). tiene un bug real (usa `{{ $.Title }}` en vez de capturar la página del `range` — el mismo fallo del punto 3 de arriba); no aplicar tal cual, evaluar y corregir antes de usar como base. la sección «proyectos» ya existe (ver arriba), así que solo queda aprovechable la idea de partials para la home.
- CSS de `/proyectos/` (`.actualizacion-titulo`, `.proyecto-ficha-info` sin protección de overflow) y CSS específico de `/libros/` (sistema de textura de portada `mood.textura`/`mood.acento` construido pero sin usar en ningún libro, botón/input/sombra reimplementados 2-3 veces con valores ligeramente distintos, naming dividido entre raíz inglesa `book-*` y española `libro-*`, convención de modificador inconsistente entre BEM `--modificador` y `is-*`) — aparcado a propósito hasta que el usuario meta contenido real en proyectos y revise la sección libros, respectivamente.
