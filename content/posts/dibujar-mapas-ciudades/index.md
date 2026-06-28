---
aliases: ["/dibujar-mapas-ciudades/"]
title: "Cómo dibujar mapas de ciudades (Cartografía, ii)"
date: "2010-10-13"
categories: 
  - "articulos"
tags: 
  - "cartografia"
---

![florencia](florencia.jpg)Bien: lo prometido es deuda. Tal y como adelanté ayer, voy a explicar el método que empleo para dibujar mapas de ciudades.

Antes de comenzar, es necesario aclarar un concepto: en este método, la unidad básica para definir el mapa de una ciudad es la **isla**. Su definición es sencilla: un espacio de la ciudad circundado de calles.

La mayoría de otros métodos propuestos para dibujar ciudades que he leído consideran el trazado de las calles mediante líneas un fin. Mi propuesta es otra: las líneas trazadas son un medio para definir las islas que conforman la ciudad. En sí, las calles existen como huecos entre edificios, y como tal deberían representarse.

Un consejo: al principio es mejor que te centres en las islas mayores de la ciudad, las que se verían a vista de pájaro. Ya habrá tiempo de acercar la lupa.

El método tiene dos partes. En la primera se hace un bosquejo inicial de la ciudad, que recomiendo hacer a lápiz; en la segunda, se vectoriza\[1\] a partir de dicho bosquejo.

\[1\] _Vectorizar:_ convertir una imagen raster en un [gráfico vectorial](http://es.wikipedia.org/wiki/Gr%C3%A1fico_vectorial).

Bueno: vamos al grano.

**Primera parte: Bosquejo inicial**

Estos son los pasos a seguir:

**1.a. Consideraciones previas**

Antes de sentarte a dibujar es preciso hacerse unas cuantas preguntas. La primera y más obvia es cómo se llama el asentamiento que vamos a dibujar; si no tenemos un nombre, pon uno provisional (_La ciudad donde nació Fulano_).

Define su ubicación en el mundo y la geografía de sus inmediaciones: ¿Es una ciudad de interior o costera? ¿Hay ríos? ¿Qué hay en los alrededores? ¿Montañas, bosques, campos de cultivo?

La ubicación está íntimamente relacionada con el tamaño de la ciudad, expresado en número de habitantes fijos. Una ciudad de gran tamaño necesitará rutas por mar, río o tierra en perfecto estado, o no será capaz de disponer de alimentos para abastecerse.

El concepto que tenemos del tamaño de las ciudades ha variado a lo largo de la historia; una ciudad de 7.000 habitantes se consideraba de tamaño mediano en el medievo; ahora nos parecería poco más que un pueblo pequeño.

Como escala de referencia me gusta seguir las indicaciones del suplemento **El Señor de las Runas**, del juego de rol **Rune Quest** (un clásico, por cierto). En el capítulo «La Civilización» se dan guías para asignar la población de las ciudades:

- **Aldeas:** Entre 50 y 350 habitantes, separadas por unos 1,6 km entre ellas.
- **Pueblos:** Entre 300 y 1000 habitantes; unos 8 km de separación.
- **Ciudades pequeñas:** 500 a 3000 habitantes; 48 km entre sí.
- **Ciudades medianas:** 2000-8000 habitantes, 80 km de separación entre ellas.
- **Ciudades grandes:** 6000-25 000 habitantes; 320 km de separación.
- **Metrópolis:** Más de 25 000 habitantes; una ciudad enorme, normalmente la capital de un gran imperio, con un límite superior para las épocas preindustriales de un millón de habitantes. Aunque, por supuesto, puedes diseñar ciudades más grandes.

Una vez tengas definido la ubicación y el tamaño de la ciudad, has de tener en cuenta la geografía del asentamiento en sí. ¿Cómo es el relieve del terreno en el que se asienta la ciudad? ¿Es llano o escarpado? ¿Las calles son amplias o estrechas? ¿Cómo se han trazado las calles? ¿De forma ordenada, con un plan previo, o a medida que fue creciendo?

Todas estas consideraciones influirán en el bosquejo inicial de nuestro mapa.

**Ejemplo:**

A modo de ejemplo usaré la ciudad de _Fuentenevada_ (si no os gusta el nombre, lo siento, es el que primero me vino al magín). _Fuentenevada_ tiene unos 6000 habitantes; es una ciudad sita en el interior, sin ríos que la atraviesen, con un terreno llano en su mayor parte y una muralla que circunda sus límites.

Vayamos al siguiente paso:

**1.b. Lugares de interés**

Escribe una lista de lugares de interés que quieras incluir en el mapa. Puede que ya tengas unos cuantos pensados, o incluso los hayas mencionado en la historia. Sería un buen momento para hacerte una lista de topónimos, lista que, por cierto, considero importante incluir en la [planificación de la historia](http://sombrasyceniza.com/2010/09/28/mapa-o-brujula/); pero eso lo comentaré en otro momento.

No olvides incluir instalaciones básicas en toda ciudad: un mercado permanente, barrios residenciales según estratos, un templo o varios para los cultos religiosos, un cementerio (en el caso de que entierren a sus muertos, por supuesto), puntos de abastecimiento de agua, graneros y almacenes, murallas si la ciudad dispone de ellas, muelles si está en la costa, puentes si la cruzan ríos, los cuarteles de la guardia de la ciudad, y la fortaleza o palacio donde residen la clase dirigente.

**1.c. Ubicar los lugares de interés**

Aunque uses luego herramientas digitales, lo más cómodo es tirar primero de papel y lápiz. Toma un folio en blanco y señala en él los topónimos que has listado en el punto anterior. Puedes usar papel milimetrado, pero no es necesario.

No hace falta que te esmeres mucho: una cruz o un icono sencillo bastará. De momento no necesitas escala, ni mucho detalle. Marcar los lugares con números o letras y anotar aparte en una leyenda qué representan es lo más cómodo.

En el caso de que los puntos de interés tengan más relevancia, necesitas reservar espacio en tu mapa para ellos. Por ejemplo, plazas, jardines, palacios, fortalezas, etcétera, es mejor que los representes de antemano en planta. Bastará con un rectángulo o polígono sencillo para delimitarlos.

También convendría marcar los límites de tu ciudad, y los accidentes geográficos que la afectan: la línea de costa, si es una ciudad costera, o el río (o ríos) que la atraviesan, si tal; otros ejemplos de accidentes geográficos a indicar son acantilados, lagos y campos de cultivo, de un largo etcétera.

Con respecto a nuestro ejemplo, _Fuentenevada_, este es el bosquejo inicial:

[![syc\_bosquejo\_1](syc_bosquejo_11.jpg)](http://www.jmbravo.com/wp-content/uploads/2010/10/syc_bosquejo_11.jpg)

Como podéis ver he marcado una serie de puntos y un límite de la ciudad señalado por unas murallas. Aún no he dibujado ningún polígono; lo haré más adelante.

**1.d. Enlazar los lugares de interés**

Ahora toca dibujar las calles. La idea es obtener las islas que componen la ciudad a través de polígonos delimitados por calles. La forma más sencilla de dibujar estas calles es utilizar líneas que unan esos puntos de interés que has marcado en el mapa.

Recomiendo usar lápiz; los colores son bienvenidos. Tirar las líneas con regla es una buena idea. Personalmente prefiero usar papel de cebolla superpuesto encima del bosquejo anterior para trazar las calles; así evito ensuciar el bosquejo inicial. No obstante, no es imprescindible.

No te molestes en representar el ancho de las calles; tan solo dibuja líneas que conecten estos puntos. Piensa en estas líneas como los “ejes” imaginarios de las calles, y como tal, no tienen ancho en sí.

Sigue una jerarquía. Comienza con avenidas y calles largas y anchas, para delimitar las islas principales de la ciudad, y luego prosigue con las calles menores, que dividirán tus islas principales en islas más pequeñas.

Ten en cuenta las respuestas a las consideraciones del punto 1.a. Como es lógico, en condiciones normales siempre debería haber una forma de llegar desde el punto A al B en una ciudad, sea gracias a caminos, calles, puentes o escaleras. Hablamos de las rutas normales que usarán los habitantes para desplazarse. (Si un personaje usa los tejados o las alcantarillas como quien usa el metro, eso es otro asunto.) En caso de que no sea así, debe de haber una buena razón.

Si el terreno es escarpado, las calles tenderán a seguir las “líneas de cota”, es decir, paralelas a la línea de máxima pendiente (la dirección natural de las aguas al discurrir por un terreno). De otra forma, la pendiente sería excesiva para el tránsito rodado. Si hay diferencias de cota (altitud) entre dos puntos muy próximos, puede haber escaleras o calles muy escarpadas.

Más: si hay murallas, estas tendrán puertas, y lo normal es que haya calles que desemboquen en dichas puertas, normalmente avenidas. Los puentes también deberían tener calles que los enlacen (y atraviesen).

En resumen: usa la lógica. Y si estás falto de ideas, mi consejo es que busques inspiración en un plano contemporáneo de una ciudad que se asemeje a la tuya. Encontrarás sitios donde encontrar mapas en el apartado de enlaces al final de este artículo.

Una vez termines, debería de haberte quedado algo similar a esto:

[![syc\_bosquejo\_2](syc_bosquejo_21.jpg)](http://www.jmbravo.com/wp-content/uploads/2010/10/syc_bosquejo_21.jpg)

Como puedes apreciar, ya he trazado los polígonos en torno a los lugares de interés tal y como mencioné antes. Recuerda: hazlo siempre que tengas plazas, fortalezas, jardines, edificios importantes y demás. La idea es reservar espacio vacío para ubicar esos sitios.

En el ejemplo de arriba dibujé un polígono para la plaza de la Fuente, otro para la plaza del Almendro, la casa del señor local, el templo de la Diosa Roja y el cementerio.

La mayoría de líneas son rectas y convergen en el centro neurálgico de la ciudad (la plaza de la Fuente), pero he trazado algunas líneas quebradas para dar variedad. Una vez obtuve los polígonos principales los subdividí con  calles transversales y paralelas.

Bien: has acabado tu bosquejo inicial. Si estás satisfecho, pasa a la segunda parte. Si no, rectifica lo que te chirríe. Puedes pasar a limpio el bosquejo, así podrás verlo con más claridad.

Un consejo: tras dibujar las calles y avenidas fíjate sería bueno comprobar nuestra lista de lugares de interés. Fíjate en lo que has dibujado. ¿Hay huecos? Sería bueno darles un uso: jardines, zonas no urbanizables, campos de cultivo, explanadas para uso militar, almacenes…

Si aparecen “nodos” en los que confluyen muchas calles, puede que hayas dibujado sin proponértelo una ubicación perfecta para una plaza o un edificio relevante.

**Segunda parte: Vectorizado del mapa**

_**Nota:** Si se te dan bien los programas de diseño vectorial, podrías dibujar el bosquejo inicial directamente en el ordenador. No obstante, no lo recomiendo._

Para dibujar las islas que conforman la ciudad puedes usar cualquier software de diseño vectorial, como Adobe Illustrator, [Inkscape](http://inkscape.org/?lang=es) (gratuito y de código abierto) o Freehand. También vendrá bien disponer de un escáner para digitalizar tus bosquejos, aunque no es necesario.

En mi caso uso el Autocad, tal vez por deformación profesional (lo he usado en la elaboración de planos topográficos, por ejemplo). Así que explicaré el proceso a seguir con este programa, aunque al final daré algunas indicaciones de cómo hacerlo en un programa de diseño vectorial.

Lo que te interesa vectorizar de tu bosquejo inicial son las islas que conforman la ciudad.

Este es el proceso:

**2.a. Dibujar los ejes de las calles**

El primer paso es dibujar los ejes de las calles, los que dibujaste en el punto 1.d. Tras crear el archivo en Autocad, crea las siguientes capas:

- Fondo
- Ejes
- Calles
- Islas

Naturalmente, puedes cambiar los nombres, y añadir más capas a medida que sea necesario. Pero considero que esas son las mínimas.

Ahora debes insertar tu bosquejo en papel, que habrás digitalizado previamente, mediante el comando _enlazar_. Inserta la imagen en la capa _Fondo._ Hazlo a tamaño real de la página; es decir, si has dibujado en un A4 apaisado, inserta la imagen con unas dimensiones de 297x210 mm.

Así es cómo quedó insertado el bosquejo de _Fuentenevada_:

[![syc\_captura\_01](syc_captura_011.jpg)](http://www.jmbravo.com/wp-content/uploads/2010/10/syc_captura_011.jpg)

Puedes, no obstante, trazar a ojo lo que has dibujado en papel. O, tal y como señalé al principio del punto 2, puedes haber dibujado ya los ejes de las calles en el ordenador.

En cualquier caso, hay que trazar los ejes de las calles. Usa la herramienta _línea_; para mayor comodidad traza líneas largas, y con el comando _recortar_, elimina lo que sobre.

Cuando termines, el aspecto debería ser más o menos este:

[![syc\_captura\_02](syc_captura_021.jpg)](http://www.jmbravo.com/wp-content/uploads/2010/10/syc_captura_021.jpg)

Como puedes apreciar he trazado los ejes de las calles, aunque he añadido líneas que creí necesarias.

**2.b Delimita las islas**

Ahora tienes que delimitar las islas, según el ancho de las calles. En Autocad es muy sencillo: usa el comando _desfase_ y replica los ejes de las calles; la mitad del ancho de la calle será la distancia que uses para el desfase. Es mejor que pongas las líneas desfasadas en otra capa; el comando lo puede hacer directamente.

Otra opción es usar líneas múltiples, pero es más laborioso y no lo recomiendo. Eso sí: al usar el comando _desfase_ puede que los contornos de las islas no queden definidos. Tendrás que “estirar” dichas líneas.

Usa un color de línea distinto al de los ejes, en aras de la claridad.

En nuestro ejemplo, los delimitadores de las islas tienen este aspecto:

[![captura\_03](captura_03-1.jpg)](http://www.jmbravo.com/wp-content/uploads/2010/10/captura_03-1.jpg)

He trazado las “calles” en rojo, para mayor claridad, y he añadido un terreno ajardinado en el extremo oeste de la ciudad.

**2.c. Traza las islas**

Estamos terminando. Ahora tienes que trazar las islas en su capa correspondiente. Puedes usar el comando _polilínea_ y traza los polígonos inscritos en los polígonos originales, los que resultan de la intersección de los ejes de las calles.

Pero podemos hacer algo aún mejor: emplear el comando _contorno_. Asegúrate de marcar “Detección de islas”; tan solo tienes que ir designando puntos en el interior de tus islas, y listo. Tienes la opción de dibujar _regiones_ en vez de _polilíneas_, lo cual es, en teoría, más correcto, pero no hay apenas diferencia en la práctica.

Aquí os pongo una captura del proceso de detectar los contornos:

[![syc\_captura\_04](syc_captura_041.jpg)](http://www.jmbravo.com/wp-content/uploads/2010/10/syc_captura_041.jpg)

Una vez hayas terminado, oculta las capas de los ejes y líneas desfasadas. Deberías ver algo así:

[![syc\_captura\_05](syc_captura_051.jpg)](http://www.jmbravo.com/wp-content/uploads/2010/10/syc_captura_051.jpg)

Puedes usar el comando _chaflán_ para eliminar los _picos_ demasiado pronunciados en las islas, aunque no es necesario. En el ejemplo lo he usado unas cuantas veces.

Como puede observarse, he rellenado la zona ajardinada con un sombreado simbólico, y las islas con un tono gris.

Listo. Tienes el trazado básico de las islas de tu ciudad. Puedes incrementar el detalle dibujando islas dentro de las islas; de nuevo, usa capas separadas.

**Nota:** Podrías usar las herramientas 3D de Autocad para dar “relieve” al mapa, de forma sencilla con el comando _extrusionar_. Un ejemplo en perspectiva isométrica:

[![syc\_captura\_06](syc_captura_061.jpg)](http://www.jmbravo.com/wp-content/uploads/2010/10/syc_captura_061.jpg)

No he representado las murallas, para mayor claridad. No es un modelado muy allá, el de este ejemplo, es cierto, pero es posible generarlo de forma rápida y es buen cimiento para añadir complejidad a nuestro mapa, si queremos, más adelante.

**2.d. Determinar la escala**

En teoría, este hubiera debido ser el primer paso, pero definir una escala al principio no hace sino frenarnos. Para establecer una escala hemos de definir el **área** que ocupa nuestra ciudad. Lo más lógico es que el folio en el que hemos dibujado la ciudad sea el total del área que ocupa, si la hemos dibujado en su totalidad.

Considero dos formas para estimar el área de nuestra ciudad: una, a partir de una estimación basada en la población, según las directrices del punto 1.a., y otra, mediante la distancia aproximada entre dos puntos de referencia.

**Método 1: puntos de referencia**

Si sabemos que entre el punto A y B se tarda media hora a pie, y hemos representado dichos puntos en el mapa, ya tenemos nuestra escala. Considerando un terreno normal, una velocidad media aceptable a pie es 5-6 kilómetros por hora, con lo que tenemos una distancia real de 2,5-3 km. Medimos la distancia en el papel, que podría ser, por ejemplo, 147 milímetros, y hallamos la escala con una sencilla regla de tres: si 147 mm equivalen a 3·103 mm (3 km), 1 mm en el papel serán X. El resultado es 20 408,16, que podemos redondear a 20 000: nuestra escala es 1:20 000.

No recomiendo este método. Puede dar muchos problemas a la hora de que cuadren el resto de distancias entre lugares.

**Método 2: estimación a partir del número de habitantes**

Es el método que recomiendo, por su sencillez y flexibilidad. El dato principal que necesitamos es la población de nuestro enclave urbano, que ya estimamos en el punto 1.a. del método.

Elige una densidad media para la ciudad. Como valores de referencia, os sugiero los de este artículo: [http://irows.ucr.edu/research/citemp/estcit/estcit.htm](http://irows.ucr.edu/research/citemp/estcit/estcit.htm)

En una de las tablas de dicho artículo aparecen listadas densidades de población medias (en habitantes por hectárea) para las ciudades-tipo de diferentes épocas. Las listaré a continuación para mayor comodidad:

- Ciudades de la antigüedad: 150.
- Ciudades del Islam: 250.
- Ciudades europeas (griegas y romanas): 100-115.
- Ciudades del renacimiento: 175-190.

Vamos a emplear el método 2 para estimar el área de _Fuentenevada_. Hemos dicho antes que tenía 6000 habitantes. Vamos a usar el modelo histórico de una ciudad del renacimiento, con una densidad de 175 habitantes por cada hectárea (ha).

6000 habitantes x 175 habitantes\-1 x ha = 34,28 ha

34,28 ha equivalen a 342 800 m2, lo cual puede parecer mucho, pero se trata del área que tendría un cuadrado de unos 585,5 metros de lado. Es una cifra muy razonable.

Gracias a la utilidad de Autocad de medir áreas, podemos calcular el área encerrada dentro de las murallas (nuestra área total) y escalar, si queremos, el mapa como nos apetezca.

**2.e. Toques finales**

A partir de aquí podemos seguir en Autocad o continuar en un programa de diseño vectorial o fotográfico, incluso, aunque mejor si es del primer tipo. Se trata de darle un buen aspecto a nuestro mapa. Recomiendo que este sea el último paso. Para un mapa de uso propio o muy sencillo, apenas si son necesarios unos cuantos retoques, como añadir los rótulos, una leyenda y marcar la escala.

En cualquier caso, los detalles concretos de esta parte se escapan del alcance de este artículo.

**Sobre este método y los programas de diseño vectorial:**

No he explicado cómo seguir este método empleando programas de diseño vectorial porque no he encontrado la forma de replicar el proceso de forma tan rápida y eficaz como en Autocad.

El problema está a la hora de dibujar las islas a partir de los ejes. Ya en sí dibujar las calles es más complejo.

Podrían “cortarse” los polígonos de las islas de un área rectangular, a partir de los ejes, pero escalarlos según el ancho de las calles es todo un problema. No vale escalar los polígonos, y modificarlos punto a punto es un coñazo.

La única forma es tomar un área rectangular, crear las líneas de las calles y “recortar” las islas. Pero no he conseguido hacerlo de forma tan rápida y eficiente, insisto, como en Autocad.

En esta guía de [wikitravel](http://wikitravel.org/en/Wikitravel:How_to_draw_a_map) (en inglés) se describe cómo dibujar mapas con un programa de diseño vectorial. El software que usan como ejemplo es de uso gratuito ([Inkscape](http://inkscape.org/?lang=es)). El método que usan es trazar las calles con líneas Bézier y emplear grosores de trazo para representar su anchura.

Como funcionar, funciona, pero ni se acerca a la flexibilidad de dibujar la ciudad como un conjunto de islas. Si has de hacer modificaciones posteriores es mucho más fácil modificar una única isla que un entramado de líneas.

Además, Autocad tiene ventajas adicionales. Escalar el mapa a una escala específica es mucho más fácil. Y es posible calcular datos, como distancias y superficies, de forma rápida y precisa. También es mucho más eficaz Autocad a la hora de aumentar el detalle de nuestro plano. Podríamos dibujar hasta la última calleja si quisiéramos, sin problemas de visualización.

No obstante, tiene limitaciones. Para dar los toques finales al mapa, los que comenté en el punto 7, es mejor un programa de diseño más artístico, como [Inkscape](http://inkscape.org/?lang=es) o Adobe Illustrator.

Bien, eso es todo. Espero que os haya servido. Para terminar, os dejo con algunos **enlaces de interés**:

[http://www.profantasy.com/](http://www.profantasy.com/) El software para la creación de mapas fantásticos; tiene diferentes productos. El más conocido es el Campaign Cartographer. Para ciudades tiene una aplicación concreta: el City Designer. La he probado, pero nunca me hizo mucho tilín. No obstante prometo probarla de nuevo y contaros aquí mis experiencias.

[http://www.vintagemaps.com/](http://www.vintagemaps.com/) Mapas antiguos disponibles para la descarga, pero, eso sí, pagando. Excelente variedad.

[http://cc2.mapventures.com/](http://cc2.mapventures.com/) Mapventures, página con mapas creados con Profantasy Campaign Cartographer 3.

[http://www.mapresources.com/](http://www.mapresources.com/) Mapas de nuestro mundo en formato vectorial, libres de royalties, para su compra; lo pongo aquí como curiosidad. Los precios son prohibitivos, pero hablamos de material de primera.

[http://www.mcwetboy.net/maproom/](http://www.mcwetboy.net/maproom/) Bitácora sobre cartografía. En inglés.

[http://www.openstreetmap.org/](http://www.openstreetmap.org/) Mapa abierto del mundo, del cual puedes bajar mapas en formato svg (vectorial) o png (raster). Ideal para tener algo de donde partir.
