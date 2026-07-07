# Plantilla de libro enriquecida — estado real (implementado)

> Actualizado tras la implementación con Claude Code. La versión anterior de este documento era una propuesta previa a revisar el código; algunas cosas se ajustaron al confirmar los nombres reales. Ver `_meta/plantillas/libro.md` para un ejemplo completo listo para copiar.

---

## 1. Arquitectura real

**Principio:** una sola plantilla de libro, parametrizada por libro mediante front matter. Nada de HTML/CSS distinto por título — lo que cambia entre libros son datos, no código. Esto se mantiene tal cual se planteó.

### 1.1. Archivos reales

```
layouts/
  libros/
    single.html              ← plantilla única de ficha de libro
  partials/
    libro/
      hero.html               ← portada + título + subtítulo + resumen + meta + compra
      muestra.html            ← CTA de fragmento/muestra
      navegacion-serie.html   ← anterior/siguiente dentro de una serie
  shortcodes/
    elogio.html               ← una reseña citada (usado en el cuerpo, no en un partial)
static/
  css/
    style.css                 ← todo el CSS del sitio vive aquí, en @layer pages
                                 (no existe assets/css/ ni un archivo separado por sección)
```

Diferencias respecto a la propuesta original:
- **No hay `assets/css/libro.css`**: el sitio no usa Hugo Pipes para CSS; todo vive en `static/css/style.css`, organizado en `@layer reset, base, layout, components, pages`. Las reglas nuevas se añadieron dentro de `@layer pages`, junto al bloque «libro individual» ya existente.
- **No hay `partials/libro/galeria.html`**: ya existía un shortcode `{{< galeria >}}` (con lightbox) usado en otra sección del sitio (`content/galerias/`). Se reutiliza tal cual dentro del cuerpo Markdown del libro — crear un partial nuevo habría duplicado esa lógica.
- **No hay `partials/libro/sinopsis.html`**: el cuerpo (`.Content`) ya se renderizaba directamente y no aportaba nada envolverlo en un partial propio.
- **`elogios` es un shortcode, no un bloque de front matter** (ver §1.4): más cómodo de escribir y de escalar cuando hay muchas reseñas, y coherente con cómo el sitio ya citaba reseñas en prosa (`sombras-y-ceniza`).

### 1.2. Esquema de front matter real

```yaml
---
title: "Dead wrong"
subtitle: "Novela ultracorta a caballo entre el género negro, la fantasía oscura y el horror."
date: "2024-11-23"
cover: "images/cubierta.jpg"
resumen: "..."
genero: ""       # opcional, poco usado hasta ahora
paginas: ""      # opcional, poco usado hasta ahora
editorial: ""    # opcional, poco usado hasta ahora

amazon_url: "https://www.amazon.es/dp/XXXXXXXXXX/"
# o, si se vende en más de una tienda (tiene prioridad sobre amazon_url):
# compra:
#   - tienda: "Amazon"
#     url: "..."
#   - tienda: "Casa del libro"
#     url: "..."

muestra:
  url: "https://leer.amazon.es/sample/XXXXXXXXXX?clientId=share"
  etiqueta: "Lee una muestra"

mood:
  acento: "#7A1F2B"        # color de acento; sobrescribe el rojo-naranja estándar solo en esta página
  textura: "concreto"       # ninguna | concreto | ceniza | pergamino | oxido

serie: "Cuentos escabrosos" # solo si el libro pertenece a una colección
---
```

Notas sobre los nombres: es `subtitle` (no `subtitulo`, el campo ya existía en inglés antes de esta sesión) y `amazon_url` sigue siendo válido como forma corta para una sola tienda; `compra` es la alternativa para varias.

Todos los bloques son opcionales salvo `title` y `cover`. Un libro sin `mood` usa el rojo-naranja estándar del sitio (`--accent`); sin `muestra` no aparece el botón de fragmento; sin `serie` no aparece nav anterior/siguiente.

### 1.3. Mecanismo del «mood» (como se planteó, confirmado funcionando)

El wrapper de la página aplica el acento como variable CSS inline, y añade una clase de textura:

```html
<article class="book-detail{{ with .Params.mood.textura }} libro--{{ . }}{{ end }}"
         {{ with .Params.mood.acento }}style="--acento-libro: {{ . }};"{{ end }}>
```

`--acento-libro` cae en `var(--accent)` por defecto, así que un libro sin `mood` no cambia nada visualmente. Las 4 texturas (`concreto`, `ceniza`, `pergamino`, `oxido`) son **patrones CSS puros** (gradientes, sin imágenes de fondo que mantener) — decisión tomada durante la implementación porque no había assets de textura reales; si en algún momento se prefieren texturas con imagen real, habría que sustituir esas reglas `::before` por `background-image: url(...)`.

### 1.4. Sobre las reseñas — shortcode, no front matter

Las reseñas ya recibidas (Amazon, Goodreads, blogs) se citan con el shortcode `{{% elogio %}}`, directamente en el cuerpo del Markdown, bajo un `## Reseñas` que escribe el propio autor (igual que ya hacía `sombras-y-ceniza` antes de esta sesión):

```markdown
## Reseñas

{{% elogio fuente="Amazon" url="https://www.amazon.es/..." %}}
Una nouvelle breve, intensa, que no suelta hasta el final.
{{% /elogio %}}

{{% elogio fuente="Goodreads" %}}
Otra cita, esta sin enlace.
{{% /elogio %}}
```

`url` es opcional. El interior admite markdown real (negrita, cursiva, enlaces). Se descartó la idea original de una lista `elogios` en el front matter: con YAML, cada cita nueva implica cuidar indentación y escapar comillas/dos puntos, y no hay ninguna necesidad real de que las reseñas sean datos consultables fuera de la propia página — son contenido, no metadatos. Regla de siempre: cita breve + fuente + enlace, nunca la reseña entera.

### 1.5. Galería — ya existía, se reutiliza

No hace falta ningún partial ni campo de front matter nuevo. Si el libro tiene material gráfico (bocetos, fotos de la edición física), basta con:

1. Poner las imágenes dentro de la carpeta del libro (page bundle).
2. Si la portada no debe salir duplicada en la galería, excluirla marcándola en el front matter:
   ```yaml
   resources:
     - src: "images/cubierta.jpg"
       params:
         no_galeria: true
   ```
3. Añadir `{{< galeria >}}` en el cuerpo, donde se quiera que aparezca la rejilla con lightbox.

---

## 2. Aplicado a *Dead wrong* — estado real

Ya aplicado en `content/libros/dead-wrong/index.md`:

```yaml
muestra:
  url: https://leer.amazon.es/sample/B0DNSL2XCQ?clientId=share
  etiqueta: Lee una muestra
```

**El "bug del enlace roto" que mencionaba la versión anterior de este documento ya no existía** en esta ficha — no tenía ese enlace mal pegado; existía (y ya estaba corregido) en `content/posts/dead-wrong/index.md`, una página distinta. El campo `muestra` de arriba usa el enlace correcto (`B0DNSL2XCQ`), confirmado contra esa página ya corregida.

**Pendiente, sin inventar nada** (solo José puede decidirlo):
1. Color de acento y textura (`mood`) para *Dead wrong*. Sugerencia hablada en su momento: rojo apagado/sucio + textura `concreto`, dado el registro negro-urbano de la novela — probado visualmente durante la implementación y funciona bien, pero queda como sugerencia, no aplicado.
2. Material gráfico de proceso (bocetos, fotos de edición física) para la galería, si existe.
3. Reseñas reales que se quieran destacar, con su fuente.

## 3. Descubrimiento durante la implementación: una serie ya real

*Ratas en el callejón* y *Homini lupus* ya eran, de facto, la serie "Cuentos escabrosos" (1 y 2) — solo que expresado de forma informal en `subtitle`. Se les añadió `serie: "Cuentos escabrosos"` a ambos, así que la navegación anterior/siguiente entre ellos **ya está en producción**, no es solo un mecanismo teórico.

---

## 4. Cómo seguir

- **`_meta/plantillas/libro.md`** contiene ahora un ejemplo completo ("Libro de ejemplo", texto lorem ipsum) con todos los campos y los dos shortcodes en uso — cópialo y sustituye valores para una ficha nueva.
- Para libros existentes que aún no usan nada de esto (`sombras-y-ceniza`, `runas-de-sangre`), no hace falta tocarlos: todo es opcional y retrocompatible. Se pueden ir enriqueciendo uno a uno cuando haya contenido real (mood, galería, reseñas) para cada uno.
