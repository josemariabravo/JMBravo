# migrar jmbravo.com: de wordpress a sitio estático + buttondown
	
guía paso a paso para sustituir el hosting de wordpress por un sitio estático con dominio propio, y enlazarlo con buttondown para mantener la opción de boletín por correo sin componente social.

## resumen del flujo completo

wordpress (export xml) → conversión a markdown → hugo (genera html) → github pages (alojamiento) → dominio jmbravo.com apuntando ahí → buttondown leyendo el rss del sitio → suscriptores reciben cada entrada por correo.

## 0. qué vas a necesitar antes de empezar

- una cuenta de github (gratuita).
- node.js instalado — solo para el paso 1.3, un uso puntual.
- hugo instalado — es el generador de sitio que vas a usar el resto del tiempo; un único ejecutable, sin dependencias de node para el día a día.
- git instalado.
- acceso al panel de administración de tu wordpress actual.
- acceso al panel dns de tu dominio jmbravo.com.

## 1. cómo exportarlo desde wordpress

### 1.1 exportar el contenido
en tu wp-admin: *herramientas → exportar → todo el contenido → descargar archivo de exportación*. obtienes un .xml (formato wxr) con entradas, páginas, categorías y etiquetas.

### 1.2 asegurar las imágenes
el xml no contiene las imágenes, solo enlaces a ellas. mientras tu hosting siga activo, descarga también la carpeta `wp-content/uploads` completa (por ftp o por el gestor de archivos de tu panel) como copia de seguridad. el conversor del siguiente paso puede descargarlas él mismo desde las urls, pero si el hosting caduca antes de hacer la conversión, las perderías.

### 1.3 convertir el xml a markdown
usa `wordpress-export-to-markdown`, una herramienta de código abierto pensada exactamente para esto: convierte cada entrada en un archivo `.md` con su frontmatter (título, fecha, etiquetas) y descarga las imágenes a local, ya enlazadas.

```bash
npx wordpress-export-to-markdown
```

te guía con un asistente por preguntas (ruta del xml, si quieres una carpeta por entrada, etc.). al final tendrás una carpeta de salida con todo el contenido listo para un generador de sitio estático.

## 2. elección del sitio de alojamiento

mi recomendación: **github pages**. gratis, sin límite práctico de tráfico para un blog personal, soporta dominio propio con https automático, y no exige mantener ningún servidor.

alternativas igualmente válidas si en algún momento github no te convence: netlify y cloudflare pages funcionan igual de bien y también son gratuitas con dominio propio; la diferencia está en la interfaz de despliegue, no en el resultado final.

generador de sitio: **hugo**. ejecutable único, sin node ni npm para el uso diario, genera el feed rss automáticamente sin configuración adicional, y construye sitios de cientos de entradas en segundos.

## 3. configuración del sitio estático

### 3.1 crear el proyecto
```bash
hugo new site jmbravo-site
cd jmbravo-site
git init
```

### 3.2 estructura de contenido
mueve las entradas convertidas en el paso 1.3 a `content/posts/`. cada entrada queda así:

```
content/posts/nombre-de-la-entrada/
  index.md
  images/
```

### 3.3 plantilla mínima
como solo necesitas una plantilla css y poco más, el esqueleto que hace falta son tres archivos de layout más tu hoja de estilos:

- `layouts/_default/baseof.html` — esqueleto html común (head, cabecera, `{{ block "main" . }}{{ end }}`, pie).
- `layouts/_default/single.html` — plantilla de una entrada individual.
- `layouts/_default/list.html` — plantilla de listado (portada, archivo).
- `assets/css/style.css` — tu hoja de estilos.

dejo aquí solo la estructura, no el contenido, porque el diseño concreto es justo la parte que querías llevar tú. cuando quieras, te ayudo a rellenar esos tres archivos.

### 3.4 configurar hugo.toml
```toml
baseURL = "https://jmbravo.com/"
languageCode = "es-es"
title = "jmbravo.com"
```
el feed rss (`index.xml`) se genera solo, sin nada más que configurar — lo necesitarás en el paso 4.

### 3.5 probar en local
```bash
hugo server -D
```
y revisas en `http://localhost:1313`.

### 3.6 subir a github y desplegar
crea un repositorio en github y sube el proyecto. añade este flujo de trabajo en `.github/workflows/hugo.yml` (comprueba la versión más reciente de hugo en sus releases de github y ajusta `HUGO_VERSION`):

```yaml
name: desplegar sitio hugo en pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.140.0
    steps:
      - name: instalar hugo
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
          sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
          fetch-depth: 0
      - name: configurar pages
        id: pages
        uses: actions/configure-pages@v5
      - name: construir con hugo
        run: hugo --gc --minify --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: subir artefacto
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: desplegar en github pages
        id: deployment
        uses: actions/deploy-pages@v4
```

en `settings → pages` del repositorio, en «build and deployment» elige *github actions* como origen. cada `push` a `main` reconstruye y publica el sitio solo.

## 4. conexión con buttondown

1. crea una cuenta en buttondown.com.
2. localiza tu feed rss: una vez publicado, será `https://jmbravo.com/index.xml` (la ruta por defecto de hugo).
3. en buttondown: `settings → connect rss feed`, y pega esa url.
4. configura cadencia y comportamiento:
   - **cadencia**: inmediata (un correo por entrada), semanal o mensual (un resumen).
   - **comportamiento**: enviar directamente, o crear borrador para revisarlo antes de mandarlo. te recomiendo empezar con «crear borrador» — así evitas que, al conectar el feed con años de entradas ya migradas, se dispare un envío masivo de golpe. buttondown tiene además una opción para saltar automáticamente cualquier elemento con más de un día de antigüedad en el momento de activar la automatización, pensada justo para este caso.
5. añade el formulario de suscripción de buttondown al pie de tu plantilla (`baseof.html`).

## 5. redirigir el nombre de dominio

### 5.1 conectar, no transferir
no necesitas transferir el registro de jmbravo.com a ningún sitio nuevo: basta con cambiar los registros dns para que apunten a github pages. sigues renovando el dominio donde lo tengas ahora.

### 5.2 registros dns
para el dominio raíz (jmbravo.com), crea cuatro registros a apuntando a:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
y, si quieres que www.jmbravo.com también funcione, un registro cname de `www` apuntando a `tu-usuario.github.io`.

### 5.3 archivo cname en el repositorio
en `settings → pages → custom domain` del repositorio, escribe `jmbravo.com` y guarda; github crea automáticamente el archivo `CNAME` correspondiente.

### 5.4 https
una vez verificada la propagación dns (puede tardar hasta unas horas), activa «enforce https» en esa misma pantalla.

### 5.5 margen de tiempo
haz todo este bloque con margen amplio antes de que caduque tu hosting actual de wordpress, para tener tiempo de corregir cualquier cosa que no propague bien a la primera, sin presión ni caída del sitio.

## 6. cómo sería el flujo de trabajo, de cara al futuro

1. escribes la entrada en markdown (puedes hacerlo directamente en tu vault de obsidian).
2. la colocas en `content/posts/nombre-entrada/index.md` con su frontmatter.
3. `git add`, `git commit`, `git push`.
4. github actions reconstruye y publica el sitio (unos minutos).
5. buttondown revisa tu feed rss (cada 30-60 minutos aproximadamente) y, según lo configurado en el paso 4, crea un borrador o envía el correo directamente.
6. si elegiste el modo borrador, entras en buttondown, lo revisas y pulsas enviar.

ningún panel de interacciones que mirar a diario: el ciclo entero vive en tu editor de texto y en una cola de correo.

## notas finales

- conserva el `export.xml` original y la carpeta de imágenes del paso 1.2 como copia de seguridad, fuera del repositorio de git.
- comprueba cuanto antes si el dominio jmbravo.com caduca junto con el hosting o por separado; si caducan juntos, ese dato es el que manda en tu calendario de migración.

## apéndice: cómo añadir una nueva entrada, una vez migrado

### el archivo en sí

1. nombra una carpeta para la entrada, en formato simple sin tildes ni espacios —eso definirá la url—: por ejemplo `content/posts/el-titulo-de-la-entrada/`.
2. dentro, el archivo se llama `index.md` y empieza con un frontmatter:

```yaml
---
title: "el título de la entrada"
date: 2026-06-25
draft: false
tags: ["categoría", "etiqueta"]
---
```

3. debajo del frontmatter, pegas el texto en markdown tal cual lo tengas escrito.
4. si hay imágenes, van en una subcarpeta `images/` dentro de la misma carpeta de la entrada, y se referencian con ruta relativa: `![descripción](images/nombre.jpg)`.

### cómo lo subes: dos vías

**opción a — sin instalar nada**, la más cómoda si no quieres tocar la terminal: entras en tu repositorio en github.com, *add file → create new file*, escribes la ruta (`content/posts/el-titulo-de-la-entrada/index.md`), pegas el contenido completo y le das a *commit* desde el propio navegador. para imágenes, *add file → upload files* te deja arrastrarlas a la carpeta correspondiente.

**opción b — con vista previa local**, mejor si quieres ver cómo queda antes de publicar. necesita git y hugo instalados en tu equipo:
```bash
cd jmbravo-site
git pull
# colocas tu archivo en content/posts/el-titulo-de-la-entrada/index.md
hugo server -D
```
revisas en `http://localhost:1313`, y cuando estés conforme:
```bash
git add .
git commit -m "nueva entrada: el título de la entrada"
git push
```

### qué pasa después, automáticamente

en cuanto el cambio llega a la rama `main`, por cualquiera de las dos vías:
- github actions reconstruye y publica el sitio (uno o dos minutos).
- buttondown detecta la entrada en tu feed rss en su siguiente revisión (cada 30-60 minutos) y, según lo configurado, crea un borrador o la envía directamente.

no tienes que tocar nada más que ese archivo de texto; el resto ocurre solo.

dos notas pequeñas:
- si pones una fecha futura en `date`, hugo no la publicará hasta que llegue esa fecha *y* haya un nuevo `push` que dispare la reconstrucción —no hay reconstrucción programada por sí sola—. para entradas del día, usa simplemente la fecha real.
- esto vale para entradas de blog. si alguna vez quieres una página fija (por ejemplo, «acerca de»), el proceso es igual pero la carpeta va directamente en `content/`, no en `content/posts/`, para que quede fuera del feed rss.

## apéndice: lista de comprobación para la primera publicación

- [ ] descomprime `jmbravo-sitio-estatico.zip` en una carpeta definitiva — por ejemplo `D:\OneDrive\1 Archivos\1.6 Miscelánea\1.6.05 Webs\jmbravo-site\`. comprueba que `hugo.toml` queda justo en la raíz de esa carpeta, no un nivel más adentro.
- [ ] crea un repositorio vacío en github.com: público, nombre sugerido `jmbravo-site`, sin marcar ningún archivo inicial (ni readme, ni .gitignore, ni licencia — ya los tienes en el proyecto).
- [ ] sube el contenido de la carpeta a ese repositorio:
  - **github desktop**: *add local repository* (eligiendo esa carpeta) → te ofrecerá inicializar el repositorio → *publish repository*.
  - **terminal**:
    ```bash
    cd ruta\a\jmbravo-site
    git init
    git add .
    git commit -m "primera publicación"
    git branch -M main
    git remote add origin https://github.com/TU-USUARIO/jmbravo-site.git
    git push -u origin main
    ```
- [ ] en el repositorio, en github: *settings → pages → build and deployment → source: github actions*.
- [ ] espera uno o dos minutos y comprueba en la pestaña *actions* que el flujo termina en verde.
- [ ] visita la url que da github (`tu-usuario.github.io/jmbravo-site/`) y comprueba que el sitio se ve bien. el flujo ya está escrito para adaptar la url base automáticamente, así que funciona igual antes y después de conectar tu dominio.
- [ ] sigue con el apartado 5 de esta guía (redirigir el dominio) cuando lo anterior esté verificado.
- [ ] apaga wordpress solo cuando el dominio ya apunte al sitio nuevo y todo se vea correcto.

## apéndice: vault de obsidian dedicado al blog

la idea es que escribir una entrada se reduzca a esto: abres obsidian, escribes, y al cabo de un rato está publicada sola. para llegar ahí, el vault no debe ser todo el proyecto, sino solo la carpeta `content/` — así no se mezclan tus notas con las plantillas (`layouts/`), el css o la configuración de hugo, que no tienes motivo para tocar desde obsidian.

esto da por hecho que ya completaste el apéndice anterior (el repositorio ya existe y `git` ya funciona en tu equipo con ese repositorio) — si ya pudiste hacer el `git push` inicial, las credenciales que pida obsidian git más abajo ya estarán configuradas y no tendrás que repetir nada.

### 1. abrir la carpeta `content/` como vault

en obsidian: *abrir carpeta como bóveda* → seleccionas `jmbravo-site\content`. verás directamente `posts/`, `sobre-mi/`, `contacto/`, `libros/`, `sombras-y-ceniza/`, `politica-de-privacidad/`, `asesoria-literaria/` y `_index.md` (el contenido de la portada) — nada de lo que no necesitas tocar.

### 2. configurar dónde caen las imágenes

en *configuración → archivos y enlaces*:
- **ubicación predeterminada para nuevos archivos adjuntos** → *en una subcarpeta bajo la nota actual* → nombre de la subcarpeta: `images`.

así, cuando arrastres una imagen a una entrada, obsidian la coloca automáticamente en `images/` junto a esa entrada — exactamente la misma convención que ya usan las 105 entradas migradas.

### 3. mantener el formato de carpeta por entrada

hugo espera que cada entrada sea una *carpeta* con un `index.md` dentro (lo que llama «page bundle»), no un archivo suelto. para crear una entrada nueva con esa estructura, al nombrar la nota nueva en obsidian escribe la ruta completa con barras:

```
posts/como-construi-los-noormenn/index
```

obsidian crea la carpeta intermedia sola. el resultado es idéntico al de las entradas migradas: `posts/como-construi-los-noormenn/index.md`.

### 4. una plantilla para no escribir el frontmatter cada vez

activa el plugin núcleo *plantillas* (*configuración → plugins predeterminados*), y crea un archivo, por ejemplo `Plantillas/nueva-entrada.md`:

```markdown
---
title: ""
date: {{date:YYYY-MM-DD}}
draft: false
tags:
  - 
---

```

con el cursor en la nota nueva y vacía, *insertar plantilla* la rellena entera; solo te queda escribir el título, las etiquetas y el texto.

### 5. publicar sin salir de obsidian: el plugin obsidian git

instala el plugin de la comunidad **obsidian git** (*configuración → plugins de la comunidad → explorar*). en sus ajustes:
- **intervalo de confirmación y sincronización automática (minutos)**: 10-15.
- **confirmar y sincronizar automáticamente al dejar de editar**: activado.
- **intervalo de extracción automática (minutos)**: igual que el de arriba.
- **estrategia de fusión**: combinar (*merge*).

como tu vault (`content/`) es una subcarpeta del repositorio (`jmbravo-site/`), el plugin lo detecta solo y opera sobre el repositorio completo — es un escenario que obsidian git soporta de forma nativa, no hace falta ninguna configuración especial adicional.

con esto activado, el flujo completo queda así:
1. escribes la entrada en obsidian, con la plantilla.
2. dejas de teclear un rato (o lanzas manualmente *git: commit and sync* desde la paleta de comandos, si no quieres esperar al intervalo automático).
3. obsidian git hace `commit` y `push` por ti.
4. github actions reconstruye y publica el sitio.
5. buttondown, si lo tienes conectado, detecta la entrada nueva en el rss y crea el borrador o la envía.

ni terminal, ni github desktop, ni recordar comandos de `git` — solo escribir y, de cuando en cuando, comprobar que se ha publicado.

