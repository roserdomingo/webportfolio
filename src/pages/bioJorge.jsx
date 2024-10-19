import React from 'react';
import DownloadButton from '../components/pure/downloadButton';
import { Helmet } from 'react-helmet';
const file = "http://localhost:3000/docs/CV Jorge Sánchez Dabaliña.pdf";
const filetext = "Download CV ";

const BioJorge = () => {
  return (
    <section className='text-left px-0 overflow-hidden mw-50'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jorge Dabaliña</title>
      </Helmet>

      <div className='about-header row align-items-center'>
        <h1>Bio & CV</h1>

      </div>

      <div className='about-body row align-items-center pt-4'>

        <div className="bio ">
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>

              <div className='mb-2 mt-2'>
                Jorge Dabaliña is a multimedia artist and researcher based in Valencia. He is currently pursuing his PhD at the <i>Laboratorio de Luz</i> research group at the <i>Universitat Politècnica de València (UPV)</i> and is actively involved in the project <i>Argos. Audiovisual Performances Developed from Sound and Scenic Space</i>. He holds a degree in <i>Design and Creative Technologies</i> and a Master's in <i>Visual Arts and Multimedia</i>, both from UPV.
              </div>
              <div className='mb-2'>
                Jorge’s research focuses on video feedback techniques, an exploration complemented by his interest in fields such as audiovisual production, creative programming, and sound creation. Together with artist and researcher <i>Roser Domingo</i>, he has developed audiovisual performances and installations that experiment with new ways of working with image and sound, creating immersive and unique experiences for audiences.
              </div>
              <div className='mb-2'>
                Their work has been showcased at festivals, conferences, and artist residencies in renowned spaces such as Matadero Madrid, Centre del Carme Cultura Contemporània (CCCC), Etopia, Las Cigarreras, and La Mutant, among others.
              </div>


            </li>

          </ul>
          <ul className='list-group mb-4'><li className='list-group-item px-4'><div><DownloadButton fileUrl={file} fileText={filetext} /> </div></li></ul>



        </div>

        <div className="studies">
          <h3>Studies</h3>
          <ul className='list-group mb-4'>

            <li className='list-group-item px-4'>
              <i>PhD research.</i>
              <div>Universitat Politècnica de València</div>
              <div>(2022 ⟶ 2025)</div>
            </li>
            <li className='list-group-item px-4'>
              <i>Master's in Visual Arts and Multimedia.</i>
              <div>Universitat Politècnica de València </div>
              <div>(2020 ⟶ 2022) </div>             </li>
            <li className='list-group-item px-4'>
              <i>Degree in Design and Creative Technologies.</i>
              <div>Universitat Politècnica de València</div>
              <div>(2016 ⟶ 2020)</div> 
            </li>
          </ul>
        </div>

        <div className="Grants">
          <h3>Grants</h3>
          <ul className='list-group mb-4'>
          <li className='list-group-item px-4'>Member of <i>Laboratorio de Luz</i> research group, UPV, (2022 ⟶ 2025)</li>
            <li className='list-group-item px-4'>Member of <i>Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico</i> research project, UPV (2022 ⟶ 2024)</li>
         

            <li className='list-group-item px-4'>
              1.1 grados.
              <div>Awarded in the call for <i>#CMCVaCasa Cultura Online 2023</i> (CMCV, 2023)  </div>
              <div>Awarded in the call for <i>Artistic and Cultural Residencies 2021</i> (Ajuntament de València, 2022) </div>          </li>
            <li className='list-group-item px-4'>
              <div>Intra-señales.</div>Awarded in the call for <i>Artistic and Cultural Residencies 2022</i> (Ajuntament de València, 2023)
            </li>
            <li className='list-group-item px-4'>
              Honourable mention in the Master's Final Project (Master's Degree in Visual Arts and Multimedia, 2022)
            </li>
            
             </ul>
        </div>

        

        <div className="exhibitions">
          <h3>Exhibitions</h3>
          <ul className='list-group mb-4'>

          <li className='list-group-item px-4'>Exposición «Laboluz ex machina» del Laboratorio de Luz, en la sala Ferreres-Goerlich del Centre del Carme Cultura Contemporània (València, 2024).</li>
          <li className='list-group-item px-4'>Instalación «Interferencia», junto con Jorge Dabaliña, en la exposición «Paisajes alterados: proyecto de arte, guerra y ecología» en el Espacio N-1 de la Universitat Politècnica de València (2023).</li>

          <li className='list-group-item px-4'>Instalación «Sistema Nervioso Extendido #1 (Vista)», junto con Jorge Dabaliña, en la exposición «PAM!PAM!22» en la sala de exposiciones Atarazanas del Grao del Ayuntamiento de València (2023).</li>

          <li className='list-group-item px-4'>
            “PROY. ARGOS EXP.1”.  Exhibition and performance of the research project “Argos” at the Exhibition Hall of the Faculty of Fine Arts (Universidad de Málaga, 2022)
            </li>

            <li className='list-group-item px-4'>
            “1.1 grados” Exhibition and production of the audiovisual show at the Youth stand of the València City Hall in “ExpoJove” (Feria Valencia, 2022), in the exhibition of the presentation of the Artistic and Cultural Residencies 2021 of Ajuntament de València (Espai Jove VLC, 2022) and at “Expociència 2022” (Parc Científic de la Universitat de València - Valencia, 2022)
            </li>

            <li className='list-group-item px-4'>
            “Exploración entrelazada” Premiere and continuous projection during the month of August in the Fachada Media of Etopia Centro de Arte y Tecnología (Zaragoza, 2021)
            </li>

            <li className='list-group-item px-4'>
            "Presa" with Irene Sanchez and Roser Domingo. Premiered in the international exhibition “PANORAMA_EXP de PANORAMAS 2021” (Sala Josep Renau - UPV, 2021) and exhibition in the conference "Landscape and Sustainability: Listening to Diversity" (Matadero - Madrid, 2022) and in the “LASERTALK Leonardo ‘Futuros pasados ACTS en Valencia’” (Veles e Vents - València, 2022)
            </li>

            <li className='list-group-item px-4'>
              Premiere of the work “Del otro lado” and “Percepcions” in “Short PAM!21” (La Filmoteca, 2021)
            </li>



          </ul>

        </div>

        <div className="performances">
          <h3>Performances</h3>
          <ul className='list-group mb-4'>


          <li className='list-group-item px-4'><div><i>Horizonte de sucesos.</i></div>Junto con Roser Domingo, en la sala Ferreres-Goerlich del Centre del Carme Cultura Contemporània (València, 2024).</li>
          <li className='list-group-item px-4'><div><i>Audiovisual Body.</i></div> Realización del Live A/V «Audiovisual Body», junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico», en el New Media Lab de Etopia Centro de Arte y Tecnología (Zaragoza, 2023).</li>
          <li className='list-group-item px-4'><div><i>Intra-señales.</i></div> Realización del Live A/V «Intra-señales», junto con Jorge Dabaliña, en la presentación de las «Residencias Artísticas y culturales 2022» de la Concejalía de Juventud del Ayuntamiento de València (Espai Jove VLC, 2023).</li>
          <li className='list-group-item px-4'><div><i>Orfeo.</i></div> Realización del Live A/V «Orfeo» junto con el proyecto de investigación «Argos. Performances audiovisuales desarrolladas a partir del sonido y del espacio escénico» en el Festival Live Performers Meeting 2023 (Bennohaus, Münster, 2023).</li>


            <li className='list-group-item px-4'>
            <div><i>Tiempo profundo</i></div>
              Presented at the “Sonology Conference” (Conservatori Superior de Música “Joaquín Rodrigo” de València, 2023), in the “CampD.lab” (Port de Sagunt, 2022), in the “Seminario Sónico” of the Universidad de Alicante (Secadero - Las Cigarreras, 2022), in the conference “Landscape and Sustainability: Listening to Diversity” (Matadero - Madrid, 2022), at the “Volumens 2022 Festival” (La Fábrica de Hielo - València, 2022), at the “LASERTALK Leonardo ‘Futuros pasados ACTS en Valencia’” (Veles e Vents - València, 2022) and at the “International Short Film Festival” (Radiocity - València, 2022)
            </li>

            <li className='list-group-item px-4'>
            <div><i>Laboratorio de fantasmas.</i></div>
              Together with the research project "Argos", within the festival “Dansa València” (Teatre Rialto - València, 2022)
            </li>

            <li className='list-group-item px-4'>
            <div><i>NoInput.</i></div>
              Presented with the collective PDP-11, in the conference “LASERTalk Leonardo ‘Interpretando code and life. Art and Science of Bio-IA’ (Centre del Carme Cultura Contemporània - València, 2022) and in the festival “Live Performers Meeting 2022” (Nuovo Cinema Aquila - Rome, 2022)
            </li>

            <li className='list-group-item px-4'>
            <div><i>Invisible / Inaudible.</i></div>
              Presented with the research project “Argos”, in the “Sonic Seminar” of the Universidad de Alicante (Secadero, Las Cigarreras - Alicante, 2022) and in the congress “Paisaje y sostenibilidad: Listening to diversity” (Matadero - Madrid, 2022)
            </li>

            <li className='list-group-item px-4'>
            <div><i>Ecos</i></div>
              With the research project “Argos”,  in the “V International Congress on Visual Arts Research ANIAV 2022” (Universitat Politècnica de Valencia, 2022)
            </li>

          

            <li className='list-group-item px-4'>
            <div><i>Hin und Zurück </i></div>
              Together with Sergio Lecuona, on the “Export by VOlumens” stage at the “Love To Rock” festival (Veles e Vents - València, 2021)
            </li>

            <li className='list-group-item px-4'>
            <div><i>The room above </i></div>
              Together with Irene Sánchez and Roser Domingo, in the performance “The room above” by the sound artist Luca Forcucci, as part of “Live_Panoramas EXP” in the international exhibition “PANORAMA_EXP de PANORAMAS 2021” (Sala Josep Renau - Universitat Politècnica de València, 2021)
            </li>




          </ul>
        </div>
      </div>

    </section>
  );
}

export default BioJorge;
