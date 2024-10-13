import React from 'react';
import ExternalLink from "./externalLink.jsx";
import HeaderInText from "./headerInText.jsx";


// IMPLEMENTAR ITALICS AQUI
const ProjDescription = ({ descriptions}) => {

  return (
    <div className='container p-0 g-10'>
      <HeaderInText header={descriptions.header}></HeaderInText>
    <div className='proj-description-es mb-4'>
      {
        descriptions.texts.filter(({ language }) => language === 'es')
        .map((text, index) => {
            return (
              <p className="whitespace" key={index.toString()}>
                {text.value}
           
                {/* <a href={"https://www."+externalLink}  rel="noopener noreferrer" target="_blank"><span>⮞ </span>{externalLink}</a> */}
              </p>
              
            )
          })
      }
    </div>
    <div className='proj-description-en text-secondary'>
      {
        descriptions.texts.filter(({ language }) => language === 'en')
          .map((text, index) => {
            return (
              <p className="whitespace" key={index.toString()}> 
                {text.value}
             
               
              </p>
            )
          })
      }
    </div>
    <ExternalLink link={descriptions.externalLink}></ExternalLink>
    </div>
  );
};


ProjDescription.propTypes = {

};


export default ProjDescription;
