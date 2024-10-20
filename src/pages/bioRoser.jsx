import React from 'react';
import DownloadButton from '../components/pure/downloadButton';
import { Helmet } from 'react-helmet';
const fileBio = "http://www.roserdomingo.com/docs/Roser Domingo Munoz biografia web.pdf";
const fileCV = "http://www.roserdomingo.com/docs/Roser Domingo Munoz CV 2024 Web 2.pdf";
const fileCVtext = "CV";
const fileBiotext = "Bio";

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

      <div className='about-body row pt-4 px-0 '>
        <div className='row ' >
          <div className="bio col-sm-8">
            <ul className='list-group mb-4'>
              <li className='list-group-item px-4'>
                Roser Domingo es artista multimedia, músico e investigadora, afincada en Valencia. Se encuentra realizando su tesis doctoral en el grupo de investigación «Laboratorio de Luz» de la Universitat Politècnica de València, enfocando su práctica artística en la luz, su incidencia y distorsión, sobre distintos elementos. También lleva a cabo experimentaciones en la intersección de sonido e imagen en actuaciones en directo.
              </li>
            </ul>
            <ul className='list-group list-group-horizontal mb-4'>
              <li className='list-group-item px-4'>
                <div><DownloadButton fileUrl={fileBio} fileText={fileBiotext} />
                </div></li>
              <li className='list-group-item px-4'>
                <div><DownloadButton fileUrl={fileCV} fileText={fileCVtext} />
                </div></li>
            </ul>
          </div>
          <div className='col-sm-4 mb-4 px-0'><img className='rounded img-fluid aspect ' src='/images/bio/fotoRoser.webp' alt="Foto Roser Domingo" /></div>
        </div>
        </div>
    </section>
  );
}

export default BioRoser;
