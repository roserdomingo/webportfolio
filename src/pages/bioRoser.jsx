import React from 'react';
import DownloadButton from '../components/pure/downloadButton';
import { Helmet } from 'react-helmet';

const fileCV = "http://www.roserdomingo.com/docs/Roser Domingo Munoz CV 2024 Web 2.pdf";
const fileCVtext = "CV";

const BioRoser = () => {
  return (

    <section className='container text-left px-0 overflow-hidden'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Roser Domingo</title>
      </Helmet>

      <div className='about-header row align-items-center'>
        <h1>Bio & CV</h1>
      </div>

      <div className='about-body-roser row pt-4 px-0 '>
        <div className='row ' >

          <div className="bio col-sm-8">
            <ul className='list-group mb-4'>
              <li className='list-group-item px-4'>
                <div><DownloadButton fileUrl={fileCV} fileText={fileCVtext} />
                </div></li>
            </ul>
            <ul className='list-group mb-4'>
              <li className='list-group-item px-4'>
                Roser Domingo es artista multimedia, músico e investigadora, afincada en Valencia (España). Se encuentra realizando su tesis doctoral dentro del grupo de investigación «Laboratorio de Luz» de la Universitat Politècnica de València, enfocando su práctica artística en la luz, su incidencia y distorsión sobre distintos elementos. Junto con el artista e investigador Jorge Dabaliña, experimenta en la intersección de sonido e imagen en performances audiovisuales e instalaciones, buscando nuevas formas de combinar dichos lenguajes. Ha formado parte del proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico» (PID2020-116186RA-C32), con el que ha trabajado con la interacción entre imagen, sonido, cuerpo y espacio. Sus últimas publicaciones se centran en reflexionar acerca de aspectos relacionados con este campo.
              </li>
            </ul>

          </div>
          <div className='col-sm-4 mb-4 px-0'><img className='rounded img-fluid aspect ' src='/images/bio/fotoRoser.webp' alt="Foto Roser Domingo" /></div>
        </div>
        <div className='row'>
          <div className='col-sm-12'>
            <ul className='list-group mb-4'>
              <li className='list-group-item px-4'>
                Su inmersión en el mundo artístico se inició en 2006 estudiando música en su localidad natal, para pasar a formarse, a partir de 2010, en la especialidad de Flauta travesera en el Conservatorio Profesional de Música de Llíria. En 2016 continuó con la especialidad de Sonología en el Conservatorio Superior de Música «Joaquín Rodrigo» de València, y al mismo tiempo, su interés por la fotografía, el vídeo y el diseño gráfico, la llevó a cursar simultáneamente el Grado en Diseño y Tecnologías Creativas en la Universitat Politècnica de València. Tras terminar ambos estudios en 2020, cursó el Máster en Artes Visuales y Multimedia (UPV), y en 2021 el Máster en Profesor/a de Educación Secundaria en la especialidad de Música, en la Universitat de València. En 2023 inició su etapa predoctoral en la UPV, en la que continúa hasta ahora.
              </li>
              <li className='list-group-item px-4'>
              Durante estos años ha ido creciendo y formándose tanto en el apartado sonoro como en el visual, y ha combinado las dos disciplinas en su práctica artística. Su interés por la docencia también le ha llevado a realizar proyectos educativos para acercar diferentes aspectos del arte a los más jóvenes y al público en general, así como colaborar como docente en asignaturas de la Facultad de Bellas Artes (gracias al contrato predoctoral de la UPV) y trabajar como profesora de Tecnología musical en el Conservatorio Superior de Música «Salvador Seguí» de Castelló, durante un breve periodo. Sus aprendizajes y experiencias las ha ido compartiendo en diferentes ponencias, conferencias, cursos y talleres que ha realizado a lo largo de esta etapa. 
             </li>
              <li className='list-group-item px-4'>
                En el campo de la música clásica, ha formado parte de numerosas agrupaciones musicales, entre las que destacan la Joven Banda Sinfónica, y la Banda Sinfónica de Mujeres, de la Federación de Sociedades Musicales de la Comunidad Valenciana, y el Ensemble de Flautas de Valencia. Con ellas ha realizado numerosos conciertos en auditorios de España, además de en el Parlamento Europeo, en Bruselas.
              </li>

              <li className='list-group-item px-4'>
                En el ámbito del diseño, ha trabajado en diferentes organismos públicos en puestos relacionados con el gráfico, las redes sociales y la imagen, y ha realizado encargos para particulares.
              </li>
            </ul>
          </div>
        </div>

        <div className='row text-secondary'>
          <div className='col-sm-12'>
            <ul className='list-group mb-4'>
              <li className='list-group-item px-4 text-secondary'>
                Roser Domingo is a multimedia artist, musician and researcher based in Valencia, Spain. She is currently working on her PhD as part of the Laboratorio de Luz research group at the Polytechnic University of Valencia (UPV), focusing her artistic practice on light, its effects and distortions on different elements. Together with the artist and researcher Jorge Dabaliña, they explore the intersection of sound and image in audiovisual performances and installations, looking for new ways to combine these languages. She has contributed to the research project «Argos. Audiovisual Performances Developed from Sound and Scenic Space» (PID2020-116186RA-C32), working on the interaction between image, sound, body and space. Her most recent publications focus on reflecting on aspects related to this field.
              </li>
              <li className='list-group-item px-4 text-secondary'>
                Her journey into the artistic world began in 2006, when she studied music in her hometown, before specialising in the transverse flute at the Professional Conservatory of Music in Llíria from 2010. In 2016 she started a degree in Sonology at the «Joaquín Rodrigo» Superior Conservatory of Music in Valencia. At the same time, her interest in photography, video and graphic design led her to simultaneously studied a degree in Design and Creative Technologies at the Polytechnic University of Valencia. After completing both in 2020, she studied a Master's degree in Visual Arts and Multimedia (UPV), followed by a Master's degree in Secondary Education with a specialisation in Music at the University of Valencia in 2021. In 2023 she began her pre-doctoral studies at the UPV, where she continues to this day.
              </li>

              <li className='list-group-item px-4 text-secondary'>
                In the field of new media, she has been a resident artist in several programmes and her work has been recognised with various awards. Her creations, in both installation and performance formats, have been exhibited and presented at festivals, conferences and prestigious venues throughout Spain, including Matadero Madrid, Centre del Carme Cultura Contemporània, Centre de Cultura Contemporània de Barcelona, Sala Josep Renau, Auditorio Alfons Roig, Bombas Gens, Centro de Arte y Tecnología Etopia, Las Cigarreras, La Mutant, Teatre El Musical, El Rialto, Feria Valencia, Las Naves, Veles e Vents and Espai Jove VLC, among others. Her work has also been presented in foreign cities such as São Paulo, Rome, Münster, Berlin, Calgary, West Lafayette, Prague, Valparaíso, Bogotá, Manizales and Havana.
              </li>
              <li className='list-group-item px-4 text-secondary'>
                In the area of classical music, she has been a member of numerous ensembles, including the Joven Banda Sinfónica and the Banda Sinfónica de Mujeres of the Federation of Musical Societies of the Valencian Community, as well as the Ensemble de Flautas de Valencia. With these groups she has given numerous concerts in auditoriums throughout Spain and at the European Parliament in Brussels.
              </li>

              <li className='list-group-item px-4 text-secondary'>
                In the field of design, she has worked for various public organisations in graphic design, social media and visual communication, as well as for private clients.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioRoser;
