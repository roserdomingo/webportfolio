import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { pageId } from '../pagesData';
import { PAGE_TITTLE } from '../models/project.enum';

import '../styles/home.css'

function Home() {



  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);


  const CarouselIndicator = ({ index, currentIndex }) => {
    if (index === currentIndex) {
      return <div className="carouselIndicator carouselIndicatorActive"
      >

      </div>

    } else {
      return <div
        className="carouselIndicator" onClick={() => changeImageToIndex(index)}>




      </div>;
    }
  }


  const images = [
    
    {
      src: '/images/home/homeSne.gif',
      alt: '',
      text: "Sistema nervioso extendido #1 (Vista) (2023)",
      pathNav: '/projects/sne',
    },
    {
      src: '/images/home/homeInterferencia.gif',
      alt: '',
      text: "Interferencia (2023)",
      pathNav: '/projects/interferencia',
    },
    {
      src: '/images/home/homeGrados.gif',
      alt: '',
      text: "1.1 Grados (2022)",
      pathNav: '/projects/1.1grados',
    },
    {
      src: '/images/home/homeHorizonte.gif',
      alt: '',
      text: "Horizonte de sucesos (2024)",
      pathNav: '/projects/horizontedesucesos',
    },
    {
      src: '/images/home/homeIntraseñales.gif',
      alt: '',
      text: "Intra-señales (2023)",
      pathNav: '/projects/intra-señales',
    },
        {
      src: '/images/home/homeManipulando.gif',
      alt: '',
      text: "Manipulando la luz (2024)",
      pathNav: '/projects/manipulandolaluz',
    },
    {
      src: '/images/home/homeIntraseñales.gif',
      alt: '',
      text: "Intra-señales (2023)",
      pathNav: '/projects/exploracionEntrelazada',
    },
    {
      src: '/images/home/homeManipulando.gif',
      alt: '',
      text: "Manipulando la luz (2024)",
      pathNav: '/projects/exploracionEntrelazada',
    },
  ];

  useEffect(() => {
    changeImageRandom();

    const handler = e => setMatches(e.matches);
    const matchMedia = window.matchMedia("(min-width: 768px)");

    matchMedia.addEventListener('change', handler);
    return () => matchMedia.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImageNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentPicIndex]);



  function changeImageNext() {
    const nextPicIndex = (currentPicIndex + 1) % (images.length);
    setCurrentPicIndex(nextPicIndex);
  }

  // function changeImagePrev() {
  //   const nextPicIndex = (currentPicIndex - 1) % (images.length);
  //   setCurrentPicIndex(nextPicIndex);
  // }

  function changeImageRandom() {
    const picRandom = Math.floor(Math.random() * (images.length));
    setCurrentPicIndex(picRandom);
  }

  function changeImageToIndex(index) {
    const indexToImage = index % (images.length);
    setCurrentPicIndex(indexToImage);
  }









  return (


    <section className='container text-left px-0 overflow-hidden'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageId ? PAGE_TITTLE.ROSER : PAGE_TITTLE.JORGE}</title>
        {/* <link rel="canonical" href="http://mysite.com/projects/{project.title}" /> */}
      </Helmet>


      <div className={`home-content row ${matches ? 'row-cols-1' : 'row-cols-1 gy-4'}`}>
        <img 
          onClick={() => changeImageNext()}
          className='proj-media-img w-100 img-fluid'
          src={images[currentPicIndex].src}
          alt={images[currentPicIndex].alt}
        />

        <div className='indicatorsContainer col-sm-2 pt-2 '>

          {
            images.map((image, index) => (



              <div className='eldivdelindicador'>
                <CarouselIndicator
                  key={index}
                  index={index}
                  currentIndex={currentPicIndex} >
                </CarouselIndicator>
              </div>
            )
            )
          }


        </div>


        {/* <div className='col-sm-4'>
          <button onClick={changeImageNext}>next</button>
          <button onClick={changeImagePrev}>prev</button>
        </div> */}



        <div className='home-text col-sm-10 pt-2'>
          <NavLink to={images[currentPicIndex].pathNav}>
            <p className='home-introduction text-end'>
              {images[currentPicIndex].text}

            </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Home;
