# Revisión de erratas del blog

Revisión de los 103 artículos (`index.md`) no marcados con `revisado: true`. Excluidos por esa razón: avisos-y-nuevas-julio-de-2026, avisos-y-nuevas-octubre-de-2024, dead-wrong, libra-de-carne, libros-electronicos, proximamente.

## Cuestiones transversales

Antes del detalle por artículo, estas son las incidencias que se repiten en varias entradas y que probablemente convenga corregir de forma sistemática, más que una a una:

**Cursivas con guion bajo.** Es, con diferencia, la incidencia más frecuente: decenas de artículos usan `_texto_` para marcar cursiva en vez de `*texto*`. Se detalla en cada artículo afectado, pero conviene una pasada global de búsqueda y sustitución en todo el sitio en vez de corregirlo entrada por entrada.

**Restos de shortcodes de WordPress.** Varios artículos migrados desde WordPress conservan código sin convertir que no se renderiza: `[caption]...[/caption]`, `[youtube=...]`, `[download id="..."]`. Aparecen sobre todo en las entradas más antiguas (2010-2011).

**Notas al pie con formato antiguo.** El blog usa hoy el formato estándar de Markdown (`[^1]`), pero varios artículos —especialmente los más antiguos, incluidos los reeditados del fanzine *Sangre y acero*— usan números sueltos o enlaces a anclas (`[1](#nota1)`) que no funcionan como notas al pie reales.

**«Edgar Allan Poe» escrito «Edgard Allan Poe».** Este error de nombre se repite en al menos tres artículos distintos (*autopublicacion*, *entrevista-a-zsofia-dankova*, *mis-diez-libros-fetiche*).

**Comillas y guiones inconsistentes.** Mezcla de comillas rectas (`"`) y angulares/inglesas, y de guion corto/largo para incisos, dentro de un mismo artículo en varios casos. No se detalla exhaustivamente por ser una cuestión menor y muy repetida, pero conviene una revisión de estilo general.

## al-filo-de-las-sombras-resena-de-brent-weeks-trilogia-angel-de-la-noche

| Fragmento | Problema | Corrección |
|---|---|---|
| `_El ángel de la noche_`, `_El camino de las sombras_` (x2), `_oficio amargo_`, `_chirría_`, `_gag_` | Cursivas con guion bajo | `*El ángel de la noche*`, `*El camino de las sombras*`, `*oficio amargo*`, `*chirría*`, `*gag*` |
| «el interés se mantiene, aún a pesar de los diálogos irrelevantes» | «aún» (con tilde, = todavía) no encaja; el sentido es «incluso a pesar de» | «aun a pesar de» (sin tilde) |

## autoedicion-digital

| Fragmento | Problema | Corrección |
|---|---|---|
| «¿Cuánto gana un escritor?» y «¿Quién necesita editores?» enlazan a la misma URL | Ambos enlaces apuntan a `.../quien-necesita-editores/`; el primero debería llevar al artículo sobre cuánto gana un escritor | Revisar y corregir la URL del primer enlace |
| «os resulten tan interesantes como a mí:  [¿Cuánto...» | Doble espacio antes del enlace | Un solo espacio |
| «esto un arma de doble filo» | Falta el verbo «es» | «esto **es** un arma de doble filo» |
| «Qué canales usa para atraer al lector dependen de su decisión.» | Discordancia sujeto-verbo: el sujeto es la oración completa (singular) | «...**depende** de su decisión» |

## autopublicacion

| Fragmento | Problema | Corrección |
|---|---|---|
| `_Un escritor nunca olvida…su alma tiene precio._`, `_El juego del Ángel_`, `_No autopubliquéis_`, `_No autopubliquéis. No merece la pena_`, `_[El adepto de la reina](...)_` | Cursivas con guion bajo | Sustituir por asteriscos, ej. `*El juego del Ángel*` |
| «Su  novela _[El adepto...» | Doble espacio | Un solo espacio |
| «Rudyard Kipling, Ernest Hemingway, Edgard Allan Poe Stephen King o Mark Twain» | «Edgard» está mal escrito (es «Edgar Allan Poe»); además falta coma entre «Poe» y «Stephen King» | «Rudyard Kipling, Ernest Hemingway, Edgar Allan Poe, Stephen King o Mark Twain» |
| «Joe Konrad» | El apellido real es «Konrath» (coincide con la URL del propio enlace, jakonrath.blogspot.com) | «Joe Konrath» |
| «–pocos o muchos, eso lo dirá el tiempo—» | Mezcla de raya corta (–) y raya larga (—) para abrir/cerrar el inciso | Usar el mismo signo en apertura y cierre: «—pocos o muchos, eso lo dirá el tiempo—» |

## autor-2-0

| Fragmento | Problema | Corrección |
|---|---|---|
| `_La heteronimia debiera ser…lectores._`, `_debería importar_`, `_la web como plataforma (social)_` | Cursivas con guion bajo | Sustituir por asteriscos |
| `![Narciso\_de\_caravaggio](narciso_de_caravaggio.jpg "Narciso_de_caravaggio")` | El texto alternativo es el nombre de archivo con guiones bajos escapados, no un texto descriptivo | «Narciso de Caravaggio» |

## avance-arco-crenad-aggvaldsson

| Fragmento | Problema | Corrección |
|---|---|---|
| — | Entrada marcada como `draft: true` y con nota explícita de «contenido de relleno» — no es un artículo terminado; no se han buscado erratas de fondo | Revisar cuando se sustituya por el contenido definitivo |

## avisos-y-nuevas-noviembre-de-2023

Sin erratas relevantes detectadas.

## avisos-y-nuevas-septiembre-de-2024

Sin erratas relevantes detectadas.

## breves-notas-sintaxis-correccion-estilo

| Fragmento | Problema | Corrección |
|---|---|---|
| `_El niño comía lentejas…_` y el resto de ejemplos en cursiva con guion bajo (muchos a lo largo del texto) | Cursivas con guion bajo | Sustituir todos por asteriscos |
| «pero aún así lo considero bastante útil» | Falta tilde en «aun así» no… en realidad aquí «aún» (todavía) es correcto, revisar coherencia con «aun así» locución fija sin tilde | La locución fija es «aun así» (sin tilde) |
| «Si es de persona, el OD llevará la preposición "a"i.» | Falta espacio entre la palabra y la llamada de nota «i» | «la preposición "a" i» o mejor integrar la nota sin pegarla a la comilla |
| «para el objeto directo (OD) puede ser…complemento agenteii» | Igual que el anterior: la llamada de nota "ii" está pegada sin espacio | Añadir espacio antes del número volado |
| «Un verbo transitivo no está obligado a tener un complemento directoiii.» | Nota pegada sin espacio | Añadir espacio |
| «según lo anterioriv» | Nota pegada sin espacio | Añadir espacio |
| «un verbo principal y otro secundariov» | Nota pegada sin espacio | Añadir espacio |
| «i Un sintagma nominal precedido por una preposición se denominal sintagma preposicional.» | «denominal» no es palabra válida aquí; error tipográfico | «se **denomina** sintagma preposicional» |
| «iv El Objeto Indirecto (OI) es un sintagma preposicional (a/para + SN) que "recibe el daño o el provecho de la acción del verbo.» | Falta la comilla de cierre | Añadir comilla de cierre tras «verbo» |
| «esgrimir. (_Quizá del prov. ant. escremir,practicar la esgrima...)» | Falta espacio tras la coma | «escremir, practicar la esgrima» |
| «28\. tr. echar ( deponer a alguien de su empleo).» | Espacio sobrante tras el paréntesis de apertura | «echar (deponer a alguien de su empleo)» |
| «> beber (_del lat. Bibere_)» | «Bibere» en latín debería ir en minúscula (bibĕre) | «del lat. bibere» |
| Uso mixto de comillas rectas `"tr."` junto con comillas angulares/curvas en otras partes | Inconsistencia en el estilo de comillas | Unificar con comillas españolas «» |

## capriccio-santiago-eximeno

| Fragmento | Problema | Corrección |
|---|---|---|
| `«Insomne» (_Capriccio),_ Santiago Eximeno` y `_Capriccio_`, `_alter ego_` | Cursivas con guion bajo | Sustituir por asteriscos |
| «Prueben con Capriccio, una  antología de relatos» | Doble espacio | Un solo espacio |
| «[bájense Capriccio](http://www.23escalones.com/p-137/Libros-de-descarga-gratuita/Capriccio-\(libro-gratuito\))» | Paréntesis escapados dentro de la URL; comprobar que el enlace funciona tal cual | Verificar que la URL escapada resuelve correctamente |

## carta-a-mi-hijo

Sin erratas relevantes detectadas.

## cartografia-fantasia

| Fragmento | Problema | Corrección |
|---|---|---|
| «**Joey Abercrombie**» y URL «la-primera-ley-joey-abercrombie» | El autor se llama Joe Abercrombie, no «Joey»; el propio archivo de la reseña en este blog es «la-primera-ley-joe-abercrombie» | «Joe Abercrombie» |
| «un buen mapa es siendo una herramienta excelente» | Mezcla «es» / «está siendo»; construcción agramatical | «un buen mapa **es** una herramienta excelente» |
| «aunque sean un bosquejos mal garrapateados» | Discordancia de número («un» + plural) | «aunque sean **unos** bosquejos mal garrapateados» |
| `\[caption id="attachment_538" ...\]...\[/caption\]` | Resto de shortcode de WordPress sin convertir a Markdown | Sustituir por una imagen con pie de foto en Markdown normal |

## cierre-cronologia-1006-1007

| Fragmento | Problema | Corrección |
|---|---|---|
| — | Entrada `draft: true`, marcada como contenido de relleno; no se ha revisado en profundidad | Revisar cuando se sustituya por el contenido definitivo |

## como-aprovechar-mejor-el-tiempo

Sin erratas relevantes detectadas.

## consejos-wiki

| Fragmento | Problema | Corrección |
|---|---|---|
| `_cheatsheet_`, `_El Señor de los Anillos_`, `_Príncipe de la nada,_` | Cursivas con guion bajo | Sustituir por asteriscos |
| «no uso la wiki para almacenar borradores... sino que **almacenó** allí los que están razonablemente terminados» | Persona verbal incorrecta (pretérito 3.ª persona en vez de presente 1.ª) | «sino que **almaceno** allí los que están razonablemente terminados» |
| «incluir el enlace nos facilitará, más adelante» | Frase incompleta, falta el complemento («facilitará» ¿qué?) | Completar la frase, p. ej. «...nos facilitará, más adelante, completarla» |
| «recomiendo emplear página «temática»» | Falta el artículo | «recomiendo emplear **una** página «temática»» |

## de-espadas-y-tronos-game-of-thrones-i

| Fragmento | Problema | Corrección |
|---|---|---|
| Numerosas cursivas con guion bajo (_Juego de Tronos_, _Hielo_, _The Sopranos_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| ««_half sword and half scythe»_», ««_mitad espada y mitad guadaña»_», ««_mitad espada y mitad cimitarra»_», ««_A dance of death...»__» | Las comillas angulares y las marcas de cursiva están entrelazadas de forma incoherente (la cursiva no coincide con lo que va entrecomillado) | ««*half sword and half scythe*»» (cursiva íntegra dentro de las comillas) |
| «escritas por Arturo Pérez–Reverte» | Raya (–) en vez de guion en el apellido compuesto | «Pérez-Reverte» |
| Cita de Rufino Acosta: «Hay nueve mil kilómetros... mas o menos lo mismo...» | Falta la tilde en «más» (dentro de una cita textual) | «más o menos lo mismo» *(errata del texto citado, no del autor del blog)* |
| `\[caption id="attachment_XXXX" ...\]...\[/caption\]` (varias) | Restos de shortcode de WordPress | Convertir a imagen con pie de foto en Markdown |

## de-espadas-y-tronos-game-of-thrones-ii

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_Aguja_, _Juego de Tronos_, _Los novios_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «vuelvo a expresar mis  discrepancias» | Doble espacio | Un solo espacio |
| «repúblicas marítimas italianas (Pisa, Amalfi, Génova, Florencia, Venecia, entre otras)» | Florencia no es una ciudad costera ni una de las repúblicas marítimas históricas | Sustituir «Florencia» por otra república marítima real (p. ej. Ancona o Ragusa) o eliminarla de la lista |
| «una de las más Ciudades Libres más señeras» | «más» duplicado, agramatical | «una de las Ciudades Libres más señeras» |
| Cita en inglés: `_"So are you," Jon told her. "I had Mikken...` | Mezcla de comillas rectas y tipográficas dentro de la misma cita | Unificar el tipo de comilla |

## de-espadas-y-tronos-game-of-thrones-iii

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_pell_, _wasters_, _danza del agua_, _Desperta Ferro_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «o evitaban dirigir  estocadas a la cabeza» | Doble espacio | Un solo espacio |
| «espada de arzón, en castellano, por el hecho que se llevaba en la silla de montar» | Queísmo: falta «de» | «por el hecho **de que** se llevaba en la silla de montar» |
| «*(Galería de imágenes no disponible en esta versión del artículo.)*» | Nota que parece un aviso técnico/placeholder colado en el cuerpo del artículo, no una frase del autor | Revisar y, si procede, retirarla o sustituirla por las imágenes correspondientes |

## de-espadas-y-tronos-game-of-thrones-iv

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_kabuto_, _dou_, _Drei Wünder_, _katanas_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Escena n.º 2: Entrenamiento de la Guardia de la Noche» y «Escena n.º 3: Combate entre Jaime y Ned» | Falta la marca de encabezado `####` que sí llevan el resto de escenas del artículo | Añadir `####` delante, igual que en «Escena n.º 1» |
| «todo regado con gruñidos para darle más traza de fiereza a la cosa.  No se me ocurre» | Doble espacio | Un solo espacio |
| «sin cuidarse de su hermano hará o no lo mismo» | Falta la conjunción «si» | «sin cuidarse de **si** su hermano hará o no lo mismo» |
| «una acción así solo tiene sentido sobre carne desnuda o cubierta con ropa ligera (por muy afilado que esté el filo de cualquier arma, necesita cierto impulso para causar herida[^4], y como se puede apreciar en la imagen... protegiéndole el cuello. Por último, Tyrion...» | Paréntesis abierto que nunca se cierra | Cerrar el paréntesis en el punto adecuado |

## de-espadas-y-tronos-game-of-thrones-v

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_wuxia_, _one–man army_, _tiempo_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «*(Nota previa...)*» al inicio: sin problema, pero revisar dobles espacios menores | — | — |

## de-locos-i-the-ancient-art-of-strangulation-resena

| Fragmento | Problema | Corrección |
|---|---|---|
| Numerosas cursivas con guion bajo | Cursivas con guion bajo | Sustituir por asteriscos |
| Título del libro escrito de dos formas distintas: «_The Ancient Art of Strangulation_» (mayúsculas de título) y «_The ancient art of strangulation_» (minúsculas) | Inconsistencia de capitalización del mismo título dentro del artículo | Unificar, preferiblemente con mayúsculas de título inglesas en todas las menciones |
| «ISBN 0—87364—843—9» | Usa rayas (—) en vez de guiones en el ISBN | «ISBN 0-87364-843-9» |
| «Causaron entre 2 000 000 y 50 000 muertes» | El rango aparece invertido (el número mayor va primero) | «entre 50 000 y 2 000 000 de muertes» |
| Título de la entrada, «The ancient art of strangulation» | No sigue la numeración de serie «De locos, i:» que sí aparece en el cuerpo y en otras series del blog (p. ej. «Herramientas del oficio, i: ...») | Considerar «De locos, i: The Ancient Art of Strangulation» |

## demasiados-autores-espanoles

| Fragmento | Problema | Corrección |
|---|---|---|
| `_os/as/es/as_`, `_ebook_`, `_indies_` | Cursivas con guion bajo | Sustituir por asteriscos |
| «No diré nada de la los _os/as/es/as_» | «de la los» no tiene sentido, doble artículo | Revisar; probablemente «de lo de los» o «de eso de los» |
| «con tiradas que oscilan entre 1000 a 1500 ejemplares» | «entre... a» es incorrecto | «entre 1000 **y** 1500 ejemplares» |

## dibujar-mapas-ciudades

Sin erratas relevantes detectadas (fragmentos en cursiva con guion bajo puntuales: `_Vectorizar:_`, `_línea_`, `_recortar_`, `_desfase_`, `_polilínea_`, `_contorno_`, `_regiones_`, `_polilíneas_`, `_chaflán_`, `_picos_`, `_extrusionar_`, `_La ciudad donde nació Fulano_`, `_Fuentenevada_` — sustituir todos por asteriscos).

## edicion-digital-ii

| Fragmento | Problema | Corrección |
|---|---|---|
| `_generación de papel_` (x2) | Cursivas con guion bajo | Sustituir por asteriscos |
| «por mucho que me emocione la perspectiva de la edición digital[^1]) y los lectores» | Paréntesis de cierre suelto, sin apertura previa | Eliminar el paréntesis sobrante |
| «[Libros electrónicos: ¿el futuro?](/libros-electronicos/» (nota al pie 1) | Enlace Markdown sin cerrar (falta el paréntesis final) | «[Libros electrónicos: ¿el futuro?](/libros-electronicos/)» |

## el-dialogo-1

| Fragmento | Problema | Corrección |
|---|---|---|
| Numerosas cursivas con guion bajo (_verba dicendi_, _decir_, _em dash_, _horizontal bar_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Considerado una de las estructuras textuales[^1]. fundamentales en lingüística» | Punto suelto en mitad de la frase, tras la llamada de nota | «Considerado una de las estructuras textuales[^1] fundamentales en lingüística» |
| «el código U + 2014 en Unicode... U + 2015» | La notación Unicode estándar no lleva espacios: «U+2014» | «U+2014», «U+2015» |
| Nota al pie [^1]: «...recomiendo esta lectura: [Estructura textual](url "Estructura textual"» | Enlace Markdown sin cerrar (faltan `"` y `)` de cierre, y el paréntesis «(Para más información...» tampoco se cierra) | Cerrar correctamente el enlace y el paréntesis |

## el-dialogo-2

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_ebook_, _pulp_, _dicendi_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| Nota al pie [^4]: `[...](url "undefined")` | El título del enlace es literalmente la palabra «undefined», resto de una exportación automática | Quitar el atributo de título o poner uno real |

## el-dialogo-3

Cursivas con guion bajo puntuales (_dicendi_, _decir_, _dijo_, _argumenta_, _añade_, _asevera_, etc., y los títulos de la bibliografía) — sustituir por asteriscos. No se han detectado más erratas relevantes en lo revisado hasta el momento (secciones 3 a 5 revisadas también, sin errores adicionales).

## el-lenguaje-en-las-historias-de-fantasia-ii-ouroboros

| Fragmento | Problema | Corrección |
|---|---|---|
| Cientos de cursivas con guion bajo (listas de vulgarismos, términos en otros idiomas, etc.) | Cursivas con guion bajo | Sustituir todas por asteriscos |
| «esta acaba derivando de forma a veces sorprendente e **imprevisble**» | Errata: falta la «i» | «imprevis**i**ble» |
| «Un caso idiolectal... es el de un personaje extranjero... una sociedad _metacrónica_[](#nota1a)\[i\]» | Enlace vacío `[](#nota1a)` seguido de una llamada de nota `\[i\]`; resto de marcado roto de una migración antigua | Revisar y sustituir por una nota al pie en formato Markdown estándar |
| «entre los conceptos de “yo” y “nosotros"» y, más adelante, «“ser formal” o “ser informal"», «muy “estirado",» «“registro informal".» | Mezcla de comillas tipográficas (“ ”) y comillas rectas (") para cerrar la misma cita, repetida varias veces en el artículo | Unificar con comillas tipográficas o angulares en todo el texto |
| «ISB 97-884-2396814-5.» (bibliografía) | Falta la «N» de ISBN | «ISBN 97-884-2396814-5.» |
| «Creative Commons**[Atribución-No Comercial...» | Falta un espacio entre el texto en negrita y el enlace | «Creative Commons** [Atribución-No Comercial...» |

## el-lenguaje-en-las-historias-de-fantasia-ouroboro (parte i)

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo abundantes en todo el artículo | Cursivas con guion bajo | Sustituir por asteriscos |
| «no tendría que ocurrir lo mismo con un texto el mismo personaje lea» | Falta la conjunción «que» | «un texto **que** el mismo personaje lea» |
| «Aún hablando el mismo idioma, está claro que no se expresarían de la misma forma» | «Aún» (con tilde) no es lo pedido; el sentido es concesivo («incluso hablando») | «Aun hablando el mismo idioma...» (sin tilde) |
| «[](#nota1a)», «[i]», «[ii]» sueltos en el cuerpo del texto | Restos de anclas y notas de una migración antigua del blog, sin formato Markdown de nota al pie | Convertir a notas al pie estándar (`[^1]`) |
| «Uno de las características más interesantes del insulto» | Discordancia de género («uno» + «las características») | «**Una** de las características...» |
| Cita de García Meseguer: «El análisis de os insultos, en cualquier cultura...» | Falta la «l»: «de los insultos» | «El análisis de **los** insultos...» *(errata dentro de una cita textual)* |
| «no parece muy creíble que en la Grecia antigua apelar de homosexual fuera tan grave» | «apelar de homosexual» no es una construcción estándar | Probablemente «tildar de homosexual» o «llamar homosexual» |

## el-puente-de-los-asesinos

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_El capitán Alatriste_, _Corsarios de levante_, _in medias res_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Al autor, Pérez-Reverte, lo conocí...» (guion) frente a «Pérez–Reverte nos pone los dientes largos» (raya) | Mismo apellido escrito con guion y con raya en el mismo artículo | Unificar con guion: «Pérez-Reverte» |
| «este puente de los Asesinos» y «lo mejor de _El puente de los Asesinos_» frente al título del artículo, «El puente de los asesinos» (con minúscula) | Capitalización inconsistente de «asesinos»/«Asesinos» en distintas menciones del mismo título dentro del artículo | Unificar, preferiblemente en minúscula: «El puente de los asesinos» |

## en-proceso-ratas-en-el-callejon-edicion-fisica

| Fragmento | Problema | Corrección |
|---|---|---|
| Galería de `<figure>` | Las dos primeras imágenes de la galería no llevan `<figcaption>` como el resto, y hay etiquetas `<figure>` anidadas sin cerrar correctamente | Añadir pie de foto a las dos primeras imágenes y revisar el anidado de las etiquetas |

## entrevista-a-zsofia-dankova

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_Drácula_, _La divina comedia_, _Skyrim_, _The Witcher_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Cuentos completos, de Edgard Allan Poe» | «Edgard» está mal escrito | «Edgar Allan Poe» |
| «Mis películas favoritas son _Häxan_, _L'Inferno_, _Nosferatu_, _Drácula_ and _Frankenstein_» | Queda la conjunción inglesa «and» en una frase en español | «...Drácula **y** Frankenstein» |
| «[\[1\]](#_ftn1)» / «[\[1\]](#_ftnref1)» | Formato de nota al pie heredado de Word/CMS antiguo, distinto del resto del blog (que usa `[^1]`) | Convertir a nota al pie estándar en Markdown |

## entrevista-en-pixelianos

Sin erratas relevantes detectadas.

## espadas-y-falacias-i

Cursivas con guion bajo abundantes (`_Excalibur_`, `_Durandarte_`, `_Tizona_`, `_longsword_`, etc.) — sustituir por asteriscos. No se han detectado más erratas relevantes.

## espadas-y-falacias-ii

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_espada a dos manos_, _Zweihänder_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| `!["Imagen](berserk.jpg)` | Comilla suelta que rompe la sintaxis de la imagen en Markdown | `![Imagen](berserk.jpg)` |
| «Cartel de la **pelicula** _The Last Samurai_» | Falta la tilde | «película» |
| «se prueba la eficacia de corte de **uno** de sus réplicas» | Discordancia de género («uno» + «réplicas», femenino) | «**una** de sus réplicas» |

## esto-es-solo-el-principio

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_elevator pitch_, _low fantasy_, _Sombras y ceniza_) | Cursivas con guion bajo | Sustituir por asteriscos |
| «[«Autoedición digital o el nuevo parnaso»](/autoedicin-digital-o-el-nuevo-parnaso/)» | Enlace roto: la ruta real del artículo es `/autoedicion-digital/`, no `/autoedicin-digital-o-el-nuevo-parnaso/` | Corregir el enlace a `/autoedicion-digital/` |
| «[«Sobre la autopublicación y otras hogueras de las vanidades»](/sobre-la-autopublicacion-y-otras-hogueras-de-las-vanidades/)» | Enlace probablemente roto: la ruta real del artículo es `/autopublicacion/` | Corregir el enlace a `/autopublicacion/` |

## estructurando-la-literatura-fantastica

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (_Ouróboros_, _steam-punk_, _pulp_, _space opera_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «La respuesta es. que no.» | Punto suelto en mitad de la frase | «La respuesta es que no.» |
| «¿qué es la fantasía ?» | Espacio sobrante antes del signo de cierre | «¿qué es la fantasía?» |
| «más allá de, que engloba; después, posterior;por el medio\[2\]Junto a, después de, entre o con \[3\].» | Faltan espacios y signos de puntuación; el texto está mal empalmado | «...posterior; por el medio [2]. Junto a, después de, entre o con [3].» |
| «Diccionario general de la Lengua Española, VOX, **1a** edición, 1997» | Ordinal mal escrito, inconsistente con el resto de la bibliografía («2.ª ed.», «22.ª ed.») | «1.ª edición» |

## generos-y-anteojeras

Cursivas con guion bajo (`_geek_`, `_space opera_`, `_steampunk_`, `_conanistas_`) — sustituir por asteriscos. No se han detectado más erratas relevantes.

## finalmente

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Sombras y ceniza_` x2) | Cursivas con guion bajo | Sustituir por asteriscos |
| «\[download id="4695"\]» | Resto de shortcode de WordPress sin convertir; no genera ningún enlace de descarga funcional | Sustituir por un enlace real al archivo de adelanto |
| «cuatro hombres se internarán en las sombras para **enfrentase** a sus propios fantasmas» | Falta la «r»: «enfrentarse» | «enfrentar**s**e» |

## herramientas-del-oficio-i-material-de-consulta

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_talento_`, `_offline_`, `_software_`, `_per se_`) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Espasa, 2001. **ISB** 97-884-2396814-5.» | Falta la «N» de ISBN | «ISBN» |
| «Espasa, 1999. 84-239-9250-0.» (*Ortografía de la lengua española*) | Falta la etiqueta «ISBN» delante del número, presente en el resto de entradas | «ISBN 84-239-9250-0.» |
| «No lo considero un manual **para de** consulta en sí» | Preposición duplicada / mal construida | «un manual **de** consulta» |
| «la versión informática **de del** diccionario de la Real Academia» | Preposición y artículo duplicados | «la versión informática **del** diccionario» |
| «la wikipedia» (dos veces, en minúscula) | Nombre propio sin mayúscula inicial | «la Wikipedia» |

## herramientas-del-oficio-ii-software-para-escritores-open-office-write

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_suite_`, `_software_`, `_de facto_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «(como ocurre en la gran mayoría de los usuarios "de infantería", pero el coste sigue ahí.» | Paréntesis abierto que nunca se cierra | Cerrar el paréntesis en el lugar adecuado |
| «guarda una copia... en un fichero **comprido** .zip» | Errata: falta la «m» | «comprimido» |

## herramientas-del-oficio-iii-software-para-escritores-zenware

Cursivas con guion bajo (`_zenware_`, `_OpenOffice Writer_`, `_menos es más_`) — sustituir por asteriscos. No se han detectado más erratas relevantes.

## herramientas-del-oficio-iv-software-para-escritores-scrivener

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_binder_`, `_inspector_`, `_flashforwards_`) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Hay una formas de hacer esto con un procesador de textos» | Discordancia de número | «Hay **una forma**» (o «unas formas») |
| «me quedaría con la capacidad de tener, en un solo lugar, todo la información de un proyecto» | Discordancia de género | «**toda** la información» |
| «[\[1\]](#nota1a)», «[\[2\]](#nota2a)» | Notas con anclas heredadas de una migración antigua, distintas del formato `[^1]` usado en el resto del blog | Convertir a notas al pie estándar |

## herramientas-del-oficio-v-software-para-escritores-alternativas-a-scrivener

| Fragmento | Problema | Corrección |
|---|---|---|
| «en vez de dedicarme **en** detallar los pros y contras» | Preposición incorrecta | «dedicarme **a** detallar» |
| «esquemas[1](#nota1b)» | Nota con ancla heredada, distinta del formato `[^1]` | Convertir a nota al pie estándar |

## herramientas-del-oficio-vi-scapple

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_ad infinitum_`, citas en inglés) | Cursivas con guion bajo | Sustituir por asteriscos |
| «los padres de Scrivener, **del cuya** beta para Windows ya hablé en su día» | Combinación agramatical de «del» + «cuya» | «**de cuya** beta para Windows...» |
| «A primera vista, a muchos Scapple les podrá parecer simplón» | Orden de palabras confuso/agramatical | «A primera vista, Scapple podrá parecerles simplón a muchos» |

## homini-lupus-ya-disponible

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Homini lupus_`, `_Cuentos escabrosos_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «se recopilan **diez** relatos» (aquí) frente a «se recopilan **once** relatos» en «avisos-y-nuevas-septiembre-de-2024» | Cifra distinta del número de relatos del mismo libro en dos entradas del blog | Unificar la cifra correcta en ambos artículos |
| «*En el largo herir del tiempo, no hay inocentes.*» (aquí) frente a «*En largo herir del tiempo, no hay inocentes*» en «avisos-y-nuevas-septiembre-de-2024» (sin «el») | La cita de la sinopsis varía entre ambas entradas | Unificar la redacción exacta de la cita |

## instalar-wiki

| Fragmento | Problema | Corrección |
|---|---|---|
| «mi interés por la _Canción_ _de Hielo y Fuego_» | Cursiva partida en dos por un espacio; además, cursiva con guion bajo | «*Canción de Hielo y Fuego*» (una sola cursiva) |
| «consultar la información de la **wikisin** tener instalado Dokuwiki» | Falta el espacio: «wiki sin» | «wiki sin tener instalado Dokuwiki» |
| «El nombre de usuario del administrador **dela** wiki» | Falta el espacio: «de la» | «del administrador de la wiki» |
| «(<http://es.wikipedia.org/wiki/Wiki >)» y «[Wikispaces](< http://www.wikispaces.com/>)» | Espacios sobrantes dentro de los enlaces entre `< >`, pueden romper el enlace | Quitar los espacios sobrantes |

## instalar-wiki (continuación)

| Fragmento | Problema | Corrección |
|---|---|---|
| «Para que una palabra salga en **negrita**hay que escribirla» | Falta un espacio | «**negrita** hay que escribirla» |
| «Si pensamos **usarla** wiki en modo local» | Falta un espacio: «usar la» | «usar la wiki» |
| «copiar de forma periódica[^2]) los archivos» | Paréntesis de cierre sobrante tras la llamada de nota | Quitar el paréntesis sobrante |
| Nota: los ejemplos de sintaxis de DokuWiki usan deliberadamente `__subrayado__` con guion bajo para ilustrar su propia sintaxis | No aplica la sustitución de guion bajo por asterisco aquí, ya que es un ejemplo literal de código, no una cursiva del texto | Mantener tal cual; solo convertir las cursivas reales del artículo (`_namespaces_`, `_tag_`, `_etiqueta_`, `_start_`, etc.) |

## la-escalera-de-jacob-jacob-ladder

| Fragmento | Problema | Corrección |
|---|---|---|
| «\[youtube=http://www.youtube.com/watch?v=I0kW6xuxtPU\]» | Resto de shortcode de WordPress sin convertir; no incrusta ningún vídeo | Sustituir por un enlace o incrustación real del vídeo |
| «\[1\] No sé si a alguien más...» | Nota con formato de corchete simple, distinto del estándar `[^1]` usado en el resto del blog | Convertir a nota al pie estándar |

## la-primera-ley-joe-abercrombie

Ya usa asteriscos para las cursivas (correcto). No se han detectado erratas relevantes.

## liebster-award

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Liebster Award_`, `_ad infinitum_`, `_mea culpa_`, `_1984_`, `_worldbuilding_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «¿Usarías el «crowfunding» para publicar?» | «crowfunding» está mal escrito | «crowd**f**unding» |

## lo-minimo-necesario

Sin erratas relevantes detectadas.

## long-time-no-see

Cursivas con guion bajo (`_inventio_`, `_fix-up_`) — sustituir por asteriscos. No se han detectado más erratas.

## los-reyes-hereticos-paul-kearney

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Los reyes heréticos_`, `_Las monarquías de Dios_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «se comienzan a recoger las **tempestadas** sembradas en la primera parte» | Palabra inexistente | «tempestad**es**» |
| Tres enlaces «[El viaje de Hawkwood](file:///C:/2011/04/05/el-viaje-de-hawkwood-paul-kearney/)» | Enlaces rotos: apuntan a una ruta local del disco duro (`file:///C:/...`), no a una URL del blog | Corregir a `/el-viaje-de-hawkwood-paul-kearney/` |
| «[aquí](file:///C:/Windows/Temp/WindowsLiveWriter-1385793485/...)» | Enlace roto: ruta temporal local de Windows Live Writer, no una URL válida | Sustituir por la URL real: `http://artifexplus.blogspot.com/2011/03/suscripcion-las-monarquias-de-dios.html` |
| «retorcerlo luego por cuenta—y riesgo— del autor» | Puntuación confusa; la expresión fija es «por cuenta y riesgo» | «por su cuenta y riesgo» |

## lugares-comunes-y-otras-hierbas-i-plot-armor

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_trope_`, `_plot armor_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Según **la** Diccionario de la Real Academia» | Discordancia de género («Diccionario» es masculino) | «Según **el** Diccionario...» |
| «\[youtube=http://www.youtube.com/watch?v=E\_E2ottUWGQ\]» | Resto de shortcode de WordPress sin convertir | Sustituir por un enlace o incrustación real |
| «(todo en uno, y gratis: eso es cara)» | Frase incompleta; probablemente falta «tener»: «eso es tener cara» | «eso sí que es tener cara» |

## mapa-o-brujula

| Fragmento | Problema | Corrección |
|---|---|---|
| «me doy cuenta que lo que escribí tiempo ha, pese a que en su momento era **un** versión casi definitiva» | Discordancia de género | «era **una** versión casi definitiva» |
| «Así que me **plantee**, sin quererlo, otro de los viejos temas» | Falta la tilde (pretérito, no presente de subjuntivo) | «me **planteé**» |

## mas-mapas-fantasticos

Sin erratas relevantes detectadas.

## mis-diez-libros-fetiche

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo en todos los títulos de la lista | Cursivas con guion bajo | Sustituir por asteriscos |
| «_Frankestein_, Mary Shelley» (aparece dos veces, en la lista y en el subtítulo) | Falta una «n»: «Frankenstein» | «Frankenstein» |
| «_Las aventuras de Arthur Gordon Pym_, de **Edgard** Allan Poe» | «Edgard» está mal escrito (tercera vez que aparece este error en el blog) | «Edgar Allan Poe» |
| «esa crueldad (_Homo homini lupus)_» | La cursiva no coincide con el paréntesis (incluye el paréntesis de cierre dentro de la cursiva, pero no el de apertura) | «(*Homo homini lupus*)» |

## narradores_ouroboros_1_de_2

| Fragmento | Problema | Corrección |
|---|---|---|
| «Debido a la longitud del artículo he optado por **dividido** en dos partes» | Forma verbal incorrecta | «he optado por **dividirlo** en dos partes» |
| «Como **la palabra mismo** bien indica» | Discordancia de género | «la palabra **misma**» |
| «personaje**-** foco» (con espacio antes del guion) | Inconsistente con el resto del artículo, que escribe «personaje-foco» sin espacio | Quitar el espacio |
| «1)         **El Señor de los Anillos.**» | Espacios sobrantes, resto de un copiado defectuoso | Un solo espacio |
| Cursivas con guion bajo en ejemplos (`_Yo_`, `_Caminé por la calle...`_, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |

## narradores_ouroboros_2_de_2

| Fragmento | Problema | Corrección |
|---|---|---|
| «frenó el automóvil con **un un** chirrido espantoso» | Palabra duplicada | «con un chirrido espantoso» |
| «había que rescatar cuanto **a ntes**», «Pedro sabía mucho **d e** estas cosas», «mamá que se **ma rchaba** de casa», «Aunque **ta mbién** deseas ver a mamá» | Espacios sueltos en mitad de palabras | «antes», «de», «marchaba», «también» |
| «me escondí **detras** de la pierna de papá» | Falta la tilde | «detrás» |
| «cuando bajamos del **ascesor**» | Falta la «n»: «ascensor» | «ascensor» |
| «sus gritos seguían **dandome** miedo» | Falta la tilde | «dándome» |
| «Cuando **ví** a mamá», «Le **dí** un beso» | Tilde indebida en monosílabo | «vi», «di» |
| «ella sonrió muy **debilmente**» | Falta la tilde | «débilmente» |
| «No tardó en **dormise**» | Falta la «r»: «dormirse» | «dormirse» |
| «la enfermera nos dijo que nos **marcharamos**» | Falta la tilde (subjuntivo) | «marcháramos» |
| «como aquella vez que fuimos a la **iglésia**» | Tilde indebida | «iglesia» |
| «el tío **Júlio**» | Tilde indebida (es llana terminada en vocal) | «Julio» |
| «**Ejemplo 3_._** Narrador en segunda persona y en futuro_._ Omnisciente_._» | Marcado de cursiva roto (guiones bajos sueltos tras los puntos) | Corregir el marcado, p. ej. «Ejemplo 3. Narrador en segunda persona y en futuro. Omnisciente.» |
| Cursivas con guion bajo en los ejemplos narrativos (bloques de texto completos) | Cursivas con guion bajo | Sustituir por asteriscos |

## nueva-ortografia-de-la-rae-fin-del-culebron

| Fragmento | Problema | Corrección |
|---|---|---|
| «Y por último, que no  se menciona **el la** cita de más arriba» | Doble espacio y preposición mal escrita («el la» en vez de «en la») | «que no se menciona **en** la cita de más arriba» |

## paradigmas-historicos

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_boutade_`, `_softcombat_`) | Cursivas con guion bajo | Sustituir por asteriscos |
| «se pueden batir **records** de ventas» (dentro de una cita) | Falta la tilde | «récords» *(errata del texto citado)* |
| «(__Association for Renaissance Martial Arts)__» | Marcado de negrita mal colocado respecto al paréntesis | «(**Association for Renaissance Martial Arts**)» |
| «(si **quiera** ligeramente)» | Debería ser una sola palabra | «siquiera ligeramente» |

## pecados-capitales

Cursivas con guion bajo abundantes (`_borrador_`, `_outline_`, `_per se_`, frases en cursiva a modo de pensamientos, etc.) — sustituir por asteriscos. No se han detectado más erratas relevantes.

## planificacion-literaria-metodo-snowflake-novela

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Snowflake Method_`, `_book proposal_`, `_sensu stricto_`, `_Point Of View_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Te enseñará mucho **sobre de** tus personajes» | Preposición redundante | «sobre tus personajes» |
| «no tienen **ni idealmente** de qué viene a continuación» | Parece un error de traducción; el sentido pide «ni idea» | «no tienen **ni idea** de qué viene a continuación» |
| «El conflicto del personaje (¿qué le **impode** alcanzar su objetivo?)» | Errata | «impide» |
| «Podéis **descarla** desde Google Docs» | Faltan letras | «descargarla» |

## planificar-una-escena

Cursiva con guion bajo puntual (`_grosso modo_`) — sustituir por asteriscos. No se han detectado más erratas relevantes; el artículo está limpio y bien estructurado.

## prejuicios-fantasia

| Fragmento | Problema | Corrección |
|---|---|---|
| «Buena parte de las historias fantasía se basan en paradigmas» | Falta la preposición «de» | «historias **de** fantasía» |
| «pero lo cierto la media obtiene un aprobado raspado» | Falta «es que» | «pero lo cierto **es que** la media obtiene...» |
| «se gane el interés de la crítica y público generalista.Y si amamos» | Falta un espacio tras el punto | «generalista. Y si amamos» |

## primera-sangre-adelanto-gratuito-de-sombras-y-ceniza-ya-en-amazon

Cursivas con guion bajo (`_Primera sangre_`, `_Sombras y ceniza_`) — sustituir por asteriscos. El encabezado «##» seguido de espacios en blanco antes de «Otros proveedores:» es un resto de formato descuidado; conviene revisarlo.

## proximamente-2

Solo contiene una imagen de portada; no hay texto que revisar.

## proximamente-ratas-en-el-callejon-cuentos-escabrosos-1

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Ratas en el callejón. Cuentos escabrosos, 1_`, `_Cuentos escabrosos_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «estará disponible el próximo **18 de mayo**» frente a «el próximo sábado **20 de mayo** tienen una cita conmigo» | Fechas de lanzamiento contradictorias dentro del mismo artículo | Unificar la fecha correcta |

## proximamente-runas-de-sangre

Cursivas con guion bajo (`_Runas de sangre_`, `_El señor de las profundidades_`, `_Los que no olvidan_`, `_Los desterrados_`, etc.) — sustituir por asteriscos. No se han detectado más erratas.

## ratas-en-el-callejon-formato-fisico

Sin erratas relevantes detectadas.

## ratas-en-el-callejon-ya-disponible

Cursivas con guion bajo (`_Ratas en el callejón. Cuentos escabrosos, 1_`, `_Cuentos escabrosos_`, etc.) — sustituir por asteriscos. No se han detectado más erratas.

## recapitulacion_2025

Entrada `draft: true`, prácticamente vacía (solo dos frases). No se ha revisado en profundidad por ser contenido incompleto.

## recapitulemos

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Un puente sobre el Drina_`, `_El testimonio de Yarfoz_`, `_Filos mortales_`, `_La primera ley_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «**_El testimonio de Yarfoz_**» (con cursiva) frente a «**El testimonio de Yarfoz**» unas palabras después (solo negrita, sin cursiva) | Formato inconsistente del mismo título en el mismo párrafo | Unificar el formato |
| «Soy especialmente adicto... de la obra de **Rafael Ferlosio**» | El autor se llama Rafael **Sánchez** Ferlosio | «Rafael Sánchez Ferlosio» |
| «Es curioso la de veces que he justificado...» | Posible discordancia de género («la de veces» pide «curiosa») | «Es curiosa la de veces que he justificado...» |

## recomendacion-estilo-rico-estilo-pobre-luis-magrinya

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Estilo rico, estilo pobre_`, `_o tempora, o mores_`) | Cursivas con guion bajo | Sustituir por asteriscos |
| «((Con ejemplos... que afirmaba _poseer algo de caspa))_» | El guion bajo de cierre de la cursiva está mal colocado, después del paréntesis doble de cierre | «((Con ejemplos... que afirmaba *poseer algo de caspa*))» |

## recursos-retoricos-1, 2, 3 y 4

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo en citas, términos latinos y títulos de la bibliografía (en las cuatro entregas) | Cursivas con guion bajo | Sustituir por asteriscos |
| Bibliografía: «GARCÍA BARRIENTOS... **3.a** ed.» frente a «SPANG... **3.ª** ed.» (se repite igual en las cuatro entregas) | Ordinal mal escrito («3.a» en vez de «3.ª»), inconsistente dentro de la misma bibliografía | «3.ª ed.» |
| (Recursos retóricos, 3) «la anticipación\[note\]También llamada ocupación...\[/note\]» | Etiqueta `[note]...[/note]` sin convertir, no genera una nota al pie real (el resto del blog usa `[^1]`) | Convertir a nota al pie estándar |
| (Recursos retóricos, 4) «Es un tipo de sinécdoque ; consiste en sustituir...» | Espacio sobrante antes del punto y coma | «sinécdoque; consiste...» |
| (Recursos retóricos, 4) La entrada anuncia «nos ocuparemos de dos recursos, la antítesis y el apóstrofe», pero en el cuerpo aparecen tres epígrafes: Antítesis, **Antonomasia** y Apóstrofe | Contradicción entre lo anunciado y el contenido real | Corregir la introducción para mencionar los tres recursos, o revisar si «Antonomasia» sobra |

## reescribir-una-escena

Cursivas con guion bajo (`_redraft_`, `_start late, get out early_`, `_infodump_`, `_Point of View_`) — sustituir por asteriscos. Artículo cuidado, sin más erratas detectadas.

## resea-la-vida-en-la-casa-de-un-mercader-medieval

| Fragmento | Problema | Corrección |
|---|---|---|
| «Un libro **como como** el que os presento hoy» | Palabra duplicada | «Un libro como el que os presento hoy» |
| «gracias a las bellas láminas del ilustrador **Girogio** Bacchin» | Nombre probablemente mal escrito (letras trastocadas) | «Giorgio Bacchin» |
| «la peste negra que **asueló** Europa» | Verbo incorrecto; el verbo es «asolar», no «asuelar» | «asoló» |
| Nombre de la carpeta/URL «resea-la-vida-en-la-casa-de-un-mercader-medieval» | Falta la «ñ» (y una «n») de «reseña» en la ruta | Revisar el slug si se desea corregir (no afecta al texto visible) |

## resena-capitan-blood-rafael-sabatini

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Capitán Blood_`, `_Scaramouche_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «**Rabel** Sabatini, italiano de origen...» | Nombre mal escrito | «Rafael Sabatini» |
| «Sus libros son atrapan desde la primera hasta la última de sus páginas» | Construcción agramatical («son atrapan») | «Sus libros **atrapan** desde la primera...» |
| «1 De hecho Sabatini no duda...» | Nota numerada sin el formato `[^1]` habitual del blog | Convertir a nota al pie estándar |

## resena-el-camino-de-las-sombras-brent-weeks

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_El Camino de las sombras_`, `_oficio amargo_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «este pasará **de la** admirarlo a distanciarse de él» | Artículo sobrante | «pasará **de** admirarlo...» |
| «_El Camino de las sombras_» (con «Camino» en mayúscula, al principio del artículo) frente a «_El camino de las sombras_» (con minúscula, en la conclusión) | Capitalización inconsistente del mismo título dentro del artículo | Unificar, preferiblemente en minúscula |

## resena-la-cosecha-samhein-cotrina

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_La cosecha de Samhein_`, `_Memorias de Idhún_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «impulsó a comprarme _La cosecha de **Samheim**_» | En el resto del artículo y en el título se escribe «Samhein»; aquí aparece «Samheim» | «La cosecha de Samhein» |

## resena-la-guerra-del-turco-fernando-martinez-lainez

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_remake_`, `_dramatis personae_`) | Cursivas con guion bajo | Sustituir por asteriscos |
| «una excelente introducción al conflicto entre **el** españoles y turcos» | Discordancia de número | «entre **los** españoles y turcos» |
| «\[youtube= http://www.youtube.com/watch?v=d9g9D6lhLJ4\]» | Resto de shortcode de WordPress sin convertir | Sustituir por un enlace o incrustación real |

## resena-los-tejedores-de-cabellos-andreas-eschbach-bibliopolis

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_Los tejedores de cabellos_`, `_bookcrossing_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «ha tenido un éxito indiscutible: premio Grand Prix de l'Imaginaire 2001, premios SFCD y Bob Morane), traducción al francés...» | Paréntesis de cierre sin apertura previa | Añadir el paréntesis de apertura antes de «premio Grand Prix» |
| «hay rumores que afirman **el emperador** podría haber caído derrocado» | Falta la conjunción «que» | «afirman **que** el emperador...» |
| «Con este misterio como mcguffin Eschbach teje» | Falta una coma tras el inciso; además, en la reseña de *El camino de las sombras* el mismo término aparece capitalizado y en cursiva («*MacGuffin*») | «Con este misterio como mcguffin, Eschbach teje...» |

## resenas-y-pecados

Cursivas con guion bajo (`_esto es cojonudo_`, `_La vida es sueño_`, cita final de Calderón) — sustituir por asteriscos. No se han detectado más erratas relevantes.

## runas-de-sangre-disponible-en-formato-fisico

Cursivas con guion bajo (`_Runas de sangre_`) — sustituir por asteriscos. No se han detectado más erratas.

## runas-de-sangre-ya-disponible

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursiva con guion bajo en la cita inicial («_—Tres vidas, capitán...precio del viento…_») | Cursiva con guion bajo | Sustituir por asteriscos |
| «En «El señor de las profundidades», «Los que no olvidan», «Runas de sangre» y «Los desterrados»» (aquí, entre comillas) frente a los mismos títulos en cursiva en «proximamente-runas-de-sangre» | Formato distinto para los mismos títulos de relato en dos entradas del blog | Unificar el formato (cursiva, preferiblemente) |

## sangre-y-acero-1

| Fragmento | Problema | Corrección |
|---|---|---|
| «_Sangre y Acero_» (cursiva con guion bajo, mayúscula), «*Sangre y acero*» (cursiva con asterisco, minúscula) y «Sangre y Acero» (sin cursiva, mayúscula), todo dentro del mismo artículo | Cursivas con guion bajo e inconsistencia de mayúsculas en el propio nombre del fanzine | Unificar formato y capitalización, p. ej. «*Sangre y acero*» siempre |

## sangre-y-acero-2

| Fragmento | Problema | Corrección |
|---|---|---|
| «de **Israel Sánchez** .» | Espacio sobrante antes del punto | «de Israel Sánchez.» |
| «la serie de Osprey **Elite** , en concreto» | Espacio sobrante antes de la coma | «Osprey **Elite**, en concreto» |
| Título «Sangre y **Acero** n.º 2» frente al de la entrada anterior, «Sangre y **acero** n.º 1» | Capitalización distinta del nombre del fanzine entre dos entradas consecutivas de la misma serie | Unificar la capitalización en toda la serie |

## sangre-y-acero-3

No se han detectado erratas relevantes.

## sangre-y-acero-4

| Fragmento | Problema | Corrección |
|---|---|---|
| «relato de **de** Eugenio Fraile La Ossa» | Palabra duplicada | «relato de Eugenio Fraile La Ossa» |
| «sección musical dedicada al grupo de _heavy Blind Guardian**.**_» | Marcado roto: mezcla cursiva (guion bajo) y negrita alrededor de un punto suelto | «...grupo de *heavy* Blind Guardian.» |

## sangre-y-acero-5

Cursivas con guion bajo (`_El señor de las profundidades_`, `_Tygra: Hielo y Fuego_`, `_El nigromante y sus bestias_`, `_El monstruo_`, `_Ruinas de muerte_`, `_Aruch Barbarroja_`, `_Rhapsody_`, `_power metal_`, `_El espartano_`, `_The Death Dealer_`, y en el texto alternativo de la imagen de portada) — sustituir por asteriscos.

## sangre-y-acero-6

No se han detectado erratas relevantes.

## sobre-el-amazon-kindle-ebook

| Fragmento | Problema | Corrección |
|---|---|---|
| `\[caption id="" align="aligncenter"...\]...\[/caption\]` (dos veces) | Resto de shortcode de WordPress sin convertir | Sustituir por el pie de imagen real |
| «unos 3GB disponibles para el usuario» frente a «3,3 gigabytes de uso propio» (más abajo) | Cifra de almacenamiento disponible inconsistente dentro del mismo artículo | Unificar la cifra |

## sobre-la-organizacion-de-una-novela-planificacion-literaria-ii

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursiva con guion bajo (`_space-opera_`) | Cursiva con guion bajo | Sustituir por asteriscos |
| «se pueden hacer tablas **mucho** complejas» | Falta «más» | «tablas mucho **más** complejas» |
| «### **De los d****ocumentos**» | Marcado de negrita roto, partiendo la palabra «documentos» | «### De los documentos» |
| «**Fichas de personaje: **\[Opcional\]****» | Asteriscos de negrita sobrantes/mal cerrados | «Fichas de personaje: \[Opcional\]» |

## sobre-sombras-y-ceniza-1-quid

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo, muy abundantes (`_Sangre y acero_`, `_Runas de sangre_`, `_Sombras y ceniza_`, `_grimdark_`, `_dispositio_`, títulos de obras citadas, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Que espero no se **demoré** mucho» | Tiempo verbal incorrecto (pretérito en vez de subjuntivo) | «que espero no se **demore** mucho» |

## sombras-y-ceniza-por-fin

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursiva con guion bajo (`_Sombras y ceniza_`) | Cursiva con guion bajo | Sustituir por asteriscos |
| `\[download id="4695"\]` | Resto de shortcode de WordPress sin convertir | Sustituir por un enlace de descarga real |
| «\[esta\](/sobre-la-autopublicacion-y-otras-hogueras-de-las-vanidades/;)» | Punto y coma sobrante dentro de la URL | Eliminarlo |
| «\[esta\](<http:// /autoedicin-digital-o-el-nuevo-parnaso/>)» | Enlace roto (falta el dominio) | Corregir la URL |

## suspension-incredulidad-fantasia

| Fragmento | Problema | Corrección |
|---|---|---|
| «Conocedor de la narrativa fantástica, pero no necesariamente **familiarizada** con ella» | Discordancia de género («Conocedor»... «familiarizada») | «...pero no necesariamente **familiarizado** con ella» |

## tal-y-como-lo-imaginaste-o-no

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo, abundantes (`_Canción de Hielo y Fuego_`, `_El Señor de los Anillos_`, `_H_`, `_h_`, `_i_`, etc.) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Con _Game of_ Thrones sucederá lo mismo» | Cursiva cerrada antes de tiempo, deja «Thrones» fuera | «Con *Game of Thrones* sucederá lo mismo» |
| «a los que se rasgan las vestiduras porque no se **_captado la esencia_**» | Falta el auxiliar «haya» | «porque no se **haya captado** la esencia» |
| «\[youtube=http://www.youtube.com/watch?v=Erm19Kdplz4\]» | Resto de shortcode de WordPress sin convertir | Sustituir por un enlace o incrustación real |

## tratamiento-del-elemento-preternatural-en-la-literatura-fantastica

| Fragmento | Problema | Corrección |
|---|---|---|
| Cursivas con guion bajo (`_de dónde_`, `_cómo y por qué_`) | Cursivas con guion bajo | Sustituir por asteriscos |
| «Fuente: recurso material o inmaterial de **dónde** se obtiene la energía» | Tilde indebida: aquí «donde» es relativo, no interrogativo (a diferencia de «¿de dónde proviene…?», que sí lleva tilde) | «de **donde** se obtiene la energía» |
| «1.1. Posición de la fuente respecto al agente.» / «1.1. Definición física de la fuente.» / «1.1. Influencia de la fuente sobre el agente.» | Los tres puntos están numerados como «1.1», cuando deberían ser 1.1, 1.2 y 1.3 (como luego se etiquetan correctamente los epígrafes) | Renumerar como 1.1, 1.2 y 1.3 |
| «**Agente:** el que realiza el acto preternatural (...). Fuente: recurso material...» | «Fuente» aparece como una definición nueva metida dentro del párrafo de «Agente», sin su propio encabezado en negrita como el resto de términos | Separar «Fuente» como entrada propia, en negrita |

## vicios-del-estilo