# Plantilla de libro enriquecida — ficha para Claude Code

> Nota: he intentado revisar `layouts/` y las variables CSS reales de Codex antes de escribir esto, pero ahora mismo no tengo acceso al conector de archivos (probablemente porque Claude Code está abierto). Lo de abajo está basado en lo que ya sabemos del sitio (sección `libros/`, page bundles, tipografía Cinzel, negro humo `#1F1F1F`, rojo-naranja `#D62A1C`) pero **antes de tocar nada, pide a Claude Code que confirme los nombres reales de archivos, partials y variables CSS** y ajuste lo que no case.

---

## 1. Lo general: arquitectura

**Principio:** una sola plantilla de libro, parametrizada por libro mediante front matter. Nada de HTML/CSS distinto por título — lo que cambia entre libros son datos, no código.

### 1.1. Archivos a tocar/crear

```
layouts/
  libros/
    single.html              ← plantilla única de ficha de libro (ya existe; se reescribe)
  partials/
    libro/
      hero.html               ← portada + título + subtítulo + compra
      sinopsis.html           ← cuerpo + cita destacada de apertura
      muestra.html            ← CTA de descarga/lectura de fragmento
      galeria.html            ← grid de imágenes con lightbox simple
      elogios.html            ← reseñas citadas (Amazon, Goodreads, blogs)
      navegacion-serie.html   ← anterior/siguiente dentro de una serie o el catálogo
assets/
  css/
    libro.css                 ← reglas específicas de la ficha (se añade al CSS de Codex, no lo sustituye)
```

### 1.2. Esquema de front matter

```yaml
---
title: "Dead wrong"
subtitulo: "Novela ultracorta a caballo entre el género negro, la fantasía oscura y el horror."
fecha: "2024-11-15"
portada: "cubierta.jpg"

# "atmósfera" del libro: esto es lo que da variedad sin duplicar plantillas
mood:
  acento: "#7A1F2B"        # color de acento; sobrescribe la variable CSS solo en esta página
  textura: "concreto"       # una de un set cerrado: ninguna | concreto | ceniza | pergamino | óxido

compra:
  - tienda: "Amazon"
    url: "https://www.amazon.es/dp/B0DNSL2XCQ/"

muestra:
  url: "https://leer.amazon.es/sample/B0DNSL2XCQ"
  etiqueta: "Lee un fragmento"

galeria:
  - imagen: "boceto-cubierta.jpg"
    pie: "Primer boceto de cubierta"
  - imagen: "cubierta-fisica.jpg"
    pie: "Edición en tapa dura"

elogios:
  - cita: "Una nouvelle breve, intensa, que no suelta hasta el final."
    fuente: "Reseña en Amazon"
    url: "https://www.amazon.es/..."
  - cita: "..."
    fuente: "Goodreads"
    url: "..."

serie: ""   # ej. "Cuentos escabrosos" o "Daramad Mur Asyb", para enlazar entre libros de la misma serie
---
```

Todos los bloques son opcionales salvo `title` y `portada`: un libro sin reseñas todavía simplemente no renderiza `elogios.html`. Eso permite ir completando fichas poco a poco sin dejar huecos visibles.

### 1.3. Mecanismo del «mood» (esto es la clave de todo)

En vez de una hoja de estilos por libro, el wrapper de la página aplica el acento como variable CSS inline:

```html
<article class="libro libro--{{ .Params.mood.textura | default "ninguna" }}"
         style="--acento-libro: {{ .Params.mood.acento | default "var(--color-acento)" }};">
```

Y en `libro.css`, todo lo que hoy usa el rojo-naranja de Codex en esta página pasa a usar `var(--acento-libro)`. Así cada libro «se siente» distinto (color, textura de fondo) sin que exista una sola línea de CSS exclusiva para él. Las texturas (`concreto`, `ceniza`, `pergamino`, `óxido`) son 3-4 fondos reutilizables que se preparan una vez y se asignan por libro, no se generan por libro.

### 1.4. Sobre los «comentarios»

Como aclaraste, son reseñas ya recibidas (Amazon, Goodreads, blogs), no un sistema de comentarios en vivo —bien, porque GitHub Pages es estático y montar eso sería una pieza aparte. Lo único a vigilar: cuando cites una reseña, una frase corta y el enlace a la fuente es lo correcto; reproducir la reseña entera no lo es. El bloque `elogios` de arriba ya está pensado así: cita breve + fuente + enlace, nunca el texto completo.

---

## 2. Lo particular: aplicado a *Dead wrong*

Lo uso de ejemplo porque ya lo tenemos delante y, de paso, corrige el enlace roto que vimos:

```yaml
---
title: "Dead wrong"
subtitulo: "Novela ultracorta a caballo entre el género negro, la fantasía oscura y el horror."
portada: "Dead-wrong_cubierta_v1.jpg"

mood:
  acento: ""        # pendiente: tú decides el tono — ¿rojo más apagado/sucio que el de Codex?
  textura: ""        # pendiente: ¿concreto/urbano, dado el registro negro de la novela?

compra:
  - tienda: "Amazon"
    url: "https://www.amazon.es/dp/B0DNSL2XCQ/"

muestra:
  url: "https://leer.amazon.es/sample/B0DNSL2XCQ?clientId=share"
  etiqueta: "Lee una muestra"

galeria: []   # pendiente: ¿tienes bocetos de cubierta o fotos de la edición física de este título?

elogios: []   # pendiente: aquí van las citas de Amazon/Goodreads que ya tengas recopiladas

serie: ""
---
```

**El bug que arreglamos de paso:** el enlace actual de la página es

```
[Aquí puedes leer una muestra del libro](https://josemariabravo.github.io/JMBravo/libros/dead-wrong/[https:/www.amazon.es/dp/B0DNSL2XCQ/](https:/leer.amazon.es/sample/B086821JM7?clientId=share))
```

— un enlace markdown pegado dentro de otro por error, y además apunta a la muestra de *Runas de sangre* (`B086821JM7`), no a la de *Dead wrong* (`B0DNSL2XCQ`). Con el campo `muestra.url` del front matter esto desaparece del cuerpo del texto y se resuelve solo una vez, en la plantilla.

**Lo que falta para terminar esta ficha en concreto** (cosas que solo tú puedes decidir/aportar):
1. Color de acento y textura para *Dead wrong*.
2. Si hay material gráfico de proceso (bocetos, fotos de la edición física) para la galería.
3. Las reseñas que quieras destacar, con su fuente.

---

## 3. Cómo seguir con Claude Code

Sugerencia de orden de trabajo, para no liarlo en una sola sesión larga:

1. Pide a Claude Code que lea `layouts/libros/single.html` y `assets/css/*.css` actuales, y que te confirme los nombres reales de variables/clases antes de escribir nada (lo de arriba es la intención, no el código final).
2. Que implemente primero el mecanismo del `mood` (acento + textura) sobre la plantilla actual, sin tocar nada más — así ves el efecto con un solo cambio antes de añadir bloques nuevos.
3. Después, los partials nuevos uno a uno: `muestra.html` (el más urgente, por el bug), luego `galeria.html`, luego `elogios.html`.
4. Por último, rellena el front matter de *Dead wrong* con lo pendiente del punto 2 y úsalo como caso de prueba antes de extenderlo al resto del catálogo.
