# jmbravo.com — proyecto migrado de wordpress a hugo

este es el resultado de la conversión de `jmbravocom_WordPress_2026-06-25.xml`. está listo para subir a un repositorio de github tal cual, salvo por el tema de las imágenes (ver más abajo).

## qué contiene

- `content/posts/` — 105 entradas del blog, convertidas directamente desde wordpress. el texto es fiel al original.
- `content/_index.md` — la portada, a partir de la antigua página «bienvenido».
- `content/sobre-mi/`, `content/contacto/`, `content/libros/`, `content/sombras-y-ceniza/`, `content/politica-de-privacidad/` — páginas fijas.
- `content/asesoria-literaria/` — una página que estaba en estado de borrador en wordpress (nunca se publicó). la conservo con `draft: true`, así que hugo no la publica a menos que decidas quitarle esa marca.
- `layouts/` y `static/css/style.css` — la plantilla mínima de la que hablamos: tres plantillas y una hoja de estilos de partida, pensada para que la rehagas a tu gusto.
- `.github/workflows/hugo.yml` — el flujo de despliegue automático en github pages.
- `static/CNAME` — ya contiene `jmbravo.com`, para cuando conectes el dominio.

## qué falta — esto es lo importante

## imágenes — resueltas

de los 158 nombres de archivo referenciados en todo el contenido, **157 ya están colocados** en sus carpetas correspondientes. solo falta uno:

- `5297825558_07b2d51435.jpg`, en la reseña de *Capitán Blood*: en el original no era una imagen subida a tu wordpress, sino una incrustada directamente desde flickr (`flickr.com/photos/8908502@N08/...`). por eso no aparece en tu copia de `wp-content/uploads` — nunca estuvo ahí. si quieres conservarla, tendrás que volver a subirla a mano desde la página de flickr (si aún existe) o sustituirla por otra imagen.

el resto del proceso fue: localizar año/mes de cada archivo a partir de las urls originales conservadas en el contenido, y para los que no tenían url completa (la entrevista a zsofia dankova, por ejemplo), deducir la fecha a partir de la propia entrada y revisar la carpeta correspondiente directamente.

### dos adelantos en pdf

las páginas de portada y de «libros» enlazaban a un adelanto descargable mediante un plugin (download monitor). el xml no guarda la ruta real de esos archivos, solo el id interno, así que no he podido recuperar el enlace. dejé una nota entre paréntesis en el texto, donde estaba el enlace, para que lo sustituyas cuando localices el pdf original.

### páginas que venían del constructor visual (avia/enfold)

`sobre-mi`, `contacto`, `libros`, `bienvenido` (ahora portada) y `sombras-y-ceniza` estaban construidas con el editor visual del tema, que guarda el contenido como código de shortcodes en vez de texto plano. lo he limpiado automáticamente y revisado a mano; el texto que ves ya es legible y completo. los originales sin limpiar, por si quieres comprobar algo, están en `respaldo-shortcodes-originales/` (fuera de este proyecto, no se sube al repositorio).

dos detalles menores que arreglé sobre la marcha:
- en `contacto` y `sobre-mi` el correo de contacto y el enlace de linkedin solo existían como atributos internos del shortcode, no como texto visible, así que se habrían perdido en la limpieza automática; los he vuelto a añadir a mano.
- la frase de `contacto` que invitaba a usar «el siguiente formulario» ya no aplica (no hay backend de formularios en un sitio estático), así que la sustituí por el correo y el enlace directos.

### un detalle que ya estaba roto en el sitio original

en `sombras-y-ceniza/index.md` hay un widget de reseñas de goodreads cuyo código incluye `did=DEVELOPER_ID` literal, en vez de un id real. eso significa que ese widget probablemente nunca llegó a funcionar en la web original tampoco; no es algo que haya roto yo en la migración. si quieres, lo puedes sustituir más adelante por un simple enlace a la página de goodreads del libro.

## próximo paso

el proyecto ya está completo y listo para subir a github tal cual (salvo la imagen de flickr mencionada arriba, que queda a tu criterio). recuerda el apéndice más abajo si necesitas refrescar cómo añadir nuevas entradas.
