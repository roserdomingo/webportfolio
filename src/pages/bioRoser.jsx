import React from 'react';
import DownloadButton from '../components/pure/downloadButton';

const file = "http://localhost:3000/images/interferencia/interferencia_featured.jpg";
const filetext = "Descargar CV";

const BioRoser = () => {
  return (
    <section className='container text-left px-0 overflow-hidden'>
      
      <div className='about-header row align-items-center'>
        <h1>Bio & CV</h1>
        
      </div>

      <div className='about-body row align-items-center pt-4'>

        
<div className='row' >
        <div className="bio col-sm-8">
        
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>
              Roser Domingo es artista multimedia, músico e investigadora, afincada en Valencia. Se encuentra realizando su tesis doctoral en el grupo de investigación «Laboratorio de Luz» de la Universitat Politècnica de València, enfocando su práctica artística en la luz, su incidencia y distorsión, sobre distintos elementos. También lleva a cabo experimentaciones en la intersección de sonido e imagen en actuaciones en directo.  
            </li>
            
          </ul>
          
          <ul  className='list-group mb-4'><li className='list-group-item px-4'><div><DownloadButton fileUrl={file} fileText={filetext}/> </div></li></ul>
          
          
          
        </div>
        <div className='col-sm-4'><img className='rounded img-fluid'  src='/images/bio/fotoRoser.webp' alt="Foto Roser Domingo" /></div>
        </div>
        
        <div className="experiencia">
          <h3>Experiencia</h3>
          <ul className='list-group mb-4'>

            <li className='list-group-item px-4'>
            Personal investigador predoctoral en formación en la Universitat Politècnica de València dentro del «Programa de Ayudas de Investigación y Desarrollo» (PAID-01-22) del Vicerrectorado de Investigación (2023 - actualidad).
            </li>
            <li className='list-group-item px-4'>
            Profesora de Tecnología musical en el Conservatori Superior de Música «Salvador Seguí» de Castelló de la Plana (Generalitat Valenciana - 2022).</li>
            <li className='list-group-item px-4'>
            Diseñadora gráfica y multimedia en la Concejalía de Patrimonio y Recursos Culturales del Ayuntamiento de València, dentro del programa «EMPUJU» (2022).
            </li>
            <li className='list-group-item px-4'>
            Prácticas extracurriculares en el grupo de investigación «PerformingARTech» dentro del proyecto «Soundcool», un sistema de creación audiovisual colaborativa (Universitat Politècnica de València - 2022).
            </li>
            <li className='list-group-item px-4'>
            Diseñadora gráfica, diseñadora web y encargada de las RRSS, fotografía y vídeo en el Departamento de Juventud del Ayuntamiento de Llíria dentro del programa de «Becas de formación dirigidas a titulados universitarios y de ciclos formativos 2020» (2021).
            </li>
            <li className='list-group-item px-4'>
            Prácticas curriculares de producción musical en Malamute Estudio (Xirivella - 2020).
            </li>
            <li className='list-group-item px-4'>
            Realización de diversos encargos de diseño gráfico, y de grabación y edición de audio y vídeo (2018 - 2022).
            </li>
          </ul>
        </div>

        <div className="reconocimientos">
          <h3>Reconocimientos</h3>
          <ul className='list-group mb-4'>

            <li className='list-group-item px-4'>
            «Clock», proyecto realizado junto con Jorge Dabaliña, primer premio en la convocatoria de «Premios NarrArtístic y de Creatividad Musical» de la Concejalía de Juventud del Ayuntamiento de València (2024).</li>
            <li className='list-group-item px-4'>
            «1.1 Grados», proyecto realizado junto con Jorge Dabaliña, seleccionado en la convocatoria de «Cultura Online #CMCVaCasa 2023» del Consorci de Museus de la Comunitat Valenciana (2023).
            </li>
            <li className='list-group-item px-4'>
            «Intra-señales», proyecto realizado junto con Jorge Dabaliña, premiado en la convocatoria de «Residencias artísticas y culturales 2022» de la Concejalía de Juventud del Ayuntamiento de València (2023).
            </li>
            <li className='list-group-item px-4'>
            Mención de honor en el Trabajo Final de Máster (Máster en Artes Visuales y Multimedia - Universitat Politècnica de València - 2022).</li>
            <li className='list-group-item px-4'>«1.1 Grados», proyecto realizado junto con Jorge Dabaliña, premiado en la convocatoria de «Residencias artísticas y culturales 2021» de la Concejalía de Juventud del Ayuntamiento de València (2022).</li>
            <li className='list-group-item px-4'>«Sons i sorolls», junto con «Materia Eléctrica» de Jorge Dabaliña, instalación audiovisual interactiva seleccionada en la exposición «PAM!21, IX Muestra de Producciones Artísticas y Multimedia» (Vicedecanato de Cultura - Facultat de Belles Arts de la UPV - 2021).</li>
            <li className='list-group-item px-4'>Mención de honor en el Trabajo Final de Título (Título Superior de Música en la especialidad de Sonología - Conservatori Superior de Música «Joaquín Rodrigo» de València - 2020).</li>
            <li className='list-group-item px-4'>Mención especial de la obra grupal en el reto «Creativity, tapas & song» de Smart Center Valencia (2016).</li>
            <li className='list-group-item px-4'>Mención de honor en la especialidad de Música de cámara (Premios Extraordinarios Fin de título de Grado Profesional - Conservatori Professional de Música de Llíria - 2016).</li>
            <li className='list-group-item px-4'>3º premio en el «Concurs Narrativa curta Premi Sambori 2015» (2015).</li>
            <li className='list-group-item px-4'>Mención honorífica de Educación Secundaria Obligatoria (IES Camp de Túria de Llíria - 2014).</li>
            <li className='list-group-item px-4'>Premio en el concurso local de «Booktrailers» (Biblioteca Municipal de Llíria - 2014 - 2015).</li>
            <li className='list-group-item px-4'>Premio al mejor corto del «GraffitArt» de Llíria (2014).</li>
            <li className='list-group-item px-4'>1º premio en el «I Concurso de fotografía “Racons Naturals”» de Llíria (2014).</li>
          </ul>
        </div>

        <div className="formacionacademica">
          <h3>Formación académica</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>Doctoranda en el programa de Arte: Producción e Investigación (Universitat Politècnica de València - 2023 - actualidad).</li>
            <li className='list-group-item px-4'>Máster Universitario en Artes Visuales y Multimedia (Universitat Politècnica de València - 2020 - 2022).</li>
            <li className='list-group-item px-4'>Máster Universitario en Profesor/a de Educación Secundaria en la especialidad de Música (Universitat de València - 2021 - 2022).</li>
            <li className='list-group-item px-4'>Grado en Diseño y Tecnologías Creativas (Universitat Politècnica de València - 2016 - 2020).</li>
            <li className='list-group-item px-4'>Título Superior de Música en la especialidad de Sonología (Conservatori Superior de Música «Joaquín Rodrigo» de València - 2016 - 2020).</li>
            <li className='list-group-item px-4'>Título Profesional de Música en la especialidad de Flauta Travesera (Conservatori Professional de Música de Llíria - 2010 - 2016).</li>
          </ul>
        </div>

        <div className="publicaciones">
          <h3>Publicaciones</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>Artículo de investigación «Escribir con la luz. Estudio de prácticas artísticas que usan la luz como herramienta» («Libro de Actas - VI Congreso Internacional de Investigación en Artes Visuales ANIAV 2024. EX±ACTO», Valencia, 3-5 julio 2024. <a href="https://doi.org/10.4995/ANIAV2024.2024.18044">https://doi.org/10.4995/ANIAV2024.2024.18044</a>).</li>
            <li className='list-group-item px-4'>Artículo de investigación «Estética intermediada en la performance Laboratorio de fantasmas. Una instalación multimedia de danza en el edificio Rialto de Valencia», junto con Carlos Barberá y Raúl León («Arte, Individuo y Sociedad», 36(2), 405-414. <a href="https://doi.org/10.5209/aris.91691">https://doi.org/10.5209/aris.91691</a>).</li>
            <li className='list-group-item px-4'>Proyecto educativo «Nuevas formas de hacer música» (Catálogo de la exposición «Singularidades Interativas» del «Festival Internacional de Linguagem Eletrônica FILE» - São Paulo, 2023 - ISBN 978-65-998220-1-8).</li>
            <li className='list-group-item px-4'>Proyecto «1.1 Grados» (Catálogo de la exposición «Cultura Online #CMCVaCasa 2023», del Centre del Carme Cultura Contemporània - València, 2023 - ISBN 978-84-482-6873-2).</li>
            <li className='list-group-item px-4'>Artículo de investigación «Noves formes de fer música. Una mirada cap a la música contemporània i la tecnología» (Revista digital «Notas de Paso» del CSMV - 2021 - ISSN 2341-460X).</li>
            <li className='list-group-item px-4'>CD «Pachamama: Dances Of The Earth» (Ensemble de Flautas de Valencia) (nominado en los «Premios Carles Santos de la Música Valenciana», en la categoría de «Mejor disco de Clásica contemporánea»).</li>
            <li className='list-group-item px-4'>CD «Formes diverses: els clàssics valencians de la música per a banda» (volum 4) (Jove Banda Simfònica de la FSMCV - Carlos Ramón-Pérez).</li>
            <li className='list-group-item px-4'>Capítulo «Llum» dentro del libro «Batxillerat / Cicles Formatius I», que recoge los cuentos premiados de país del «Premi Sambori 2015» (Arc de Sant Martí - 2018 - ISBN: 978-84-17122-19-5).</li>
          </ul>
        </div>

        <div className="proyectosinvestigación`">
          <h3>Proyectos de investigación</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>Participación en el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico» (PID2020-116186RA-C32), del Laboratorio de Luz de la Universitat Politècnica de València (2022 - 2024).</li>
            <li className='list-group-item px-4'>Proyecto de investigación «Una nueva propuesta de articulación del sonido en la performance audiovisual. Conexiones entre entornos virtuales y reales» (PAID-01-22) de la Universitat Politècnica de València (2023 - actualidad).</li>
          </ul>
        </div>

        
        <div className="formacionimpartida">
          <h3>Formación impartida: cursos, ponencias, conferencias y talleres</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>Realización de la comunicación oral «Escribir con la luz. Estudio de prácticas artísticas que usan la luz como herramienta» en el VI Congreso Internacional de Investigación en Artes Visuales ANIAV 2024. EX±ACTO (Universitat Politècnica de València, 2024).</li>
            <li className='list-group-item px-4'>Realización de la actividad «RADIOLUZ: capítulo 0», junto con Miguel Rangil y Raúl León, en el Espacio en Red del «VI Congreso Internacional de Investigación en Artes Visuales ANIAV 2024. EX±ACTO» y en el contexto de la exposición «Laboluz ex machina» del Laboratorio de Luz celebrada en el Centre del Carme Cultura Contemporània (València, 2024).</li>
            <li className='list-group-item px-4'>Realización de la actividad «RADIOLUZ //» un espacio sonoro conversacional en formato radio/podcast en vivo junto con Miguel Rangil y Raúl León, enmarcado dentro de la exposición «Laboluz ex machina» (València, 2024).</li>
            <li className='list-group-item px-4'>Colaboradora docente en las asignaturas «Tecnologías de la imagen II» del Grado en Bellas Artes, y en «Programación avanzada» y «Dispositivos móviles» del Máster en Artes Visuales y Multimedia (Universitat Politècnica de València, 2024).</li>
            <li className='list-group-item px-4'>Realización del taller «Manipulando la luz», enmarcado en la exposición «Laboluz ex machina» celebrada en el Centre del Carme Cultura Contemporània (València, 2024).</li>
            <li className='list-group-item px-4'>Realización de la conferencia «Interferencia. Paisajes alterados, proyecto de Arte guerra y ecología» en el Espacio N-1 de la Universitat Politècnica de València (València, 2023).</li>
            <li className='list-group-item px-4'>Realización de la conferencia «Reinterpretando a Sorolla III: Flujos de luz y procesos con IA, relaciones lumínicas entre la obra de Sorolla y el Laboratorio de Luz», junto con Jorge Dabaliña, Sergio Martín e Irene Sánchez, en el ciclo «AÑO SOROLLA - UPV», organizado por el Vicerrectorado de Arte, Ciencia, Tecnología y Sociedad en colaboración con la Universidad Sénior de la UPV (Auditorio Alfons Roig, València, 2023).</li>
            <li className='list-group-item px-4'>Participación en el debate «Sonidos de la luz y la materia. Una tarde con José Antonio Orts», en el primer encuentro de la iniciativa «Sea of Seas» organizada por Piratas de la Ciencia (València, 2023).</li>
            <li className='list-group-item px-4'>Docente, junto con Jorge Dabaliña, en el taller «Introducción a la performance audiovisual: generación de visuales en tiempo real con TouchDesigner» del Centro de Formación Permanente (Universitat Politècnica de València - 2023).</li>
            <li className='list-group-item px-4'>Realización de la ponencia «Nuevas formas de hacer música: conexiones entre el entorno sonoro y las propuestas artísticas actuales en el ámbito educativo» en el congreso «Paisaje y Sostenibilidad: Escuchando la diversidad» de la Universidad Autónoma de Madrid (Facultad de Filosofía y Letras - Madrid - 2022).</li>
            <li className='list-group-item px-4'>Participación en la mesa redonda de la jornada «Jóvenes, Europa y Ciudad» organizada por el diario Levante-EMV (Centre del Carme Cultura Contemporània - València - 2022).</li>
            <li className='list-group-item px-4'>Realización de una conferencia en conmemoración del «Día Internacional de la Mujer y la Niña en la Ciencia» (IES Rascanya - Antonio Cañuelo - València - 2022).</li>
            <li className='list-group-item px-4'>Artista responsable del taller de creación e interpretación sonora con nuevas tecnologías del proyecto «XEnsems Metròpolis: sonar i dansar la ciutat» (Institut Valencià de Cultura - Festival Ensems - IES Rascanya Antonio Cañuelo - Claustro del Centro Cultural La Nau - 2018 - 2019).</li>
          </ul>
        </div>

        <div className="residencias">
          <h3>Residencias artísticas</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>Artista residente, junto con Jorge Dabaliña, en la «Residencia artística UPV La Tierra – La Guerra» dentro del Festival Intersectorial de Arte Contemporáneo de Ucrania y España Renacimiento en la Universitat Politècnica de València (2023).</li>
            <li className='list-group-item px-4'>Artista residente, junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico» (PID2020-116186RA-C32) en el «New Media Lab» de Etopia Centro de Arte y Tecnología (Zaragoza, 2023).</li>
            <li className='list-group-item px-4'>Artista residente, junto con Jorge Dabaliña, en las ayudas a «Residencias de Creación Artística 2021» de la Concejalía de Acción Cultural del Ayuntamiento de València (La Mutant, València - 2022).</li>
            <li className='list-group-item px-4'>Artista residente en la IV Convocatoria de las «Residencias artísticas en centros escolares» de la Concejalía de Educación del Ayuntamiento de València (CEIP Benimàmet, València - 2022).</li>
            <li className='list-group-item px-4'>Artista residente en la «VI edición de Academia Fachada Media» (Etopia Centro de Arte y Tecnología - Zaragoza - 2021).</li>
          </ul>
        </div>



        <div className="performancesobras">
          <h3>Performances y obras audiovisuales</h3>
          <ul className='list-group mb-4'>
          <li className='list-group-item px-4'>Realización del Live A/V «Sonat Loci», junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico», en la sala Ferreres-Goerlich del Centre del Carme Cultura Contemporània (València, 2024).</li>
          <li className='list-group-item px-4'>Luces en directo para la pieza «Drumming» de Steve Reich, junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico», en el auditorio de Rafelbunyol y en el «Festival Serenates» de la Universitat de València en el Claustro del Centro Cultural La Nau (València, 2024).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «Horizonte de sucesos», junto con Jorge Dabaliña, en la sala Ferreres-Goerlich del Centre del Carme Cultura Contemporània (València, 2024).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «Iter Loco Resonans», junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico», en la sala Ferreres-Goerlich del Centre del Carme Cultura Contemporània (València, 2024).</li>
          <li className='list-group-item px-4'>Realización de la «Telematic City Jam», junto con la Female Laptop Orchestra, en el festival «Web Audio Conference» (West Lafayette, EEUU, 2024).</li>
          <li className='list-group-item px-4'>Obra sonora «BacterialScape Transmission», junto con Paz Tornero, en el festival «Tsonami 2023. XVII Festival Internacional de Arte Sonoro» y en el «XXIII Festival Internacional de la Imagen Geopoiesis» (Valparaíso, Chile y Bogotá/Manizales, Colombia, 2023 - 2024).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «Audiovisual Body», junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico», en el New Media Lab de Etopia Centro de Arte y Tecnología (Zaragoza, 2023).</li>
          <li className='list-group-item px-4'>Realización de la «Telematic City Jam», junto con la Female Laptop Orchestra, en el festival «Prague Quadrennial 2023, Sound Kitchen» (Praga, República Checa, 2023).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «Intra-señales», junto con Jorge Dabaliña, en la presentación de las «Residencias Artísticas y culturales 2022» de la Concejalía de Juventud del Ayuntamiento de València (Espai Jove VLC, 2023).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «Orfeo» junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico» en el Festival Live Performers Meeting 2023 (Bennohaus, Münster, 2023).</li>
          <li className='list-group-item px-4'>Realización de la muestra abierta del «Laboratorio de fantasmas», junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico», dentro del festival «Dansa València» (Teatre Rialto - València - 2022).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «Tiempo profundo», junto con Jorge Dabaliña, dentro del «CampD.lab» (Casal Jove - Port de Sagunt), en el «Seminario Sónico» de la Universidad de Alicante (Secadero, Las Cigarreras - Alicante), en el congreso «Paisaje y sostenibilidad: Escuchando la diversidad» (Matadero - Madrid), en el «Festival Volumens 2022» (La Fábrica de Hielo - València), en la «LASERTALK Leonardo “Futuros pasados ACTS en Valencia”» (Veles e Vents - València) y en el «Festival Internacional de Cortometrajes» (Radiocity - València) (2022).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «NoInput», junto con el colectivo PDP-11, en la jornada «LASERTalk Leonardo “Interpretando código y vida. Arte y Ciencia de la Bio-IA”» (Centre del Carme Cultura Contemporània - València) y en el festival «Live Performers Meeting 2022» (Nuovo Cinema Aquila - Roma) (2022).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «Invisible / Inaudible», junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico», en el «Seminario Sónico» de la Universidad de Alicante (Secadero, Las Cigarreras - Alicante) y en el congreso «Paisaje y sostenibilidad: Escuchando la diversidad» (Matadero - Madrid) (2022).</li>
          <li className='list-group-item px-4'>Realización del concierto «FLO & FRIENDS: City Jam - Berlin», junto con la Female Laptop Orchestra, en el festival «KONTAKTE ‘22 - Festival für Elektroakustische Musik und Klangkunst» (Akademie der Künste - Berlín - 2022).</li>
          <li className='list-group-item px-4'>Realización de la «Telematic City Jam», junto con Ethernet Orchestra y Female Laptop Orchestra, en el festival «Sound Kitchen WSD2022» (Calgary - Canadá - 2022).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «Ecos», junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico», en el «V Congreso Internacional de Investigación en Artes Visuales ANIAV 2022» (Universitat Politècnica de València - 2022).</li>
          <li className='list-group-item px-4'>Participación en el festival «MEVArt X: Música Electrónica y Video Arte - MEVArtzheimer 2022» (Auditorio Alfons Roig - Universitat Politècnica de València - 2022).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «1,1 grados», junto con Jorge Dabaliña, dentro de las «Residencias de Creación Artística 2021» de la Concejalía de Acción Cultural del Ayuntamiento de València (La Mutant - 2022).</li>
          <li className='list-group-item px-4'>Realización de los visuales en directo en la performance «Visual Sessions», junto con la DJ Rakel Conk, dentro del festival «M.O.V 04/02» de Orbis Vacui (Veles e Vents, València - 2022).</li>
          <li className='list-group-item px-4'>Participación en el festival «MEVArt IX: Música electrónica y vídeoarte 2021» (Auditorio Alfons Roig - UPV - 2021).</li>
          <li className='list-group-item px-4'>Realización del Live A/V «Hin und Zurück», junto con Jorge Dabaliña y Sergio Lecuona, en el escenario «Export by VOlumens» dentro del festival «Love To Rock» (Veles e Vents - València - 2021).</li>
          <li className='list-group-item px-4'>Participación en la performance «Marea de sirenas, voces y olvidos (Puerto de Sagunto Industrial)» del proyecto «Patrimonio acústico: prácticas de escucha y socialización», dentro del marco expositivo «Industria/matrices, tramas y sonidos» en el IVAM (La Mutant, València - 2021).</li>
          <li className='list-group-item px-4'>Realización de los visuales en directo, junto con Jorge Dabaliña e Irene Sánchez, en la performance «The room above» del artista sonoro Luca Forcucci, dentro de «Live_Panoramas EXP» en la exposición internacional «PANORAMA_EXP de PANORAMAS 2021» (Sala Josep Renau - UPV - 2021).</li>
          <li className='list-group-item px-4'>Estreno de la obra «Percepcions» en «Short PAM!21» (La Filmoteca - Vicedecanato de Cultura - Facultat de Belles Arts de la UPV - València - 2021).</li>
          <li className='list-group-item px-4'>Irradiación e improvisación a tiempo real en «Nuevos espacios de Irradiación, Transmisión y Resistencia sonora» (Sónar+D - CCCB - Barcelona - 2020).</li>
          <li className='list-group-item px-4'>Estreno de la obra «VINT-I-LEA-CINC» en el «XIV Festival Internacional de Música Electroacústica y Electrónica “Primavera en La Habana” 2020» (La Habana - Cuba - 2020).</li>
          <li className='list-group-item px-4'>«K-OS» (obra audiovisual) exhibida en el «Festival Zeppelin (Festival de Músiques Electroacústiques i Art Sonor)» (Barcelona - 2018), en el Programa 34 y 35 de «Synchresis» (Granada y Valencia - 2018) y en el proyecto «NouSons» (Llíria - 2019).</li>
</ul>
        </div>

        <div className="exhibitions">
          <h3>Exposiciones</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>Exposición «Laboluz ex machina» del Laboratorio de Luz, en la sala Ferreres-Goerlich del Centre del Carme Cultura Contemporània (València, 2024).</li>
            <li className='list-group-item px-4'>Obra «Lux_Hypercubus», junto con el Laboratorio de Luz, en la exposición «Dalí Cibernètic» en Bombas Gens Centre d’Arts Digitals (València, 2024).</li>
            <li className='list-group-item px-4'>Obra «Sorolla, llum difusa», junto con el Laboratorio de Luz, en la exposición «Sorolla, una nueva dimensión» en La Base de La Marina de València (2023).</li>
            <li className='list-group-item px-4'>Instalación «Interferencia», junto con Jorge Dabaliña, en la exposición «Paisajes alterados: proyecto de arte, guerra y ecología» en el Espacio N-1 de la Universitat Politècnica de València (2023).</li>
            <li className='list-group-item px-4'>Instalación «Sistema Nervioso Extendido #1 (Vista)», junto con Jorge Dabaliña, en la exposición «PAM!PAM!22» en la sala de exposiciones Atarazanas del Grao del Ayuntamiento de València (2023).</li>
            <li className='list-group-item px-4'>Exposición del proyecto educativo «Nuevas formas de hacer música» y la obra audiovisual generada en dicho taller, en la exposición «Singularidades Interativas» del «Festival Internacional de Linguagem Eletrônica FILE» (São Paulo, Brasil, 2023).</li>
            <li className='list-group-item px-4'>Web interactiva del proyecto «1,1º», junto con Jorge Dabaliña, en la exposición «Cultura Online #CMCVaCasa 2023» en la Sala Ferreres - Goerlich del Centre del Carme Cultura Contemporània (València, 2023).</li>
            <li className='list-group-item px-4'>Muestra expositiva y performática del proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico» bajo el título «PROY. ARGOS EXP.1» en la Sala de exposiciones de la Facultad de Bellas Artes (Universidad de Málaga - 2022).</li>
            <li className='list-group-item px-4'>Exposición y realización de la muestra audiovisual «1,1 grados» en el stand de Juventud del Ayuntamiento de València en «ExpoJove» (Feria Valencia), en la exposición de la presentación de las «Residencias Artísticas y culturales 2021» de la Concejalía de Juventud del Ayuntamiento de València (Espai Jove VLC) y en «Expociència 2022» (Parc Científic de la Universitat de València - València - 2022).</li>
            <li className='list-group-item px-4'>Realización de la instalación audiovisual interactiva «Noves formes de fer música», como resultado del proyecto seleccionado dentro de las «Residencias artísticas en centros educativos» de la Concejalía de Educación del Ayuntamiento de València, y expuesta en el CEIP Benimàmet y en el Teatre El Musical (València - 2022).</li>
            <li className='list-group-item px-4'>Estreno y proyección continua durante el mes de octubre de la obra «Transcurrir» en la Fachada Media de Etopia Centro de Arte y Tecnología (Zaragoza - 2021).</li>
            <li className='list-group-item px-4'>Estreno de la obra «Presa», realizada junto con Jorge Dabaliña e Irene Sánchez, en la exposición internacional «PANORAMA_EXP de PANORAMAS 2021» (Sala Josep Renau - UPV - 2021) y emisión en la «LASERTALK Leonardo “Futuros pasados ACTS en Valencia”» (Veles e Vents - València - 2022). </li>
            <li className='list-group-item px-4'>Participación en la obra «Inlets», realizada en el «Open Lab Workshop» y estrenada en la exposición internacional «PANORAMA_EXP de PANORAMAS 2021» (Sala Josep Renau - UPV - 2021).</li>
            <li className='list-group-item px-4'>Participación con la instalación interactiva «Autocrea» en el «II Congreso Internacional Atenea, Mujeres Artistas Tecnólogas» (Las Naves Centro de Innovación - València - 2019).</li>
            <li className='list-group-item px-4'>Estreno de la obra «K-OS» y exposición de la instalación grupal «Interactive Piano» en el «I Congreso Internacional Atenea, Mujeres Artistas Tecnólogas» (Auditori Alfons Roig - Sala Josep Renau - UPV - 2018).</li>
          </ul>
        </div>
      </div>

      <div className="formacionrecibida">
          <h3>Formación profesional recibida: selección</h3>
          <ul className='list-group mb-4'>
          <li className='list-group-item px-4'>Participación en el programa «Generación Talento» (Fundación Princesa de Girona - actualidad).</li>
          <li className='list-group-item px-4'>Participación en el «Programa de Acogida Universitario» (Instituto de Ciencias de la Educación, Universitat Politècnica de València, 2024).</li>
          <li className='list-group-item px-4'>Participación en el programa «Generación Propósito» (Fundación Princesa de Girona - 2022).</li>
          <li className='list-group-item px-4'>Participación en el «Open Lab Workshop de PANORAMAS 2021» (Universitat Politècnica de València - 2021).</li>
          <li className='list-group-item px-4'>Participación en el «Week [Emprende]» de IDEAS UPV (Universitat Politècnica de València - 2021).</li>
          <li className='list-group-item px-4'>Participación en el programa «Akademia “Innovación & Inteligencia Artificial”» de la Fundación Innovación Bankinter (Valencia - 2020 - 2021).</li>
          <li className='list-group-item px-4'>Participación en el taller de formación pedagógica y creación interdisciplinar «Mundos vibrantes y criaturas sonoras» (Festival Ensems - 2020).</li>
          <li className='list-group-item px-4'>Participación en el «Programa de experiencias formativas en gestión artística» del Palau de la Música (València - 2019).</li>
          <li className='list-group-item px-4'></li>
          <li className='list-group-item px-4'></li>





      

          </ul>
        </div>

      <div className="otrosdatos">
        <h3>Otros datos de interés</h3>
        <ul className='list-group mb-4'>
          <li className='list-group-item px-4'>Miembro de la «Female Laptop Orchestra» (2022 - 2024).</li>
          <li className='list-group-item px-4'>Miembro de la «Banda Sinfónica de Mujeres» la Federación de Sociedades Musicales de la Comunidad Valenciana (2021 - 2023).</li>
          <li className='list-group-item px-4'>Miembro de la «Joven Banda Sinfónica» de la Federación de Sociedades Musicales de la Comunidad Valenciana (2019 - 2020).</li>
          <li className='list-group-item px-4'>Miembro del «Ensemble de Flautas de Valencia» (2015 - 2021).</li>
          <li className='list-group-item px-4'>Miembro del «Valencia Youth Wind Ensemble» (2017 - 2019).</li>
          <li className='list-group-item px-4'>Miembro de la «Unió Musical Casinense» (2010 - 2022).</li>
          <li className='list-group-item px-4'>Diseño de la identidad corporativa del Conservatori Superior de Música «Joaquín Rodrigo» de València (València - 2020).</li>
          <li className='list-group-item px-4'>Diseño del logotipo y creación de los banners de la «Orquesta de Jazz» del Conservatori Superior de Música «Joaquín Rodrigo» de València (València - 2020).</li>
        </ul>
      </div>


    </section>
  );
}

export default BioRoser;
