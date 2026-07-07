---
title: "Libro de ejemplo"
date: "{{date:YYYY-MM-DD}}"
cover: "images/portada.jpg"
subtitle: "Lorem ipsum, subtítulo de ejemplo"
resumen: "Lorem ipsum dolor sit amet, resumen corto de una frase para la cabecera y las tarjetas de la sección Libros."
genero: ""
paginas: ""
editorial: ""
amazon_url: "https://www.amazon.es/dp/XXXXXXXXXX/"

# alternativa a amazon_url si se vende en más de una tienda — si se define
# `compra`, tiene prioridad sobre amazon_url (que entonces se ignora)
# compra:
#   - tienda: "Amazon"
#     url: "https://www.amazon.es/dp/XXXXXXXXXX/"
#   - tienda: "Casa del libro"
#     url: "https://..."

muestra:
  url: "https://leer.amazon.es/sample/XXXXXXXXXX?clientId=share"
  etiqueta: "Lee una muestra"

# opcionales — sin definir, el libro usa el rojo-naranja estándar del sitio.
# textura es un set cerrado: concreto | ceniza | pergamino | oxido
mood:
  acento: ""
  textura: ""

# solo si el libro pertenece a una colección — activa la navegación anterior/
# siguiente entre libros con la misma serie (ver p.ej. Cuentos escabrosos)
serie: ""
---
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> Fuente de la cita

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

*Libro de ejemplo* está disponible en [Amazon](https://www.amazon.es/dp/XXXXXXXXXX/), en formato digital y físico.

<!-- Galería opcional: solo si hay imágenes de proceso/edición física en este
     page bundle, además de la portada. Para que la portada no aparezca
     duplicada en la galería automática, márcala en el propio recurso:
     resources:
       - src: "images/portada.jpg"
         params:
           no_galeria: true -->
{{< galeria >}}

## Reseñas

{{% elogio fuente="Nombre de la fuente" url="https://..." %}}
Lorem ipsum dolor sit amet, cita corta de una reseña real. Nunca la reseña entera.
{{% /elogio %}}

{{% elogio fuente="Otra fuente" %}}
Lorem ipsum dolor sit amet, segunda cita de ejemplo, esta vez sin enlace.
{{% /elogio %}}
