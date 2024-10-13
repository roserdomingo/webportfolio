import React from "react";
import Caption from "./caption.jsx";
import ExternalLink from "./externalLink.jsx";
import HeaderInText from "./headerInText.jsx";
import { Spotify } from "react-spotify-embed";
import { MEDIA_TYPE, MEDIA_SIZE } from "../../models/project.enum";
import Lightbox from "yet-another-react-lightbox";











const ProjMediaItem = ({ item }) => {


  switch (item.type) {
    case MEDIA_TYPE.TEXT:
      return (
        <div className={"container p-0 g-10"}>
          <HeaderInText header={item.header}></HeaderInText>
          <div className='proj-description-es '>
            {
              item.texts.filter(({ language }) => language === 'es')
                .map((text, index) => {
                  return (
                    <p key={index.toString()}>
                      {text.value}
                    </p>
                  )
                })
            }
          </div>
          
          <div className="mb-4"></div>
          
          <div className='proj-description-en text-secondary'>
            {
              item.texts.filter(({ language }) => language === 'en')
                .map((text, index) => {
                  return (
                    <p key={index.toString()}>
                      {text.value}
                    </p>
                  )
                })
            }
          </div>
          <ExternalLink link={item.externalLink}></ExternalLink>
        </div>
      );


    case MEDIA_TYPE.IMAGE:
      const [openLightbox, setOpenLightbox] = React.useState(false);
      return (




        <div>

          <Lightbox
            
            open={openLightbox}
            close={() => setOpenLightbox(false)}
            // className="proj-media-img w-10 img-fluid"
            slides={[{src:item.src}]}
            alt={item.alt}
            render={{
              buttonPrev: () => React.ReactNode,
              buttonNext: () => React.ReactNode,
            }}
          />
          <div onClick={() => setOpenLightbox(true)}>
          <img
            
            className="proj-media-img w-10 img-fluid"
            src={item.src}
            alt={item.alt}
          />
          </div>
          {item.caption ? (
            <Caption caption={item.caption} />
          ) : null
          }

        </div>
      );



    // case MEDIA_TYPE.IMAGE:

    // return (




    //   <div>
    //     
    //     {item.caption ? (
    //       <Caption caption={item.caption} />
    //     ) : null
    //     }

    //   </div>
    // );

    case MEDIA_TYPE.YOUTUBE:
      return (
        <div className="youtube">

            <iframe
              className="videoyt"
              id="ytplayer"
              type="text/html"
              title="hello"
              src={`https://www.youtube.com/embed/${item.src}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />


       
        </div>

      );




    case MEDIA_TYPE.VIMEO:
      return null;

    case MEDIA_TYPE.SOUNDCLOUD:
      return (
        <div className="soundcloud">
          <iframe
            title="soundcloud"
            width="100%" height="100vh"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={item.url}>.toString()
          </iframe>
          {item.caption ? (
            <Caption caption={item.caption} />
          ) : null
          }
        </div>
      );


    case MEDIA_TYPE.BANDCAMP:
      return null;

    case MEDIA_TYPE.SPOTIFY:
      return (
        // Displaying an album.
        <Spotify link="https://open.spotify.com/album/4lFfj4We5ctZG9IzqRVxzA?si=O53NSiVYQYuVVsKHolnc2g" />
      );

    case MEDIA_TYPE.CODE:
      return (
        <div>
          <code>
            {item.codeText}
          </code>
          {item.caption ? (
            <Caption caption={item.caption} />
          ) : null
          }
        </div>);

    case MEDIA_TYPE.QUOTE:
      return (
        <div className='container p-0 g-10'>
          <div className='proj-description-es mb-4'>
            {
              item.quotes.filter(({ language }) => language === 'es')
                .map((quote, index) => {
                  return (
                    <div>
                      <p key={index.toString()}>
                        <i> {quote.quoteText}</i>
                      </p>
                      <p>{quote.author}</p>
                    </div>
                  )
                })
            }
          </div>
          <div className='proj-description-en text-secondary'>
            {
              item.quotes.filter(({ language }) => language === 'en')
                .map((quote, index) => {
                  return (
                    <div>
                      <p key={index.toString()}>
                        <i>{quote.quoteText}</i>
                      </p>
                      <p>{quote.author}</p>
                    </div>
                  )
                })
            }
          </div>
        </div>
      );
    case MEDIA_TYPE.DIVIDER:
      return (
        <div>
        </div>);


    default:
      return null;
  }


};

ProjMediaItem.propTypes = {};

export default ProjMediaItem;




          
