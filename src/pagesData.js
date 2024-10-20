import { SECTION, MEDIA_TYPE, MEDIA_SIZE } from './models/project.enum.js';


/*VARIABLE PARA CAMBIAR LA WEB A LA VERSIÓN DE CADA UNO*/
/*JORGE = 0 ROSER = 1 */
export const pageId = 1

export const pagesData = [
  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO TEST
  //----------------------------------------------------------------------------------------------------------------
  {
    // 0
    id: 0,
    category: SECTION.TEST,
    navTitle: 'Test',
    pathNav: '/projects/test',
    title: 'Test: The Test Project',
    details: {
      media: 'test-media',
      year: '0000',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: 'https://picsum.photos/200/300',
      alt: 'Test image',
    },
    description: {
      texts: [
        {
          text: 'Test description',
        },
      ],
    },
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: 'https://picsum.photos/200/300',
        alt: 'Test image',
        caption: 'Test Caption',
      },
    ],
  },
  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 1 (orden 1)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 1,
    category: SECTION.PROYECTOSJORGE,
    navTitle: 'Negroponte',
    pathNav: '/projects/Negroponte',
    title: 'Negroponte',
    details: {
      media: 'A/V',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/negroponte/negroponte_featured.webp',
      alt: 'Portada del EP Negroponte',

    },
    description:
    {
      header: null,
      externalLink: "https://riunet.upv.es/handle/10251/149880",
      texts:
        [
          {
            language: 'es',
            value: `NEGROPONTE es un proyecto audiovisual, cuyo objetivo es profundizar en las relaciones fundamentales entre música e imagen.`,
          },
          {
            language: 'en',
            value: `NEGROPONTE is an audiovisual project with the objective of exploring the root relations between music and image`,
          },
        ],

    },
    media: [
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: 'BlqZmdY4-NQ?si=BozOVlQhx9Qssidf',
        alt: 'Video del EP completo',

      },
      {
        type: MEDIA_TYPE.SPOTIFY,
        src: 'https://open.spotify.com/embed/album/4lFfj4We5ctZG9IzqRVxzA?utm_source=generator',
        alt: '',

      },
      {
        size: MEDIA_SIZE.LARGE,
        type: MEDIA_TYPE.IMAGE,
        src: '/images/negroponte/negroponte_4.webp',
        alt: 'Negroponte, musica visual, jorge dabaliña, audiovisualización, EP',

      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/negroponte/negroponte_5.webp',
        alt: 'Negroponte, musica visual, jorge dabaliña, audiovisualización, EP',

      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/negroponte/negroponte_2.webp',
        alt: 'Negroponte, musica visual, jorge dabaliña, audiovisualización, EP',

      },
      
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 2 (orden 7)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 7,
    category: SECTION.PROYECTOSJORGE,
    navTitle: 'Exploración entrelazada',
    pathNav: '/projects/exploracionEntrelazada',
    title: 'Exploración entrelazada',
    details: {
      media: 'Video',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/entrelazada/entrelazada_featured.webp',
      alt: 'Proyección de Exploración entrelazada en la Fachada Media de Etopía (Zaragoza)',


    },
    description:
    {
      header: null,
      externalLink: null,
      texts: [
        {
          language: 'en',
          value:
            `«Exploración Entrelazada» is not only a tribute to past video sampling technologies but also a reflection on the creative process and its unpredictable nature. By adopting an approach that welcomes errors and serendipitous discoveries, the work draws on these incidents to enrich its visual and conceptual language. This methodological approach reflects adaptability and openness, highlighting the inherent beauty in imperfection and experimentation. Projected onto the facade of a building in Zaragoza, the piece benefits from a low-resolution support that, far from being a limitation, amplifies the expressive possibilities of the project, freeing it from conventional resolution constraints and allowing an unprecedented exploration in form and content.
          
The premiere and continuous screening will take place throughout August at the Fachada Media of Etopia Centro de Arte y Tecnología (Zaragoza).`,
        },
        {
          language: 'es',
          value:
            `«Exploración Entrelazada» no solo es un homenaje a las tecnologías de muestreo de video del pasado, sino también una reflexión sobre el proceso creativo y su naturaleza impredecible. Adoptando un enfoque que acoge errores y descubrimientos fortuitos, la obra se nutre de estas incidencias para enriquecer su lenguaje visual y conceptual. Este enfoque metodológico refleja una adaptabilidad y apertura que resalta la belleza inherente en la imperfección y la experimentación. Proyectada en la fachada de un edificio en Zaragoza, la pieza se beneficia de un soporte de baja resolución que, lejos de ser una limitación, amplifica las posibilidades expresivas del proyecto, liberándolo de las restricciones convencionales de resolución y permitiendo una exploración sin precedentes en la forma y el contenido.
          
Estreno y proyección continua durante el mes de agosto en la Fachada Media de Etopia Centro de Arte y Tecnología (Zaragoza).`,
        },
      ],
    },
    media: [

      {
        type: MEDIA_TYPE.YOUTUBE,
        src: 'kSesEkcWuhw?si=BPeoIFJxXldAjV8A',
        alt: 'Exploración entrelazada - Video Academia Fachada Media',

      },
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: '6pwbap02hjs?si=jZbKMlnNvVqvN2o4',
        alt: 'Exploración entrelazada - Video Academia Fachada Media',

      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/entrelazada/entrelazada_1.webp',
        alt: 'Fotografía de la fachada media proyectando Exploración',

      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 3 (orden 4)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 4,
    category: SECTION.PROYECTOSJORGE,
    navTitle: 'Del otro lado',
    pathNav: '/projects/delotrolado',
    title: 'Del otro lado',
    details: {
      media: 'Video',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.YOUTUBE,
      src: '6ZEjyrW1N_I?si=q6NtNM-CQEhf0TFz',
      alt: 'Shortfilm. Jorge Dabaliña - Del otro lado (2021)',

    },
    description: {
      header: null,
      externalLink: null,
      texts: [
        {
          language: 'es',
          value: `Jorge Dabaliña, Del otro lado.
Cortometraje experimental. Duración: 5'45".
Premiado en Short PAM!21” en La Filmoteca, Valencia`,

        },
        {
          language: 'en',
          value: `Jorge Dabaliña, Del otro lado.
Experimental short film. Duration: 5'45".
Premiered in Short PAM!21” in La Filmoteca, Valencia`,
        },
      ],
    },
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/delotrolado/delotrolado_featured.webp',
        alt: 'Fotograma extraído de Del otro lado - Jorge Dabaliña',

      },
      {
        type: MEDIA_TYPE.QUOTE,
        quotes: [
          {
            language: 'es',
            quoteText: `La calle puede ser observada a través del cristal de una ventana, de modo que sus ruidos nos lleguen amortiguados, los movimientos se vuelvan fantasmales y toda ella, pese a la transparencia del vidrio rígido y frío, aparezca como un ser latente, «del otro lado». 
`,
            author: "(Kandinsky, 1926)"
          },
          {
            language: 'en',
            quoteText: `The street can be observed through the window pane, which diminishes its sounds so that its movements become phantom-like. The street itself, as seen through the transparent ,yet hard and firm, pane seems set apart, existing and pulsating as if «beyond».
(Kandinsky, 1926)`,
            author: "(Kandinsky, 1926)"
          },
        ],
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 4 (orden 3)
  //----------------------------------------------------------------------------------------------------------------
 /* {
    id: 3,
    category: SECTION.PROYECTOSJORGE,
    navTitle: 'Materia eléctrica',
    pathNav: '/projects/materiaelectrica',
    title: 'Materia eléctrica',
    details: {
      media: 'Instalación',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/electrica/PAM2.webp',
      alt: 'Materia Eléctrica Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
    },
    description: {
      header: null,
      externalLink: null,
      texts: [
        {
          language: 'es',
          value: `«Materia Eléctrica» es un sistema de vídeo de circuito cerrado donde la señal fluye sin necesidad de ser grabada en ningún tipo de soporte. Las cámaras de vigilancia instaladas detectan el movimiento y el espectador es el primer eslabón de una cadena de transmutaciones a las que se somete la imagen. «Materia Eléctrica» de Jorge Dabaliña es una instalación presentada en conjunto con «Sons i sorolls» de Roser Domingo.Las dos propuestas se entrelazan entre sí para establecer nuevos diálogos de comunicación entre el mundo analógico y el digital y permitir una experiencia interactiva autogenerativa.

Instalación audiovisual interactiva expuesta y premiada en la exposición «PAM!21, IX Muestra de Producciones Artísticas y Multimedia» de la Facultad de Bellas Artes de la Universitat Politècnica de València.`,
        },
        {
          language: 'en',
          value: `«Materia Eléctrica» is a closed-circuit video system where the signal flows without the need to be recorded on any medium. The installed surveillance cameras detect movement, and the viewer becomes the first link in a chain of transformations to which the image is subjected. «Materia Eléctrica» by Jorge Dabaliña is an interactive installation presented with «Sons i sorolls» by Roser Domingo. The two proposals intertwine to establish new dialogues of communication between the analog and digital worlds, allowing for a self-generative interactive experience.
      
This interactive audiovisual installation was exhibited and awarded at the «PAM!21, IX Muestra de Producciones Artísticas y Multimedia» at the Faculty of Fine Arts of the Universitat Politècnica de València.`,
          
        },
      ],
    },
    media: [
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: '57H8hi3NkBc?si=b7wCtua3kGPXoo1_',
        alt: 'Video Materia Eléctrica y Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/electrica/PAM1.webp',
        alt: 'Materia Eléctrica y Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/electrica/PAM3.webp',
        alt: 'Materia Eléctrica y Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/electrica/PAM4.webp',
        alt: 'Materia Eléctrica y Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
      },
    ],

  }, */

  {
    id: 3,
    category: SECTION.PROYECTOSROSER,
    navTitle: 'Sons i sorolls',
    pathNav: '/projects/sonsisorolls',
    title: 'Sons i sorolls',
    details: {
      media: 'Instalación',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/electrica/PAM2.webp',
      alt: 'Materia Eléctrica y Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
    },
    description: {
      header: null,
      externalLink: null,
      texts: [
        {
          language: 'es',
          value: `«Sons i sorolls» de Roser Domingo es una instalación sonora presentada en conjunto con «Materia Eléctrica» de Jorge Dabaliña. «Sons i sorolls» consiste en una instalación interactiva octofónica que cuestiona la relación sinestésica entre imagen y sonido. Modifica el resultado según lo que ocurre a su alrededor. Las dos propuestas se entrelazan entre sí para establecer nuevos diálogos de comunicación entre el mundo analógico y el digital y permitir una experiencia interactiva autogenerativa.

Instalación audiovisual interactiva expuesta y premiada en la exposición «PAM!21, IX Muestra de Producciones Artísticas y Multimedia» de la Facultad de Bellas Artes de la Universitat Politècnica de València.`,
        
        },
        {
          language: 'en',
          value: `«Sons i sorolls» by Roser Domingo is a sound installation presented with «Materia Eléctrica» by Jorge Dabaliña. «Sons i sorolls» is an interactive octophonic installation that questions the synesthetic relationship between image and sound, altering the result based on what happens around it. The two proposals intertwine to establish new dialogues of communication between the analog and digital worlds, allowing for a self-generative interactive experience.
          
This interactive audiovisual installation was exhibited and awarded at the «PAM!21, IX Muestra de Producciones Artísticas y Multimedia» at the Faculty of Fine Arts of the Universitat Politècnica de València.`,
        },
      ],
    },
    media: [
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: '57H8hi3NkBc?si=b7wCtua3kGPXoo1_',
        alt: 'Video Materia Eléctrica y Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
      },
      {
        type: MEDIA_TYPE.SOUNDCLOUD,
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1935387332&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        alt: 'Audio Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
      },

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/electrica/PAM3.webp',
        alt: 'Materia Eléctrica y Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/electrica/PAM4.webp',
        alt: 'Materia Eléctrica y Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/electrica/PAM1.webp',
        alt: 'Materia Eléctrica y Sons i sorolls Instalación interactiva PAM!21 Facultad Bellas Artes Universitat Politècnica de València',
      },
    ],

  },


  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 5 (orden 9)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 9,
    category: SECTION.PROYECTOSAMBOS,
    navTitle: '1.1 Grados',
    pathNav: '/projects/1.1grados',
    title: '1.1 Grados',
    details: {
      media: 'Proyecto',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/grados/grados5.webp',
      alt: 'Interferencia cromática 1.1 Grados proyecto',

    },
    description: {
      header: null,
      externalLink: "unopuntouno.xyz",
      texts: [
        {
          language: 'en',
          value:
            `At the end of 2021, Valencian physicist Pablo Jarillo-Herrero made a discovery while working with graphene (a material composed of carbon atoms arranged in a hexagonal pattern, in a layer only one atom thick). By placing two layers on top of each other and rotating them at the «magic angle», the physical properties of the material are altered, turning it into a superconductor (a scientific breakthrough with huge implications in fields like electronics). This so-called magic angle appears when the layers are rotated by 1.1 degrees, and it serves as the starting point for this artistic research focused on analyzing the visual and sound elements that can be derived from it. The project was made possible by the creation of several visual systems for generating art, based on the interpretation of certain scientific knowledge from our perspective as artists.`,

        },
        {
          language: 'es',
          value:
            `A finales de 2021, el físico valenciano Pablo Jarillo-Herrero realizó un descubrimiento trabajando con el grafeno (un material compuesto por átomos de carbono en forma de hexágono, en una capa de un solo átomo de espesor). Al colocar dos capas superpuestas y rotadas con el ángulo mágico, se alteran las propiedades físicas del material, convirtiéndolo en superconductor (avance científico que tiene unas implicaciones gigantes en campos como la electrónica). Este denominado ángulo mágico aparece al rotar las capas 1.1 grados, y es el punto de partida de esta investigación artística centrada en el análisis de los elementos visuales y sonoros que se pueden derivar de él. El proyecto fue posible gracias a la creación de varios sistemas visuales para la generación de arte, que se han basado en la interpretación de cierto conocimiento científico desde nuestro punto de vista como artistas.`,

        },
      ],
    },
    media: [

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/grados/Web3.gif',
        alt: 'Proyecto 1.1 Grados Performance audiovisual A/V La Mutant Valencia',
      },

      {
        type: MEDIA_TYPE.TEXT,
        texts: [
          {
            language: 'es',
            value: `Proyecto premiado en la convocatoria de «Residencias artísticas y culturales 2021» de la Concejalía de Juventud y en las «Residencias de Creación Artística 2021» de la Concejalía de Acción Cultural del Ayuntamiento de València.
            
Ha sido presentado en La Mutant (València), en el stand de Juventud del Ayuntamiento de València en «ExpoJove» en Feria Valencia, en la presentación de las «Residencias artísticas y culturales 2021» en el Espai Jove VLC (València) y en «Expociència 2022» en el Parc Científic de la Universitat de València. 

La versión interactiva en formato web fué seleccionada en la convocatoria de «Cultura Online #CMCVaCasa 2023» del Consorci de Museus de la Comunitat Valenciana y expuesta en la sala Ferreres Goerlich del Centre del Carme Cultura Contemporània (València) del 11 de mayo al 9 de julio de 2023.`,
          },
          {
            language: 'en',
            value: `Project awarded in the «Residencias artísticas y culturales 2021» competition by the Youth Department and the «Residencias de Creación Artística 2021» by the Department of Cultural Action of the València City Council.
            
Exhibited and showcased at La Mutant (València), at the Youth Department stand of the València City Council in «ExpoJove» at Feria Valencia, at the presentation of the «Residencias artísticas y culturales 2021» in the Espai Jove VLC (València), and at «Expociència 2022» in the Parc Científic of the Universitat de València.

Interactive website selected in the «Cultura Online #CMCVaCasa 2023» competition by the Consorci de Museus de la Comunitat Valenciana and exhibited at the Ferreres Goerlich room of the Centre del Carme Cultura Contemporània (València) from May 11 to July 9, 2023.`,
          },
        ]
      },




      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/grados/grados9.webp',
        alt: 'Proyecto 1.1 Grados exposición Espai Jove Ayuntamiento Valencia',
      },

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/grados/grados2.webp',
        alt: 'Proyecto 1.1 Grados Performance audiovisual A/V La Mutant Valencia',
      },

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/grados/grados6.webp',
        alt: 'Proyecto 1.1 Grados superposición de tres capas de hexágonos',
      },
      {
        type: MEDIA_TYPE.CODE,
        codeText: `function createHexGrid(gs, w, m) {
          var r = ((w - margin) / (gs * 3 - 1));
          var hexW = sqrt(3) * r;
          var hexH = (2 * r);
          var rowAdd = 0;
          let start = createVector(
              (hexW / 2) * (gs - 1),
              (-hexH * 0.75) * (gs - 1)
          );
          for (let i = 0; i < (gs * 2) - 1; i++) {
              for (let y = 0; y < gs + rowAdd; y++) {
                  polygon(start.x - ((hexW) * y), start.y, r, m, 6);
              }
              if (i >= gs - 1) {
                  rowAdd -= 1;
                  start.x -= hexW / 2;
              } else {
                  rowAdd += 1;
                  start.x += hexW / 2;
              }
              start.y += hexH * 0.75;
          }
      }
      
      function polygon(x, y, r, m, n) {
          let a = TWO_PI / n;
          beginShape();
          vertex(x, y)
          r = r - m;
          for (let i = 0; i < TWO_PI; i += a) {
              let sx = x + sin(i) * r;
              let sy = y + cos(i) * r;
              vertex(sx, sy);
          }
          endShape();
      }`,
      },

      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/grados/grados8.webp',
        alt: 'Proyecto 1.1 Grados superposición de tres capas de hexágonos',
      },

    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 7 (orden 11)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 11,
    category: SECTION.PROYECTOSAMBOS,
    navTitle: 'Tiempo profundo',
    pathNav: '/projects/tiempoprofundo',
    title: 'Tiempo profundo',
    details: {
      media: 'A/V Performance',
      year: '2022',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/tiempo/TP1.webp',
      alt: 'Performance audiovisual A/V Tiempo profundo La Fábrica de Hielo Volumens Valencia',
    },
    description: {
      header: null,
      externalLink: null,
      texts: [
        {
          language: 'es',
          value: `«Tiempo profundo» trata de incidir en la tensión entre el tiempo real de la actuación y el tiempo geológico que se desarrolla en un plano externo al humano. Se calcula que la Tierra tiene una edad de 4540 millones de años, y en ella encontramos procesos que no se han detenido, pero que desde las ópticas humanas parecen ser completamente estáticos. Buscando acercar estos procesos a la naturaleza inmediata de la performance audiovisual, se invita a los espectadores a dejarse llevar hacia lo más profundo de nuestro planeta.`,

        },
        {
          language: 'en',
          value: `«Tiempo profundo» aims to address the tension between the real-time of the performance and the geological time that unfolds on a plane beyond human perception. It is estimated that the Earth is 4.54 billion years old, and within it, we find processes that have not ceased, but from a human perspective, appear to be completely static. Seeking to bring these processes closer to the immediate nature of the audiovisual performance, the audience is invited to delve into the deepest layers of our planet.`,
        },
      ],
    },
    media: [
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: 'H5YMcL7HV2c?si=Z0FdTGeFGMove0uT',
        alt: 'Performance audiovisual A/V Tiempo profundo Casal Jove Port de Sagunt Valencia',
      },
      {
        type: MEDIA_TYPE.TEXT,
        texts: [
          {
            language: 'es',
            value: `Proyecto desarrollado por Jorge Dabaliña y Roser Domingo. Realizado en las «Jornadas de Sonología 2023» en el auditorio del Conservatorio Superior de Música «Joaquín Rodrigo» de València, en «CampD.lab» en el Casal Jove del Port de Sagunt, en el «Seminario Sónico» de la Universidad de Alicante en Las Cigarreras, en el congreso «Paisaje y sostenibilidad: Escuchando la diversidad» en Matadero (Madrid), en el festival «Volumens 2022» en La Fábrica de Hielo (València), en la LASERTALK Leonardo «Futuros pasados ACTS en Valencia» en Veles e Vents (València) y en el «Festival Internacional de Cortometrajes» en Radiocity (València).`,
          },
          {
            language: 'en',
            value: `Project developed by Jorge Dabaliña and Roser Domingo. Performed at the «Jornadas de Sonología 2023» at the auditorium of the Conservatorio Superior de Música Joaquín Rodrigo de València, at «CampD.lab» in the Casal Jove del Port de Sagunt, at the «Seminario Sónico» of the Universidad de Alicante in Las Cigarreras, at the conference «Paisaje y sostenibilidad: Escuchando la diversidad» in Matadero (Madrid), at the «Volumens 2022» festival at La Fábrica de Hielo (València), at the LASERTALK Leonardo «Futuros pasados ACTS en Valencia» in Veles e Vents (València), and at the «Festival Internacional de Cortometrajes» in Radiocity (València).`,
          },
        ]
      },

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/tiempo/TP2.webp',
        alt: 'Performance audiovisual A/V Tiempo profundo Conservatorio Superior de Música Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/tiempo/TP3.webp',
        alt: 'Performance audiovisual A/V Tiempo profundo Casal Jove Port de Sagunt Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/tiempo/TP5.webp',
        alt: 'Performance audiovisual A/V Tiempo profundo Matadero Madrid',
      },
      /* {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/tiempo/TP4.webp',
        alt: 'Performance audiovisual A/V Tiempo profundo Matadero Madrid',
      }, */
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/tiempo/TP7.gif',
        alt: 'Performance audiovisual A/V Tiempo profundo Matadero Madrid',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/tiempo/TP6.webp',
        alt: 'Performance audiovisual A/V Tiempo profundo Matadero Madrid',
      },

    ],

  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 8 (orden 13)
  //----------------------------------------------------------------------------------------------------------------
  {
    // 8
    id: 13,
    category: SECTION.PROYECTOSAMBOS,
    navTitle: 'Intra-señales',
    pathNav: '/projects/intra-señales',
    title: 'Intra-señales',
    details: {
      media: 'A/V Performance',
      year: '2023',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/intra-señales/Intra-señales3.webp',
      alt: 'Intra-señales Performance audiovisual A/V Juventud Espai Jove Ayuntamiento Valencia',
    },
    description: {
      header: null,
      externalLink: null,
      texts: [
        {
          language: 'es',
          value:
            `El «feedback» es un mecanismo concreto que aparece, siempre que la energía, señal, mensaje u otro tipo de contenido, es redirigido a su emisor formando un bucle. Esta configuración convierte esta energía en un fluido que puede transformarse a medida que circula por el bucle. «Intra-Señales» es una performance audiovisual basada en el trabajo directo y manual con dispositivos tecnológicos de imagen y sonido, utilizando la retroalimentación como eje vertebrador de la propuesta. En este live trabajamos con señales de vídeo o audio que se repiten y se transforman en un proceso iterativo, donde la imagen afecta a la transformación del sonido y, a la inversa, el sonido produce nuevas imágenes de la nada.

Proyecto realizado por Jorge Dabaliña y Roser Domingo y premiado en la convocatoria de «Residencias artísticas y culturales 2022» de la Concejalía de Juventud del Ayuntamiento de València. 
`,
        },
        {
          language: 'en',
          value:
            `Feedback is a specific mechanism that appears whenever energy, signals, messages, or other types of content are redirected to their source, forming a loop. This configuration turns the energy into a fluid that can transform as it circulates through the loop. «Intra-Señales» is an audiovisual performance based on direct, manual work with technological devices for image and sound, using feedback as the backbone of the proposal. In this live performance, we work with video or audio signals that repeat and transform in an iterative process, where the image affects the transformation of the sound and, conversely, the sound produces new images out of nothing.

Project created by Jorge Dabaliña and Roser Domingo and awarded in the 2022 «Residencias artísticas y culturales» competition by the Youth Department of the València City Council.
`,
        },
      ],
    },
    media: [

      {
        type: MEDIA_TYPE.YOUTUBE,
        src: 'rV_PSqsJo70?si=JND-KXjmeSJkcHMv',
        alt: 'Intra-señales Performance audiovisual A/V Juventud Espai Jove Ayuntamiento Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/intra-señales/Intra-señales1.webp',
        alt: 'Intra-señales Performance audiovisual A/V Juventud Espai Jove Ayuntamiento Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/intra-señales/Intra-señales2.webp',
        alt: 'Intra-señales Performance audiovisual A/V Juventud Espai Jove Ayuntamiento Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/intra-señales/Intra-señales4.webp',
        alt: 'Intra-señales Performance audiovisual A/V Juventud Espai Jove Ayuntamiento Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/intra-señales/Intra-señales5.webp',
        alt: 'Intra-señales Performance audiovisual A/V Juventud Espai Jove Ayuntamiento Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/intra-señales/Intra-señales6.webp',
        alt: 'Intra-señales Performance audiovisual A/V Juventud Espai Jove Ayuntamiento Valencia',
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 9 (orden 15)
  //----------------------------------------------------------------------------------------------------------------

  {
    id: 15,
    category: SECTION.PROYECTOSAMBOS,
    navTitle: 'Sistema nervioso extendido',
    pathNav: '/projects/sne',
    title: 'Sistema Nervioso Extendido #1 (Vista)',
    details: {
      media: 'Instalación',
      year: '2023',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/sne/SNE6.webp',
      alt: 'Instalación Sistema Nervioso Extendido PAM!PAM!22 Atarazanas Valencia',
    },
    description: {
      header: null,
      externalLink: null,
      texts: [
        {
          language: 'es',
          value:
            `«Sistema Nervioso Extendido #1 (Vista)» surge como una lente para examinar este continuo en constante expansión de datos e identidades. En este entorno, cada cuerpo, cada espectador, se convierte en un nodo, en un sistema de información oscilando entre estados materiales y energéticos. A través de este proceso, la instalación se convierte en un espejo donde el espectador contribuye a formar un autorretrato temporal estratificado y al mismo tiempo nos invita a reflexionar sobre nuestra relación con la tecnología, la información y nuestra propia identidad, en un mundo en constante transformación.

Instalación realizada por Jorge Dabaliña y Roser Domingo. Formó parte de la exposición «PAM!PAM!22 Proyectos Artísticos y Multimedia», llevada a cabo del 28 de septiembre al 19 de noviembre de 2023, en las Atarazanas del Grao (València) del Ayuntamiento de València. 
`,
        },
        {
          language: 'en',
          value:
            `«Sistema Nervioso Extendido #1 (Vista)» emerges as a lens to examine this constantly expanding continuum of data and identities. In this environment, each body, each spectator, becomes a node in an information system oscillating between material and energetic states. Through this process, the installation becomes a mirror where the spectator helps form a layered, temporary self-portrait and at the same time invites us to reflect on our relationship with technology, information, and our own identity in a constantly transforming world.

Installation created by Jorge Dabaliña and Roser Domingo. It was part of the exhibition «PAM!PAM!22 Proyectos Artísticos y Multimedia», held from September 28 to November 19, 2023, at the Atarazanas del Grao (València) of the València City Council.
`,
        },

      ],
    },
    media: [
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: 'HufFu-pd8pU?si=vQkAXTnEIdzwgiSV',
        alt: 'Instalación Sistema Nervioso Extendido PAM!PAM!22 Atarazanas Valencia',
      },
      {
        type: MEDIA_TYPE.QUOTE,
        quotes: [
          {
            language: 'es',
            quoteText: "Al situar el cuerpo físico dentro del sistema nervioso extendido con los medios eléctricos, hemos desencadenado una dinámica por la cual todas las tecnologías anteriores, que no son sino meras extensiones de las manos, de los pies, de los dientes y de la termorreguación (todas ellas, ciudades incluidas, extensiones de nuestro cuerpo), serán traducidas en sistemas de información.",
            author: 'Marshall McLuhan, 1964'
          },
          {
            language: 'en',
            quoteText: "Al situar el cuerpo físico dentro del sistema nervioso extendido con los medios eléctricos, hemos desencadenado una dinámica por la cual todas las tecnologías anteriores, que no son sino meras extensiones de las manos, de los pies, de los dientes y de la termorreguación (todas ellas, ciudades incluidas, extensiones de nuestro cuerpo), serán traducidas en sistemas de información.",
            author: 'Marshall McLuhan, 1964'
          },
        ]
      },

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sne/SNE3.webp',
        alt: 'Instalación Sistema Nervioso Extendido PAM!PAM!22 Atarazanas Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sne/SNE4.webp',
        alt: 'Instalación Sistema Nervioso Extendido PAM!PAM!22 Atarazanas Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sne/SNE2.webp',
        alt: 'Instalación Sistema Nervioso Extendido PAM!PAM!22 Atarazanas Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sne/SNE7.webp',
        alt: 'Instalación Sistema Nervioso Extendido PAM!PAM!22 Atarazanas Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sne/SNE0.webp',
        alt: 'Instalación Sistema Nervioso Extendido PAM!PAM!22 Atarazanas Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/sne/SNE8.webp',
        alt: 'Instalación Sistema Nervioso Extendido PAM!PAM!22 Atarazanas Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/sne/SNE5.webp',
        alt: 'Instalación Sistema Nervioso Extendido PAM!PAM!22 Atarazanas Valencia',
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 10 (orden 16)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 16,
    category: SECTION.PROYECTOSAMBOS,
    navTitle: 'Interferencia',
    pathNav: '/projects/interferencia',
    title: 'Interferencia',
    details: {
      media: 'Instalación',
      year: '2023',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/interferencia/Interferencia2.webp',
      alt: 'Instalación Interferencia Espacio N-1 Biblioteca Central Universitat Politècnica de València UPV Valencia',
    },
    description: {
      header: null,
      externalLink: null,
      texts: [
        {
          language: 'es',
          value: `La palabra «interferencia» está comunmente asociada con fallos en la transmisión de señales que interrumpen el flujo natural de procesos. No obstante, en ciertos contextos puede actuar como un catalizador necesario para el cambio. «Interferencia» es un recordatorio de que los sistemas y procesos establecidos pueden y deben ser cuestionados continuamente para adaptarse a nuevas realidades. En esta instalación, las anomalías se transforman en un mosaico vibrante. Se explora la interferencia como una manifestación volátil pero vital en nuestro tiempo, una reflexión sobre la naturaleza fluida y dinámica de nuestra realidad contemporánea.

Instalación realizada por Jorge Dabaliña y Roser Domingo. Formó parte de la exposición «Paisajes alterados: proyecto de arte, guerra y ecología», llevada a cabo del 17 de noviembre de 2023 al 19 de enero de 2024, en el Espacio N-1 de la Universitat Politècnica de València. `
        },
        {
          language: 'en',
          value: `The word «interference» is commonly associated with signal transmission failures that interrupt the natural flow of processes. However, in certain contexts, it can act as a necessary catalyst for change. Interference serves as a reminder that established systems and processes can and must be continuously questioned in order to adapt to new realities. In this installation, anomalies are transformed into a vibrant mosaic. «Interferencia» is explored as a volatile but vital manifestation of our time, a reflection on the fluid and dynamic nature of contemporary reality.

Installation created by Jorge Dabaliña and Roser Domingo. It was part of the exhibition «Altered Landscapes: a project on art, war, and ecology», held from November 17, 2023, to January 19, 2024, at Espacio N-1 of the Universitat Politècnica de València.`
        },
      ],
    },
    media: [

      {
        type: MEDIA_TYPE.YOUTUBE,
        size: MEDIA_SIZE.LARGE,
        src: 'l0kSUZexvYs?si=J0hb_03u9OCMqb22',
        alt: 'Instalación Interferencia Espacio N-1 Biblioteca Central Universitat Politècnica de València UPV Valencia',

      },

      
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/interferencia/Interferencia3.webp',
        alt: 'Instalación Interferencia Espacio N-1 Biblioteca Central Universitat Politècnica de València UPV Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/interferencia/Interferencia4.webp',
        alt: 'Instalación Interferencia Espacio N-1 Biblioteca Central Universitat Politècnica de València UPV Valencia',
      },
      {
        size: MEDIA_SIZE.LARGE,
        type: MEDIA_TYPE.IMAGE,
        src: '/images/interferencia/Interferencia1.webp',
        alt: 'Instalación Interferencia Espacio N-1 Biblioteca Central Universitat Politècnica de València UPV Valencia',
      },
      
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/interferencia/Interferencia5.webp',
        alt: 'Instalación Interferencia Espacio N-1 Biblioteca Central Universitat Politècnica de València UPV Valencia',
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 12 (orden 18)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 18,
    category: SECTION.PROYECTOSAMBOS,
    navTitle: 'Horizonte de sucesos',
    pathNav: '/projects/horizontedesucesos',
    title: 'Horizonte de sucesos',
    details: {
      media: 'Live A/V',
      year: '2024',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/horizonte/horizonte5.webp',
      alt: '',
    },
    description: {
      header: null,
      externalLink: null,
      texts: [
        {
          language: 'es',
          value:
            `Un «horizonte de sucesos» es una frontera, un punto de no retorno, un límite virtual que una vez traspasado ya no puede utilizarse para regresar en el sentido inverso. En nuestro live A/V, a través de la improvisación y la re-interpretación, producimos sonidos y visuales irrepetibles cuya esperanza de vida se restringe a las paredes de la sala Ferreres Goerlich, siendo la memoria de los espectadores que asistieron el único vestigio de lo que allí sucedió. Instrumentos musicales convencionales y electrónicos en combinación con avanzados softwares nos permiten encontrar una senda olvidada en este viaje sin retorno.

Realizado por Jorge Dabaliña y Roser Domingo, en la sala Ferreres Goerlich del Centre del Carme Cultura Contemporània (València), en la exposición «LaboLuz ex machina» del Laboratorio de Luz (Universitat Politècnica de València).`},
        {
          language: 'en',
          value: `An «event horizon» is a boundary, a point of no return, a virtual limit that, once crossed, can no longer be used to go back in the opposite direction. In our live A/V performance, through improvisation and reinterpretation, we produce unique, unrepeatable sounds and visuals whose lifespan is limited to the walls of the Ferreres Goerlich room, with the memory of the audience being the only trace of what happened there. Conventional and electronic musical instruments, combined with advanced software, allow us to find a forgotten path on this one-way journey.

Performed by Jorge Dabaliña and Roser Domingo, at the Ferreres Goerlich room of the Centre del Carme Cultura Contemporània (València), as part of the «LaboLuz ex machina» exhibition by the Laboratorio de Luz (Universitat Politècnica de València).`
        },



      ],
    },
    media: [
      {
        type: MEDIA_TYPE.YOUTUBE,
        size: MEDIA_SIZE.MEDIUM,
        src: 'AV04b3G5ae0?si=DKC-j2GBlZWrpq6z',
        alt: 'Video Performance Audiovisual A/V Horizonte de sucesos CCCC Centre del Carme Cultura Contemporanea Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/horizonte/horizonte3.webp',
        alt: 'Performance Audiovisual A/V Horizonte de sucesos CCCC Centre del Carme Cultura Contemporanea Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/horizonte/horizonte1.webp',
        alt: 'Performance Audiovisual A/V Horizonte de sucesos CCCC Centre del Carme Cultura Contemporanea Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/horizonte/horizonte2.webp',
        alt: 'Performance Audiovisual A/V Horizonte de sucesos CCCC Centre del Carme Cultura Contemporanea Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/horizonte/horizonte4.webp',
        alt: 'Performance Audiovisual A/V Horizonte de sucesos CCCC Centre del Carme Cultura Contemporanea Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/horizonte/horizonte6.webp',
        alt: 'Performance Audiovisual A/V Horizonte de sucesos CCCC Centre del Carme Cultura Contemporanea Valencia',
      },
    
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 13 (orden 14)
  //----------------------------------------------------------------------------------------------------------------
 /*{
    id: 14,
    category: SECTION.PROYECTOSJORGE,
    navTitle: 'Clock',
    pathNav: '/projects/clock',
    title: 'Clock',
    details: {
      media: 'A/V',
      year: '2023',
    },
    featured: {
      type: MEDIA_TYPE.SOUNDCLOUD,
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1933175861&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
      alt: 'Video musical Clock Premios NarrArtístic y de Creatividad Musical Juventud Ayuntamiento Valencia',
    },
    description:  {
      header: null,
      externalLink: null,
      texts: [
      {
        language: 'es',
        value:
          `«Clock» es un poema sinestésico de luz y sonido, un carrusel estenopeico de ideas y texturas. La obra se presenta como una odisea del reloj, esa criatura mecánica y digital que dicta el pulso de nuestras vidas. Con la llegada de este utensilio, estos ritmos orgánicos y fluidos fueron divididos en segmentos uniformes e invariables: horas, minutos, segundos. Este nuevo tiempo medible y predecible cambió nuestra forma de vivir, de trabajar, de organizar nuestras sociedades. En este universo, el tiempo no es lineal sino fractal, momentos que se mezclan en un torrente de vivencias. La aceleración invoca un fantasma, una sombra parpadeante que danza en las periferias de nuestra percepción.

Obra realizada por Jorge Dabaliña y Roser Domingo. Primer premio en la convocatoria de «Premios NarrArtístic y de Creatividad Musical» de la Concejalía de Juventud del Ayuntamiento de València.`},
      {
        language: 'en',
        value: `«Clock» is a synesthetic poem of light and sound, a pinhole carousel of ideas and textures. The piece is presented as an odyssey of the clock, that mechanical and digital creature that dictates the pulse of our lives. With the arrival of this device, these organic and fluid rhythms were divided into uniform and invariable segments: hours, minutes, seconds. This new measurable and predictable time changed the way we live, work, and organize our societies. And in this universe, time is not linear but fractal, moments that blend into a torrent of experiences. Acceleration invokes a ghost, a flickering shadow dancing on the periphery of our perception.

Piece created by Jorge Dabaliña and Roser Domingo. First prize in the «Premios NarrArtístic y de Creatividad Musical» competition by the Youth Department of the València City Council.`
      },
    ],},
    media: [

      {
        type: MEDIA_TYPE.YOUTUBE,
        src: '9rxbWAn1Ckg?si=IsvgiXKLSm3D5wMw',
        alt: 'Video musical Clock Premios NarrArtístic y de Creatividad Musical Juventud Ayuntamiento Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/clock/Clock2.webp',
        alt: 'Video musical Clock Premios NarrArtístic y de Creatividad Musical Juventud Ayuntamiento Valencia',
      },

    ],
  },*/

  {
    id: 14,
    category: SECTION.PROYECTOSROSER,
    navTitle: 'Clock',
    pathNav: '/projects/clock',
    title: 'Clock',
    details: {
      media: 'A/V',
      year: '2023',
    },
    featured:  {
      type: MEDIA_TYPE.YOUTUBE,
      src: '9rxbWAn1Ckg?si=IsvgiXKLSm3D5wMw',
      alt: 'Video musical Clock Premios NarrArtístic y de Creatividad Musical Juventud Ayuntamiento Valencia',
    },
    description: {     
      header: null,
      externalLink: null,
      texts: [
      {
        language: 'es',
        value:
          `«Clock» es un poema sinestésico de luz y sonido, un carrusel estenopeico de ideas y texturas. La obra se presenta como una odisea del reloj, esa criatura mecánica y digital que dicta el pulso de nuestras vidas. Con la llegada de este utensilio, estos ritmos orgánicos y fluidos fueron divididos en segmentos uniformes e invariables: horas, minutos, segundos. Este nuevo tiempo medible y predecible cambió nuestra forma de vivir, de trabajar, de organizar nuestras sociedades. En este universo, el tiempo no es lineal sino fractal, momentos que se mezclan en un torrente de vivencias. La aceleración invoca un fantasma, una sombra parpadeante que danza en las periferias de nuestra percepción.

Obra realizada por Jorge Dabaliña y Roser Domingo. Primer premio en la convocatoria de «Premios NarrArtístic y de Creatividad Musical» de la Concejalía de Juventud del Ayuntamiento de València.`},
      {
        language: 'en',
        value: `«Clock» is a synesthetic poem of light and sound, a pinhole carousel of ideas and textures. The piece is presented as an odyssey of the clock, that mechanical and digital creature that dictates the pulse of our lives. With the arrival of this device, these organic and fluid rhythms were divided into uniform and invariable segments: hours, minutes, seconds. This new measurable and predictable time changed the way we live, work, and organize our societies. And in this universe, time is not linear but fractal, moments that blend into a torrent of experiences. Acceleration invokes a ghost, a flickering shadow dancing on the periphery of our perception.

Piece created by Jorge Dabaliña and Roser Domingo. First prize in the «Premios NarrArtístic y de Creatividad Musical» competition by the Youth Department of the València City Council.`
      },
    ],},
    media: [
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/clock/Clock2.webp',
        alt: 'Video musical Clock Premios NarrArtístic y de Creatividad Musical Juventud Ayuntamiento Valencia',
      },
      {
        type: MEDIA_TYPE.SOUNDCLOUD,
        url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1933175861&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        alt: 'Video musical Clock Premios NarrArtístic y de Creatividad Musical Juventud Ayuntamiento Valencia',
      },

    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 14 (orden 6)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 6,
    category: SECTION.PROYECTOSAMBOS,
    navTitle: 'Presa',
    pathNav: '/projects/presa',
    title: 'Presa',
    details: {
      media: 'A/V',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/presa/Presa5.webp',
      alt: 'Video Presa pantalla panorámica exposición Panoramas Sala Josep Renau Facultad de Bellas Artes Universitat Politècnica de València',
    },
    description:  {
      header: null,
      externalLink: null,
      texts: [
      {
        language: 'es',
        value:
          `«Presa» es una pieza audiovisual que se organiza en torno a la idea de contención del agua. El ensayo encuentra en el dispositivo panorámico de proyección, una similitud circular con la planta hidráulica, y se compone de planos largos y detenidos, que se alternan buscando un contraste entre el cemento de la presa y el paisaje natural que envuelve a los embalses. Sonidos de fuertes corrientes de agua, en dicotomía con registros del flujo calmado del pantano.
Proyecto realizado por Jorge Dabaliña, Roser Domingo e Irene Sánchez. Formó parte de la exposición internacional «PANORAMA_EXP» de «PANORAMAS 2021» en la Sala Josep Renau de la Universitat Politècnica de València y se proyectó en la LASERTALK Leonardo «Futuros pasados ACTS en Valencia» en Veles e Vents (València). `},
      {
        language: 'en',
        value: `«Presa» is an audiovisual piece organized around the idea of water containment and the management of the Turia river currents. The essay finds in the panoramic projection device a circular similarity with the hydraulic plant, composed of long, still shots that alternate to create a contrast between the cement of the dam and the natural landscape surrounding the reservoirs. Sounds of strong water currents create a dichotomy with recordings of the calm flow of the reservoir.

Project carried out by Jorge Dabaliña, Roser Domingo and Irene Sánchez. It was part of the international exhibition «PANORAMA_EXP» of «PANORAMAS 2021» at the Sala Josep Renau of the Universitat Politècnica de València and was projected at the LASERTALK Leonardo «Futuros pasados ACTS en Valencia» at Veles e Vents (València).`
      },
    ],},
    media: [

      /* {
       type: MEDIA_TYPE.YOUTUBE,
       src: '',
       alt: 'Video Presa pantalla panorámica exposición Panoramas Sala Josep Renau Facultad de Bellas Artes Universitat Politècnica de València',
       }, */
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/presa/Presa1.webp',
        alt: 'Video Presa pantalla panorámica exposición Panoramas Sala Josep Renau Facultad de Bellas Artes Universitat Politècnica de València',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/presa/Presa2.webp',
        alt: 'Video Presa pantalla panorámica exposición Panoramas Sala Josep Renau Facultad de Bellas Artes Universitat Politècnica de València',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/presa/Presa3.webp',
        alt: 'Video Presa pantalla panorámica exposición Panoramas Sala Josep Renau Facultad de Bellas Artes Universitat Politècnica de València',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/presa/Presa4.webp',
        alt: 'Video Presa pantalla panorámica exposición Panoramas Sala Josep Renau Facultad de Bellas Artes Universitat Politècnica de València',
      },

    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 15 (orden 19)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 19,
    category: SECTION.PROYECTOSROSER,
    navTitle: 'Manipulando la luz',
    pathNav: '/projects/manipulandolaluz',
    title: 'Manipulando la luz',
    details: {
      media: 'Proyecto',
      year: '2024',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/manipulando/Manipulando1.webp',
      alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
    },
    description:  {
      header: null,
      externalLink: null,
      texts: [
      {
        language: 'es',
        value: `Este taller propuso experimentar con las piezas que conformaron la exposición «LaboLuz ex machina» desde una perspectiva óptica y lumínica, haciendo uso de algunos de los componentes que formaban parte de dichas obras. Además, se incidió en la relación de estos objetos con el espacio y en cómo influyen los factores externos propios de la sala. La actividad contó con una pequeña sesión teórica en la «Sala de documentación», en la que se explicaron y se ilustraron los conceptos de reflexión, refracción y difracción de la luz. También se mostraron los objetos que se usaron en la experimentación. A continuación, se visitó la exposición descubriendo y fijando la mirada en los pequeños detalles ópticos y lumínicos que se desprendían de partes de las piezas, y en cómo se transformaban gracias a la interposición de diferentes materiales.`,
      },
      {
        language: 'en',
        value: `This workshop aimed to experiment with the pieces that made up the exhibition «LaboLuz ex machina» from an optical and luminous perspective, using some of the components that were part of those works. It focused on the relationship between these objects and the space, as well as how external factors specific to the room influence them. The activity included a brief theoretical session in the «Documentation Room», where the concepts of reflection, refraction, and diffraction of light were explained and illustrated. The objects used in the experimentation were also displayed. Following this, participants visited the exhibition, discovering and focusing on the small optical and luminous details that emerged from parts of the pieces, and how these transformed due to the interposition of different materials.`,
      },
    ],},
    media: [

      {
        size: MEDIA_SIZE.LARGE, /* MEDIA_SIZE.MEDIUM */
        type: MEDIA_TYPE.YOUTUBE,
        src: 'y7D_jHufdKM?si=_ptJKU-_0Rz4sbfC',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
      },

      {
        type: MEDIA_TYPE.TEXT,
        texts: [
          {
            language: 'es',
            value: `Experimentación realizada en la sala Ferreres Goerlich del Centre del Carme Cultura Contemporània (València), en el contexto de la exposición «LaboLuz ex machina» del Laboratorio de Luz (Universitat Politècnica de València).`,
          },
          {
            language: 'en',
            value: `This experimentation took place in the Ferreres Goerlich room of the Centre del Carme Cultura Contemporània (València), within the context of the exhibition «LaboLuz ex machina» by the Laboratorio de Luz (Universitat Politècnica de València).`
          },
        ]
      },

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/manipulando/Manipulando5.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/manipulando/Manipulando2.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/manipulando/Manipulando3.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
      },
      /* {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/manipulando/Manipulando6.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
      }, */
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/manipulando/manipulandoMosaico1.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
        caption: 'Sala de documentación y pieza «Idea-Imatge-Universitat Reloaded»'
      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/manipulando/manipulandoMosaico2.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
        caption: 'Pieza «Modulador de luz»'
      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/manipulando/manipulandoMosaico3.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
        caption: 'Pieza «On-Off»'
      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/manipulando/manipulandoMosaico4.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
        caption: 'Pieza «Batterie-Cinema»'
      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/manipulando/manipulandoMosaico5.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
        caption: 'Pieza «Transductor Ecomedia» y «24 Frames»'
      },
      {
        type: MEDIA_TYPE.IMAGE,
        size: MEDIA_SIZE.LARGE,
        src: '/images/manipulando/manipulandoMosaico6.webp',
        alt: 'Manipulando la luz Experimentación Taller Proyecto Centre del Carme Cultura Contemporanea Valencia',
        caption: 'Pieza «Secuencias de continuidad»'
      },



    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 16 (orden 10)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 10,
    category: SECTION.PROYECTOSROSER,
    navTitle: 'Nuevas formas de hacer música',
    pathNav: '/projects/nuevasformasdehacermusica',
    title: 'Nuevas formas de hacer música',
    details: {
      media: 'Proyecto',
      year: '2022',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/nuevasformas/Música2.webp',
      alt: 'Nuevas formas de hacer música Proyecto educativo Instalación CEIP Benimàmet Valencia',
    },
    description:  {
      header: null,
      externalLink: null,
      texts: [
      {
        language: 'es',
        value:
          `«Nuevas formas de hacer música» fue un proyecto artístico educativo que pretendió aproximar los nuevos lenguajes compositivos de la música contemporánea a los más jóvenes. Nació a partir de la escucha de los territorios acústicos, donde los estudiantes pudieron explorar el entorno que les rodea y descubrir nuevos sonidos, muchas veces catalogados como «ruidos». Estableciendo contacto con las ideas formuladas por autores como Luigi Russolo, Brandon LaBelle, John Cage, R. Murray Schafer y Pierre Schaeffer, este proyecto se centró en el tratamiento del sonido y de la composición audiovisual de forma distinta al temario clásico, normalmente estudiado en las aulas.`
      },
      {
        language: 'en',
        value: `«New Ways of Making Music» was an artistic-educational project aimed at introducing younger audiences to the new compositional languages of contemporary music. It emerged from listening to acoustic environments, where students could explore their surroundings and discover new sounds, often categorized as «noise». By engaging with the ideas of authors such as Luigi Russolo, Brandon LaBelle, John Cage, R. Murray Schafer, and Pierre Schaeffer, this project focused on treating sound and audiovisual composition in a way different from the traditional curriculum typically studied in classrooms.`
      },
    ],},
    media: [
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: 'nLfPqOEWkZM?si=yoTdk_d95owtzxYL',
        alt: 'Video Nuevas formas de hacer música Proyecto educativo Instalación CEIP Benimàmet Valencia',
      },
      {
        type: MEDIA_TYPE.TEXT,
        texts: [
          {
            language: 'es',
            value: `Llevado a cabo en el CEIP Benimàmet (València) gracias a la «IV convocatoria de Residencias artísticas en centros educativos» del Ayuntamiento de València. Exposición de la instalación resultante del proyecto y emisión de la obra audiovisual en el hall del Teatre El Musical TEM (València) y en el CEIP Benimàmet (València).`
          },
          {
            language: 'en',
            value: `This project was carried out at CEIP Benimàmet (València) thanks to the «IV convocatoria de Residencias artísticas en centros educativos» by the Valencia City Council. The resulting installation was exhibited and the audiovisual work was screened in the hall of Teatre El Musical TEM (València) and at CEIP Benimàmet (València).`,
          },
        ]
      },

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/nuevasformas/Música1.webp',
        alt: 'Nuevas formas de hacer música Proyecto educativo Instalación CEIP Benimàmet Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/nuevasformas/Música3.webp',
        alt: 'Nuevas formas de hacer música Proyecto educativo Instalación CEIP Benimàmet Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/nuevasformas/Música4.webp',
        alt: 'Nuevas formas de hacer música Proyecto educativo Instalación Teatre El Musical TEM Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/nuevasformas/Música5.webp',
        alt: 'Nuevas formas de hacer música Proyecto educativo Instalación Teatre El Musical TEM Valencia',
      },

    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 17 (orden 8)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 8,
    category: SECTION.PROYECTOSROSER,
    navTitle: 'Transcurrir',
    pathNav: '/projects/transcurrir',
    title: 'Transcurrir',
    details: {
      media: 'A/V',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/transcurrir/Transcurrir5.webp',
      alt: 'Video A/V Transcurrir Fachada Media Etopia Centro de Arte y Tecnología Zaragoza',
    },
    description:  {
      header: null,
      externalLink: null,
      texts: [
      {
        language: 'es',
        value:
          `«Transcurrir» recoge en una sola palabra los distintos significados y enfoques que me vinieron a la mente en el proceso de creación de esta obra. Desde el proceso inicial, inspirado por el hecho físico de la ubicación del edificio pantalla sobre el que se emitió, que está enmarcado por el transcurso del río Ebro y el suave fluir de sus aguas, como por el transcurso vertiginoso del tráfico de la autovía que contemplamos interpuesta al mirarla desde el puente; hasta el enfoque más personal de ver en la mutación de las imágenes un reflejo de los cambios vitales que se producen en el discurrir de nuestra vida, que está en una evolución constante y nos lleva de un lugar a otro sin aún darnos cuenta del avance, hasta que tomamos perspectiva. 

Estreno y proyección continua durante el mes de octubre en la Fachada Media de Etopia Centro de Arte y Tecnología (Zaragoza).`},
      {
        language: 'en',
        value: `«Transcurrir» captures in a single word the various meanings and perspectives that came to mind during the creation of this work. From the initial process, inspired by the physical fact of the screen building's location, where it was projected, framed by the course of the Ebro River and the gentle flow of its waters, as well as by the rapid flow of traffic on the highway seen from the bridge; to a more personal approach of seeing in the mutation of the images a reflection of the life changes that occur in the passage of our existence, which is in constant evolution and carries us from one place to another without us even realizing the progress, until we gain perspective.

The premiere and continuous screening will take place throughout October at the Fachada Media of Etopia Centro de Arte y Tecnología (Zaragoza).`
      },
    ],},
    media: [

      {
        type: MEDIA_TYPE.YOUTUBE,
        src: 'VNbYhM6Zx-k?si=wnENhF6ixLVn_Gbd',
        alt: 'Video A/V Transcurrir Fachada Media Etopia Centro de Arte y Tecnología Zaragoza',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/transcurrir/Transcurrir1.webp',
        alt: 'Video A/V Transcurrir Fachada Media Etopia Centro de Arte y Tecnología Zaragoza',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/transcurrir/Transcurrir2.webp',
        alt: 'Video A/V Transcurrir Fachada Media Etopia Centro de Arte y Tecnología Zaragoza',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/transcurrir/Transcurrir4.webp',
        alt: 'Video A/V Transcurrir Fachada Media Etopia Centro de Arte y Tecnología Zaragoza',
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 18 (orden 5)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 5,
    category: SECTION.PROYECTOSROSER,
    navTitle: 'Percepcions',
    pathNav: '/projects/percepcions',
    title: 'Percepcions',
    details: {
      media: 'A/V',
      year: '2021',
    },
    featured: {
      type: MEDIA_TYPE.YOUTUBE,
      src: 'LXARttYNoFQ?si=e9j-if11DFF7_jUx',
      alt: 'Video A/V Percepcions ShortPAM!21 La Filmoteca Valencia',
    },
    description:  {
      header: null,
      externalLink: null,
      texts: [
      {
        language: 'es',
        value:
          `¿Alguna vez te has fijado en los sonidos que nos envuelven? ¿En el campo y en la ciudad están presentes mismos? ¿Por qué generalmente los consideramos «ruido» y no música? ¿Qué nos transmiten? ¿Somos capaces de ignorar los que nos molestan y centrar nuestra escucha en los que más nos gustan? ¿Seríamos capaces de sobrevivir sin estos estímulos? Puedes decidir tu propio significado de música, ¿por qué no? Esta obra pretendió examinar las percepciones, tanto sonoras como visuales, de un grupo diverso tras escuchar el mismo audio con distintos sonidos de objetos, superficies y acciones cotidianas.`
      }, {
        language: 'en',
        value:
          `Have you ever noticed the sounds that surround us? Are they present in both the countryside and the city? Why do we generally consider them «noise» rather than music? What do they convey to us? Are we capable of ignoring the sounds that bother us and focusing our listening on those we enjoy? Could we survive without these stimuli? You can define your own meaning of music—why not? This work aimed to examine the auditory and visual perceptions of a diverse group after listening to the same audio featuring different sounds from everyday objects, surfaces, and actions.`
      },

    ],},
    media: [

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/percepcions/Percepcions1.webp',
        alt: 'Video A/V Percepcions ShortPAM!21 La Filmoteca Valencia',
      },

      {
        type: MEDIA_TYPE.TEXT,
        texts: [
          {
            language: 'es',
            value: `Estreno y proyección de la obra en «ShortPAM!21», organizado por el Vicedecanato de Cultura de la Facultad de Bellas Artes de la Universitat Politècnica de València, en La Filmoteca(València).`
          },
          {
            language: 'en',
            value: `The premiere and screening of the work took place at «ShortPAM!21,» organized by the Vice - Dean's Office of Culture at the Faculty of Fine Arts of the Universitat Politècnica de València, at La Filmoteca (València).`
          },
        ]
      },


      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/percepcions/Percepcions2.webp',
        alt: 'Video A/V Percepcions ShortPAM!21 La Filmoteca Valencia',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/percepcions/Percepcions3.webp',
        alt: 'Video A/V Percepcions ShortPAM!21 La Filmoteca Valencia',
      },
    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 19 (orden 17)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 17,
    category: SECTION.PROYECTOSAMBOS,
    navTitle: 'Argos',
    pathNav: '/projects/argos',
    title: 'Argos',
    details: {
      media: 'Proyecto',
      year: '2021 - 2024',
    },
    featured: {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/argos/Argos12.webp',
      alt: 'Proyecto Argos No-Input Performance audiovisual A/V Live Performers Meeting Roma',
    },
    description:  {
      header: null,
      externalLink: null,
      texts: [
      {
        language: 'es',
        value: `«Argos. Performances Audiovisuales desarrolladas a partir del sonido y del espacio escénico» (PID2020-116186RA-C32) fue un proyecto de investigación subvencionado por el Ministerio de Ciencia e Innovación, enmarcado en un contexto interdisciplinar orientado al estudio, análisis y realización de performances audiovisuales, multimedia y multisensoriales donde el sonido y el espacio escénico representan los principales elementos para la construcción de las imágenes y acciones corporales. En este proyecto participaron: Carlos Barberá, Tatiana Clavel, Jorge Dabaliña, Roser Domingo, Raúl León, Carlos García Miragall, Cristina Ghetti, Jaime Munarriz, Francisco Sanmartín, Paz Tornero, Elia Torrecilla y Mar Garrido.`,

      },
      {
        language: 'en',
        value: `«Argos. Audiovisual Performances Developed from Sound and Scenic Space (PID2020-116186RA-C32)» was a research project funded by the Ministry of Science and Innovation, framed within an interdisciplinary context aimed at the study, analysis, and realization of audiovisual, multimedia, and multisensory performances, where sound and scenic space serve as the main elements for constructing images and bodily actions. Participants in this project included: Carlos Barberá, Tatiana Clavel, Jorge Dabaliña, Roser Domingo, Raúl León, Carlos García Miragall, Cristina Ghetti, Jaime Munarriz, Francisco Sanmartín, Paz Tornero, Elia Torrecilla, and Mar Garrido.`,


      },
    ],},
    media: [
      {
        type: MEDIA_TYPE.TEXT,
        size: MEDIA_SIZE.MEDIUM,
        header: "No-input [ Live A/V 2022 ]",
        texts: [
          {
            language: 'es',
            value: `«No-input» fue una performance audiovisual donde el sonido y la imagen se generaron a partir de la realimentación de ruidos residuales de la señal eléctrica. El sentido de la performance fue llegar a plantear una contribución visual y sonora desde la inexistencia de señal, o desde una señal generada a partir de la interferencia. Esta performance se realizó en el Festival Internacional «Live Performers Meeting» en Roma y en el Centre del Carme Cultura Contemporània (València) dentro del programa LASERTALK Leonardo. En esta performance participaron Jorge Dabaliña, Roser Domingo, Paco Sanmartín, Raul León, Carlos García Miragall y Carlos Barberá.`
          },
          {
            language: 'en',
            value: `«No-input» was an audiovisual performance where sound and image were generated from the feedback of residual noise from the electrical signal. The aim of the performance was to create a visual and auditory contribution from the absence of signal, or from a signal generated through interference. This performance took place at the International Festival «Live Performers Meeting» in Rome and at the Centre del Carme Cultura Contemporània (València) as part of the LASERTALK Leonardo program. Participants in this performance included Jorge Dabaliña, Roser Domingo, Paco Sanmartín, Raúl León, Carlos García Miragall, and Carlos Barberá.`,
          },
        ]
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/argos/Argos7.webp',
        alt: 'Proyecto Argos No-Input Performance audiovisual A/V Live Performers Meeting Roma',
      },
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: 'RzHNzeDBbFU?si=bXkN8jSLpTuTrvqM',
        alt: 'Proyecto Argos No-Input Performance audiovisual A/V Live Performers Meeting Roma',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/argos/Argos11.webp',
        alt: 'Proyecto Argos No-Input Performance audiovisual A/V Live Performers Meeting Roma',
      },




      {
        type: MEDIA_TYPE.TEXT,
        header: "Orfeo [ Live A/V 2023 ]",
        texts: [
          {
            language: 'es',

            value: `«Orfeo» se centró en la voz humana. La imagen y los visuales se generaron a partir de la voz, unas veces cantada y otras narrada. En esta performance se experimentaron algoritmos de reconocimiento de voz y también interfaces automáticas para realizar consultas a Chat GPT. Esta performance se realizó en el Festival Internacional «Live Performers Meeting» en Münster (Alemania). En esta performance participaron Carlos Barberá, Paco Sanmartín, Jaime Munarriz, Carlos García Miragall, Jorge Dabaliña y Roser Domingo. `
          },
          {
            language: 'en',
            value: `«Orfeo» focused on the human voice. The visuals were generated from the voice, sometimes sung and other times narrated. In this performance, voice recognition algorithms and automatic interfaces were experimented with to make queries to ChatGPT. This performance took place at the International Festival «Live Performers Meeting» in Münster (Germany). Participants in this performance included Carlos Barberá, Paco Sanmartín, Jaime Munarriz, Carlos García Miragall, Jorge Dabaliña, and Roser Domingo.`,
          },
        ]
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/argos/Argos13.webp',
        alt: 'Proyecto Argos Audiovisual body Performance audiovisual A/V Etopia Centro de Arte y Tecnología Zaragoza',
      },
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: '43q-drprP40?si=hrd-9ut9M4kEhZtA',
        alt: 'Proyecto Argos Orfeo Performance audiovisual A/V Live Performers Meeting Münster Alemania',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/argos/Argos5.webp',
        alt: 'Proyecto Argos Orfeo Performance audiovisual A/V Live Performers Meeting Münster Alemania',
      },

      {
        type: MEDIA_TYPE.TEXT,
        header: "Audiovisual Body [Live A/V 2023]",
        texts: [
          {
            language: 'es',
            value: `«Audiovisual Body» fue una performance multimedia y estancia en el Centro de Arte y Tecnología Etopia de Zaragoza, donde se estuvieron probando diferentes interfaces físicas. En este proyecto participaron Jorge Dabaliña, Roser Domingo, Elia Torrecilla, Cristina Ghetti, Paz Tornero, Carlos García Miragall, Paco Sanmartín, Raul León y Carlos Barberá.`
          },
          {
            language: 'en',
            value: `«Audiovisual Body» was a multimedia performance and residency at the Etopia Center for Art and Technology in Zaragoza, where different physical interfaces were tested. Participants in this project included Jorge Dabaliña, Roser Domingo, Elia Torrecilla, Cristina Ghetti, Paz Tornero, Carlos García Miragall, Paco Sanmartín, Raúl León, and Carlos Barberá.`,
          },
        ]
      },

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/argos/Argos16.webp',
        alt: 'Proyecto Argos Audiovisual body Performance audiovisual A/V Etopia Centro de Arte y Tecnología Zaragoza',
      },
      {
        type: MEDIA_TYPE.YOUTUBE,
        src: 'I7ysXdbH-M8?si=QdK0X2hdK_YM6IkG',
        alt: 'Proyecto Argos Audiovisual Body Performance audiovisual A/V Live Performers Meeting Münster Alemania',
      },
      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/argos/Argos9.webp',
        alt: 'Proyecto Argos Audiovisual body Performance audiovisual A/V Etopia Centro de Arte y Tecnología Zaragoza',
      },








    ],
  },

  //----------------------------------------------------------------------------------------------------------------
  // PROYECTO 20 (orden 2)
  //----------------------------------------------------------------------------------------------------------------
  {
    id: 2,
    category: SECTION.PROYECTOSAMBOS,
    navTitle: 'Reactive Wave Cubes',
    pathNav: '/projects/reactivewavecubes',
    title: 'Reactive Wave Cubes',
    details: {
      media: 'Live A/V',
      year: '2021',
    },
    featured:
    {
      type: MEDIA_TYPE.IMAGE,
      src: '/images/reactive/Reactive2.webp',
      alt: 'Video A/V Reactive Wave Cubes Facultad de Bellas Artes Universitat Politècnica de València',
    },
    description:  {
      header: null,
      externalLink: null,
      texts: [
      {
        language: 'es',
        value:
          `Este live A/V partió de la experiencia sonora de nuestras actividades dentro de las infraestructuras de la facultad de Bellas Artes de la UPV, y de manera más concreta, de aquellas transformaciones que genera este espacio y su arquitectura en la sonoridad de nuestro habitaje. Es entendida así, la reverberación en este trabajo, como una comunión entre nuestros sonidos y la infraestructura. Dado que concebimos la vídeo proyección mapeada como un ejercicio de luz actuando sobre el espacio y la reverberación como una acción del espacio actuando sobre nuestros sonidos, se plantea en este proyecto una interacción entre sonido, luz y forma, que reflexione, experimente y conjugue la capacidad transformadora del sonido en su actuación sobre la luz.

Proyecto realizado por Jorge Dabaliña, Roser Domingo e Irene Sánchez en la facultad de Bellas Artes de la Universitat Politècnica de València.`
      },
      {
        language: 'en',
        value: `This live A/V was based on the sound experience of our activities within the infrastructures of the Fine Arts Faculty of the UPV, and more specifically, on the transformations that this space and its architecture generate in the sonority of our habitat. Reverberation is thus understood in this work as a communion between our sounds and the infrastructure. Given that we conceive the mapped video projection as an exercise of light acting on space and reverberation as an action of space acting on our sounds, this project proposes an interaction between sound, light and form, reflecting, experimenting and combining the transforming capacity of sound in its action on light.

Project carried out by Jorge Dabaliña, Roser Domingo and Irene Sánchez at the Faculty of Fine Arts of the Universitat Politècnica de València.`
      },
    ],},
    media: [

      {
        type: MEDIA_TYPE.YOUTUBE,
        src: '3v4HJz2YDDY?si=hhyG0dvZnWQVzNO7',
        alt: 'Video A/V Reactive Wave Cubes Facultad de Bellas Artes Universitat Politècnica de València',
      },

      {
        type: MEDIA_TYPE.IMAGE,
        src: '/images/reactive/Reactive1.webp',
        alt: 'Video A/V Reactive Wave Cubes Facultad de Bellas Artes Universitat Politècnica de València',
      },

    ],
  },



  //----------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------
  /* FINAL PAGINA DE PROYECTOS*/
];

export default pagesData;

/**
 * PAGE_DATA
 * {
 *  id: int,
 *  category: SECTION,
 *  navTitle: string,
 *  pathNav: string,
 *  title: string,
 *  details: string,
 *  featured: { MEDIA_TYPE },
 *  description  {
    header: string,
    externalLink: url,
    texts:[ { language: string, value: string } ],},
 *  media [ MEDIA_TYPE ]
 * }
 */

/**
 * MEDIA_TYPE.IMAGE
 * { type: MEDIA_TYPE, src: string, alt: string }
 */

/**
 * MEDIA_TYPE.SOUNDCLOUD
 * { type: MEDIA_TYPE, url: string }
 */
