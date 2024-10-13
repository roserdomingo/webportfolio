import React from 'react';

const About = () => {
  return (
    <section className='container text-left px-0 overflow-hidden'>
      <div className='about-header row align-items-center'>
        <h1>About</h1>
      </div>

      <div className='about-body row align-items-center '>

        <div class="bio list-group">
          <ul className='list-group mb-4'>
            <li className='list-group-item'>
              Born in Valencia, Spain - 1995.
            </li>
          </ul>
        </div>

        <div class="studies">
          <h3>Studies</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>
              <li>
                PhD Student in Fine Arts at Universitat Politècnica de València, Spain - 2019
              </li>
              <li>
                Master in Multimedia and Visual Arts (AVM) - 2017 / 2019
              </li>
              <li>
                Degree in Fine Arts at Universitat Politècnica de València, Spain - 2013 / 2017
              </li>
            </li>
          </ul>
        </div>

        <div class="Grants">
          <h3>Grants</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item px-4'>
              <li>
                Research stay at Hertz-Lab ZKM Karlsruhe, Germany - 2022
              </li>
              <li>
                Erasmus at Interface Cultures Kunstuniversitaet Linz, Austria - 2018
              </li>
              <li>
                Erasmus at Burg Giebichenstein Kunsthochschule Halle - 2015
              </li>
            </li>
          </ul>
        </div>

        <div class="performances">
          <h3>Performances</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item'>
              2021
              <ul>
                <li>
                  "Volumens Export" (Love to Rock Festival). Veles e Vents, Valencia, Spain.
                </li>
              </ul>
            </li>
            <li className='list-group-item'>
              2019
              <ul>
                <li>
                  “Volumens Festival”. Base de Alinghi, Valencia, Spain.
                </li>
                <li>
                  “ELECTRONICOS FANTASTICOS!” (Ars Electronica Festival). Postcity, Linz, Austria.
                </li>
                <li>
                  “Musikkapelle”. Unten Club, Linz, Austria.
                </li>
              </ul>
            </li>
            <li className='list-group-item'>
              2018
              <ul>
                <li>
                  “Presentación revista ANIAV”. Centre del Carme Cultura Contemporània, Valencia, Spain.
                </li>
                <li>
                  “Volumens Day”. CCCC, Valencia, Spain.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="exhibitions">
          <h3>Exhibitions</h3>
          <ul className='list-group mb-4'>
            <li className='list-group-item'>
              2019
              <ul>
                <li>
                  “Volumens Festival”. Base de Alinghi, Valencia, Spain.
                </li>
                <li>
                  “GROWING OUT OF UNNATURAL” (Campus-Ars Electronica Festival). Postcity, Linz, Austria.
                </li>
                <li>
                  “Transcode” (Campus-Ars Electronica Festival). Postcity, Linz, Austria.
                </li>
              </ul>
            </li>
            <li className='list-group-item'>
              2018
              <ul>
                <li>
                  “Sankt Interface”. Audimax Kunstuniversitat Linz, Austria.
                </li>
                <li>
                  “Suzzane”. Galería Standard, Valencia, Spain.
                </li>
              </ul>
            </li>
            <li className='list-group-item'>
              2017
              <ul>
                <li>
                  "En Crudo" (Intramurs 2017). Sala la muralla de Rector Peset, Valencia, Spain.
                </li>
                <li>
                  "En Crudo" (Intramurs 2017). La trastienda, Valencia, Spain.
                </li>
              </ul>
            </li>
            <li className='list-group-item'>
              2016
              <ul>
                <li>
                  “Seven Puppies and Their War”. Estudio JR, Valencia, Spain.
                </li>
                <li>
                  “XXXVII Certamen Minicuadros”. Museo del Calzado de Elda, Elda, Spain.
                </li>
                <li>
                  “Buch Druck Kunst” (Burg Giebichenstein Stand - Frauke Otto). Hamburg Book Fair, Hamburg, Germany.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}

export default About;
