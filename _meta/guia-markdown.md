# Guía de Markdown para jmbravo.com

Referencia rápida de sintaxis y patrones del sitio. Todo lo de aquí funciona tanto en Hugo como en la vista previa de Obsidian, salvo los shortcodes (marcados con ⚙️), que son exclusivos de Hugo.

---

## Frontmatter básico

```yaml
---
title: "Título del artículo"
date: "2024-03-15"
categories:
  - "articulos"
tags:
  - "escritura"
  - "lenguaje"
---
```

Parámetros opcionales disponibles:

| Parámetro   | Efecto                                              |
|-------------|-----------------------------------------------------|
| `no_pager: true` | Oculta metadatos (fecha, tiempo de lectura) y navegación anterior/siguiente. Útil en páginas estáticas como Contacto o Sobre mí. |

---

## Estructura de un artículo

Los artículos viven en `content/posts/nombre-del-articulo/index.md`.  
El nombre de la carpeta define la URL — no cambiar una vez publicado.

---

## Énfasis y formato

```markdown
*cursiva* o _cursiva_
**negrita** o __negrita__
***negrita y cursiva***
~~tachado~~
```

---

## Encabezados

```markdown
## Sección principal
### Subsección
#### Apartado menor
```

El `# H1` lo pone la plantilla con el título del frontmatter — no repetirlo en el cuerpo.

---

## Párrafos y saltos de línea

Un párrafo es un bloque de texto separado por una línea en blanco.  
Para un salto de línea dentro del mismo párrafo: dos espacios al final de la línea, o `\` al final.

---

## Enlaces

```markdown
[texto del enlace](https://ejemplo.com)

[enlace con título](https://ejemplo.com "Texto del título al pasar el ratón")

[enlace interno a otro artículo](/posts/nombre-del-articulo/)
```

---

## Imágenes

Las imágenes van dentro de la carpeta del artículo (page bundle):

```
content/posts/mi-articulo/
  index.md
  imagen.jpg
```

Para incluirla en el texto:

```markdown
![Texto alternativo](imagen.jpg)
```

---

## Listas

**No ordenada:**

```markdown
- Primer elemento
- Segundo elemento
  - Subelemento (sangría de dos espacios)
```

**Ordenada:**

```markdown
1. Primer paso
2. Segundo paso
3. Tercer paso
```

---

## Citas

```markdown
> Esto es una cita en bloque.
> Puede ocupar varias líneas.

> «También funciona con texto entrecomillado».
> — Nombre del autor
```

---

## Código

Código en línea: `` `función()` ``

Bloque de código con resaltado de sintaxis:

````markdown
```python
def saludo(nombre):
    return f"Hola, {nombre}"
```
````

Lenguajes habituales: `python`, `javascript`, `html`, `css`, `bash`, `markdown`.

---

## Notas al pie

```markdown
Texto con nota al pie.[^1]

Otra nota más adelante.[^nombre-descriptivo]

[^1]: Contenido de la primera nota.
[^nombre-descriptivo]: Contenido de esta otra nota.
```

Las notas se definen al final del archivo pero Hugo las renderiza agrupadas al pie del artículo.

---

## Línea horizontal

```markdown
---
```

(Separada del texto anterior y siguiente por una línea en blanco.)

---

## Tablas

```markdown
| Columna A | Columna B | Columna C |
|-----------|-----------|-----------|
| Celda     | Celda     | Celda     |
| Celda     | Celda     | Celda     |
```

Alineación opcional:

```markdown
| Izquierda | Centro  | Derecha |
|:----------|:-------:|--------:|
| texto     | texto   | texto   |
```

---

## ⚙️ Shortcode: nota destacada

Genera un párrafo con estilo visual diferenciado (clase CSS `nota`):

```
{{</* nota */>}}
Este texto aparecerá resaltado visualmente en el artículo.
Admite **negrita**, _cursiva_ y [enlaces](https://ejemplo.com).
{{</* /nota */>}}
```

---

## ⚙️ Shortcode: figura con pie de foto

Hugo incluye este shortcode de serie:

```
{{</* figure src="imagen.jpg" alt="Descripción" caption="Pie de foto" */>}}
```

---

## Caracteres especiales y tipografía

Hugo convierte automáticamente:

| Escribes | Resultado |
|----------|-----------|
| `"texto"` | "texto" (comillas tipográficas) |
| `'texto'` | 'texto' |
| `--`     | — (guión largo, em dash) |
| `...`    | … (puntos suspensivos) |

Para forzar un carácter literal sin conversión, escaparlo con `\`: `\*`, `\[`, etc.

---

## Lo que no funciona en Obsidian (solo Hugo)

- Shortcodes (`{{</* nota */>}}`, `{{</* figure */>}}`): Obsidian los muestra como texto plano. Son funcionales al publicar.
- Las notas al pie sí se renderizan en Obsidian, aunque con estilo diferente.
